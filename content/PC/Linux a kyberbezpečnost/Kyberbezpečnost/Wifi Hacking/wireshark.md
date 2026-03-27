---
---
# 🦈 Wireshark Starterpack

Praktický průvodce pro rychlý start s Wiresharkem – zachytávání provozu a základní filtrování.

---

## Obsah

1. [Zobrazovací filtry (Display Filters)](#zobrazovac%C3%AD-filtry)
2. [Zachytávací filtry (Capture Filters)](#zachyt%C3%A1vac%C3%AD-filtry)
3. [Analýza paketů](#anal%C3%BDza-paket%C5%AF)
4. [Užitečné zkratky](#u%C5%BEite%C4%8Dn%C3%A9-zkratky)
5. [Tipy a triky](#tipy-a-triky)

---

## Zobrazovací filtry

Zobrazovací filtry (Display Filters) filtrují **již zachycená** data – originál zůstává nedotčen. Píšou se do pruhu nahoře.

### Základní syntaxe

```
protokol.pole == hodnota
protokol.pole contains "řetězec"
```

Operátory: `==`, `!=`, `<`, `>`, `<=`, `>=`, `&&`, `||`, `!`

---

### Filtrování podle protokolu

```
http          # veškerý HTTP provoz
dns           # DNS dotazy a odpovědi
tcp           # veškerý TCP provoz
udp           # veškerý UDP provoz
icmp          # ping a ICMP zprávy
arp           # ARP pakety
tls           # TLS/HTTPS (šifrovaný provoz)
ftp           # FTP přenos souborů
ssh           # SSH provoz
smtp          # e-mailový provoz SMTP
```

---

### Filtrování podle IP adresy

```
ip.addr == 192.168.1.1          # pakety od NEBO na tuto IP
ip.src == 192.168.1.1           # pouze pakety Z této IP
ip.dst == 192.168.1.1           # pouze pakety NA tuto IP
ip.addr == 192.168.1.0/24       # celá podsíť
!ip.addr == 192.168.1.1         # vše kromě této IP
```

---

### Filtrování podle portu

```
tcp.port == 80          # HTTP (TCP port 80)
tcp.port == 443         # HTTPS
tcp.port == 22          # SSH
tcp.dstport == 8080     # cílový port 8080
tcp.srcport == 443      # zdrojový port 443
udp.port == 53          # DNS přes UDP
```

---

### Filtrování HTTP

```
http                            # veškerý HTTP provoz
http.request                    # pouze HTTP požadavky (GET, POST…)
http.response                   # pouze HTTP odpovědi
http.request.method == "GET"    # pouze GET požadavky
http.request.method == "POST"   # pouze POST požadavky
http.response.code == 200       # odpovědi s kódem 200 OK
http.response.code == 404       # chybové odpovědi 404
http.host == "example.com"      # provoz na konkrétní doménu
http.request.uri contains "login"   # URL obsahující "login"
```

---

### Filtrování DNS

```
dns                             # veškerý DNS provoz
dns.qry.name == "google.com"    # DNS dotaz na konkrétní doménu
dns.qry.name contains "google"  # DNS dotaz obsahující "google"
dns.flags.response == 0         # pouze DNS dotazy (queries)
dns.flags.response == 1         # pouze DNS odpovědi
dns.qry.type == 1               # dotazy typu A (IPv4)
dns.qry.type == 28              # dotazy typu AAAA (IPv6)
```

---

### Filtrování TCP

```
tcp.flags.syn == 1                          # SYN pakety (navazování spojení)
tcp.flags.fin == 1                          # FIN pakety (ukončení spojení)
tcp.flags.reset == 1                        # RST pakety (reset spojení)
tcp.flags.syn == 1 && tcp.flags.ack == 0    # pouze první SYN (nová spojení)
tcp.analysis.retransmission                 # retransmise (problém v síti)
tcp.analysis.zero_window                    # zaseknuté TCP spojení
tcp.stream == 5                             # konkrétní TCP stream číslo 5
```

---

### Kombinované filtry

```
# HTTP provoz od konkrétní IP
ip.src == 192.168.1.100 && http

# DNS nebo ICMP
dns || icmp

# TCP port 80 nebo 443
tcp.port == 80 || tcp.port == 443

# Vše kromě ARP a DNS
!arp && !dns

# HTTP POST požadavky z lokální sítě
ip.src == 192.168.0.0/16 && http.request.method == "POST"

# Chybové HTTP odpovědi (4xx a 5xx)
http.response.code >= 400

# Pakety s konkrétním řetězcem v datech
frame contains "password"
```

---

## Zachytávací filtry

Zachytávací filtry (Capture Filters) filtrují **při zachytávání** – nežádoucí pakety se vůbec neuloží. Používají syntaxi BPF (Berkeley Packet Filter). Nastavují se před spuštěním zachytávání.

> ⚠️ Syntax je **odlišná** od zobrazovacích filtrů!

```
host 192.168.1.1            # provoz od/na konkrétní IP
src host 192.168.1.1        # pouze od této IP
dst host 192.168.1.1        # pouze na tuto IP
port 80                     # provoz na portu 80
port 80 or port 443         # HTTP a HTTPS
not port 22                 # vše kromě SSH
net 192.168.1.0/24          # celá podsíť
tcp                         # pouze TCP
udp                         # pouze UDP
icmp                        # pouze ICMP
```

---

## Analýza paketů

### Sledování TCP streamu

Klikni pravým tlačítkem na paket → **Follow → TCP Stream** Zobrazí celou konverzaci ve čitelné podobě.

### Statistiky

- `Statistics → Protocol Hierarchy` – přehled protokolů v zachytávání
- `Statistics → Conversations` – seznam všech komunikujících párů
- `Statistics → IO Graph` – graf provozu v čase
- `Statistics → Endpoints` – seznam všech IP adres

### Export objektů

`File → Export Objects → HTTP` – vyexportuje soubory přenesené přes HTTP (obrázky, HTML stránky apod.)

---

## Užitečné zkratky

|Zkratka|Akce|
|---|---|
|`Ctrl+E`|Spustit / zastavit zachytávání|
|`Ctrl+S`|Uložit zachytávání|
|`Ctrl+F`|Hledat v paketech|
|`Ctrl+G`|Jít na konkrétní paket|
|`Ctrl+R`|Otevřít soubor|
|`Ctrl+Shift+P`|Nastavení|
|`F5`|Obnovit zobrazení|
|`Space`|Scroll dolů po paketech|

---

## Tipy a triky

**Barevné zvýraznění** Wireshark automaticky barví pakety podle protokolu. Nastavení barev: `View → Coloring Rules`.

**Uložení filtrů** Dobré filtry si ulož kliknutím na ikonu záložky vedle pole filtru – nemusíš je psát znovu.

**Profily** `Edit → Configuration Profiles` – vytvoř různé profily pro různé scénáře (např. jeden pro HTTP analýzu, jeden pro DNS).

**Rozlišení jmen** `View → Name Resolution` – zapni překlad IP adres na hostnames a MAC adres na výrobce.

**Šifrovaný provoz (TLS)** Pro dešifrování HTTPS je potřeba SSL klíč. Nastav ho: `Edit → Preferences → Protocols → TLS → (Pre)-Master-Secret log filename`.

---

## Rychlá reference – nejpoužívanější filtry

```
http                            # HTTP provoz
dns                             # DNS dotazy
tcp.port == 443                 # HTTPS
ip.addr == X.X.X.X              # konkrétní IP
tcp.flags.syn == 1              # nová spojení
http.response.code >= 400       # HTTP chyby
frame contains "text"           # hledání řetězce
!arp && !dns                    # odfiltrování šumu
tcp.analysis.retransmission     # problémy v síti
```
