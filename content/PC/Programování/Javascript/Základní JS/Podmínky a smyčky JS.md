# Podmínky a loopy
## Podmínky
Základní podmínka:
```js
if (podminka) {
  // kód se provede, pokud je podmínka true
}
// else if
if (vek >= 18) {
  console.log("Jsi plnoletý");
} else {
  console.log("Nejsi plnoletý");
}
// else if
if (znamka === 1) {
  console.log("Výborně");
} else if (znamka === 2) {
  console.log("Chvalitebně");
} else {
  console.log("Další známka");
}
```
## For loop
```js
for (let i = 0; i < 5; i++) {
  console.log(i);
}
```
### For of 
```js
const numbers = [1, 2, 3, 4, 5];

for (const num of numbers) {
  console.log(num);
}
```
### For in
```js
const fruit = {
  name: 'apple',
  color: 'red',
  price: 0.99
};

for (const prop in fruit) {
  console.log(fruit[prop]);
}
```
## While loop
```js
let i = 0;
while (i < 5) {
  console.log(i);
  i++;
}
```
