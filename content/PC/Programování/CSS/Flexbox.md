# Jak centrovat div

```css
.container {
	display:flex;
	justify-content:
}
.child {
	height: 200px;
	width: 200px;
}
```
main axis - horzontalni
vertical axis - vericalni

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

## Flex direction
1) Row
2) Row reverse
3) column
4) column reverse
## Flex
```css
flex: 1 0 200px;
```
### . `flex-basis`: Startovní čára

Určuje ideální (výchozí) velikost prvku předtím, než se začne rozdělovat zbývající místo.
- Může to být pevná hodnota (`200px`), procenta (`20%`) nebo `auto` (velikost podle obsahu).
- **Pozor:** Pokud je `flex-direction: row`, odpovídá šířce. Pokud je `column`, odpovídá výšce.
- Pokud máš `flex-direction: row` (výchozí), `flex-basis` se chová jako **šířka**.
- Pokud máš `flex-direction: column`, `flex-basis` se chová jako **výška**.
### 2. `flex-grow`: Kdo si vezme víc?
Tato hodnota (bezrozměrné číslo) říká, jak se má prvek **roztáhnout**, pokud je v kontejneru volné místo.
- `0` (výchozí): Prvek neroste, zůstane na své `flex-basis`.
- `1`: Prvek vyplní dostupný prostor.
- Pokud má jeden prvek `grow: 2` a druhý `grow: 1`, ten první získá dvakrát větší podíl z **volného** místa než ten druhý.
### 3. `flex-shrink`: Kdo se uskrovní?
Určuje, jak moc se má prvek **zmenšit**, pokud se do kontejneru nevejde (např. na malém mobilu).
- `1` (výchozí): Všechny prvky se zmenšují rovnoměrně.
- `0`: Prvek se odmítá zmenšit (přeteče ven nebo vytvoří scrollbar). To je klíčové pro ikony nebo loga, která nesmí být "vychrtlá".