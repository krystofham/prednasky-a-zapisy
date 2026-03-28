---
---
---

#diferencialni, #integracni-faktor, #linearni



> 📖 Zdroj: J. Bouchala, Paul Dawkins

## Problém

Máme rovnici: $$y' + 2y = 4$$

Nelze jen zintegrovat obě strany – překáží člen $2y$.

## Klíčová myšlenka – product rule

Platí pravidlo součinu: $$(y \cdot n)' = y' \cdot n + y \cdot n'$$

Pokud bychom levou stranu dokázali zapsat jako derivaci součinu, mohli bychom rovnici integrovat přímo.

## Odvození integračního faktoru

**Obecná lineární DR 1. řádu:** $$\frac{dy}{dt} + p(t) \cdot y = g(t)$$

Zavedeme integrační faktor $\mu(t)$ a celou rovnici jím vynásobíme:

$$\mu(t)\frac{dy}{dt} + \mu(t) \cdot p(t) \cdot y = \mu(t) \cdot g(t)$$

Chceme, aby levá strana byla derivací součinu. To nastane, když:

$$\mu(t) \cdot p(t) = \mu'(t)$$

Pak: $$\mu(t)\frac{dy}{dt} + \mu'(t) \cdot y = \bigl(\mu(t) \cdot y(t)\bigr)'$$

### Jak najít $\mu(t)$?

$$p(t) = \frac{\mu'(t)}{\mu(t)} = \bigl(\ln\mu(t)\bigr)'$$

$$\int p(t), dt = \ln\mu(t) \quad \Rightarrow \quad \boxed{\mu(t) = e^{\int p(t), dt}}$$

## Obecné řešení

$$\bigl(\mu(t) \cdot y(t)\bigr)' = \mu(t) \cdot g(t)$$

$$\mu(t) \cdot y(t) = \int \mu(t) \cdot g(t), dt + C$$

$$\boxed{y(t) = \frac{\int \mu(t) \cdot g(t), dt + C}{\mu(t)}}$$

kde $\mu(t) = e^{\int p(t), dt}$.

## Konkrétní příklad

Rovnice: $y' + 2y = 4$, tedy $p(x) = 2$, $q(x) = 4$.

**Krok 1:** Integrační faktor $$\mu(x) = e^{\int 2, dx} = e^{2x}$$

**Krok 2:** Vynásobit rovnici $$e^{2x} y' + 2e^{2x} y = 4e^{2x}$$

$$\bigl(y \cdot e^{2x}\bigr)' = 4e^{2x}$$

**Krok 3:** Integrovat obě strany $$y \cdot e^{2x} = \int 4e^{2x}, dx = 2e^{2x} + C$$

**Výsledek:** $$\boxed{y = 2 + C \cdot e^{-2x}}$$

## Obecný vzorec (shrnutí)

$$\bigl(y \cdot e^{\int p(x), dx}\bigr)' = q(x) \cdot e^{\int p(x), dx}$$

$$y = \frac{\int q(x) \cdot e^{\int p(x), dx}, dx}{e^{\int p(x), dx}}$$

## Zdroje

- 🎥 [3B1B: Integrating factor visualized](https://www.youtube.com/playlist?list=PLZHQObOWTQDNPOjrT6KVlfJuKtYTftqH6)
- 📖 [Paul's Notes – Linear Equations](https://tutorial.math.lamar.edu/Classes/DE/Linear.aspx)