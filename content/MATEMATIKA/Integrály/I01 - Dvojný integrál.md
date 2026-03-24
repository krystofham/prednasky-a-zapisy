#integraly, #dvojny
# 1. Dvojný integrál

## Intuice

Normální integrál $\int f(x),dx$ počítá **plochu pod křivkou** (1D funkce).

Dvojný integrál $\iint f(x,y),dA$ počítá **objem pod plochou** (2D funkce).

```
normální:   ∫  →  plocha pod grafem f(x)
dvojný:    ∬  →  objem pod grafem f(x,y)
```

## Zápis

$$\iint_D f(x,y),dA = \int_a^b \int_c^d f(x,y),dy,dx$$

Integruje se **zevnitř ven** — nejdřív podle $y$, pak podle $x$.

## Příklad

$$\int_0^1 \int_0^2 (x + y),dy,dx$$

**Krok 1** – vnitřní integrál (podle $y$, $x$ = konstanta):

$$\int_0^2 (x+y),dy = \left[xy + \frac{y^2}{2}\right]_0^2 = 2x + 2$$

**Krok 2** – vnější integrál (podle $x$):

$$\int_0^1 (2x+2),dx = \left[x^2 + 2x\right]_0^1 = 3$$

## Záměna pořadí integrace

Někdy je jednodušší integrovat nejdřív podle $x$:

$$\int_a^b \int_c^d f,dy,dx = \int_c^d \int_a^b f,dx,dy$$

> ⚠️ Záměna pořadí může změnit meze! Pozor u složitějších oblastí $D$.

## Polární souřadnice
[[IO1.1 Polární souřadnice]]
Pokud oblast $D$ je kruh nebo část kruhu, vyplatí se přejít na polární souřadnice:

$$x = r\cos\theta, \quad y = r\sin\theta$$

$$\iint_D f(x,y),dA = \int_{\theta_1}^{\theta_2}\int_{r_1}^{r_2} f(r\cos\theta,, r\sin\theta)\cdot r,dr,d\theta$$

> ⚠️ Nesmíš zapomenout na **Jakobián** $r$ — viz [[I02 - Trojný integrál]].

# Slovní úloha: Zahradní jezírko

## Zadání

Zahradní jezírko má tvar oblasti $D$ ohraničené křivkami $y = x^2$ a $y = 4$.  
Hloubka jezírka v bodě $(x, y)$ je dána funkcí $h(x, y) = \sqrt{y}$ [metry].

**Určete:**

1. Objem vody $V$ v jezírku
2. Obsah plochy $S$ oblasti $D$
3. Průměrnou hloubku jezírka $\bar{h} = \dfrac{V}{S}$

---

## Krok 1: Určení mezí integrace

Oblast $D$ je ohraničena $y = x^2$ (parabola) a $y = 4$ (vodorovná přímka).

Průsečíky: $$x^2 = 4 \implies x = \pm 2$$

Meze integrace:

- $x \in [-2, 2]$
- pro každé $x$: $y \in [x^2, 4]$

---

## Krok 2: Výpočet objemu $V$

$$V = \iint_D \sqrt{y} , \mathrm{d}A = \int_{-2}^{2} \int_{x^2}^{4} \sqrt{y} , \mathrm{d}y , \mathrm{d}x$$

**Vnitřní integrál** (podle $y$):

$$\int_{x^2}^{4} \sqrt{y} , \mathrm{d}y = \left[ \frac{2}{3} y^{3/2} \right]_{x^2}^{4} = \frac{2}{3}\left(4^{3/2} - (x^2)^{3/2}\right) = \frac{2}{3}(8 - x^3)$$

**Vnější integrál** (podle $x$):

$$V = \int_{-2}^{2} \frac{2}{3}(8 - x^3) , \mathrm{d}x = \frac{2}{3} \left[ 8x - \frac{x^4}{4} \right]_{-2}^{2}$$

$$= \frac{2}{3} \left[ \left(16 - 4\right) - \left(-16 - 4\right) \right] = \frac{2}{3} \cdot 24 = \boxed{\frac{16}{3} \ \text{m}^3}$$

---

## Krok 3: Výpočet obsahu plochy $S$

$$S = \iint_D \mathrm{d}A = \int_{-2}^{2} (4 - x^2) , \mathrm{d}x = 2\int_{0}^{2} (4 - x^2) , \mathrm{d}x$$

$$= 2 \left[ 4x - \frac{x^3}{3} \right]_0^2 = 2\left(8 - \frac{8}{3}\right) = 2 \cdot \frac{16}{3} = \boxed{\frac{32}{3} \ \text{m}^2}$$

---

## Krok 4: Průměrná hloubka $\bar{h}$

$$\bar{h} = \frac{V}{S} = \frac{\dfrac{16}{3}}{\dfrac{32}{3}} = \frac{16}{32} = \boxed{\frac{1}{2} \ \text{m}}$$

---

## Výsledky

|Veličina|Hodnota|
|---|---|
|Objem $V$|$\dfrac{16}{3} \approx 5{,}33 \ \text{m}^3$|
|Plocha $S$|$\dfrac{32}{3} \approx 10{,}67 \ \text{m}^2$|
|Průměrná hloubka $\bar{h}$|$\dfrac{1}{2} = 0{,}5 \ \text{m}$|

## Zdroje

- 🎥 [3B1B – Double integrals](https://www.youtube.com/watch?v=85zGYB-34jQ)
- 📖 [Paul's Notes – Double Integrals](https://tutorial.math.lamar.edu/Classes/CalcIII/DoubleIntegrals.aspx)
- 🎥 [Khan Academy – Double integrals](https://www.khanacademy.org/math/multivariable-calculus/integrating-multivariable-functions)