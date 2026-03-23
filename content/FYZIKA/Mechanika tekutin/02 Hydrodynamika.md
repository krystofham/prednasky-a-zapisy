---
---
Hydrodynamika popisuje chování tekutin **při proudění**. Předpokládáme nejprve ideální kapalinu (nestlačitelnou, neviskózní), poté přidáme reálné efekty.

---

## Rovnice kontinuity

$$S_1 \cdot v_1 = S_2 \cdot v_2 = Q = \text{konst.}$$

|Symbol|Veličina|Jednotka|
|---|---|---|
|$S$|průřez potrubí|m²|
|$v$|rychlost proudění|m/s|
|$Q$|objemový průtok|m³/s|

**Vysvětlení:** Zákon zachování hmoty pro nestlačitelnou kapalinu. Kolik kapaliny přiteče do trubice, tolik musí odtéct – kapalina se nikam neztrácí. Kde je potrubí **užší**, tam kapalina teče **rychleji**.

Pro stlačitelné plyny je nutné zahrnout hustotu:

$$\rho_1 S_1 v_1 = \rho_2 S_2 v_2$$

> **Příklad:** Když přimáčknete hadici palcem, voda vystříkne rychleji – průřez $S$ se zmenší, takže $v$ musí vzrůst.

---

## Bernoulliova rovnice

$$p + \frac{1}{2}\rho v^2 + \rho g h = \text{konst.}$$

|Člen|Název|Fyzikální smysl|
|---|---|---|
|$p$|statický tlak|tlak kapaliny samotné|
|$\frac{1}{2}\rho v^2$|dynamický tlak|tlak způsobený pohybem|
|$\rho g h$|hydrostatický tlak|tlak způsobený výškou|

**Vysvětlení:** Jeden z nejdůležitějších vzorců v mechanice tekutin. Platí podél **proudnice** pro ideální kapalinu. Říká, že součet všech tlaků je konstantní – pokud kapalina **zrychlí**, její statický tlak **poklesne**.

Mezi dvěma body:

$$p_1 + \frac{1}{2}\rho v_1^2 + \rho g h_1 = p_2 + \frac{1}{2}\rho v_2^2 + \rho g h_2$$

> **Příklady použití:**
> 
> - **Křídlo letadla:** Vzduch nad zakřiveným profilem proudí rychleji → nižší tlak nahoře → vzniká vztlak.
> - **Venturiho trubice:** Zúžením se zvýší rychlost a poklesne tlak → měření průtoku.
> - **Karburátor:** Podtlak nasává palivo do proudu vzduchu.

⚠️ **Platí pouze pro:** ideální (neviskózní), nestlačitelnou kapalinu v ustáleném proudění.

---

## Torricelliho výtokový vzorec

$$v = \sqrt{2gh}$$

|Symbol|Veličina|Jednotka|
|---|---|---|
|$v$|rychlost vytékající kapaliny|m/s|
|$g$|gravitační zrychlení|m/s²|
|$h$|výška hladiny nad otvorem|m|

**Vysvětlení:** Speciální případ Bernoulliovy rovnice pro výtok otvorem v nádobě. Rychlost vytékající kapaliny závisí pouze na **výšce hladiny** – je stejná jako rychlost volného pádu z výšky $h$.

> **Příklad:** Z plné nádrže voda vystříkne rychleji než z téměř prázdné. Výtok se zpomaluje, jak klesá hladina.