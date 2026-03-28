---
slug: 04-Reynoldsovo-cislo-a-turbulentni-proudeni
permalink: 04-Reynoldsovo-číslo-a-turbulentní-proudění
---
## Reynoldsovo číslo

$$Re = \frac{\rho v d}{\eta} = \frac{v d}{\nu}$$

|Symbol|Veličina|Jednotka|
|---|---|---|
|$\rho$|hustota tekutiny|kg/m³|
|$v$|rychlost proudění|m/s|
|$d$|charakteristický rozměr (průměr trubice, délka tělesa…)|m|
|$\eta$|dynamická viskozita|Pa·s|
|$\nu$|kinematická viskozita|m²/s|

**Vysvětlení:** Reynoldsovo číslo $Re$ je **bezrozměrné číslo**, které vyjadřuje poměr mezi setrvačnými silami (pohyb tekutiny) a viskózními silami (tření). Říká nám, zda bude proudění **klidné nebo chaotické**.

$$Re = \frac{\text{setrvačné síly}}{\text{viskózní síly}}$$

---

## Režimy proudění

|$Re$|Režim|Popis|
|---|---|---|
|$Re < 2300$|**Laminární**|Vrstvy klouzají klidně vedle sebe, žádné víry|
|$2300 < Re < 4000$|**Přechodové**|Nestabilní, závisí na podmínkách|
|$Re > 4000$|**Turbulentní**|Chaotické víry, míchání vrstev|

### Laminární proudění

- Vrstvy kapaliny se pohybují rovnoběžně, nepromíchávají se
- Rychlostní profil v trubici je **parabolický** (uprostřed nejrychleji)
- Platí Poiseuilleův zákon
- Typické pro: pomalé toky, viskózní kapaliny, tenké trubice

### Turbulentní proudění

- Chaotické víry a fluktuace rychlosti
- Rychlostní profil je **plošší** (turbulence promíchává vrstvy)
- Větší odpor a tlakové ztráty než laminární proudění
- Typické pro: rychlé toky, méně viskózní kapaliny, velké průměry

> **Příklady:**
> 
> - Pomalu tekoucí med v hadičce → $Re \ll 1$ → laminární
> - Voda z kohoutku → $Re \approx 1000$–$5000$ → přechod
> - Rychlá řeka → $Re \gg 10^4$ → turbulentní

---

## Tlakové ztráty v potrubí (Darcy-Weisbach)

$$\Delta p = \lambda \cdot \frac{L}{d} \cdot \frac{\rho v^2}{2}$$

|Symbol|Veličina|Jednotka|
|---|---|---|
|$\Delta p$|tlaková ztráta třením|Pa|
|$\lambda$|součinitel tření (Darcy-Weisbach)|–|
|$L$|délka potrubí|m|
|$d$|průměr potrubí|m|
|$\rho$|hustota tekutiny|kg/m³|
|$v$|rychlost proudění|m/s|

**Vysvětlení:** Reálné potrubí má odpor – tekutina ztrácí energii třením o stěny. Tento vzorec platí **pro oba režimy proudění**, ale hodnota $\lambda$ se liší.

### Hodnota součinitele tření $\lambda$

**Pro laminární proudění** ($Re < 2300$): $$\lambda = \frac{64}{Re}$$

**Pro turbulentní proudění** – aproximace Blasiusovým vzorcem ($Re < 10^5$): $$\lambda \approx \frac{0{,}316}{Re^{0{,}25}}$$

**Přesněji** – Colebrook-Whiteova rovnice (zahrnuje drsnost stěn $\varepsilon$): $$\frac{1}{\sqrt{\lambda}} = -2 \log\left(\frac{\varepsilon}{3{,}7d} + \frac{2{,}51}{Re\sqrt{\lambda}}\right)$$

> **Praktický důsledek:** Turbulentní proudění způsobuje výrazně větší tlakové ztráty než laminární – proto je výhodné udržovat nízké rychlosti v dlouhých potrubních systémech.