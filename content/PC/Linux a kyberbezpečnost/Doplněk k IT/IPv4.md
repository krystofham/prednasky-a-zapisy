---
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
# Vyhrazené adresy pro lokální sítě  
- 10.0.0.0 – 10.255.255.255  
- 172.16.0.0 – 172.31.255.255  
- 192.168.0.0 – 192.168.255.255  
# Link-local  
- [169.254.0.0/16](http://169.254.0.0/16)  
- Windows DHPC při erroru dává toto