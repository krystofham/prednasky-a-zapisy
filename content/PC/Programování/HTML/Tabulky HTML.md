---
permalink: Tabulky-HTML
---
```html
<table>
začátek tabulky
<tr>
řádek
<th>
hlavička
<td>
data
<colgroup>
	<col span="2">
Vytvořit skupinu columns
```
Ukázka
```html
<tr>
	<th rowspan="2">Chicken</th>
	<td>Hen</td>
</tr>
<tr>
	<td>Rooster</td>
</tr>
Stejně funguje rowgroup

<tr>
	<td colspan="2">This</td>
	<td>Little</td>
	<td>Piggy</td>
	<td>Went</td>
	<td>To</td>
</tr>
THIS - 2 columny
```

```html
<caption>
Popisek
<thead>
colgroups
<tbody>
tělo
<tfoot>
poslední řádek
<th scope="">
k čemu náleží th (col, row, colgroup, rowgroup)
```

Dále: [[Tables CSS]]