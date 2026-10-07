<?php
/**
 * Formularz kontaktowy OlekCodeTech – przyjmuje POST JSON z /kontakt/ i wysyła wiadomość na biuro@olekcodetech.pl.
 *
 * Wysyłka: SMTP (zalecane – Google Workspace, hasło aplikacji) albo awaryjnie PHP mail().
 * Ustawienia: plik contact-config.php OBOK tego pliku albo katalog wyżej (poza public_html) – patrz contact-config.example.php.
 * Plik konfiguracyjny NIE trafia do repozytorium.
 */

declare(strict_types=1);

header('Content-Type: application/json; charset=utf-8');
header('X-Content-Type-Options: nosniff');
header('Cache-Control: no-store');

function respond(int $code, array $body): void
{
    http_response_code($code);
    echo json_encode($body, JSON_UNESCAPED_UNICODE);
    exit;
}

/* ---------- konfiguracja ---------- */
$config = [
    'to' => 'biuro@olekcodetech.pl',
    'from' => 'biuro@olekcodetech.pl',
    'from_name' => 'Formularz olekcodetech.pl',
    'allowed_hosts' => ['olekcodetech.pl', 'www.olekcodetech.pl'],
    'smtp' => null, // ['host' => 'smtp.gmail.com', 'port' => 465, 'user' => '...', 'pass' => '...']
    'rate_limit' => 5,          // maks. wiadomości z jednego IP na godzinę
    'dry_run' => false,         // true = nie wysyłaj (testy)
    'recaptcha_secret' => '',   // Google reCAPTCHA v3 – klucz tajny; puste = weryfikacja wyłączona
    'recaptcha_min_score' => 0.5, // 0.0 (bot) – 1.0 (człowiek); poniżej progu wiadomość jest odrzucana
];
foreach ([__DIR__ . '/contact-config.php', dirname(__DIR__, 2) . '/contact-config.php'] as $file) {
    if (is_file($file)) {
        $local = require $file;
        if (is_array($local)) {
            $config = array_replace($config, $local);
        }
        break;
    }
}

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    respond(204, []);
}
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    respond(405, ['ok' => false, 'error' => 'Metoda niedozwolona']);
}

/* ---------- ochrona: origin, rozmiar, rate limit ---------- */
$origin = $_SERVER['HTTP_ORIGIN'] ?? '';
if ($origin !== '') {
    $host = parse_url($origin, PHP_URL_HOST) ?: '';
    $allowed = array_merge($config['allowed_hosts'], [$_SERVER['HTTP_HOST'] ?? '']);
    if (!in_array($host, $allowed, true)) {
        respond(403, ['ok' => false, 'error' => 'Niedozwolone źródło']);
    }
}

$raw = file_get_contents('php://input', false, null, 0, 20000);
$data = json_decode($raw ?: '', true);
if (!is_array($data)) {
    $data = $_POST; // obsługa zwykłego formularza
}

$ip = $_SERVER['HTTP_X_FORWARDED_FOR'] ?? $_SERVER['REMOTE_ADDR'] ?? '0';
$ip = trim(explode(',', $ip)[0]);
$rateFile = sys_get_temp_dir() . '/oct-contact-' . hash('sha256', $ip) . '.json';
$now = time();
$hits = is_file($rateFile) ? (json_decode((string) file_get_contents($rateFile), true) ?: []) : [];
$hits = array_values(array_filter($hits, fn($t) => $t > $now - 3600));
if (count($hits) >= (int) $config['rate_limit']) {
    respond(429, ['ok' => false, 'error' => 'Za dużo wiadomości. Spróbuj za godzinę albo zadzwoń: +48 882 715 667.']);
}

/* ---------- walidacja ---------- */
$clean = fn($v, int $max) => mb_substr(trim(str_replace(["\r", "\0"], '', (string) ($v ?? ''))), 0, $max);
$name = $clean($data['name'] ?? '', 120);
$email = $clean($data['email'] ?? '', 160);
$phone = $clean($data['phone'] ?? '', 40);
$subject = $clean($data['subject'] ?? '', 160);
$message = mb_substr(trim(str_replace("\0", '', (string) ($data['message'] ?? ''))), 0, 5000);
$source = $clean($data['source'] ?? '', 300);
$consent = filter_var($data['consent'] ?? false, FILTER_VALIDATE_BOOLEAN);
$honeypot = trim((string) ($data['website'] ?? ''));

