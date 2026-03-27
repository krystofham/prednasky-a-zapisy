---
slug: IPv4
permalink: IPv4
---
32 bitový systém  
Pojí se k ní subnet mask  
# Subnet mask  
Dělí IP na dvě části  
1) Síťová  
- statická  
2) Adresace hostů  
- rozsah    
## Anding  
Adresa sítě vznikne logickým endem subnet mask a IP adresy. Na tomhle principu funguje zjištění PC, zda je v lokální síti.  
## Prefix length  
Místo `255.255.255.0` lze zapsat jako prefix.  
Počet jedniček zleva doprava za lomítkem.  
# Mac tabulka  
Switch má vlastní tabulku, kam si zapisuje všechny Mac adresy v síti. Říká se tomu i CAM tabulka  
# Multicast  
Broadcast, který je určen je pro určité adresy. Koncová zařízení defaultně zahazují tyto packety.  
# Loopback adresy  
- 127.0.0.0 /8 - pingování na sebe  
# Vyhrazené adresy pro lokální (privátní) sítě  
- 10.0.0.0 – 10.255.255.255
- 172.16.0.0 – 172.31.255.255
- 192.168.0.0 – 192.168.255.255
# Link-local
- 169.254.0.0/16
- Windows DHPC při erroru dává toto
- Říká se tomu APIPA
# NAT
- Přiděluje veřejné IP adresy pro lokální sítě
# Zahlcenost
- Bechceme tvořit velké sítě (max /24)
- Rychlost
- Broadcast by zpomaloval
## Jak segmentovat
- Lokace
- Funkce
  - účetní oddělení
  - studenti
- JinéWindows DHPC při erroru dává toto
# VLSM
- Každá poďsít dostane prefix na míru
# Příklad
Malá firma má pobočku, chcou síť. Dva routery, na každém switch. 192.168.0.0/24. 3 podsítě. Dvě podsítě routeru. Jeden spoj mezi nimi. Spoj má 2 IP adresy. První podsíť 100 IP, druhá 25 IP. Celkem 127 adres. Ale to nejsou konečná čísla. Gateaway + broadcast + adresa podsítě. Celkem $100+25+2+3*2 + 2*1= 135$ adres. Na první adrese je 28 ($2^5 = 32$), na druhé 103 ($2^7 = 128$), na třetí 4 ($2^2=4$). ($128+4+32 = 164$ adres. Což je prefix /24 (256)). Ted musíme určit masku, prefix, rozsah, adresa sítě, Broadcast. Nutno seřadit od největšího po nejmenší.
| Podsíť               | Prefix | Maska           | Adresa sítě   | První IP      | Poslední IP   | Broadcast     | Počet hostů |
| -------------------- | ------ | --------------- | ------------- | ------------- | ------------- | ------------- | ----------- |
| Obecně | 24 + $\log_2 256-n$ | 255.255.255.(255-n) | 192.168.0.0 | 192.168.0.1 | 192.168.0.(n-2) | 192.168.0.n-1 | n-2 | 
| LAN 1 (100 hostů)    | /25    | 255.255.255.128 | 192.168.0.0   | 192.168.0.1   | 192.168.0.126 | 192.168.0.127 | 126         |
| LAN 2 (25 hostů)     | /27    | 255.255.255.224 | 192.168.0.128 | 192.168.0.129 | 192.168.0.158 | 192.168.0.159 | 30          |
| Link (router-router) | /30    | 255.255.255.252 | 192.168.0.160 | 192.168.0.161 | 192.168.0.162 | 192.168.0.163 | 2           |


---
> Prefix /24 má z 256 možností jenom 254. Jedna je pro broadcast (poslední z rosahu), druhá pro adresu sítě (první z rozsahu)
> Broadcastová doména = část sítě, kde se dostane broadcast
> Hosts = kolik Ip adres potřebuju
