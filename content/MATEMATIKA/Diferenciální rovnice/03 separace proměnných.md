---
slug: 03-separace-proměnných
permalink: 03-separace-proměnných
---
---

#diferencialni, #separace, #nelinearni
> Přechod od **lineárních** k **nelineárním** diferenciálním rovnicím.

## Obecný tvar

$$N(y) \cdot y' = M(x)$$

$$N(y)\frac{dy}{dx} = M(x)$$

Oddělíme proměnné na obě strany a integrujeme:

$$\boxed{\int N(y), dy = \int M(x), dx}$$

> Zdánlivě jednoduché – ale integrály mohou být velmi obtížné!

## Příklad

$$y' = 2xy \Rightarrow \frac{dy}{y} = 2x, dx$$

$$\int \frac{1}{y}, dy = \int 2x, dx$$

$$\ln|y| = x^2 + C \Rightarrow \boxed{y = Ae^{x^2}}$$

kde $A = e^C$ je konstanta.

## Postup (kuchařka)

1. Přepsat $y'$ jako $\dfrac{dy}{dx}$
2. Přesunout $N(y)$ na stranu s $dy$, $M(x)$ na stranu s $dx$
3. Integrovat obě strany
4. Vyjádřit $y$ (pokud je to možné)

## Poznámka

Metoda funguje pouze tehdy, když lze proměnné **úplně oddělit** – tj. pravou stranu zapsat jako součin funkce jen $x$ a funkce jen $y$.

## Zdroje

- 🎥 [3B1B: Separation of Variables](https://www.youtube.com/watch?v=p_di4Zn4wz4)
- 📖 [Paul's Notes – Separable Equations](https://tutorial.math.lamar.edu/Classes/DE/Separable.aspx)