---
slug: Hacking-webu-Rychla-stopa
---

[[Hacking webu rychla stopa bez log]]
# Poznámky před testem
> Nedávno jsem refactoroval starý projekt. Web pro časopis Rychlá stopa. Tento projekt byl mnou přeprogramován, ale jak je vlastně bezpečný?
> V aplikaci byl adminova sekce a veřejné api, spolu s články.
> Penetrační testování je povoleno pouze na zařízeních, která mají písemná povolení od majitele. 
> AI byla v tomto testu použita na dohledávání toolů a celkové evaluaci dokumentu. Dokument, včetně kódu ap. byl tvořen mnou.
# Nmap

Více o nmap: [[Nmap]]. Penetrační test začal s nmapem, který odhalil docela hodně. Zjistili jsme název webu, engine (což jsem netušil, že jde tak lehce)

## Log

```bash
- 5000/tcp open  http          Werkzeug httpd 3.1.7 (Python 3.14.2)
|_http-server-header: Werkzeug/3.1.7 Python/3.14.2
|_http-title: Rychl\xC3\xA1 stopa \xE2\x80\x94 F1 magaz\xC3\xADn
```

# Whatweb
Více o whatweb: [[Whatweb]]. Whatweb byl mnohem lepší než nmap. Zjistil jsem více. Ale hlavně přehledněji. Je to mnohem komplexnější.

## Log

```bash
┌──(kali㉿kali)-[~]
└─$ whatweb -v --no-cookies 192.168.100.17:5000


WhatWeb report for http://192.168.100.17:5000
Status    : 200 OK
Title     : Rychlá stopa — F1 magazín
IP        : 192.168.100.17
Country   : RESERVED, ZZ

Summary   : HTML5, HTTPServer[Werkzeug/3.1.7 Python/3.14.2], Python[3.14.2], Script, Werkzeug[3.1.7]

Detected Plugins:
[ HTML5 ]
        HTML version 5, detected by the doctype declaration 


[ HTTPServer ]
        HTTP server header string. This plugin also attempts to 
        identify the operating system from the server header. 
        String       : Werkzeug/3.1.7 Python/3.14.2 (from server string)

[ Python ]
        Python is a programming language that lets you work more 
        quickly and integrate your systems more effectively. You 
        can learn to use Python and see almost immediate gains in 
        productivity and lower maintenance costs. 
        Version: 3.14.2 (from # Server # Version Detection)
        Website: http://www.python.org/

[ Script ]
        This plugin detects instances of script HTML elements and 
        returns the script language/type. 


[ Werkzeug ]
        Werkzeug is a WSGI utility library for Python. 
        Version      : 3.1.7
        Website     : http://werkzeug.pocoo.org/

HTTP Headers:
        HTTP/1.1 200 OK
        Server: Werkzeug/3.1.7 Python/3.14.2
        Date: Fri, 27 Mar 2026 16:08:21 GMT
        Content-Type: text/html; charset=utf-8
        Content-Length: 5196
        Vary: Cookie
        Connection: close
```
# Nikto 
Více o nikto: [[nikto]]. U nikto (což je rychlejší, ale horší [[OWASP ZAP]]) jsem se rozhodl podniknout velký test. Nutno říct, že úspěšně. Zjistil jsem, že při /#cokoliv aplikace vrací hlavní stranu. Což je problém především pro čtečky. Zjistili jsme taky, že existuje login. Ten se ale neskrývá, je dostupný z hlavní stránky.

## Log

