---
slug: IO1.1-Polarni-souradnice
---

# Polární souřadnice pro dvojné integrály

## Základní myšlenka

Místo polohy bodu pomocí $(x, y)$ popisujeme bod dvěma veličinami:

- $r$ — vzdálenost od počátku
- $\theta$ — úhel od osy $x$, $\theta \in [0, 2\pi]$

---
permalink: IO1.1-Polární-souřadnice

## Převodní vzorce

$$x = r\cos\theta$$ $$y = r\sin\theta$$

A zpětně:

$$r = \sqrt{x^2 + y^2}$$ $$\theta = \arctan\frac{y}{x}$$

---

## Jakobián — nejdůležitější věc!

Při přechodu do polárních souřadnic se element plochy $\mathrm{d}A$ změní:

$$\mathrm{d}A = \mathrm{d}x, \mathrm{d}y = r\ \mathrm{d}r, \mathrm{d}\theta$$

Dvojný integrál pak vypadá takto:

$$\iint_D f(x,y)\ \mathrm{d}A = \int_0^{2\pi}\int_0^{R} f(r\cos\theta,, r\sin\theta)\cdot r \ \mathrm{d}r, \mathrm{d}\theta$$

---

## Kdy použít polární souřadnice?

Polární souřadnice se vyplatí vždy, když se v úloze vyskytuje:

- kruh: $x^2 + y^2 \leq R^2$
- mezikruží: $r_1^2 \leq x^2 + y^2 \leq r_2^2$
- výraz $x^2 + y^2$ v integrované funkci
- část kruhu (čtvrtina, polokoule...)

---

## Srovnání obou systémů

|Systém|Souřadnice|Jakobián|Kdy použít|
|---|---|---|---|
|Kartézský|$x, y$|$1$|obdélníky, trojúhelníky, obecné oblasti|
|Polární|$r, \theta$|$r$|kruhy, mezikruží, výraz $x^2+y^2$|

---

## Příklad 1: Obsah kruhu

Kruh $x^2 + y^2 \leq R^2$:

$$S = \int_0^{2\pi}\int_0^{R} r \ \mathrm{d}r, \mathrm{d}\theta$$

**Integrál podle $r$:**

$$\int_0^R r\ \mathrm{d}r = \frac{R^2}{2}$$

**Integrál podle $\theta$:**

$$\int_0^{2\pi} \mathrm{d}\theta = 2\pi$$

**Celkem:**

$$S = \frac{R^2}{2} \cdot 2\pi = \boxed{\pi R^2} \checkmark$$

---

## Příklad 2: Integrál s $x^2 + y^2$

$$\iint_D (x^2 + y^2)\ \mathrm{d}A, \quad D: x^2 + y^2 \leq 4$$

V polárních souřadnicích: $x^2 + y^2 = r^2$

$$= \int_0^{2\pi}\int_0^{2} r^2 \cdot r \ \mathrm{d}r, \mathrm{d}\theta = \int_0^{2\pi}\int_0^{2} r^3 \ \mathrm{d}r, \mathrm{d}\theta$$

**Integrál podle $r$:**

$$\int_0^2 r^3\ \mathrm{d}r = \left[\frac{r^4}{4}\right]_0^2 = 4$$

**Integrál podle $\theta$:**

$$\int_0^{2\pi} \mathrm{d}\theta = 2\pi$$

**Celkem:**

$$= \boxed{8\pi}$$

---

## Typické meze pro různé oblasti

|Oblast|Meze $r$|Meze $\theta$|
|---|---|---|
|Celý kruh poloměru $R$|$0$ až $R$|$0$ až $2\pi$|
|Horní polokoule|$0$ až $R$|$0$ až $\pi$|
|První kvadrant kruhu|$0$ až $R$|$0$ až $\frac{\pi}{2}$|
|Mezikruží|$r_1$ až $r_2$|$0$ až $2\pi$|

---

## Časté chyby

- ❌ Zapomenout na jakobián $r$ — nejčastější chyba!
- ❌ Špatné meze pro $\theta$ (např. $0$ až $2\pi$ místo $0$ až $\pi$ pro polokouli)
- ❌ Použít polární souřadnice na trojúhelník nebo obdélník
- ❌ Nezaměnit $x^2 + y^2$ za $r^2$ v integrované funkci