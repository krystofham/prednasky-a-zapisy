#integraly 
#plošný 
# 4. Plošný integrál

## Intuice

Stejný skok jako křivkový — ale místo křivky integrujeme přes **plochu** v prostoru.

```
křivkový:  ∫ podél křivky C       (1D v prostoru)
plošný:    ∬ přes plochu S        (2D v prostoru)
```

Typické použití: tok tekutiny přes membránu, hmotnost plochy s proměnnou hustotou.

## Dva typy

### Typ 1 – integrál skalární funkce (podle plochy)

$$\iint_S f(x,y,z),dS$$

Plochu $S$ parametrizujeme jako $\mathbf{r}(u,v)$, pak:

$$\iint_S f,dS = \iint_D f(\mathbf{r}(u,v))\cdot\underbrace{|\mathbf{r}_u \times \mathbf{r}_v|}_{\text{Jakobián}},du,dv$$

### Typ 2 – tok vektorového pole (flux)

$$\iint_S \mathbf{F}\cdot d\mathbf{S} = \iint_S \mathbf{F}\cdot\mathbf{n},dS$$

kde $\mathbf{n}$ je jednotková normála plochy. Výsledek = kolik "tekutiny" proteče plochou $S$.

## Zdroje

- 🎥 [3B1B – Flux integrals](https://www.youtube.com/watch?v=rB83DpBJQsE)
- 📖 [Paul's Notes – Surface Integrals](https://tutorial.math.lamar.edu/Classes/CalcIII/SurfaceIntegrals.aspx)
- 🎥 [Khan Academy – Surface integrals](https://www.khanacademy.org/math/multivariable-calculus/integrating-multivariable-functions/surface-integrals/v/introduction-to-the-surface-integral)