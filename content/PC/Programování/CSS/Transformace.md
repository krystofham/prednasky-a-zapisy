## 1. `translate(x, y)` – Posunutí

Posune element z jeho původní pozice. Klíčové je, že procenta se počítají z **velikosti samotného elementu**, ne z rodiče (toho se využívá u centrování).

- `translate(50px, 20px)`: Posun o 50px doprava a 20px dolů.
- `translateX(100%)`: Posun o celou svou šířku doprava.
CSS
```css
.box {
  transform: translate(20px, -10px);
}
```

---
slug: Transformace

## 2. `rotate(angle)` – Otočení

Otáčí elementem kolem bodu (standardně střed). Používáme jednotky `deg` (stupně), `rad` (radiány) nebo `turn` (otočky).

- `rotate(45deg)`: Otočení po směru hodinových ručiček.
- `rotate(-0.5turn)`: Otočení o 180° proti směru.

---

## 3. `scale(x, y)` – Změna velikosti

Zvětší nebo zmenší element. Hodnota `1` je původní velikost, `2` je dvojnásobek, `0.5` polovina.

- `scale(1.2)`: Zvětší celý element o 20 %.
    
- `scaleX(-1)`: **Zrcadlové převrácení** horizontálně.
    

---

## 4. `skew(x, y)` – Zkosení (Zkřivení)

Element zůstane "přibitý" k zemi, ale nakloní se do stran. Skvělé pro moderní šikmé tvary v designu.

- `skewX(20deg)`: Nakloní svislé hrany.
    
- `skew(10deg, 10deg)`: Zkosení v obou osách.
    

---

## 5. `matrix(a, b, c, d, e, f)` – Matematické finále

Tohle je funkce, kterou "pod kapotou" používají všechny předchozí. Je to 2D transformační matice 3×3. Pokud nepíšeš vlastní grafický engine, pravděpodobně ji ručně psát nebudeš, ale je dobré vědět, že existuje.

Standardní matice vypadá takto:

![](data:image/svg+xml;utf8,<svg%20xmlns="http://www.w3.org/2000/svg"%20width="0.875em"%20height="3.600em"%20viewBox="0%200%20875%203600"><path%20d="M863,9c0,-2,-2,-5,-6,-9c0,0,-17,0,-17,0c-12.7,0,-19.3,0.3,-20,1
c-5.3,5.3,-10.3,11,-15,17c-242.7,294.7,-395.3,682,-458,1162c-21.3,163.3,-33.3,349,
-36,557%20l0,84c0.2,6,0,26,0,60c2,159.3,10,310.7,24,454c53.3,528,210,
949.7,470,1265c4.7,6,9.7,11.7,15,17c0.7,0.7,7,1,19,1c0,0,18,0,18,0c4,-4,6,-7,6,-9
c0,-2.7,-3.3,-8.7,-10,-18c-135.3,-192.7,-235.5,-414.3,-300.5,-665c-65,-250.7,-102.5,
-544.7,-112.5,-882c-2,-104,-3,-167,-3,-189
l0,-92c0,-162.7,5.7,-314,17,-454c20.7,-272,63.7,-513,129,-723c65.3,
-210,155.3,-396.3,270,-559c6.7,-9.3,10,-15.3,10,-18z"></path></svg>)​ab0​cd0​ef1​![](data:image/svg+xml;utf8,<svg%20xmlns="http://www.w3.org/2000/svg"%20width="0.875em"%20height="3.600em"%20viewBox="0%200%20875%203600"><path%20d="M76,0c-16.7,0,-25,3,-25,9c0,2,2,6.3,6,13c21.3,28.7,42.3,60.3,
63,95c96.7,156.7,172.8,332.5,228.5,527.5c55.7,195,92.8,416.5,111.5,664.5
c11.3,139.3,17,290.7,17,454c0,28,1.7,43,3.3,45l0,9
c-3,4,-3.3,16.7,-3.3,38c0,162,-5.7,313.7,-17,455c-18.7,248,-55.8,469.3,-111.5,664
c-55.7,194.7,-131.8,370.3,-228.5,527c-20.7,34.7,-41.7,66.3,-63,95c-2,3.3,-4,7,-6,11
c0,7.3,5.7,11,17,11c0,0,11,0,11,0c9.3,0,14.3,-0.3,15,-1c5.3,-5.3,10.3,-11,15,-17
c242.7,-294.7,395.3,-681.7,458,-1161c21.3,-164.7,33.3,-350.7,36,-558
l0,-144c-2,-159.3,-10,-310.7,-24,-454c-53.3,-528,-210,-949.7,
-470,-1265c-4.7,-6,-9.7,-11.7,-15,-17c-0.7,-0.7,-6.7,-1,-18,-1z"></path></svg>)​

- `a`, `d` řeší měřítko (scale).
    
- `b`, `c` řeší zkosení (skew) a rotaci.
    
- `e`, `f` řeší posun (translate).
    

---

## Klíčové vlastnosti pro práci s transformacemi

### Kombinování (Záleží na pořadí!)

Můžeš jich napsat víc za sebe. **Pozor:** Pořadí mění výsledek. Pokud nejdřív otočíš a pak posuneš, posouváš se v už otočených osách!

CSS

```
/* Nejdřív posun, pak rotace */
transform: translate(100px) rotate(45deg);
```

### `transform-origin`

Určuje "bod ukotvení". Standardně je to `center` (střed), ale můžeš ho změnit na roh nebo konkrétní pixel.

CSS

```
.door {
  transform-origin: left; /* Dveře se budou otáčet u levého pantu */
  transform: rotateY(90deg);
}
```

### Rychlý přehled

|Funkce|Co dělá|Příklad|
|---|---|---|
|**Translate**|Posouvá|`translate(50%, 0)`|
|**Rotate**|Otáčí|`rotate(180deg)`|
|**Scale**|Mění velikost|`scale(1.5)`|
|**Skew**|Křiví / Naklání|`skewX(10deg)`|
|**Matrix**|Vše v jednom (matematicky)|`matrix(1, 0, 0, 1, 10, 10)`|