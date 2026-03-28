DOM = Document Object Model
<div id="container">
  <div class="display"></div>
  <div class="controls"></div>
</div>
<div id="container">
  <div class="display"></div>
  <div class="controls"></div>
</div>
<div id="container">
  <div class="display"></div>
  <div class="controls"></div>
</div>
<div id="container">
  <div class="display"></div>
  <div class="controls"></div>
</div>
<div id="container">
  <div class="display"></div>
  <div class="controls"></div>
</div>
<div id="container">
  <div class="display"></div>
  <div class="controls"></div>
</div>
<div id="container">
  <div class="display"></div>
  <div class="controls"></div>
</div>
<div id="container">
  <div class="display"></div>
  <div class="controls"></div>
</div>
<div id="container">
  <div class="display"></div>
  <div class="controls"></div>
</div>
<div id="container">
  <div class="display"></div>
  <div class="controls"></div>
</div>
<div id="container">
  <div class="display"></div>
  <div class="controls"></div>
</div>
<div id="container">
  <div class="display"></div>
  <div class="controls"></div>
</div>
<div id="container">
  <div class="display"></div>
  <div class="controls"></div>
</div>
Dává API na komunikaci
# Nutnost

```html
<div id="container">
  <div class="display"></div>
  <div class="controls"></div>
</div>
```
Container = parent
display = children

---
tags:
  - container
  - container
  - container
  - btn
  - btn
# Jak to funguje?


```javascript
// selects the div (don't worry about the syntax, we'll get there)
const container = document.querySelector("");

// selects the first child of => .display
const display = container.firstElementChild;
console.log(display);  // <div class="display"></div>
```

# Metody
**document** je objekt!
Kebab-case $\Rightarrow$ camelCase
## Hledání
`element.querySelector(selector)` - vrací referenci na první shodu
`element.querySelectorAll(selectors)` - vrací referenci na všechny shody (NodeList). NENÍ TO LIST. JE TO NAPŮL LIST. List lze udělat `Array.from()`


```js
document.getElementById(".id") //podle ID
document.title = ""
document.body.style.backgroundColor = "rgb(0,0,0)"
// Změna textu
const welcome = document.getElementById("msg");
let username = "user";
welcome.textcontent = `Hello ${username}`;
welcome.style.color = "black"
```

### Rozdíl v hledání
*Gemini*
- **Adresa (DOM cesta):** "Ten dům na konci ulice, modré dveře, druhý pokoj vlevo." (To je složité na hledání).
- **Reference (Proměnná):** Máš to číslo uložené v kontaktech pod jménem `div`. Je ti jedno, kde ten člověk zrovna bydlí (jestli je v obýváku, v `body`, nebo ještě v taxíku na cestě). Prostě mu zavoláš.
## Vytvoření a umístění
```js
const div = document.createElement("div");
div.textContent = "Ahoj";
document.body.appendChild(div);
```
### Metody vytvoření a umístění
```js
.append() //konec
.prepend() //start
.before() //před prvek
.after() //za prvek
```
## ID v HTML
 ```html
 div.setAttribute("id", "theDiv");
 
 <div id="theDiv"></div>
 ```

`div.getAttribute("id");`
Přečte id divu
`div.removeAttribute("id");`
Odstraní  id divu
## Class v HTML
```js 
// adds class "new" to your new div
div.classList.add("new");

// removes "new" class from div
div.classList.remove("new");

// if div doesn't have class "active" then add it, or if it does, then remove it
div.classList.toggle("active");

```

## Tvorba textu a contentu
```js
// creates a text node containing "Hello World!" and inserts it in div
div.textContent = "Hello World!";

// renders the HTML inside div
div.innerHTML = "<span>Hello World!</span>";

```

# Events

## Inline
*gemini*
```html
<button onclick="alert('Ahoj')">Klikni</button>
```
- **Proč to (ne)chtít:** Je to jako psát logiku programu přímo do Excelové buňky. Je to rychlé, ale jakmile máš 50 tlačítek, zblázníš se z toho.
- **Problém:** V HTML máš místo pro **pouze jeden** `onclick`. Pokud tam chceš dvě věci najednou, máš smůlu.
- To lze udělat i v JS
```js
const btn = document.querySelector("");
btn.onclick = () => alert("Ahoj");
```
## Event listener
```js 
const btn = document.querySelector("");

btn.addEventListener("click", () => {
  alert("První akce!");
});

btn.addEventListener("click", () => {
  console.log("Druhá akce, co se stane zároveň!");
});
// callback
function adddiv (){
	const div = document.createElement("div");
	div.textContent = "Ahoj";
	document.body.appendChild(div);
}
btn.addEventListener("click", adddiv);
```
---
```html
<div id="container">
  <button id="one">Click Me</button>
  <button id="two">Click Me</button>
  <button id="three">Click Me</button>
</div>
```
```js
// buttons is a node list. It looks and acts much like an array.
const buttons = document.querySelectorAll("button");

// we use the .forEach method to iterate through each button
buttons.forEach((button) => {
  // and for each one we add a 'click' listener
  button.addEventListener("click", () => {
    alert(button.id);
  });
});
```

### Event - přehled
```js
//Myš
click/dblclick (dbl - double)
mouseenter/mouseleave
mousedown/mouseup (drag+drop)
//Klávesnice
keydown/keyup
// Form
input - při každé změně v textovém poli
change - jiný focus
submit
// Okno
scroll - scrolluje
DOMContentLoaded - Hej, HTML je načtené a připravené!

```