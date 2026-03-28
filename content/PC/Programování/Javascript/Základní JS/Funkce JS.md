# Funkce
Funkce je blok kódu, který můžeme opakovaně volat.
## Základní funkce
```js
function pozdrav() {
  console.log("Ahoj");
}
```
## Funkce s parametrem

```js
function pozdrav(jmeno) {
  console.log(`Ahoj ${jmeno}`);
}
```
## Funkce s více parametry
```js
function soucet(a, b) {
  console.log(a + b);
}
```
## Návratová hodnota (return)

```js
function soucet(a, b) {
  return a + b;
}
let vysledek = soucet(5, 3);
console.log(vysledek);
```
## Arrow funkce (moderní zápis)
```js
function pozdrav(jmeno) {
  console.log(`Ahoj ${jmeno}`);
}
// Jinak
const pozdrav = (jmeno) => {
  console.log(`Ahoj ${jmeno}`);
};
// Zkrácený zápis:
const soucet = (a, b) => a + b;
```
## Výchozí hodnota parametru
```js
function pozdrav(jmeno = "hoste") {
  console.log(`Ahoj ${jmeno}`);
}
```
## Funkce jako proměnná

```js
const vypis = function() {
  console.log("Text");
};
```
Funkce je datový typ a můžeme ji uložit do proměnné.