```bash
nikto -h 192.168.100.17 -p 5000 -Display P -mutate 12 -Tuning 12346890abde7
- Mutate is deprecated, use -Plugins instead. The following option can be used in future: -Plugin @@DEFAULT;tests(passfiles,all)
- Nikto v2.5.0
---
permalink: Hacking-webu-Rychlá-stopa------------------------------------------------------------------------
+ Target IP:          192.168.100.17
+ Target Hostname:    192.168.100.17
+ Target Port:        5000
+ Using Mutation:     Test all files with all root directories
+ Using Mutation:     Guess for password file names
+ Start Time:         2026-03-27 12:43:45 (GMT-4)
---------------------------------------------------------------------------
+ Server: Werkzeug/3.1.7 Python/3.14.2
+ /: The anti-clickjacking X-Frame-Options header is not present. See: https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-Frame-Options
+ /: The X-Content-Type-Options header is not set. This could allow the user agent to render the content of the site in a different fashion to the MIME type. See: https://www.netsparker.com/web-vulnerability-scanner/vulnerabilities/missing-content-type-header/
+ No CGI Directories found (use '-C all' to force check all possible dirs)
+ OPTIONS: Allowed HTTP Methods: HEAD, GET, OPTIONS .
+ /#wp-config.php#: #wp-config.php# file found. This file contains the credentials.
+ /login: file found during all checks mutation.
+ #/: file found during all checks mutation.
+ /login?lang=en: file found during all checks mutation.
+ /login?xmlcontrol=Application&url=http://www.example.com&ch=WindowChrome&ic=Applications%2f32x32%2fabout.png&he=About+Sitecore&ma=0&mi=0&re=: file found during all checks mutation.
+ /#wp-config.php#: file found during all checks mutation.
```


# Owasp zap HUD
[[OWASP ZAP]] ve mně vznáší smíšené pocity. Libí se mi, že je open source, ale kdykoliv začnu dělat testing, CPU vyletí do nebes a spadne VBOX. Začal jsem proto používat Burpsuite. Nicméně HUD - tedy režim, který pasivně skenuje web odhalil zajímavé věci. Tedy:

- Content Security Policy (CSP) Header Not Set 
- Missing Anti-clickjacking Header 
- Sub Resource Integrity Attribute Missing
- Server Leaks Version Information via "Server" HTTP Response Header Field 
- X-Content-Type-Options Header Missing
- Absence of Anti-CSRF Tokens (login page)
**co to znamená**
- CSP not set - web může přijmout škodlivý JS, který tam útočník nahraje.
- Missing Anti-clickjacking Header - Útočník vytvoří web, kde je tlačítko smazat účet na moji platformě, ale je průhledné a uživatel ho nevidí. Toto nehrozí pro můj web, ale v rámci škálovatelnosti je to velký problém
- Sub Resource Integrity - Pokud web načítá knihovnu z cizího serveru, který bude hacknut, spustí se škodlivý kód.
- Server Leaks Version Information - je vidět jaký je používán server
- X-Content-Type-Options - pokud je nahrán soubor se skrytým JS, je spušten
- Absence of Anti-CSRF Tokens - Chybí unikátní kód v formuláři, který zajištuje to, že akci dělá uživatel.
**Toto jsou asi nejvíce zranitelné věci, které jsem našel**
---
# gobuster
Více o gobuster: [[gobuster]]. Po zděšení v OWASP, přišli i dobré zprávy. Stránka /admin dává kód 302 - redirect na login. Tento kód nejde obejít a do adminu se tak nikdo nepřihlášený nedostane. Zároveň /console běží na 400. Bez Pinu se tam člověk nedostane. Nicméně server jel v režimu debug a v reálné produkci toto není nastaveno.
## Log
```bash
└─$ gobuster dir -u http://192.168.100.17:5000 -b 404 -t 50 -w /usr/share/wordlists/dirb/common.txt 
===============================================================
Gobuster v3.8
by OJ Reeves (@TheColonial) & Christian Mehlmauer (@firefart)
===============================================================
[+] Url:                     http://192.168.100.17:5000
[+] Method:                  GET
[+] Threads:                 50
[+] Wordlist:                /usr/share/wordlists/dirb/common.txt
[+] Negative Status codes:   404
[+] User Agent:              gobuster/3.8
[+] Timeout:                 10s
===============================================================
Starting gobuster in directory enumeration mode
===============================================================
/admin                (Status: 302) [Size: 199] [--> /login]
/archiv               (Status: 308) [Size: 255] [--> http://192.168.100.17:5000/archiv/]
/console              (Status: 400) [Size: 167]
/login                (Status: 200) [Size: 3902]
/logout               (Status: 302) [Size: 189] [--> /]
Progress: 4613 / 4613 (100.00%)
===============================================================
Finished
=============================================================== 
```
# ffuf
Více o [[ffuf]]. Poté přišla další studená sprcha. Poté, co jsem nakoukl na rockyou.txt (což by útočník samozřejmě nevěděl), jsem zjistil, že heslo je již zaznamenáno. Hluboce znepokojující. Co je lepší zpráva je ta, že ffuf nebyl schopen dát toto heslo správně, protože redirect je pořád stejný a kód nepříjmá požadavky ve webu. Což ale neznamená, že je to bezpečné. Jenže já nemám botnety.

