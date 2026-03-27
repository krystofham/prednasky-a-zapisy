# Vektorový součin a nabla — kompletní průvodce

---
permalink: Vektorový-součin-a-nabla

## Co musíš umět předtím — prerekvizity

Než pochopíš vektorový součin a nablu, musíš mít jistotu v těchto věcech:

### 1. Vektory základy

- Vektor je šipka v prostoru: $\mathbf{a} = (a_1, a_2, a_3)$
- Sčítání: $\mathbf{a} + \mathbf{b} = (a_1+b_1,\ a_2+b_2,\ a_3+b_3)$
- Násobení skalárem: $k\mathbf{a} = (ka_1, ka_2, ka_3)$
- Velikost (délka) vektoru: $|\mathbf{a}| = \sqrt{a_1^2 + a_2^2 + a_3^2}$

### 2. Skalární součin (tečkový součin)

$$\mathbf{a} \cdot \mathbf{b} = a_1 b_1 + a_2 b_2 + a_3 b_3$$

Výsledek je **číslo** (skalár), ne vektor.

Geometrický význam: $$\mathbf{a} \cdot \mathbf{b} = |\mathbf{a}||\mathbf{b}|\cos\alpha$$

kde $\alpha$ je úhel mezi vektory. Pokud $\mathbf{a} \cdot \mathbf{b} = 0$, vektory jsou **kolmé**.

### 3. Bázové vektory

$$\mathbf{i} = (1,0,0), \quad \mathbf{j} = (0,1,0), \quad \mathbf{k} = (0,0,1)$$

Každý vektor lze zapsat jako: $$\mathbf{a} = a_1\mathbf{i} + a_2\mathbf{j} + a_3\mathbf{k}$$

### 4. Determinant matice 2×2

$$\begin{vmatrix} a & b \ c & d \end{vmatrix} = ad - bc$$

### 5. Determinant matice 3×3 (rozvoj podle prvního řádku)

$$\begin{vmatrix} a & b & c \ d & e & f \ g & h & i \end{vmatrix} = a\begin{vmatrix}e&f\h&i\end{vmatrix} - b\begin{vmatrix}d&f\g&i\end{vmatrix} + c\begin{vmatrix}d&e\g&h\end{vmatrix}$$

### 6. Parciální derivace

$$\frac{\partial f}{\partial x}$$ — derivuješ podle $x$, ostatní proměnné bereš jako konstanty.

Příklad: $f(x,y) = x^2 y + 3y$

$$\frac{\partial f}{\partial x} = 2xy, \qquad \frac{\partial f}{\partial y} = x^2 + 3$$

---

---

# Část 1: Vektorový součin

## Co to je

Vektorový součin $\mathbf{a} \times \mathbf{b}$ dvou vektorů v prostoru dává **nový vektor**, který je:

- **kolmý** na oba původní vektory
- jeho délka odpovídá **ploše rovnoběžníku** rozepjatého vektory $\mathbf{a}$ a $\mathbf{b}$

---

## Výpočet pomocí determinantu

$$\mathbf{a} \times \mathbf{b} = \begin{vmatrix} \mathbf{i} & \mathbf{j} & \mathbf{k} \ a_1 & a_2 & a_3 \ b_1 & b_2 & b_3 \end{vmatrix}$$

Rozvineme podle prvního řádku:

$$= \mathbf{i}\begin{vmatrix}a_2&a_3\b_2&b_3\end{vmatrix} - \mathbf{j}\begin{vmatrix}a_1&a_3\b_1&b_3\end{vmatrix} + \mathbf{k}\begin{vmatrix}a_1&a_2\b_1&b_2\end{vmatrix}$$

Konkrétně:

$$\mathbf{a} \times \mathbf{b} = \big(a_2 b_3 - a_3 b_2,\quad a_3 b_1 - a_1 b_3,\quad a_1 b_2 - a_2 b_1\big)$$

---

## Příklad 1 — základní

$$\mathbf{a} = (1, 2, 3), \quad \mathbf{b} = (4, 5, 6)$$

$$\mathbf{a} \times \mathbf{b} = \begin{vmatrix}\mathbf{i}&\mathbf{j}&\mathbf{k}\1&2&3\4&5&6\end{vmatrix}$$

$$= \mathbf{i}(2\cdot6 - 3\cdot5) - \mathbf{j}(1\cdot6 - 3\cdot4) + \mathbf{k}(1\cdot5 - 2\cdot4)$$