if ($honeypot !== '') {
    respond(200, ['ok' => true]); // bot – udajemy sukces
}
$errors = [];
if ($name === '') $errors[] = 'imię i nazwisko';
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) $errors[] = 'poprawny e-mail';
if (mb_strlen($message) < 5) $errors[] = 'treść wiadomości';
if (!$consent) $errors[] = 'zgoda na przetwarzanie danych';
if ($errors) {
    respond(422, ['ok' => false, 'error' => 'Uzupełnij: ' . implode(', ', $errors) . '.']);
}
// nagłówki – bez nowych linii (header injection)
foreach ([$name, $email, $subject] as $v) {
    if (preg_match('/[\r\n]/', $v)) respond(422, ['ok' => false, 'error' => 'Niepoprawne dane.']);
}

/* ---------- Google reCAPTCHA v3 ---------- */
function recaptcha_verify(string $secret, string $token, string $ip): array
{
    $post = http_build_query(['secret' => $secret, 'response' => $token, 'remoteip' => $ip]);
    $url = 'https://www.google.com/recaptcha/api/siteverify';
    $raw = false;
    if (function_exists('curl_init')) {
        $ch = curl_init($url);
        curl_setopt_array($ch, [CURLOPT_POST => true, CURLOPT_POSTFIELDS => $post, CURLOPT_RETURNTRANSFER => true, CURLOPT_TIMEOUT => 8]);
        $raw = curl_exec($ch);
        curl_close($ch);
    } else {
        $ctx = stream_context_create(['http' => ['method' => 'POST', 'header' => "Content-Type: application/x-www-form-urlencoded\r\n", 'content' => $post, 'timeout' => 8]]);
        $raw = @file_get_contents($url, false, $ctx);
    }
    if ($raw === false) {
        return ['network_error' => true];
    }
    return json_decode((string) $raw, true) ?: ['network_error' => true];
}

if (trim((string) $config['recaptcha_secret']) !== '') {
    $token = trim((string) ($data['recaptchaToken'] ?? ''));
    if ($token === '') {
        respond(400, ['ok' => false, 'error' => 'Weryfikacja antyspamowa nie powiodła się. Odśwież stronę i spróbuj ponownie.']);
    }
    $rc = recaptcha_verify((string) $config['recaptcha_secret'], $token, $ip);
    if (!empty($rc['network_error'])) {
        // Google chwilowo niedostępny – nie blokujemy klienta (zostają honeypot i limit), zapisujemy w logu.
        error_log('[contact.php] reCAPTCHA: brak odpowiedzi Google – przepuszczono');
    } else {
        $hostOk = in_array($rc['hostname'] ?? '', array_merge($config['allowed_hosts'], [$_SERVER['HTTP_HOST'] ?? '']), true);
        $score = (float) ($rc['score'] ?? 0);
        $pass = !empty($rc['success']) && ($rc['action'] ?? '') === 'contact' && $hostOk && $score >= (float) $config['recaptcha_min_score'];
        if (!$pass) {
            error_log(sprintf('[contact.php] reCAPTCHA odrzucona: success=%s action=%s host=%s score=%.1f errors=%s',
                json_encode($rc['success'] ?? null), $rc['action'] ?? '-', $rc['hostname'] ?? '-', $score, implode(',', $rc['error-codes'] ?? [])));
            respond(403, ['ok' => false, 'error' => 'Wiadomość została zablokowana przez filtr antyspamowy. Jeśli to pomyłka – zadzwoń: +48 882 715 667 lub napisz na biuro@olekcodetech.pl.']);
        }
        $data['_recaptcha_score'] = $score;
    }
}

/* ---------- treść ---------- */
$mailSubject = 'Zapytanie ze strony: ' . ($subject !== '' ? $subject : $name);
$body = "Nowe zapytanie z formularza na olekcodetech.pl\n"
    . str_repeat('-', 48) . "\n"
    . "Imię i nazwisko: {$name}\n"
    . "E-mail: {$email}\n"
    . 'Telefon: ' . ($phone !== '' ? $phone : '—') . "\n"
    . 'Temat: ' . ($subject !== '' ? $subject : '—') . "\n"
    . str_repeat('-', 48) . "\n\n"
    . $message . "\n\n"
    . str_repeat('-', 48) . "\n"
    . "Zgoda RODO: tak\n"
    . (isset($data['_recaptcha_score']) ? 'reCAPTCHA: ' . number_format((float) $data['_recaptcha_score'], 1) . " / 1.0\n" : '')
    . 'Strona: ' . ($source !== '' ? $source : '—') . "\n"
    . 'Wysłano: ' . date('Y-m-d H:i:s') . "\n"
    . "IP: {$ip}\n";

