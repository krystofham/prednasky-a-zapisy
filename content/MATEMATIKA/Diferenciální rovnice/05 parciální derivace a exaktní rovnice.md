---
tags:
  - diferencialni
  - parcialni-derivace
  - exaktni
---
## Co je parciální derivace?

Parciální derivace funkce dvou proměnných $f(x, y)$ je derivace **jen podle jedné proměnné** – druhou považujeme za konstantu.

$$\frac{\partial f}{\partial x} \quad \text{(derivace podle } x \text{, } y \text{ = konstanta)}$$

$$\frac{\partial f}{\partial y} \quad \text{(derivace podle } y \text{, } x \text{ = konstanta)}$$

---

## Geometrická intuice (kopec) 🏔️

> _Toto vysvětlení zpracovalo Gemini – skvělá ilustrace principu._

Představ si $\Psi(x,y)$ jako **nadmořskou výšku na mapě**. Pro každý bod $[x, y]$ ti funkce řekne, jak vysoko jsi.

- $\frac{\partial \Psi}{\partial x}$ = M = strmost kopce směrem na **východ**
- $\frac{\partial \Psi}{\partial y}$ = N = strmost kopce směrem na **sever**

### Co říká rovnice $M,dx + N,dy = 0$?

Pohybuješ se po kopci, ale **nesmíš měnit výšku**. Každý krok doprava změní výšku o $M \cdot dx$, každý krok dopředu o $N \cdot dy$. Podmínka $M,dx + N,dy = 0$ tedy znamená: _zůstaň na stejné výšce._

### Proč je řešením $\Psi(x,y) = C$?

Pokud se pohybuješ po kopci, ale nesmíš měnit výšku → chodíš po **vrstevnici**.

Vrstevnice je křivka, kde je výška stálá = konstanta $C$.

**Příklad:** Kopec ve tvaru misky: $\Psi(x,y) = x^2 + y^2$

- $M = 2x$, $N = 2y$
- DR: $2x,dx + 2y,dy = 0$
- Řešení: $x^2 + y^2 = C$ → **kružnice** (vrstevnice misky ✅)

---

## Řešení exaktní rovnice – příklad

Mějme: $$(2xy - 9x^2) + (2y + x^2 + 1)\frac{dy}{dx} = 0$$

Identifikujeme: $$M = 2xy - 9x^2 \qquad N = 2y + x^2 + 1$$

### Krok 1 – Ověření exaktnosti

$$\frac{\partial M}{\partial y} = 2x \qquad \frac{\partial N}{\partial x} = 2x \quad ✅ \text{ rovnice je exaktní}$$

### Krok 2 – Integrace $M$ podle $x$

$$\Psi(x,y) = \int (2xy - 9x^2),dx = x^2y - 3x^3 + g(y)$$

> ⚠️ Místo $+C$ píšeme $+g(y)$, protože integrujeme podle $x$ – $y$ mohlo přispět konstantou.

### Krok 3 – Derivace $\Psi$ podle $y$

$$\frac{\partial \Psi}{\partial y} = x^2 + g'(y)$$

### Krok 4 – Porovnání s $N$

$$x^2 + g'(y) = 2y + x^2 + 1$$

$$g'(y) = 2y + 1 \Rightarrow g(y) = y^2 + y$$

### Výsledek

$$\boxed{C = x^2y - 3x^3 + y^2 + y}$$

---

## Kuchařka (algoritmus)

|Krok|Akce|
|---|---|
|1|Derivuj $M$ podle $y$|
|2|Derivuj $N$ podle $x$|
|3|Pokud se rovnají → rovnice je exaktní|
|4|Integruj $M$ (nebo $N$) podle $x$ (resp. $y$), $+C \to +g(y)$|
|5|Výsledný integrál zderivuj podle $y$|
|6|Polož rovno $N$ → urči $g'(y)$ → integruj → $g(y)$|
|7|Dosaď zpět → $\Psi(x,y) = C$|

---

## Zdroje

- 📖 [Paul's Notes – Exact Equations](https://tutorial.math.lamar.edu/Classes/DE/Exact.aspx)
- 🎥 [3B1B – Divergence and Curl (kontext parciálních derivací)](https://www.youtube.com/watch?v=rB83DpBJQsE)
- 🎥 [Khan Academy – Partial derivatives intro](https://www.youtube.com/watch?v=AXqhWeUEtQU)