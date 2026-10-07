"""Audyt SEO statycznego eksportu (katalog out/).

Użycie: python scripts/seo-audit.py [out]
Sprawdza każdą stronę HTML: title, meta description, H1, canonical, robots, OG, JSON-LD,
obrazy bez alt, linki wewnętrzne prowadzące donikąd, duplikaty, liczbę słów i strony-sieroty.
"""
import html as H
import json
import os
import re
import sys
from collections import Counter, defaultdict

sys.stdout.reconfigure(encoding="utf-8", errors="replace")
ROOT = sys.argv[1] if len(sys.argv) > 1 else "out"
SITE = "https://olekcodetech.pl"

pages = {}
for dp, _, files in os.walk(ROOT):
    for f in files:
        if f != "index.html":
            continue
        rel = os.path.relpath(dp, ROOT).replace("\\", "/")
        url = "/" if rel == "." else f"/{rel}/"
        if url.startswith("/_"):
            continue
        pages[url] = open(os.path.join(dp, f), encoding="utf-8").read()

existing = set(pages)
for dp, _, files in os.walk(ROOT):
    for f in files:
        rel = os.path.relpath(os.path.join(dp, f), ROOT).replace("\\", "/")
        existing.add("/" + rel)

def text_of(h):
    body = re.sub(r"<(script|style|noscript|svg)[^>]*>.*?</\1>", " ", h, flags=re.S | re.I)
    main = re.search(r"<main[^>]*>(.*)</main>", body, re.S)
    t = re.sub(r"<[^>]+>", " ", main.group(1) if main else body)
    return H.unescape(re.sub(r"\s+", " ", t)).strip()

issues = defaultdict(list)
titles, descs, inlinks = Counter(), Counter(), Counter()
rows = []
for url, h in sorted(pages.items()):
    head = h[: h.find("</head>")]
    title = H.unescape((re.search(r"<title>(.*?)</title>", head, re.S) or [None, ""])[1]).strip()
    desc = H.unescape((re.search(r'<meta name="description" content="([^"]*)"', head) or [None, ""])[1])
    canon = (re.search(r'<link rel="canonical" href="([^"]*)"', head) or [None, ""])[1]
    robots = (re.search(r'<meta name="robots" content="([^"]*)"', head) or [None, ""])[1]
    og_img = re.search(r'<meta property="og:image" content="([^"]*)"', head)
    h1s = re.findall(r"<h1[^>]*>(.*?)</h1>", h, re.S)
    words = len(text_of(h).split())
    imgs = re.findall(r"<img\b[^>]*>", h)
    no_alt = [i for i in imgs if not re.search(r'alt="[^"]+"', i)]
    ld = re.findall(r'<script type="application/ld\+json"[^>]*>(.*?)</script>', h, re.S)
    ld_types = []
    for blk in ld:
        try:
            d = json.loads(blk)
            for x in d if isinstance(d, list) else [d]:
                for y in x.get("@graph", [x]):
                    t = y.get("@type")
                    ld_types += t if isinstance(t, list) else [t]
        except Exception as e:
            issues[url].append(f"JSON-LD nie parsuje się: {e}")
    hrefs = set(re.findall(r'href="(/[^"#?]*)', h))
    for href in hrefs:
        if href.startswith("/_next") or href.startswith("/images") or href.startswith("/video"):
            continue
        target = href if href.endswith("/") or "." in href.split("/")[-1] else href + "/"
        if target not in existing:
            issues[url].append(f"martwy link wewnętrzny: {href}")
        if target != url:
            inlinks[target] += 1

    titles[title] += 1
    descs[desc] += 1
    noindex = "noindex" in robots
    if not title: issues[url].append("brak <title>")
    elif len(title) > 62: issues[url].append(f"title za długi ({len(title)}): {title}")
    elif len(title) < 25: issues[url].append(f"title za krótki ({len(title)}): {title}")
    if not desc: issues[url].append("brak meta description")
    elif len(desc) > 165: issues[url].append(f"description za długi ({len(desc)})")
    elif len(desc) < 110: issues[url].append(f"description za krótki ({len(desc)}): {desc}")
    if len(h1s) != 1: issues[url].append(f"liczba H1 = {len(h1s)}")
    if not canon: issues[url].append("brak canonical")
    elif not canon.startswith(SITE): issues[url].append(f"canonical spoza domeny: {canon}")
    elif canon != SITE + url and not noindex: issues[url].append(f"canonical ≠ URL: {canon}")
    if not og_img: issues[url].append("brak og:image")
    if no_alt: issues[url].append(f"{len(no_alt)} obrazów bez alt")
    if words < 300 and not noindex and url != "/kontakt/": issues[url].append(f"mało treści: {words} słów")
    rows.append((url, len(title), len(desc), len(h1s), words, ",".join(sorted(set(filter(None, ld_types)))), "noindex" if noindex else ""))

for t, n in titles.items():
    if n > 1: issues["(globalne)"].append(f"zduplikowany title x{n}: {t}")
for d, n in descs.items():
    if n > 1 and d: issues["(globalne)"].append(f"zduplikowany description x{n}: {d[:80]}")
for url in pages:
    if url != "/" and inlinks[url] == 0:
        issues[url].append("sierota: brak linków wewnętrznych do tej strony")

print(f"{'URL':62} {'T':>3} {'D':>4} {'H1':>2} {'słowa':>6}  schema")
for r in rows:
    print(f"{r[0][:62]:62} {r[1]:>3} {r[2]:>4} {r[3]:>2} {r[4]:>6}  {r[5]} {r[6]}")
print(f"\nStron: {len(pages)}")
print("\n=== PROBLEMY ===")
n = 0
for url, lst in sorted(issues.items()):
    for i in lst:
        n += 1
        print(f"- {url}: {i}")
print(f"\nRazem problemów: {n}")
