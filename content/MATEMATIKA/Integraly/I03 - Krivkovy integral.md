---
slug: I03---Krivkovy-integral
permalink: I03---Křivkový-integrál
---

#integraly 
#krivkovy 
# 3. Křivkový integrál

## Intuice

Normální integrál sčítá hodnoty podél **přímky** (osy $x$). Křivkový integrál sčítá hodnoty podél **libovolné křivky** v rovině nebo prostoru.

Představ si: jdeš po horské stezce a chceš znát celkovou námahu (výšku × vzdálenost). Stezka není přímka — je to křivka. Křivkový integrál to umí.

## Dva typy

### Typ 1 – integrál skalární funkce (podle délky oblouku)

$$\int_C f(x,y),ds$$

Výsledek: číslo. Typicky délka, hmotnost drátu s proměnnou hustotou.

Parametrizace: křivku $C$ popíšeme jako $\mathbf{r}(t) = (x(t), y(t))$, pak:

$$\int_C f,ds = \int_a^b f(x(t),y(t))\cdot\underbrace{\sqrt{x'(t)^2 + y'(t)^2}}_{|\mathbf{r}'(t)|},dt$$

### Typ 2 – integrál vektorového pole (práce)

$$\int_C \mathbf{F}\cdot d\mathbf{r} = \int_C P,dx + Q,dy$$

Výsledek: práce, kterou vykoná síla $\mathbf{F}$ podél dráhy $C$.

$$= \int_a^b \mathbf{F}(\mathbf{r}(t))\cdot\mathbf{r}'(t),dt$$

## Zdroje

- 🎥 [3B1B – Line integrals](https://www.youtube.com/watch?v=W3hkpDpGBdE) _(kontext vektorových polí)_
- 📖 [Paul's Notes – Line Integrals](https://tutorial.math.lamar.edu/Classes/CalcIII/LineIntegrals.aspx)
- 🎥 [Khan Academy – Line integrals](https://www.khanacademy.org/math/multivariable-calculus/integrating-multivariable-functions/line-integrals/v/introduction-to-the-line-integral)