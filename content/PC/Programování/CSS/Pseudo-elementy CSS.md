---
slug: Pseudo-elementy-CSS
permalink: Pseudo-elementy-CSS
---
# Content
Bez vlastnosti `content` nebude pseudo-element fungovat. I kdyby měl být prázdný (jen pro barvu nebo čáru), musíš ho v CSS uvést:

- `content: "text";` – Vloží text.
- `content: url(ikona.png);` – Vloží obrázek.
- `content: "";` – Vytvoří prázdný blok (ideální pro čáry, tečky, pozadí).
# First letter
První písmeno

```css
h1::first-letter {
	font-size: 2em;
}
```

# First line
První řádek

```css
p::first-line {
	font-size: 2em
	background-color: #aaaaaa;
}
```

# Selection

Když dělám ctrl c, označuju text
# Before
Něco před Element

```css
.fruit::before {
content:"HELLO";
}
```
# After
Něco za Element
# Marker
Pro list je to náhrada defaultní tečky
# Nth child
- `:nth-child(2)` – Vybere přesně druhý prvek.
- `:nth-child(odd/even)` – Lichý/sudý (klasika pro pruhované tabulky).
- **Pokročilé:** `:nth-child(3n+1)` – Vybere každý třetí prvek, počínaje prvním (1,4,7...).
# NOT

```css
p:not(.special) {
  color: black;
}

button:not(:last-child) {
  margin-right: 10px;
}
```
# Has

```css
/* Pokud karta obsahuje obrázek, dej jí jiný padding */
.card:has(img) {
  padding: 0;
}

/* Pokud je v sekci zaškrtnutý checkbox, změň pozadí celé sekce */
section:has(input[type="checkbox"]:checked) {
  background-color: #f0f8ff;
}
```