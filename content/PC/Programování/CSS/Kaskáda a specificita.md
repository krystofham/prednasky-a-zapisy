## 1. Dědičnost (Inheritance)

Některé vlastnosti se automaticky přenášejí z rodiče na potomka. Je to efektivní – nemusíš nastavovat font každému odstavci zvlášť.

- **Co se dědí:** Textové vlastnosti (`color`, `font-family`, `line-height`, `letter-spacing`).
    
- **Co se NEDĚDÍ:** Box-model vlastnosti (`margin`, `padding`, `border`, `width`, `height`). Představ si, jaký chaos by byl, kdyby každý `<span>` uvnitř `<div>` s okrajem dostal svůj vlastní okraj.
    

> **Tip:** Pokud chceš dědičnost vynutit, použij klíčové slovo `inherit` (např. `border: inherit;`).

---
tags:
  - header
  - nav
## 2. Specificita (Bodový systém)

Když na jeden element míří více pravidel, vyhrává to s **vyšší specificitou**. Můžeš si to představit jako skóre:

|Selektor|Body|Příklad|
|---|---|---|
|**Inline styl**|1, 0, 0, 0|`<h1 style="color: red;">`|
|**ID**|0, 1, 0, 0|``|
|**Třída, Atribut, Pseudo-třída**|0, 0, 1, 0|`.btn`, `[type="text"]`, `:hover`|
|**Element, Pseudo-element**|0, 0, 0, 1|`h1`, `div`, `::before`|

**Příklad:** `.link` (110 bodů) porazí `nav a` (2 body), i když je v kódu dříve.
---

## 3. !important (Nukleární zbraň)

Když ke kterékoliv hodnotě připíšeš `!important`, přebije to všechno ostatní (včetně inline stylů).

CSS

```
p {
  color: blue !important; /* Vyhraje nad čímkoliv jiným */
}
```

**Proč ho (skoro) nepoužívat?** Jakmile ho použiješ, „rozbiješ“ přirozenou kaskádu. Pokud budeš chtít tuhle barvu později změnit, budeš muset použít další `!important`. Je to cesta do pekla, které se říká _specificity war_.

---

## 4. @layer (Kaskádové vrstvy)

Tohle je moderní CSS (rok 2022+), které řeší problémy se specificitou elegantně. `@layer` ti umožní rozdělit CSS do logických vrstev. **Vrstvy definované později mají vyšší prioritu než ty předchozí, bez ohledu na specificitu selektorů uvnitř.**

CSS

```
/* Definujeme pořadí vrstev (od nejnižší priority po nejvyšší) */
@layer reset, base, components, utilities;

@layer components {
  /* I když je ID velmi silné, v této vrstvě ho přebije utility vrstva */
  #main-button { background: blue; }
}

@layer utilities {
  .bg-green { background: green; } /* VYHRAJE, protože je v pozdější vrstvě */
}
```

**K čemu je to dobré?** Můžeš importovat externí knihovnu (třeba Bootstrap) do spodní vrstvy a snadno ji přepisovat svým kódem, aniž bys musel neustále bojovat s jejich složitými selektory.