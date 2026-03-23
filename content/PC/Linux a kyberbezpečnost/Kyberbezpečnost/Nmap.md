---
---
https://www.youtube.com/watch?v=F2PXe_o7KqM
# Background

- Rychle skenovat velké sítě
- Output je list skenovaných sítí
- Nutnost [[TCP - jak to funguje]], [[IPv4]]

# Postup

```
nmap [ <Scan Type> ...] [ <Options> ] { <target specification> }
```
# Options summary
## Target spec
`-iL <filename>` input z listu hostů\
`-iR <num hosts>` random target
`--exclude <host1[,host2][,host3],...>` Exclude hosts/networks
## Host discovery
`-sL` simply list targets to scan
`-sn` disable port scan
`-Pn`: Treat all hosts as online (používá se, když firewall blokuje to, že je zařízení offline (schovává se))\

## Scan techniques
### Stealth scan
**`-sS`**
Pošle SYN. 
Pokud odpověď SYN-ACK $\Rightarrow$ open
Obdrží RST (okamžitě přeruš spojení)$\Rightarrow$ closed
Něco jiného $\Rightarrow$ filtered
# IP protocol scan
**`-s0`**
## Interesting ports table
- Port number + protocol + state + název service
### State
```
open, filtered, closed, or unfiltered
```
#### Open
Poslouchá pro napojení, je otevřený
#### Filtered
Firewall nebo jiné zařízení blokuje spojení, neznámý state
#### Closed
Neprobíhá aktivní listening, ale může se to kdykoliv změnit
#### Unfiltered
```
open|filtered
closed|filtered
```
Buď jedno nebo druhé a nmap nemúže rozhodnout.