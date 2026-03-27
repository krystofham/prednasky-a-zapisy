---
permalink: I05---Integrál-s-kroužkem-(Greenova-věta)
---

#integraly , #greenova-veta , #stokesova-veta
# Nutnost

# 5. Integrál s kroužkem – Greenova a Stokesova věta

## Co je ten kroužek?

$$\oint_C \mathbf{F}\cdot d\mathbf{r}$$

Kroužek na integrálu značí, že křivka $C$ je **uzavřená** — začíná a končí ve stejném bodě (smyčka).

## Greenova věta (2D)

Propojuje **křivkový integrál po uzavřené křivce** s **dvojným integrálem přes oblast** uvnitř.

$$\oint_C P,dx + Q,dy = \iint_D \left(\frac{\partial Q}{\partial x} - \frac{\partial P}{\partial y}\right)dA$$

**Intuice:** místo počítání podél hranice (křivka) můžeš počítat přes celý vnitřek (plocha) — a naopak. Jsou to dvě tváře téhož čísla.

> Tady se znovu objevují parciální derivace — viz [[05 parciální derivace a exaktní rovnice]] v kurzu difek.

### Speciální případ – plocha oblasti

$$\text{Plocha}(D) = \oint_C x,dy = -\oint_C y,dx = \frac{1}{2}\oint_C x,dy - y,dx$$

## Stokesova věta (3D)

Zobecnění Greenovy věty do prostoru:

$$\oint_C \mathbf{F}\cdot d\mathbf{r} = \iint_S (\nabla \times \mathbf{F})\cdot d\mathbf{S}$$

Křivkový integrál po hranici plochy $S$ = plošný integrál rotace $\mathbf{F}$ přes $S$.

## Gaussova věta (divergence theorem)

Zobecnění do objemu:

$$\oint_S \mathbf{F}\cdot d\mathbf{S} = \iiint_E (\nabla\cdot\mathbf{F}),dV$$

Dvojitý kroužek $\oint$ = uzavřená plocha (povrch tělesa). Tok přes povrch = divergence uvnitř.

## Jak to všechno sedí dohromady

```
Greenova věta:   ∮  křivka  ←→  ∬  plocha           (2D)
Stokesova věta:  ∮  křivka  ←→  ∬  plocha           (3D)
Gaussova věta:   ∯  plocha  ←→  ∭  objem            (3D)
```

Jsou to všechno instance jednoho hlubšího principu: **integrál přes hranici = integrál derivace přes vnitřek**.

## Zdroje

- 🎥 [3B1B – Green's theorem](https://www.youtube.com/watch?v=W3hkpDpGBdE) ⭐ _toto je nutnost_
- 🎥 [3B1B – Divergence and Curl](https://www.youtube.com/watch?v=rB83DpBJQsE) ⭐
- 🎥 [3B1B – Stokes theorem](https://www.youtube.com/watch?v=-Sub4lveqEI)
- 📖 [Paul's Notes – Green's Theorem](https://tutorial.math.lamar.edu/Classes/CalcIII/GreensTheorem.aspx)
- 📖 [Paul's Notes – Stokes' Theorem](https://tutorial.math.lamar.edu/Classes/CalcIII/StokesTheorem.aspx)