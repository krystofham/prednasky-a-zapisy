display: grid
```css
.gridcontainer{
display: grid;
grid-template-columns: 10rem 10rem; 
/* 2 sloupce, každý 10% width*/
grid-template-columns: 1fr 1fr; 
/* 2 sloupce, každý 1:1 na celou stranu*/
grid-template-rows: 10em 10em; 
/* 2 řádky, každý 10% height*/
grid-template-rows: 1fr 1fr; 
height: 100px;
/* 2 řádky, každý 1:1 na celou stranu*/
gap: 1em;

grid-auto-rows: 1fr;
/* automaticky*/
grid-auto-flow: column;
/* všechno do column, nic jinam - overflow*/
}
```
## justify content
horizontal
1) flex start - na zacatku
2) flex end - na konce
3) center 
4) space between - mezery mezi nima, dotyka se kraje
5) space around - mezery mezi nima, nedotyka se kraje
## align items
vertical
1) flex start - na zacatku
2) flex end - na konce
3) center 

## Justify items
1) flex start - na zacatku
2) flex end - na konce
3) center 
Horizontal - posunuje child

# Bento grid

```css
display: grid;
grid-template-columns: 1fr 1fr 1fr 1fr; 
grid-template-rows: 1fr 1fr; 
/* Pro každý box  - style="grid-area:box-1/2.." */
grid-template-areas: 
	"box-1 box-2 box-2 box-3"
	"box-1 box-4 box-5 box-5";
```

# Grid stacking

```css
.mother{
display:grid;
}
.back {
	display:block;
	grid-column:1/2;
	grid-row:1/2;
}
.front{
	display:block;
	grid-column:1/2;
	grid-row:1/2;
}
```
# Grid wrapping
```css
.mother{
display:grid;
grid-template-columns: repeat(auto-fit, minmax(minimum, maximum));
}
```