$$= \mathbf{i}(12-15) - \mathbf{j}(6-12) + \mathbf{k}(5-8)$$

$$= \boxed{(-3,\ 6,\ -3)}$$

**Ověření kolmosti** — skalární součin musí být nula:

$$\mathbf{a} \cdot (\mathbf{a}\times\mathbf{b}) = 1\cdot(-3) + 2\cdot6 + 3\cdot(-3) = -3+12-9 = 0 \checkmark$$

---

## Příklad 2 — bázové vektory

$$\mathbf{i} \times \mathbf{j} = \begin{vmatrix}\mathbf{i}&\mathbf{j}&\mathbf{k}\1&0&0\0&1&0\end{vmatrix} = (0\cdot0-0\cdot1,\ 0\cdot0-1\cdot0,\ 1\cdot1-0\cdot0) = \mathbf{k}$$

Tedy: $$\mathbf{i}\times\mathbf{j} = \mathbf{k}, \quad \mathbf{j}\times\mathbf{k} = \mathbf{i}, \quad \mathbf{k}\times\mathbf{i} = \mathbf{j}$$

---

## Geometrický význam

$$|\mathbf{a} \times \mathbf{b}| = |\mathbf{a}||\mathbf{b}|\sin\alpha$$

kde $\alpha$ je úhel mezi vektory.

- Pokud $\mathbf{a} \times \mathbf{b} = \mathbf{0}$, vektory jsou **rovnoběžné**
- Směr výsledného vektoru určuje **pravidlo pravé ruky**: prsty ve směru $\mathbf{a}$, zkroutíš ke $\mathbf{b}$, palec ukáže směr $\mathbf{a}\times\mathbf{b}$

---

## Plocha trojúhelníku a rovnoběžníku

$$S_{\text{rovnoběžník}} = |\mathbf{a} \times \mathbf{b}|$$

$$S_{\text{trojúhelník}} = \frac{1}{2}|\mathbf{a} \times \mathbf{b}|$$

---

## Důležité vlastnosti

|Vlastnost|Vzorec|
|---|---|
|Antikomutativita|$\mathbf{a}\times\mathbf{b} = -\mathbf{b}\times\mathbf{a}$|
|Distributivita|$\mathbf{a}\times(\mathbf{b}+\mathbf{c}) = \mathbf{a}\times\mathbf{b} + \mathbf{a}\times\mathbf{c}$|
|Součin s sebou|$\mathbf{a}\times\mathbf{a} = \mathbf{0}$|
|Kolmost|$\mathbf{a}\cdot(\mathbf{a}\times\mathbf{b}) = 0$|

---

---

# Část 2: Operátor Nabla $\nabla$

## Co to je

$\nabla$ (čti "nabla") není číslo ani vektor — je to **operátor**. Sám o sobě nic neznamená, ale říká "udělej parciální derivace":

$$\nabla = \left(\frac{\partial}{\partial x},\ \frac{\partial}{\partial y},\ \frac{\partial}{\partial z}\right)$$

Aplikuje se třemi způsoby a pokaždé dá něco jiného:

---

## Způsob 1: Gradient $\nabla f$

Aplikace na **skalární funkci** $f(x,y,z)$ — výsledek je **vektor**:

$$\nabla f = \left(\frac{\partial f}{\partial x},\ \frac{\partial f}{\partial y},\ \frac{\partial f}{\partial z}\right)$$

**Intuice:** Gradient ukazuje směr nejrychlejšího růstu funkce. Jako šipka ukazující do kopce na mapě vrstevnic.

**Příklad:** $f(x,y,z) = x^2 + y^2 + z^2$

$$\nabla f = (2x,\ 2y,\ 2z)$$

V bodě $(1,1,1)$: $\nabla f = (2, 2, 2)$ — šipka mířící "ven" od počátku. ✅

---

## Způsob 2: Divergence $\nabla \cdot \mathbf{F}$

Skalární součin $\nabla$ s **vektorovým polem** $\mathbf{F} = (P, Q, R)$ — výsledek je **číslo (skalár)**:

$$\nabla \cdot \mathbf{F} = \frac{\partial P}{\partial x} + \frac{\partial Q}{\partial y} + \frac{\partial R}{\partial z}$$

