[[Hacking webu Rychlá stopa]]
Celý článek
# Poznámky před testem
> Nedávno jsem refactoroval starý projekt. Web pro časopis Rychlá stopa. Tento projekt byl mnou přeprogramován, ale jak je vlastně bezpečný?
> V aplikaci byl adminova sekce a veřejné api, spolu s články.
> Penetrační testování je povoleno pouze na zařízeních, která mají písemná povolení od majitele. 
> AI byla v tomto testu použita na dohledávání toolů a celkové evaluaci dokumentu. Dokument, včetně kódu ap. byl tvořen mnou.
# Nmap

Více o nmap: [[Nmap]]. Penetrační test začal s nmapem, který odhalil docela hodně. Zjistili jsme název webu, engine (což jsem netušil, že jde tak lehce)

# Whatweb
Více o whatweb: [[Whatweb]]. Whatweb byl mnohem lepší než nmap. Zjistil jsem více. Ale hlavně přehledněji. Je to mnohem komplexnější.

# Nikto 
Více o nikto: [[nikto]]. U nikto (což je rychlejší, ale horší [[OWASP ZAP]]) jsem se rozhodl podniknout velký test. Nutno říct, že úspěšně. Zjistil jsem, že při /#cokoliv aplikace vrací hlavní stranu. Což je problém především pro čtečky. Zjistili jsme taky, že existuje login. Ten se ale neskrývá, je dostupný z hlavní stránky.
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
# ffuf
Více o [[ffuf]]. Poté přišla další studená sprcha. Poté, co jsem nakoukl na rockyou.txt (což by útočník samozřejmě nevěděl), jsem zjistil, že heslo je již zaznamenáno. Hluboce znepokojující. Co je lepší zpráva je ta, že ffuf nebyl schopen dát toto heslo správně, protože redirect je pořád stejný a kód nepříjmá požadavky ve webu. Což ale neznamená, že je to bezpečné. Jenže já nemám botnety.

# Nuclei
Více o [[Nuclei]]. Nuclei je dedikovaný prohlížeč exploitů. Co je pozitivní zpráva - žádný nebyl najit na mé stránce.

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