Reálné kapaliny a plyny mají **viskozitu** – vnitřní tření, které brzdí proudění. Tato sekce popisuje chování viskózních tekutin při klidném (laminárním) proudění.

---

## Dynamická a kinematická viskozita

$$\nu = \frac{\eta}{\rho}$$

|Symbol|Veličina|Jednotka|
|---|---|---|
|$\eta$ (nebo $\mu$)|dynamická viskozita|Pa·s|
|$\nu$|kinematická viskozita|m²/s|
|$\rho$|hustota kapaliny|kg/m³|

**Vysvětlení:** Dynamická viskozita $\eta$ vyjadřuje absolutní „lepivost" tekutiny. Kinematická viskozita $\nu$ ji přepočítává na jednotku hustoty – používá se tam, kde je důležitý poměr viskozity a hustoty (např. Reynoldsovo číslo).

|Tekutina|$\eta$ (Pa·s) při 20 °C|
|---|---|
|Vzduch|$1{,}8 \times 10^{-5}$|
|Voda|$1{,}0 \times 10^{-3}$|
|Motorový olej|$\approx 0{,}1$|
|Med|$\approx 10$|

---

## Newtonův zákon viskozity

$$\tau = \eta \cdot \frac{dv}{dy}$$

|Symbol|Veličina|Jednotka|
|---|---|---|
|$\tau$|tečné napětí mezi vrstvami|Pa|
|$\eta$|dynamická viskozita|Pa·s|
|$\frac{dv}{dy}$|gradient rychlosti (změna rychlosti v příčném směru)|s⁻¹|

**Vysvětlení:** Kapalina proudí ve vrstvách. Sousední vrstvy se pohybují různými rychlostmi a vzájemně se **brzdí třením**. Čím větší je rozdíl rychlostí mezi sousedními vrstvami ($\frac{dv}{dy}$) a čím viskóznější kapalina, tím větší tečné napětí $\tau$ mezi nimi vzniká.

> **Příklad:** Olej klade proudění větší odpor než voda, protože má vyšší $\eta$.

---

## Poiseuilleův zákon

$$Q = \frac{\pi r^4 \Delta p}{8 \eta L}$$

|Symbol|Veličina|Jednotka|
|---|---|---|
|$Q$|objemový průtok|m³/s|
|$r$|poloměr trubice|m|
|$\Delta p$|tlakový rozdíl na koncích trubice|Pa|
|$\eta$|dynamická viskozita|Pa·s|
|$L$|**délka trubice**|m|

**Vysvětlení:** Průtok viskózní kapaliny trubicí závisí na **čtvrtá mocnině poloměru**. To má zásadní důsledky:

$$Q \propto r^4$$

|Změna poloměru|Změna průtoku|
|---|---|
|2× širší trubice|16× větší průtok|
|2× užší trubice|16× menší průtok|
|Zúžení o 20 %|průtok klesne na $\approx 41\ %$|
|Zúžení o 50 %|průtok klesne na $\approx 6\ %$|

Platí **pouze pro laminární proudění** ($Re < 2300$).

> **Příklady:**
> 
> - **Krevní oběh:** Zúžení cév (ateroskleróza) dramaticky snižuje průtok krve a zatěžuje srdce.
> - **Vodovodní potrubí:** Delší potrubí (větší $L$) → větší odpor → menší průtok.

### Zužující se trubice

Pokud se poloměr trubice mění podél délky jako $r(x)$, trubici rozdělíme na úseky $dx$ a integrujeme:

$$\Delta p = \frac{8\eta Q}{\pi} \int_0^L \frac{dx}{r(x)^4}$$

Pro lineárně se zužující trubici (kužel) s poloměry $r_1$ (vstup) a $r_2$ (výstup):

$$\Delta p = \frac{8\eta Q L}{3\pi} \cdot \frac{r_1^2 + r_1 r_2 + r_2^2}{r_1^3 \cdot r_2^3}$$

---

## Stokesův zákon

$$F = 6\pi \eta r v$$

|Symbol|Veličina|Jednotka|
|---|---|---|
|$F$|odporová síla na kuličce|N|
|$\eta$|dynamická viskozita kapaliny|Pa·s|
|$r$|poloměr kuličky|m|
|$v$|rychlost kuličky|m/s|

**Vysvětlení:** Síla, kterou klade viskózní kapalina odpor malé kuličce pohybující se jejím prostředím. Roste lineárně s rychlostí i poloměrem.

Kulička dosáhne **pádové (terminální) rychlosti**, když se odporová síla + vztlaková síla vyrovná gravitaci:

$$6\pi \eta r v_t = \frac{4}{3}\pi r^3 (\rho_\text{kulička} - \rho_\text{kapalina}) g$$

$$v_t = \frac{2r^2 (\rho_\text{kulička} - \rho_\text{kapalina}) g}{9\eta}$$

> **Příklady:** Déšťová kapka padá konstantní rychlostí. Usazování pevných částic ve vodě.