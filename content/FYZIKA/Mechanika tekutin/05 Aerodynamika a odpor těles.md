---
slug: 05-Aerodynamika-a-odpor-těles
permalink: 05-Aerodynamika-a-odpor-těles
---
Tato sekce popisuje síly působící na tělesa pohybující se v tekutině (kapalině nebo plynu) – nebo ekvivalentně, tekutinu obtékající těleso.

---

## Odporová síla

$$F_D = C_D \cdot \frac{1}{2} \rho v^2 \cdot A$$

|Symbol|Veličina|Jednotka|
|---|---|---|
|$F_D$|odporová (brzdící) síla|N|
|$C_D$|součinitel odporu (tvar tělesa)|–|
|$\rho$|hustota tekutiny|kg/m³|
|$v$|rychlost tělesa vůči tekutině|m/s|
|$A$|referenční průřez tělesa|m²|

**Vysvětlení:** Síla, která brzdí těleso pohybující se v tekutině. Roste s **druhou mocninou rychlosti** – to znamená, že 2× větší rychlost = 4× větší odpor. Proto má aerodynamický tvar zásadní vliv při vysokých rychlostech.

$$F_D \propto v^2$$

### Typické hodnoty $C_D$

|Těleso|$C_D$|
|---|---|
|Koule|$\approx 0{,}47$|
|Válec (kolmo)|$\approx 1{,}0$|
|Osobní auto (střední třída)|$\approx 0{,}30$|
|Závodní auto (F1)|$\approx 0{,}7$–$1{,}0$ (záměrně vyšší pro přítlak)|
|Kapkovitý tvar|$\approx 0{,}04$|
|Lidské tělo (stojící)|$\approx 1{,}0$|
|Cyklista|$\approx 0{,}8$|

> **Příklad:** Auto jedoucí 200 km/h překonává 4× větší odpor vzduchu než při 100 km/h. Proto spotřeba paliva rapidně roste s rychlostí.

---

## Vztlaková síla (u těles v proudění)

$$F_L = C_L \cdot \frac{1}{2} \rho v^2 \cdot A$$

|Symbol|Veličina|Jednotka|
|---|---|---|
|$F_L$|vztlaková síla|N|
|$C_L$|součinitel vztlaku|–|
|$A$|plocha křídla (referenční)|m²|

**Vysvětlení:** Těleso nesymetrického tvaru (křídlo) obtékané tekutinou generuje sílu **kolmou na směr proudění**. Je to důsledek Bernoulliovy rovnice – vzduch nad zakřiveným profilem proudí rychleji, takže má nižší tlak.

> **Příklad:** Křídlo letadla generuje vztlak. Přitlačovač závodního auta (spoiler) je převrácené křídlo – generuje záporný vztlak (přítlak) pro lepší přilnavost.

---

## Machovo číslo a stlačitelnost plynů

$$Ma = \frac{v}{c}$$

| Symbol | Veličina                       | Jednotka |
| ------ | ------------------------------ | -------- |
| $Ma$   | Machovo číslo                  | –        |
| $v$    | rychlost tělesa/proudění       | m/s      |
| $c$    | rychlost zvuku v dané tekutině | m/s      |

Rychlost zvuku ve vzduchu při 20 °C: $c \approx 343\ \text{m/s}$

**Vysvětlení:** Machovo číslo říká, jak velká je rychlost proudění **relativně k rychlosti zvuku**. Je to klíčový parametr pro plyny – při vysokých rychlostech se plyn stlačuje a chování se zásadně mění.

|$Ma$|Režim|Platnost Bernoulliho|
|---|---|---|
|$< 0{,}3$|Nestlačitelné|Ano, plně|
|$0{,}3$–$1{,}0$|Stlačitelné podzvukové|Nutné korekce|
|$= 1{,}0$|Transonické (zvukové)|Ne|
|$> 1{,}0$|Nadzvukové|Ne|
|$> 5{,}0$|Hypersonické|Ne|

---

## Lavalova tryska

Speciální tvar trysky pro urychlení plynu na nadzvukovou rychlost. Využívá **opačného chování** plynů při nadzvukovém proudění:

| Tvar trysky  | Podzvukový plyn ($Ma < 1$) | Nadzvukový plyn ($Ma > 1$) |
| ------------ | -------------------------- | -------------------------- |
| Zužuje se    | zrychluje                  | zpomaluje                  |
| Rozšiřuje se | zpomaluje                  | zrychluje                  |

Lavalova tryska se nejprve **zužuje** (urychlí plyn na $Ma = 1$ v nejužším místě), poté **rozšiřuje** (dále urychlí na nadzvukovou rychlost).

> **Příklady použití:** Raketové motory, proudové motory, nadzvukové větrné tunely.

---

## Stavová rovnice ideálního plynu

$$pV = nRT$$

nebo v přepočtu na proudění:

$$\frac{p}{\rho} = \frac{RT}{M}$$

|Symbol|Veličina|Jednotka|
|---|---|---|
|$p$|tlak|Pa|
|$V$|objem|m³|
|$n$|látkové množství|mol|
|$R$|univerzální plynová konstanta ($8{,}314$)|J/(mol·K)|
|$T$|absolutní teplota|K|
|$M$|molární hmotnost|kg/mol|

**Vysvětlení:** Na rozdíl od kapalin se hustota plynu $\rho$ mění s tlakem a teplotou. To je nutné zahrnout do rovnice kontinuity pro stlačitelné plyny:

$$\rho_1 S_1 v_1 = \rho_2 S_2 v_2$$