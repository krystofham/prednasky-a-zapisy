SKSP 26, Medvěd 
---

Mám 2D mřížku, každá bunka je živá mrtvá.
Každý takt si bunka přepočítá, zda je mrtvá podle pravidel.

# Pravidla
## Přežije
- 2/3 živé sousedy
## Ožije
- 3 živé sousedy

# Sestavy
## Blikač
```
x x x - > x
          x
          x
```
- nejjednodušší oscilátor
## Blok
```
x x
x x
```
- nejjednodušší stabilní
## Glider
```
x
x   x
x x
```
-  Posouvá se diagonálně do původní konfigurace co 4 takty
- Rychleji to nejde, takže rychlost c/4
- Kosmická loď
- Existuje kosmická lod která je c/2
Rychleji to ve vakuu NEJDE
Při konfiguraci jde mít rychlost c