## Log

```bash
└─$ ffuf -u http://192.168.100.17:5000/login -X POST -d "username=admin&pwd=FUZZ" -w /usr/share/wordlists/rockyou.txt -fs 3902

        /'___\  /'___\           /'___\       
       /\ \__/ /\ \__/  __  __  /\ \__/       
       \ \ ,__\\ \ ,__\/\ \/\ \ \ \ ,__\      
        \ \ \_/ \ \ \_/\ \ \_\ \ \ \ \_/      
         \ \_\   \ \_\  \ \____/  \ \_\       
          \/_/    \/_/   \/___/    \/_/       

       v2.1.0-dev
________________________________________________

 :: Method           : POST
 :: URL              : http://192.168.100.17:5000/login
 :: Wordlist         : FUZZ: /usr/share/wordlists/rockyou.txt
 :: Data             : username=admin&pwd=FUZZ
 :: Follow redirects : false
 :: Calibration      : false
 :: Timeout          : 10
 :: Threads          : 40
 :: Matcher          : Response status: 200-299,301,302,307,401,403,405,500
 :: Filter           : Response size: 3902
________________________________________________

```

# Nuclei
Více o [[Nuclei]]. Nuclei je dedikovaný prohlížeč exploitů. Co je pozitivní zpráva - žádný nebyl najit na mé stránce.

## Log

```bash
└─$ nuclei -u http://192.168.100.17:5000 -as   

                     __     _
   ____  __  _______/ /__  (_)
  / __ \/ / / / ___/ / _ \/ /
 / / / / /_/ / /__/ /  __/ /
/_/ /_/\__,_/\___/_/\___/_/   v3.7.1

                projectdiscovery.io

[WRN] Found 1 templates with runtime error (use -validate flag for further examination)
[INF] Current nuclei version: v3.7.1 (latest)
[INF] Current nuclei-templates version: v10.4.0 (latest)
[INF] New templates added in latest release: 94
[INF] Templates loaded for current scan: 9904
[INF] Executing 9887 signed templates from projectdiscovery/nuclei-templates
[WRN] Loading 17 unsigned templates for scan. Use with caution.
[INF] Targets loaded for current scan: 1
[INF] Automatic scan tech-detect: Templates clustered: 547 (Reduced 520 Requests)
[INF] Executing Automatic scan on 1 target[s]
[tech-detect:google-font-api] [http] [info] http://192.168.100.17:5000
[tech-detect:python] [http] [info] http://192.168.100.17:5000
[INF] Found 3 tags and 1 matches on detection templates on http://192.168.100.17:5000 [wappalyzer: 2, detection: 3]
[INF] Executing 16 templates on http://192.168.100.17:5000
[INF] Scan completed in 37.538268487s. No results found.

```
# SSTI
Jelikož server jede na Pythonu, používá Jinja2 (zobrazovač pythonu v html). Proto je možné, že po injection správných pramaterů, které se v HTML tváří - a jsou - jako Python, může získat přístup ke konsoli.
```bash
printf "{{config}}\n{{self}}\n{{7*'7'}}\n<# 7*7 >\n" > wordlist.txt
ffuf -u http://192.168.100.17:5000/login -X POST -d "username=FUZZ&pwd=spatneheslo" -w ssti_test.txt -v
```
Toto byl problém, pokud při chybném přihlášení vypisuje kód 
```html
<p>Uživatel {{username}} má špatné heslo</p>
```
Což byla chyba, kterou jsem dělal, ale byla opravena a již nejde po úpravě kódu.
# Závěr
Bylo odhaleno několik nebezpečných nedostatků. 
## Kritické
**Heslo pro admina je v bežném slovníku**
Nejsou generovány tokeny pro admina.
## Důležité
Není dělán rate limiting pro dotazy na server.
Dostupná console (i přes vývojový mód)
# Podstatné
Server má svoji verzi lehce dostupnou
Pokud web načítá knihovnu z cizího serveru, který bude hacknut, spustí se škodlivý kód.
## Důležité pro budoucí škálování
pokud je nahrán soubor se skrytým JS, je spušten
Web může přijmout škodlivý JS.