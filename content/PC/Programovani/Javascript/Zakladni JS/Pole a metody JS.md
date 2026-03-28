---
slug: Pole-a-metody-JS
permalink: Pole-a-metody-JS
---
Nutnost: [[Callback JS]]
# Pole (Arrays)

Pole slouží k ukládání více hodnot do jedné proměnné.
## Vytvoření pole
```js
let cisla = [1, 2, 3, 4];
let jmena = ["Jan", "Eva", "Petr"];
```
## Přístup k prvkům
Indexování začíná od 0.
```js
let jmena = ["Jan", "Eva", "Petr"];
console.log(jmena[0]); // Jan
console.log(jmena[1]); // Eva
```
## Změna hodnoty

```js
jmena[0] = "Karel";
```
## Délka pole

```js
console.log(jmena.length);
```
## Přidání prvku
Na konec:
```js
jmena.push("Lucie");
```
Na začátek:
```js
	jmena.unshift("Tomáš");
```
## Odebrání prvku
Z konce:
```js
	jmena.pop();
```
Ze začátku:
```js
jmena.shift();
```
## Procházení pole (for loop)
```js
for (let i = 0; i < jmena.length; i++) {
  console.log(jmena[i]);
}
```
## Moderní procházení (for...of)
```js
for (let jmeno of jmena) {
  console.log(jmeno);
}
```
## Časté metody
```js
jmena.includes("Jan");   // true / false
jmena.indexOf("Eva");    // index nebo -1
```
## map() – úprava pole

Autor: brocode https://www.youtube.com/watch?v=xNQH1NbZQ0E
Příjmá callback a praktikuje funkci pro každý element, vrací nový array

```js
const num = [1,2,3];
const sqnum.map(square);
function square(element){
	return element*element
}
```
## filter() – filtrování
Autor: Brocode

```js
let num = [1,2,3];
const isEven = (element) => {
	return element%2 === 0;
}
let even = num.filter(isEven);
```

## For Each
Autor: Brocode
```js
let numbers = [1,2,3]
const display = (elements) => {
	console.log(element)
}
numbers.forEach(display)
// 1,2,3
```

## Reduce
Autor Brocode https://www.youtube.com/watch?v=iDWtuWkuj8g

```js
const prices = [1, 2, 3];

function sum(acc, ele) {
	// Toto je callback funkce
    return acc + ele;
}

// Tady říkáš: "Hej, reduce, vezmi tuhle moji funkci 'sum' a zavolej ji pro každý prvek v poli."
const total = prices.reduce(sum, 0);
```

```js
const prices = [1, 2, 3]; 
let total = 0; 
for (const price of prices) { 
	total += price; 
} 
console.log(total);
```

# Vlastní metody
Mějme nějakou funkci 

```js
let expect = function(val) {
	return // tady jsou metody
};
```

```js
let expect = function(val) { // <--- TADY JE TA BUBLINA
    return {
		// klíč: hodnota
        }
    };
};
```

```js
let expect = function(val) {
    return {
        return5: 5,
        consoleme: function(){
	        console.log("me");
        },
        writeme: function(){
	        console.log(val);
        },
        writearray: function(){
	        function display(elements){
				console.log(element);
			}
			numbers.forEach(display);
        }
    };
};
```