**Intuice:** Divergence měří, zda z bodu pole "vytéká" (kladná) nebo "vtéká" (záporná). Představ si proud vody — divergence říká, jestli je v daném místě zdroj nebo propad.

**Příklad:** $\mathbf{F} = (x^2, y^2, z^2)$

$$\nabla \cdot \mathbf{F} = 2x + 2y + 2z$$

---

## Způsob 3: Rotace $\nabla \times \mathbf{F}$

Vektorový součin $\nabla$ s **vektorovým polem** $\mathbf{F} = (P, Q, R)$ — výsledek je **vektor**:

$$\nabla \times \mathbf{F} = \begin{vmatrix}\mathbf{i}&\mathbf{j}&\mathbf{k}\\frac{\partial}{\partial x}&\frac{\partial}{\partial y}&\frac{\partial}{\partial z}\P&Q&R\end{vmatrix}$$

$$= \left(\frac{\partial R}{\partial y}-\frac{\partial Q}{\partial z},\quad \frac{\partial P}{\partial z}-\frac{\partial R}{\partial x},\quad \frac{\partial Q}{\partial x}-\frac{\partial P}{\partial y}\right)$$

**Intuice:** Rotace měří, zda pole "rotuje" kolem bodu. Představ si vír ve vodě — rotace říká, jak moc a v jakém směru se voda točí.

**Příklad:** $\mathbf{F} = (-y, x, 0)$ — toto pole rotuje kolem osy $z$

$$\nabla \times \mathbf{F} = \left(\frac{\partial 0}{\partial y}-\frac{\partial x}{\partial z},\quad \frac{\partial(-y)}{\partial z}-\frac{\partial 0}{\partial x},\quad \frac{\partial x}{\partial x}-\frac{\partial(-y)}{\partial y}\right)$$

$$= (0-0,\ 0-0,\ 1-(-1)) = (0, 0, 2)$$

Výsledek ukazuje ve směru osy $z$ — pole skutečně rotuje kolem $z$. ✅

---

## Přehledná tabulka

|Operace|Zápis|Vstup|Výstup|Intuice|
|---|---|---|---|---|
|Gradient|$\nabla f$|skalár|vektor|směr největšího růstu|
|Divergence|$\nabla \cdot \mathbf{F}$|vektor|skalár|zdroj / propad|
|Rotace|$\nabla \times \mathbf{F}$|vektor|vektor|vír / otáčení|

---

## Laplaceův operátor $\nabla^2$

Speciální případ — divergence gradientu:

$$\nabla^2 f = \nabla \cdot (\nabla f) = \frac{\partial^2 f}{\partial x^2} + \frac{\partial^2 f}{\partial y^2} + \frac{\partial^2 f}{\partial z^2}$$

Používá se ve fyzice — popisuje šíření tepla, vln, elektromagnetické pole.

---

---

# Část 3: Jak to všechno sedí dohromady

```
Skalární funkce f
        │
        │  gradient ∇f
        ▼
Vektorové pole F = (P, Q, R)
        │                    │
        │  divergence ∇·F    │  rotace ∇×F
        ▼                    ▼
    skalár               vektor
  (zdroj/propad)        (vír/otáčení)
```

A pak nastupují věty, které propojují integrály:

|Věta|Co propojuje|Dimenze|
|---|---|---|
|Greenova|$\oint$ křivka $\leftrightarrow$ $\iint$ plocha|2D|
|Stokesova|$\oint$ křivka $\leftrightarrow$ $\iint$ rotace přes plochu|3D|
|Gaussova|$\oiint$ plocha $\leftrightarrow$ $\iiint$ divergence přes objem|3D|

Všechny jsou instancí jednoho principu:

$$\boxed{\text{integrál přes hranici} = \text{integrál derivace přes vnitřek}}$$

---

## Časté chyby

- ❌ Zaměnit $\mathbf{a}\times\mathbf{b}$ a $\mathbf{b}\times\mathbf{a}$ — mají opačné znaménko!
- ❌ Myslet si, že $\nabla$ je vektor — je to operátor, sám o sobě nic neznamená
- ❌ Zaměnit divergenci (výsledek skalár) a rotaci (výsledek vektor)
- ❌ Zapomenout na znaménko $-$ u prostředního členu při rozvoji determinantu
- ❌ Počítat $\nabla \times f$ místo $\nabla \times \mathbf{F}$ — rotace se počítá jen z vektorového pole