# Picture

```html
<picture>
  <source srcset="obrazek.webp" type="image/webp">
  <source srcset="obrazek.jpg" type="image/jpeg">
  <img src="obrazek.jpg" alt="Popis obrázku">
</picture>
 
<picture>
  <source media="(min-width: 800px)" srcset="velky-banner.jpg">
  <source media="(min-width: 400px)" srcset="stredni-fotka.jpg">
  <img src="mobilni-verze.jpg" alt="Banner">
</picture>
```
IMG je fallback
source je preferovaný

# Srcset

```html
<img src="maly.jpg" 
     srcset="maly.jpg 500w, stredni.jpg 1000w, velky.jpg 2000w" 
     sizes="(max-width: 600px) 480px, 800px" 
     alt="Ukázka srcset">
```

- **`w` jednotka**: Říká prohlížeči, jak je obrázek skutečně široký v pixelech.
- **`sizes`**: Říká prohlížeči, jak velký prostor bude obrázek na stránce zabírat.
**Co znamená to `500w`?** To není šířka na obrazovce (CSS pixely). To je **skutečná šířka souboru v pixelech**. Říkáš prohlížeči: _"Hele, tenhle soubor `maly.jpg` má fakticky 500 pixelů na šířku."_

# Video + audio
podobný picture

```html
<video width="640" height="360" controls poster="nahled.jpg">
  <source src="video.mp4" type="video/mp4">
  <source src="video.webm" type="video/webm">
  Vaše prohlížeč nepodporuje přehrávání videa.
</video>

<audio controls>
  <source src="podcast.mp3" type="audio/mpeg">
  <source src="podcast.ogg" type="audio/ogg">
  Váš prohlížeč nepodporuje přehrávání zvuku.
</audio>
```
