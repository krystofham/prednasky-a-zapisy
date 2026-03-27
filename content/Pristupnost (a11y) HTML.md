---
slug: Pristupnost-(a11y)-HTML
permalink: Přístupnost-(a11y)-HTML
---
# Alt
fur lobotom

---
# Aria

**„První pravidlo ARIA: Nepoužívejte ARIA.“**
## aria label
Používá se k pojmenování prvků, které nemají viditelný textový popisek. Typickým příkladem je „křížek“ pro zavření okna.
```html
<button aria-label="Zavřít dialogové okno">X</button>
```
## aria hidden
Tento atribut skryje element před čtečkou obrazovky, ale **nechá ho viditelný** na monitoru. Hodí se pro ikony, které jsou jen doprovodem textu.

Tohle je nejčastější chyba. `aria-hidden` schová prvek před **ušima** (čtečkou), ale neschová ho před **klávesnicí** (klávesou Tab).
```html
<button>
  <span class="fa fa-trash" aria-hidden="true"></span>
  Smazat soubor
</button>
```