$encSubject = '=?UTF-8?B?' . base64_encode($mailSubject) . '?=';
$fromHeader = '=?UTF-8?B?' . base64_encode($config['from_name']) . '?= <' . $config['from'] . '>';
$replyTo = '=?UTF-8?B?' . base64_encode($name) . '?= <' . $email . '>';
$headers = [
    'Date: ' . date('r'),
    'From: ' . $fromHeader,
    'Reply-To: ' . $replyTo,
    'Message-ID: <' . bin2hex(random_bytes(12)) . '@olekcodetech.pl>',
    'MIME-Version: 1.0',
    'Content-Type: text/plain; charset=UTF-8',
    'Content-Transfer-Encoding: base64',
    'X-Mailer: olekcodetech-contact',
];
$encodedBody = chunk_split(base64_encode($body));

/* ---------- wysyłka ---------- */
function smtp_send(array $smtp, string $from, string $to, string $subject, array $headers, string $body): void
{
    $port = (int) ($smtp['port'] ?? 465);
    $host = $smtp['host'];
    $remote = ($port === 465 ? 'ssl://' : 'tcp://') . $host . ':' . $port;
    $ctx = stream_context_create(['ssl' => ['verify_peer' => true, 'verify_peer_name' => true]]);
    $fp = @stream_socket_client($remote, $errno, $errstr, 15, STREAM_CLIENT_CONNECT, $ctx);
    if (!$fp) throw new RuntimeException("SMTP connect: $errstr ($errno)");
    stream_set_timeout($fp, 15);

    $read = function () use ($fp): string {
        $out = '';
        while (($line = fgets($fp, 515)) !== false) {
            $out .= $line;
            if (strlen($line) < 4 || $line[3] === ' ') break;
        }
        return $out;
    };
    // $label trafia do logu zamiast komendy – nigdy nie logujemy loginu, hasła ani treści wiadomości.
    $cmd = function (string $c, array $ok, string $label = '') use ($fp, $read): string {
        if ($c !== '') fwrite($fp, $c . "\r\n");
        $res = $read();
        if (!in_array((int) substr($res, 0, 3), $ok, true)) {
            $what = $label !== '' ? $label : (string) strtok($c, ' ');
            throw new RuntimeException('SMTP [' . $what . '] -> ' . trim((string) strtok($res, "\n")));
        }
        return $res;
    };

    $cmd('', [220], 'greeting');
    $cmd('EHLO olekcodetech.pl', [250]);
    if ($port !== 465) {
        $cmd('STARTTLS', [220]);
        if (!stream_socket_enable_crypto($fp, true, STREAM_CRYPTO_METHOD_TLS_CLIENT)) throw new RuntimeException('STARTTLS failed');
        $cmd('EHLO olekcodetech.pl', [250]);
    }
    $cmd('AUTH LOGIN', [334]);
    $cmd(base64_encode($smtp['user']), [334], 'AUTH user');
    $cmd(base64_encode($smtp['pass']), [235], 'AUTH password');
    $cmd('MAIL FROM:<' . $from . '>', [250]);
    $cmd('RCPT TO:<' . $to . '>', [250, 251]);
    $cmd('DATA', [354]);
    $msg = implode("\r\n", array_merge(['To: <' . $to . '>', 'Subject: ' . $subject], $headers)) . "\r\n\r\n" . $body;
    $msg = preg_replace('/^\./m', '..', str_replace(["\r\n", "\n"], ["\n", "\r\n"], $msg));
    $cmd($msg . "\r\n.", [250], 'DATA body');
    fwrite($fp, "QUIT\r\n");
    fclose($fp);
}

try {
    if ($config['dry_run']) {
        // tryb testowy – nic nie wysyłamy
    } elseif (is_array($config['smtp']) && !empty($config['smtp']['host']) && !empty($config['smtp']['pass'])) {
        smtp_send($config['smtp'], $config['from'], $config['to'], $encSubject, $headers, $encodedBody);
    } else {
        $ok = mail($config['to'], $encSubject, $encodedBody, implode("\r\n", $headers), '-f' . $config['from']);
        if (!$ok) throw new RuntimeException('mail() zwróciło false');
    }
} catch (Throwable $e) {
    error_log('[contact.php] ' . $e->getMessage());
    respond(500, ['ok' => false, 'error' => 'Nie udało się wysłać wiadomości. Napisz bezpośrednio na biuro@olekcodetech.pl lub zadzwoń: +48 882 715 667.']);
}

$hits[] = $now;
@file_put_contents($rateFile, json_encode($hits));
respond(200, ['ok' => true]);
