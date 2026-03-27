---
permalink: SVG-HTML
---
scalable image format
properties lze upravovat v JS
# Použití
1. Ikony
2. Grafy
3. Jednoduché obrázky
4. Pozadí
# Flagy

| KOD                                       | MEANING                          |
| ----------------------------------------- | -------------------------------- |
| `xmlns="http://www.w3.org/2000/svg"`      | **je jaký dialekt xml používám** |
| `viewBox = 0 0 100 100`                   | **min-x min-y width height**     |
| `<circle>`, `<rect>`, `<path>`,  `<text>` | **STYL svg**                     |
| `fill`, `stroke`                          | **CSS properties**               |
|                                           |                                  |
## Stroke

| KOD               | MEANING                                                   |
| ----------------- | --------------------------------------------------------- |
| Stroke            | /                                                         |
| Stroke width      | /                                                         |
| Stroke linecap    | Konec stroke na čáře `butt` - rovný `round` - zaoblený    |
| stroke linejoin   | Jak vypadá spoj dvou čar `round` kulatý `bevel` seříznutý |
| stroke dasharray  | `10 5` 10 čára 5 mezera                                   |
| stroke dashoffset | pattern - přerušení                                       |
| stroke opacity    | průhlednost                                               |
## Polygon
```html
points = "
x_1, y_1
x_2, y_2
"
```

## Circle

```
cx, cy - center x, center y
rx, ry - radius x, radius y
```
