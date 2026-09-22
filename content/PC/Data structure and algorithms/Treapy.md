KSP sous 2026, URL: https://ksp.mff.cuni.cz/encyklopedie/treapy/
# Halda (heap)
Strom
Seřazené zdola nahoru
Prvek v otci je mensi nebo roven v jeho synech
# Binarni strom
Savvy
O(n)
Pokud vyvazeny O(log n)

CIL JE Minimalizovat hloubku

# Treap
Binarni vyhledavaci strom && halda
Má (k, p)
Klíč je vlastnost, p je priorita
Klíč je pro binarní vyhledavani, p je pro haldu

$$k_1 < k_2 < ... <k_n$$
$$P_1 < P_2 < ... <P_n$$
Nejvetsi priorita je v kořeni, nalevo jsou ve stromu nalevo
## Metody
## $Join (A, B)$

`O(h)` 
(hloubka)

Platí, že $A < B$, pak dáme kořen A jako nový kořen. Levá podmnožina A jde doleva, pravá A jde jako dítě nového spolu s B doprava

```
      A
      
A_1         submnozina
           A_2       B
```

## $SPLIT(A, B)$
`O(h)`
Intuitivni

## Submetody
### Insert
Split + join + join
### Delete
Split + split + join
### Roatce
Dite se stane rodicem

> sweer home alabama

