# Adresace
## IPv4
`192.168.10.0/24`
## Schéma
### Podsíť 1
`192.168.10.0/29`
SW 1 + PC 1
Adresa PC 1: `192.168.10.1`
Router / Deafault gateaway: `192.168.10.6`
### Podsíť 2
`192.168.10.8/29`
SW 2 + PC 2
Adresa PC 2: `192.168.10.9`
Router / Deafault gateaway: `192.168.10.14`
## IPv6
`2001:db8:cafe::/48`
## Schéma
### Podsíť 1
SW 1 + PC 1
Adresa PC 1: `2001:db8:cafe:0000::1`
Router / GW: `2001:db8:cafe:0000::cafe`
### Podsíť 2
SW 2 + PC 2
Adresa PC 2: `2001:db8:cafe:0001::1`
Router / GW: `2001:db8:cafe:0001::cafe` 
# Konfigurace PC
Sit a internet -> ethernet -> zmenit moznosti adapteru -> nastavit ip adresu po zvolnení prostředí
PC 1:
`192.168.10.1, 255.255.255.248, GW 192.168.10.6`
`2001:db8:cafe:0000::1,2001:db8:cafe:0000::cafe`
PC 2:
`192.168.10.9, 255.255.255.248, GW 192.168.10.14`
`2001:db8:cafe:0001::1,2001:db8:cafe:0001::cafe`
# Konfigurace SW 1 + SW 2 (jenom zmenit hostname)
```
// povolovani
enable
configure terminal
(config) #
hostname SW1
no ip domain-lookup
// sifrovane heslo

enable secret ciscocisco

// heslo do konzole

line console 0
password ciscocisco
login
exit

// hesla sifrovani
service password-encryption

//banner
banner motd - Neopravneny vstup zakazan -
show running-config
```
# Konfigurace Routerů (oba dva)
```
enable
configure terminal
// (config) #
no ip domain-lookup
enable secret ciscocisco

line console 0
password ciscocisco
login
exit

banner motd - Neopravneny vstup zakazan -
ipv6 unicast-routing
hostname R1
interface GigabitEthernet ... (0/0 nebo tak)
// config-if #
ip address 192.168.10.6 255.255.255.248
ipv6 address 2001:db8:cafe:0::cafe/64
no shutdown
exit
interface GigabitEthernet ... (0/0 nebo tak ale jine, druhy kabel)
// config-if #
ip address 192.168.10.14 255.255.255.248
ipv6 address 2001:db8:cafe:1::cafe/64
no shutdown
exit
show running-config
```