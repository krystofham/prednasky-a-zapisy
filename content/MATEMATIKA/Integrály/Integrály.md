---
permalink: Integrály
---

#integraly, #vicenasobne, #krivkovy, #plošný

# 📚 Vícerozměrné integrály

> Znáš základní integrál $\int f(x),dx$. Tady jdeme do více rozměrů.
![[Pasted image 20260325152751.png]]
## Obsah

|#|Téma|Stav|
|---|---|---|
|1|[[I01 - Dvojný integrál]]|✅|
|2|[[I02 - Trojný integrál]]|✅|
|3|[[I03 - Křivkový integrál]]|✅|
|4|[[I04 - Plošný integrál]]|✅|
|5|[[I05 - Integrál s kroužkem (Greenova věta)]]|✅|
# Shrnutí
| **Typ integrálu**             | **Geometrický / Fyzikální význam**                               | **Matematický zápis**                                                                                            | **Typické souřadnicové systémy**          | **Klíčové věty a vztahy**                               | **Příklad aplikace**                           |                   |
| ----------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ----------------------------------------- | ------------------------------------------------------- | ---------------------------------------------- | ----------------- |
| **Dvojný integrál**           | Objem pod plochou ($2D$ funkce), obsah plochy oblasti $D$        | $$\iint_D f(x,y) \,dA$$                                                                                          | Kartézský $(x, y)$, Polární $(r, \theta)$ | Fubiniho věta, Jakobián $r$                             | Objem vody v jezírku, obsah plochy             |                   |
| **Trojný integrál**           | Hmotnost tělesa s hustotou $\rho$, objem oblasti v prostoru      | $$\iiint_E f(x,y,z) \,dV$$                                                                                       | Kartézský, Cylindrický, Sférický          | Jakobián $r$ (cyl.) nebo $r^2 \sin\phi$ (sfér.)         | Výpočet objemu koule                           |                   |
| **Křivkový integrál 1. typu** | Délka křivky, hmotnost drátu s proměnnou hustotou                | $$\int_C f \,ds$$                                                                                                | Parametrizace $\mathbf{r}(t)$             | Integrace skalárního pole podél křivky                  | Hmotnost drátu, námaha při chůzi do kopce      |                   |
| **Křivkový integrál 2. typu** | Práce síly $\mathbf{F}$ podél dráhy $C$                          | $$\int_C \mathbf{F} \cdot d\mathbf{r}$$                                                                          | Parametrizace $\mathbf{r}(t)$             | Greenova věta (pro uzavřené křivky)                     | Práce silového pole podél smyčky               |                   |
| **Plošný integrál 1. typu**   | Hmotnost plochy s proměnnou hustotou                             | $$\iint_S f \,dS$$                                                                                               | Parametrizace $\mathbf{r}(u,v)$           | Jakobián $\\                                            | \mathbf{r}_u \times \mathbf{r}_v$              | Hmotnost membrány |
| **Plošný integrál 2. typu**   | Tok (flux) vektorového pole přes plochu                          | $$\iint_S \mathbf{F} \cdot d\mathbf{S}$$                                                                         | Normálový vektor $\mathbf{n}$             | Gaussova věta (pro uzavřené plochy)                     | Tok tekutiny přes membránu                     |                   |
| **Greenova věta**             | Vztah mezi cirkulací po hranici a integrálem přes vnitřek ($2D$) | $$\oint_C P\,dx + Q\,dy = \iint_D \left(\frac{\partial Q}{\partial x} - \frac{\partial P}{\partial y}\right)dA$$ | Kartézské souřadnice                      | Výpočet plochy: $S = \frac{1}{2} \oint (x\,dy - y\,dx)$ | Plocha oblasti $D$ pomocí integrálu po hranici |                   |
| **Stokesova věta**            | Zobecnění Greenovy věty do $3D$ (hranice vs. plocha)             | $$\oint_C \mathbf{F} \cdot d\mathbf{r} = \iint_S (\nabla \times \mathbf{F}) \cdot d\mathbf{S}$$                  | Vektorová pole v prostoru                 | Cirkulace po hranici = plošný integrál rotace           | Cirkulace pole podél prostorové křivky         |                   |
| **Gaussova věta**             | Vztah mezi tokem přes uzavřenou plochu a divergencí              | $$\oiint_S \mathbf{F} \cdot d\mathbf{S} = \iiint_E (\nabla \cdot \mathbf{F}) \,dV$$                              | Sférické, cylindrické, kartézské          | Tok povrchem = integrál divergence přes objem           | Výpočet celkového toku pole z objemu           |                   |

## Zdroje

- 🎥 [3B1B – What is integration?](https://www.youtube.com/watch?v=rfG8ce4nNh0)
- 🎥 [3B1B – Integration and the fundamental theorem](https://www.youtube.com/playlist?list=PLZHQObOWTQDMsr9K-rj53DwVRMYO3t5Yr)
- 📖 [Paul's Notes – Multiple Integrals](https://tutorial.math.lamar.edu/Classes/CalcIII/MultipleIntegrals.aspx)
- 🎥 [Khan Academy – Multivariable calculus](https://www.khanacademy.org/math/multivariable-calculus)