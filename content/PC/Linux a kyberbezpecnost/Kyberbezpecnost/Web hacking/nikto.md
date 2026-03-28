---
slug: nikto
permalink: nikto
---

**-nolookup Disables DNS lookups**
**-h Hosts**
**-p Port**
**-ssl Vynutí použití SSL/TLS**
**-root Nutnost pro podstránky**
**-o název souboru na uložení**
**-maxtime**
# Display
-Display+

   1     Show redirects
   2     Show cookies received
   3     Show all 200/OK responses
   4     Show URLs which require authentication
   D     Debug output
   E     Display all HTTP errors
   P     Print progress to STDOUT
   S     Scrub output of IPs and hostnames
   V     Verbose
# Database
   -dbcheck
	   Check database and other key files for syntax errors
# Soubory
-Format+           Save file (-o) format:
					   csv   Comma-separated-value
					   json  JSON Format
					   htm   HTML Format
					   nbe   Nessus NBE format
					   sql   Generic SQL (see docs for schema)
					   txt   Plain text
					   xml   XML Format
# Ojeb firewallu
-evasion+
Google Gemini ve spolupráci s dokumentací nikto

| **ID** | **Technika**                    | **Popis a princip fungování**                                                     | **Cíl (Co se snaží zmást)**                                     |
| ------ | ------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------- |
| **1**  | **Random URI encoding**         | Náhodně zakóduje znaky v URL pomocí hexadecimálních kódů (např. `%65` místo `e`). | Filtry hledající konkrétní klíčová slova (např. `/etc/passwd`). |
| **2**  | **Directory self-reference**    | Do cesty vloží nadbytečné referenční body na aktuální složku (`/./`).             | Signatury, které očekávají přímou a čistou cestu k souboru.     |
| **3**  | **Premature URL ending**        | Pokusí se oklamat parser tím, že naznačí konec URL dříve, než skutečně skončí.    | Logovací systémy a firewally analyzující délku dotazu.          |
| **4**  | **Prepend long random string**  | Před samotný příkaz vloží velmi dlouhý řetězec náhodných dat.                     | Starší zařízení s malou vyrovnávací pamětí (Buffer).            |
| **5**  | **Fake parameter**              | Přidá do URL podvržené a nesmyslné parametry (např. `?id=1`).                     | Analýzu typu požadavku (vypadá to jako běžný dotaz na web).     |
| **6**  | **TAB as request spacer**       | Místo standardní mezery v HTTP požadavku použije tabulátor.                       | Parsery protokolu, které striktně vyžadují mezeru `0x20`.       |
| **7**  | **Change the case of URL**      | Změní velikost písmen v adrese (např. `/ADMIN/` místo `/admin/`).                 | Filtry citlivé na velikost písmen (hlavně proti Windows/IIS).   |
| **8**  | **Windows directory separator** | Použije zpětné lomítko `\` místo dopředného `/`.                                  | Pravidla psaná výhradně pro unixový formát cest.                |
| **A**  | **CR (0x0d) spacer**            | Použije znak "Carriage Return" jako oddělovač v hlavičce.                         | Detekční systémy neočekávající netradiční oddělovače.           |
| **B**  | **Binary 0x0b spacer**          | Použije vertikální tabulátor (`0x0b`) jako oddělovač polí.                        | Hloubkovou inspekci paketů (DPI), která tento znak ignoruje.    |
# Hosts
-id+               Host authentication to use, format is id:pass or id:pass:realm

# Addition

-mutate+
nikto docs + gemini

|**ID**|**Technika**|**Co přesně dělá?**|**Cíl (Co chce najít)**|
|---|---|---|---|
|**1**|**Test all files in all roots**|Vezme všechny známé nebezpečné soubory z databáze a zkusí je najít ve všech objevených podadresářích.|Zapomenuté skripty nebo zálohy v hlubší struktuře webu.|
|**2**|**Guess password file names**|Zkouší běžné názvy souborů s hesly (např. `passwd`, `password.txt`, `shadow`, `.htpasswd`).|Přihlašovací údaje uložené přímo na webovém serveru.|
|**3**|**Apache user enumeration**|Zkouší přistupovat k adresářům uživatelů pomocí vlnovky (`/~root`, `/~admin`, `/~user`).|Seznam platných uživatelských jmen v systému (podle odpovědi serveru).|
|**4**|**cgiwrap enumeration**|Podobné jako u bodu 3, ale využívá k tomu skript `cgiwrap` (častý u starších hostingů).|Odhalení uživatelů přes specifické CGI rozhraní.|
|**5**|**Sub-domain brute force**|Zkouší běžné subdomény (např. `dev.web.cz`, `test.web.cz`, `vpn.web.cz`) na základě názvu hlavní domény.|Skryté vývojové nebo testovací verze webu, které nejsou veřejně linkované.|
|**6**|**Dictionary directory guess**|Použije externí soubor se slovy (slovník) k hádání názvů adresářů (např. `/backup`, `/old`, `/secret`).|Adresáře, které nejsou v základní databázi Nikto, ale jsou v dodaném slovníku.|

# Co hledat
-Tuning+

| **ID** | **Název kategorie**              | **Co přesně hledá?**                                                                       |
| ------ | -------------------------------- | ------------------------------------------------------------------------------------------ |
| **1**  | **Interesting File**             | Soubory, které tam nemají co dělat (např. `robots.txt`, `info.php`, logy, zálohy).         |
| **2**  | **Misconfiguration**             | Chyby v nastavení serveru (např. zapnutý výpis adresářů, staré verze knihoven).            |
| **3**  | **Information Disclosure**       | Únik informací (např. cesta k adresářům v kódu, verze PHP, e-maily v metadatech).          |
| **4**  | **Injection (XSS/etc)**          | Testy na vkládání škodlivého kódu (Cross-Site Scripting nebo HTML injection).              |
| **5**  | **File Retrieval (Root)**        | Pokusy o stažení souborů, které jsou uvnitř webové složky, ale mají být soukromé.          |
| **6**  | **Denial of Service**            | Testuje, zda lze server přetížit nebo shodit (pozor: může web dočasně znefunkčnit).        |
| **7**  | **File Retrieval (Server Wide)** | Nebezpečnější verze bodu 5 – pokus o čtení souborů mimo web (např. `/etc/passwd`).         |
| **8**  | **Command Execution**            | Pokusy o spuštění systémových příkazů (např. `ls` nebo `whoami`) přímo na serveru.         |
| **9**  | **SQL Injection**                | Testuje vstupy (formuláře, URL), zda přes ně lze ovlivnit databázi webu.                   |
| **0**  | **File Upload**                  | Hledá formuláře nebo skripty, které dovolují nahrát na server libovolný soubor.            |
| **a**  | **Auth Bypass**                  | Pokusy o obejití hesla nebo přístup do sekcí, které mají být zamčené.                      |
| **b**  | **Software ID**                  | Identifikace přesné verze serveru, CMS nebo pluginů (pro následný cílený útok).            |
| **c**  | **Remote Source Inclusion**      | Pokus o to, aby si server stáhl a spustil kód z jiného webu (RFI).                         |
| **d**  | **WebService**                   | Testy specifické pro Webové služby (API, SOAP, XML-RPC).                                   |
| **e**  | **Administrative Console**       | Hledá přihlašovací stránky (např. `/phpmyadmin`, `/admin`, `/wp-login.php`).               |
| **x**  | **Reverse Tuning**               | Obrácená logika. Např. `-Tuning x9` znamená: „Zkus úplně všechno **kromě** SQL Injection.“ |
