---
slug: 08-picardova-věta-o-existenci
permalink: 08-picardova-věta-o-existenci
---
---

#diferencialni, #picardova-veta, #existence

> **Stav:** Aktuálně rozpracováno (11.2.2026). Toto je místo, kde kurz pokračuje.

---

## Intuice

Picardova věta říká, za jakých podmínek **existuje a je jednoznačné** řešení počáteční úlohy (Cauchyho úlohy):

$$y' = f(x, y), \quad y(x_0) = y_0$$

Neřeší _jak_ rovnici vyřešit, ale _zda_ řešení vůbec existuje.

---

## Věta (neformálně)

Pokud je $f(x, y)$ spojitá a má spojnou parciální derivaci $\frac{\partial f}{\partial y}$ v okolí bodu $(x_0, y_0)$, pak existuje $\varepsilon > 0$ takové, že na intervalu $(x_0 - \varepsilon,, x_0 + \varepsilon)$ existuje **právě jedno** řešení počáteční úlohy.

---

## Picardovy iterace

Konstruktivní důkaz věty – posloupnost aproximací $y_n(x)$:

$$y_0(x) = y_0$$

$$y_{n+1}(x) = y_0 + \int_{x_0}^{x} f\bigl(t,, y_n(t)\bigr), dt$$

Tato posloupnost konverguje k řešení.

---

## Zdroje

- 📖 [Paul's Notes – Existence & Uniqueness](https://tutorial.math.lamar.edu/Classes/DE/IoV.aspx)
- 📖 [Wikipedia – Picard–Lindelöf theorem](https://en.wikipedia.org/wiki/Picard%E2%80%93Lindel%C3%B6f_theorem)
- 🎥 [3B1B playlist (obecný kontext)](https://www.youtube.com/playlist?list=PLZHQObOWTQDNPOjrT6KVlfJuKtYTftqH6)

---

> Více lze doplnit v [Paul's Notes – IoV](https://tutorial.math.lamar.edu/Classes/DE/IoV.aspx), ale není nutné pro základní kurz.