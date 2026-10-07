<?php
/**
 * Wzór ustawień formularza. Skopiuj jako contact-config.php:
 *  - najlepiej KATALOG WYŻEJ niż public_html (np. /home/uXXXX/domains/olekcodetech.pl/contact-config.php),
 *  - albo obok contact.php w public_html/api/ (dostęp z przeglądarki blokuje .htaccess).
 * Nie commituj prawdziwego pliku do repozytorium.
 *
 * Wysyłka przez Google Workspace (poczta domeny jest w Google – rekord SPF dopuszcza tylko Google):
 *  1. Konto biuro@olekcodetech.pl → Zarządzaj kontem Google → Bezpieczeństwo → Weryfikacja dwuetapowa (musi być włączona).
 *  2. Hasła aplikacji → utwórz „olekcodetech formularz” → skopiuj 16-znakowe hasło do 'pass' poniżej.
 */
return [
    'to' => 'biuro@olekcodetech.pl',
    'from' => 'biuro@olekcodetech.pl',
    'from_name' => 'Formularz olekcodetech.pl',
    'smtp' => [
        'host' => 'smtp.gmail.com',
        'port' => 465,
        'user' => 'biuro@olekcodetech.pl',
        'pass' => 'xxxx xxxx xxxx xxxx', // hasło aplikacji Google
    ],
    'rate_limit' => 5,
    'dry_run' => false,
];
