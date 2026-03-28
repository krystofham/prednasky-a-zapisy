---
slug: OWASP-ZAP
---

GOOGLE GEMINI
# OWASP ZAP: Kompletní průvodce a dokumentace

## Základní režimy (Contexts)

|Režim|Popis|Kdy ho použít?|
|---|---|---|
|**Safe Mode**|Zakazuje jakékoliv nebezpečné akce (např. útočné skeny).|Při prvním kontaktu s ostrým webem.|
|**Protected Mode**|Povoluje útoky pouze na weby, které jsi explicitně přidal do „Scope“.|Standardní režim pro bezpečnou práci.|
|**Standard Mode**|Povoluje vše na všechno.|Jen v izolovaném testovacím prostředí.|
|**Attack Mode**|Automaticky spustí Active Scan na každou novou stránku, kterou najde.|Pro rychlé, agresivní testování.|

---
permalink: OWASP-ZAP

## Hlavní komponenty (Toolbox)

### 1. Spider (Pavouk)

Prochází web a hledá všechny dostupné odkazy a soubory. Vytváří mapu webu (Tree).
- **Standard Spider:** Prochází čisté HTML.
- **AJAX Spider:** Používá skutečný prohlížeč k nalezení odkazů v JavaScriptu (nutné pro moderní aplikace jako React/Vue).

### 2. Passive Scan
ZAP pouze "poslouchá" a analyzuje odpovědi serveru.
- **Cíl:** Odhalení chybějících bezpečnostních hlaviček (CSP, X-Frame-Options), cookies bez příznaků `HttpOnly` nebo `Secure` a úniky verzí serveru.
- **Riziko:** Nulové. Server ani neví, že ho skenuješ.

### 3. Active Scan
ZAP aktivně posílá modifikované požadavky (payloady) na server.
- **Cíl:** Najít reálné díry jako **SQL Injection, XSS, SSTI** nebo **Path Traversal**.
- **Riziko:** Vysoké. Může smazat data v databázi nebo shodit server (DoS). Nebo počítač majitele - vlastní zkušenost, pozn. autora
---

## Identifikace zranitelností (Alerts)
OWASP ZAP rozděluje nálezy podle barevných vlaječek (Severity):

|Barva|Úroveň|Popis|Příklad|
|---|---|---|---|
|🔴|**High**|Kritická díra, okamžité zneužití.|SQL Injection, RCE, SSTI.|
|🟠|**Medium**|Vážná chyba, vyžaduje složitější útok.|Reflected XSS, CSRF absence.|
|🟡|**Low**|Malé riziko, spíše varování.|Chybějící bezpečnostní hlavičky.|
|🔵|**Info**|Informace o technologiích.|Verze serveru, nalezené e-maily v kódu.|

---

## Fuzzing (Obdoba ffufu v ZAPu)
Fuzzing v ZAPu slouží k testování vstupních polí pomocí slovníků (wordlistů).

|Funkce|Popis|
|---|---|
|**Payloads**|Seznam hodnot (např. tvůj `ssti_test.txt`), které ZAP vkládá do parametrů.|
|**Processors**|Umožňuje hodnoty před odesláním zakódovat (Base64, URL encode).|
|**HTTP Message Analysis**|ZAP barevně zvýrazní odpovědi, které se liší (např. jiná velikost odpovědi).|

---

## Evasion techniky v ZAP (Obdoba Nikto -evasion)
ZAP umí automaticky upravovat provoz, aby zmátl firewally (WAF). To se nastavuje v sekci **Replacer**.

|ID|Technika|Co se snaží zmást?|
|---|---|---|
|**1**|**User-Agent Spoofing**|Změní hlavičku na běžný prohlížeč nebo Googlebota.|
|**2**|**Header Injection**|Přidá hlavičky jako `X-Forwarded-For: 127.0.0.1`.|
|**3**|**Anti-CSRF Token Bypass**|ZAP se pokusí automaticky získat a vložit platný token z předchozí odpovědi.|
|**4**|**Parameter Splitting**|Rozdělení parametrů do více částí, které parser firewallu nemusí složit.|

---

## Skenování API (JSON/XML)
Pokud tvůj web používá API, ZAP má dedikované nástroje:
- **Import OpenAPI/Swagger:** Naimportuješ definici API a ZAP automaticky otestuje každý endpoint na SQLi a Injekce.
- **JSON Fuzzer:** Speciálně upravený pro vkládání payloadů do struktur `{ "key": "FUZZ" }`