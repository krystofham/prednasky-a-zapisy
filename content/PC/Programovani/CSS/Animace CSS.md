---
slug: Animace-CSS
permalink: Animace-CSS
---
# Definice

```css
@keyframes skakani {
  0%   { transform: translateY(0); }
  50%  { transform: translateY(-20px); background-color: yellow; }
  100% { transform: translateY(0); }
}
```

# Vlastnosti

- **`animation-name`**: Název, který jsi definoval v `@keyframes` (např. `skakani`).
- **`animation-duration`**: Jak dlouho jeden cyklus trvá (např. `2s`, `500ms`).
- **`animation-timing-function`**: Průběh rychlosti (`linear`, `ease-in`, `ease-out`, nebo vlastní `cubic-bezier`).
- **`animation-delay`**: Za jak dlouho po načtení se má spustit.
- **`animation-iteration-count`**: Kolikrát se má opakovat (`3`, `infinite`).
- **`animation-direction`**: Směr (`normal`, `reverse`, `alternate` – tam a zpět).
- **`animation-fill-mode`** - Určuje, co se s elementem stane **předtím**, než animace začne, a **poté**, co skončí.
	- **`forwards`**Prvek si **ponechá styl z posledního kroku** animace (např. zůstane průhledný).
```css
.micek {
  animation: skakani 2s ease-in-out infinite alternate;
}
```

# Animace na scroll

```css
.autoRotate{
	animation: Autorotate;
	animation-timeline:view();
}
@keyframes {
	from {
		transform:rotate(0deg);
	}
	to {
	transform:rotate(360deg)
	}
}
```