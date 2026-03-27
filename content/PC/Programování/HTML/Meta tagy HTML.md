---
slug: Meta-tagy-HTML
permalink: Meta-tagy-HTML
---
# pro SEO

```html
<meta name="description" content="Naučte se vše o HTML meta tazích. Praktické ukázky pro SEO, Open Graph a responzivní design v češtině.">

<meta name="viewport" content="width=device-width, initial-scale=1.0">
```
Description - popisek


# Open Graph

```html
<meta property="og:title" content="titulek">
<meta property="og:description" content="Popisek">
<meta property="og:image" content="nahledovy obrazek">
<meta property="og:url" content="https://mujweb.cz/clanek">
<meta property="og:type" content="article">
```
## property="og:type"
- **`website`**: Základní hodnota. Použij ji pro úvodní stránku (homepage) nebo obecné podstránky (O nás, Kontakt).
- **`article`**: Pro články na blogu, novinové zprávy nebo příspěvky. Umožňuje přidat další tagy jako `article:author` (autor) nebo `article:published_time` (datum vydání).
- **`book`**: Pro stránky o konkrétní knize.
- **`profile`**: Pro osobní profilové stránky uživatelů.