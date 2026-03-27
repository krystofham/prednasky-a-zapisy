## 1. Klasika: Media Queries (`@media`)

Media queries jsou "přepínače". Říkají prohlížeči: „Pokud je displej užší než 768px, změň barvu pozadí.“ Je to základní nástroj pro měnění rozvržení (layoutu).

```css
/* Mobile-first přístup: základ je pro mobil, @media pro desktop */
.container {
  display: flex;
  flex-direction: column;
}

@media (min-width: 768px) {
  .container {
    flex-direction: row; /* Na tabletu a PC budou vedle sebe */
  }
}
```

---

## 2. Funkce `min()`, `max()` a `clamp()`

Tohle je ta pravá magie. Tyto funkce umožňují elementům dýchat a měnit velikost dynamicky bez nutnosti psát desítky media queries.

### `min(hodnota1, hodnota2)`

Vybere **menší** z obou hodnot. Skvělé pro šířku kontejneru.

- `width: min(90%, 1200px);` – Element bude mít 90 % šířky displeje, ale nikdy nepřesáhne 1200px.
    

### `max(hodnota1, hodnota2)`

Vybere **větší** z obou hodnot. Dobré pro zajištění minimální čitelnosti.

- `font-size: max(2vw, 16px);` – Písmo se bude zvětšovat podle šířky okna, ale nikdy neklesne pod 16px.
    

### `clamp(minimum, ideál, maximum)`

Svatý grál responzivity. Definuje rozsah, ve kterém se hodnota může pohybovat.

- `width: clamp(300px, 50%, 800px);` – Chci, aby element měl ideálně 50 % šířky, ale nesmí být menší než 300px a větší než 800px.
    

---

## 3. Fluidní typografie (Plynulé písmo)

Dříve jsme museli měnit velikost písma pomocí breakpointů (na mobilu 16px, na desktopu 24px). S `clamp()` se písmo zvětšuje plynule s každým pixelem šířky okna.

CSS

```css
h1 {
  /* clamp(MIN, VAL, MAX) */
  font-size: clamp(1.5rem, 5vw + 1rem, 3rem);
}
```

- **1.5rem**: Nejmenší možná velikost (na mobilu).
- **5vw + 1rem**: Dynamická hodnota (roste s šířkou okna).
- **3rem**: Maximální velikost (na velkých monitorech).