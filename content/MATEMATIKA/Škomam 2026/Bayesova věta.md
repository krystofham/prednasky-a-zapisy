---
permalink: Bayesova-věta
---
Autor: Jan Kracík
**Data a práce s nimi, Teorie pravděpodobnosti**
# Míra
Nechť $\ohm$ je libovolná množina a F je množina podmnožin množiny $\ohm$
1) $\ohm \in F$
2) pro každé $M_1, M_2 \in F$ platí $M_1 \cup M_2 \in F$ a $M_1 \cap M_2\in F$
Pro funkci platí $F \rightarrow  <0;\infty) \cup {\infty}$ 
3) $\micro = 0$
4) Pro každé $M_1, M_2 \in F$, kde $M_1 \cap M_2 = \varnothing$, platí $\micro(M_1 \cup M_2) = \micro(M_1) + \micro(M_2)$
**Pravděpodobnost jí míra**

Množina elementárních jevů $\ohm$ - množina všech možných výsledků náhodného pokusu. Jeden elementární jev je výsledek. $\omega \in \ohm$
Náhodný jev A nastane, když $\omega \in A$
## Kostka od 1 do 6
Množina jevů $\ohm = {range(1,6)}$ 
Náhodný jev A ->padlo prvočíslo
Náhodný jev B -> padlo liché číslo

$\ohm$ je množina
F je algebra podmnožin $\ohm$ - náhodné jevy
**Pravděpodobnost je libovolná míra P definovaná na množině F, pro kterou platí P($\ohm$) = 1**
## Vlastnosti
Pravděpodobnostní prostor ($\ohm, F, P$) 
$$P(A) \in <0;1>$$
## Příklad 
S pravděpodobností jede vlak 0.4
S pravděpodobností jede vlak a bus: 0.2
S pravděpodobností jede bus: 0.7
$$P (A\in V) = P(A)+P(V)+P(A\cup B)$$
### Podmíněná pravděpodobnost
$$ P(A|B) = \frac{P( A\cap B)}{P(B)}$$
P (A) = výskyt jevu A - bez další informace
# Bayesova věta
$P(B) = 1-\vec{B}$
$$P(B|A) = \frac{P(A|B)P(B)}{P(A|B)P(B)+P(A|\vec{B})P(\vec{B})}$$

POZN NE VEKTOR, ALE ČÁRA

## Příklad
Antigenní test
V...osoba nakažená
t...positivní antigenní test
$P(V) = 0.007$ $P(T|V) = 0.94$ $P(\vec{T}|\vec{V}) = 0.97$
Po dosazení 0.18

# Tags
#pravdepodobnost 
 #kombinatorika 