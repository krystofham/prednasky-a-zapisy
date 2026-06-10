# Adresace
## IPv4
`192.168.10.0/24`
## Schéma
### Podsíť 1
`192.168.10.0/29`
SW 1 + PC 1
Adresa PC 1: `192.168.10.1`
Router / Deafault gateaway: `192.168.10.7`
### Podsíť 2
`192.168.10.8/29`
SW 2 + PC 2
Adresa PC 2: `192.168.10.9`
Router / Deafault gateaway: `192.168.10.15`
## IPv6
`2001:db8:cafe::/48`
## Schéma
### Podsíť 1
SW 1 + PC 1
Adresa PC 1: `2001:db8:cafe:0000::0`
### Podsíť 2
SW 2 + PC 2
Adresa PC 2: `2001:db8:cafe:0001::0`
# Konfigurace PC
Sit a internet -> ethernet -> zmenit moznosti adapteru -> nastavit ip adresu po zvolnení prostředí
PC 1:
`192.168.10.1, 255.255.255.248, `
PC 2:
`192.168.10.9, 255.255.255.248`