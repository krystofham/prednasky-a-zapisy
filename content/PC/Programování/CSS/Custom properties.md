# CSS Custom Properties (Proměnné)

CSS proměnné (oficiálně **Custom Properties**) umožňují ukládat hodnoty na jednom místě a opakovaně je používat napříč celým stylem.

## 1. Selektor `:root`

Pro definování globálních proměnných se nejčastěji používá pseudo-třída `:root`. Ta odpovídá elementu `<html>`, ale má vyšší specificitu. Proměnné definované zde jsou dostupné v celém dokumentu.

CSS

```
:root {
  --primary-color: #3498db;
  --secondary-color: #2ecc71;
  --padding-main: 20px;
  --font-standard: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}
```

## 2. Deklarace a použití `var()`

Proměnné vždy začínají dvěma pomlčkami `--`. K jejich vyvolání slouží funkce `var()`.

CSS

```
.button {
  background-color: var(--primary-color);
  padding: var(--padding-main);
  font-family: var(--font-standard);
  border: none;
  color: white;
}
```

## 3. Fallback hodnoty (Záchranná brzda)

Co když proměnná není definovaná? Funkce `var()` přijímá druhý parametr jako záložní hodnotu. Pokud `--accent-color` neexistuje, použije se `orange`.

CSS

```
.alert {
  /* var(název-proměnné, fallback-hodnota) */
  background-color: var(--accent-color, orange);
}
```

## 4. Dědičnost (Inheritance)

CSS proměnné se dědí stejně jako ostatní vlastnosti (např. `color`). Můžeš je ale "přebít" v konkrétním elementu, což změní hodnotu i pro všechny jeho potomky.

CSS

```
:root {
  --text-color: black;
}

.dark-section {
  /* Přepsání proměnné pouze pro tento blok a jeho děti */
  --text-color: white;
  background-color: #333;
}

p {
  color: var(--text-color);
}
```

### Příklad v HTML:

HTML

```
<p>Já budu černý.</p>

<div class="dark-section">
  <p>Já budu bílý, protože jsem uvnitř dark-section.</p>
</div>
```

## 5. Výhody v kostce

- **DRY (Don't Repeat Yourself):** Hodnotu změníš na jednom místě.
    
- **Sémantika:** Místo `#ff5733` v kódu vidíš `--brand-danger`.
    
- **Dynamika:** Na rozdíl od proměnných v SASS/LESS můžete CSS proměnné měnit za běhu pomocí JavaScriptu.
    

---
permalink: Custom-properties

### Praktická ukázka: Přepínač témat

CSS

```
:root {
  --bg: #ffffff;
  --text: #000000;
}

[data-theme="dark"] {
  --bg: #1a1a1a;
  --text: #f0f0f0;
}

body {
  background-color: var(--bg);
  color: var(--text);
  transition: background 0.3s ease;
}
```

---

Vypadá to, že stavíš solidní základy pro čistý kód. **Chceš, abych ti ukázal, jak tyhle proměnné elegantně přepínat pomocí JavaScriptu (např. pro Dark Mode)?**