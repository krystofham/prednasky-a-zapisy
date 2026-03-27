---
slug: 01-diferenciální-rovnice-–-úvod
permalink: 01-diferenciální-rovnice-–-úvod
---
---

#diferencialni #prvni-rad


> 📖 Přednáška: J. Bouchala, ŠKOMAM 2025

## Co je diferenciální rovnice?

Diferenciální rovnice je rovnice, kde **hledaná funkce se vyskytuje i se svými derivacemi**.

Klasický příklad: známe derivaci funkce, ale neznáme funkci samotnou.

$$f^2(x) = 2 \quad \Rightarrow \quad f: \pm x^0 \vee |x|$$

## Obecný tvar (1. řád)

Pro funkci $f(x, y) = x^2 - y^2$ platí:

$$y' = f(x, y)$$

**Primitivní funkce** (neurčitý integrál):

$$y' = f(x) \Rightarrow y = \int f(x), dx + C$$

## Příklady

### Přímá integrace

$$y' = 2x \Rightarrow y = x^2 + C$$

### Separace proměnných (náhled)

$$y' = 2xy \Rightarrow \frac{dy}{dx} = 2xy \Rightarrow \frac{dy}{y} = 2x, dx$$

$$\Rightarrow \int \frac{dy}{y} = \int 2x, dx \Rightarrow \ln|y| = x^2 + C$$

> ➡️ Pokračování: [[03 - Separace proměnných]]

## Lineární diferenciální rovnice 1. řádu

Obecný tvar:

$$y' + p(x) \cdot y = q(x)$$

> Nelze jen tak integrovat obě strany – překáží člen $p(x) \cdot y$. Řešení: **integrační faktor** → [[02 - Integrační faktor]]

## Zdroje

- 🎥 [3B1B: Differential Equations, studying the unsolvable](https://www.youtube.com/watch?v=p_di4Zn4wz4) _(úvod do DRs)_
- 📖 [Paul's Notes – Basic Concepts](https://tutorial.math.lamar.edu/Classes/DE/Definitions.aspx)