---
slug: 07-populační-modely
permalink: 07-populační-modely
---
---

#diferencialni, #populacni-modely, #aplikace


> 🎥 Zdroje:
> - [Population growth – YouTube](https://www.youtube.com/results?search_query=The+population+growth+mathematics)
> - [Video 1](https://www.youtube.com/watch?v=7xsn79tpCsk)
> - [Video 2](https://www.youtube.com/watch?v=3D9VguaeaaI)
> - [Video 3](https://www.youtube.com/watch?v=QZe5Of6VjoQ)

---

## Základní (exponenciální) model

$$\boxed{y(n) = e^{\frac{1}{2}(n-1)}}$$

Popis: populace roste exponenciálně, bez omezení.

---

## Logistický model (pokročilý)

Realistický model zahrnuje **omezení prostředí** (kapacita prostředí $K = a/b$):

$$\boxed{y'(x) = a \cdot y\left(1 - \frac{b}{a} y\right)}$$

Přepis do standardního tvaru:

$$y' = ay - by^2$$

- Pro malá $y$: roste exponenciálně (člen $ay$ dominuje)
- Pro velká $y$: růst se zpomaluje a zastavuje (člen $-by^2$ dominuje)
- Rovnovážný stav: $y^* = a/b$

> Toto je **Bernoulliho DR** → viz [[04 - Pokročilé diferenciální rovnice]]

---

## Geometrická intuice

```
y
│        ___________  ← rovnovážný stav y* = a/b
│      /
│    /
│  /
│/
└──────────────── x (čas)
```

Logistická křivka (S-křivka / sigmoida).

---

## Zdroje

- 🎥 [3B1B – Logistic growth](https://www.youtube.com/watch?v=IKmNKi-edhA)
- 📖 [Paul's Notes – Population Models](https://tutorial.math.lamar.edu/Classes/DE/Modeling.aspx)
- 🎥 [Veritasium – The logistic map](https://www.youtube.com/watch?v=ovJcsL7vyrk)