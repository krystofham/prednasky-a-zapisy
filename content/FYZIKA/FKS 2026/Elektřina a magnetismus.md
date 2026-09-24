FKS 2026
Charakteristické pole pro magnetické a elektrické je proud.
Zdroj elekrického pole je $e^-$, který má velmi malý náboj

> Elektron objevený Thompsonem [katodovým zářením](https://cs.wikipedia.org/wiki/Katodov%C3%A9_z%C3%A1%C5%99en%C3%AD), pole objevil Farraday a náboj Coulomb.

Magnety se liší od elektrony tím, že má severní a jižní pole. Pole musí být dvě, říká to Maxwellův zákon o indukčním toku ($U_i = -\frac{d\Phi}{dt}$)
Magnetické pole bylo objeveno Orstedem (random při přednášce)

---

Základní veličina el. pole je el. intenzita $\vec{E}_p => F_e = EQ  = \frac{1}{4\pi\varepsilon} \cdot \frac{|q_1 \cdot q_2|}{r^2} \cdot \frac{r}{|\vec{r}|}$

## základní operace vektorové analýzy
div = Divergence  - skalární součin - změna hustoty toku pole $\nabla \cdot \vec{F}$
gad = Gradace - z předpisu funkce udělá vektor $\nabla \phi$
rot = Rotace - vektorový součin parciálních derivací jednotlivých složek pole $\nabla \times \vec{F}$

---
# Elektrické pole
$$\vec{E} = -gad \phi$$
$\phi$ je el. potenciál
U elektrického je nulová rotace.

### Gaussův zákon
$$\operatorname {div} E = \frac\rho \epsilon$$
nábojová hustota / permitivita prostředí 
Což lze taky zapsat (integrál el. pole přes plochu) je náboj / permitivita vakua. Není nutné integrovat, pokud si zvolíme dobře plochu.
$$\int E \operatorname{dS} = \frac{Q}{\epsilon_0}$$
---
### Příklad
Máme plochu s plošným nábojem $\sigma = \frac QS$. Plocha je ideální nekonečná homogenní ap. Zvolíme si random válec jak Gaussovu plochu. Elektrické pole míří nahoru. Použijeme Gaussův zákon. dS je plocha podstavy, protože skalární součin pláště s polem je 0.
$$\int E \operatorname{dS} = \frac{Q}{\epsilon_0} = E \cdot\pi r^2$$
takže $$E = \frac{Q}{\epsilon_0 \pi r^2} $$
ALE. Elektrické pole míří na dvě strany. Nad plochou nahoru a potom pod plochou dolů. Takže bych musel integrovat 2 krát. 
$$E = \frac{Q}{2\epsilon_0 \pi r^2} $$
$$\sigma = \frac Q{\pi r^2}$$
$$E = \frac{\sigma}{2 \epsilon_0}$$
---


# Magnetické pole
Magnetická indukce $\operatorname{Div} B = 0$. Toto je pole vírové. Pole se kroutí (magnetické pole okolo země). Co do pole vteče, to vyteče.
## Ampérův zákon
$$\operatorname{rot} B = \micro_0 j$$
$j$ je hustota elektrického proudu a $\micro_0$ je permeabilita vakua
$$\oint \vec{B}\operatorname{d\vec{l}} = I_c \micro_0$$
Celkový proud krát permeabilita. B jsou kolečka co se kroutí kolem vodiče. e je uzavřený křivkový vodič (jedno kolečko)
$$[j] = A\cdot m^{-1}$$
Ampérův zákon se dá použít pouze na pár málo zákonů.
### Příklad
Bude doplněn.
