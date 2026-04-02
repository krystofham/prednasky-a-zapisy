---
tags:
  - container
  - container
  - container
  - btn
  - btn
---
DOM = Document Object Model
Dává API na komunikaci
# Metody
**document** je objekt!
Kebab-case $\Rightarrow$ camelCase
## Hledání
### getElementById()
PODLE ID V HTML
```js
const container = document.getElementById("container");
console.log(container)
```
### querySelector()
PODLE CLASS A ID V HTML
```js
const section = document.querySelector(".section");
console.log(section)
```
### querySelectorAll() 
```js
const ingredients = document.querySelectorAll('ul.ingredients li');
console.log(ingredients)
```
## Získání obsahu
### innerHTML()
```html
<div id="container">
  <!-- Add new elements here -->
</div>
<script src="./index.js"></script>
```
```js
const container = document.getElementById("container");
container.innerHTML = '<ul><li>Cheese</li><li>Tomato</li></ul>';
```
### createElement()
```js
const img = document.createElement("img");
```
### innerText()
```js
const container = document.getElementById("container");
console.log(container.innerText);
```
### textContent()
```js
const container = document.getElementById("container");
console.log(container.textContent);
```
## Tvorba elementů
### appendChild()
```js
const dessertsList = document.getElementById("desserts");
const listItem = document.createElement("li");

listItem.textContent = "Cookies";
dessertsList.appendChild(listItem);
```
### removeChild()
```html
<section id="example-section">
  <h2>Example sub heading</h2>
  <p>first paragraph</p>
  <p>second paragraph</p>
</section>
<script src="./index.js"></script>
```
```js
const sectionEl = document.getElementById("example-section");
const lastParagraph = document.querySelector("#example-section p:last-of-type");

sectionEl.removeChild(lastParagraph);
```
## Event
### addEventListener()
```js
const btn = document.getElementById("btn");

btn.addEventListener("click", () => alert("You clicked the button"));
```
### removeEventListener()
```js
const bodyEl = document.querySelector("body");
const para = document.getElementById("para");
const btn = document.getElementById("btn");

let isBgColorGrey = true;

function toggleBgColor() {
  bodyEl.style.backgroundColor = isBgColorGrey ? "blue" : "grey";
  isBgColorGrey = !isBgColorGrey;
}

btn.addEventListener("click", toggleBgColor);

para.addEventListener("mouseover", () => {
  btn.removeEventListener("click", toggleBgColor);
});
```
### Change()
```js
const selectEl = document.querySelector(".language");
const result = document.querySelector(".result");

selectEl.addEventListener("change", (e) => {
  result.textContent = `You enjoy programming in ${e.target.value}.`;
});
```
```html
<label>
  Choose a programming language:
  <select class="language" name="language">
    <option value="">---Select One---</option>
    <option value="JavaScript">JavaScript</option>
    <option value="Python">Python</option>
    <option value="C++">C++</option>
  </select>
</label>

<p class="result"></p>
```
## Time
### setTimeout()

```js
setTimeout(() => {
 console.log('This runs after 3 seconds'); 
}, 3000);
```
### set interval ()
```js
setInterval(() => {
 console.log('This runs every 2 seconds');
}, 2000);
```
## Animace
### requestAnimationFrame()
podobné setinterval, lépe optimalizované
```js
function animate() {
 // Update the animation...
 // for example, move an element, change a style, and more.
 update();
 // Request the next frame
 requestAnimationFrame(animate);
}
```
### Web animations API
```js
const square = document.querySelector('#square');

const animation = square.animate(
 [{ transform: 'translateX(0px)' }, { transform: 'translateX(100px)' }],
 {
   duration: 2000, // makes animation lasts 2 seconds
   iterations: Infinity, // loops indefinitely
   direction: 'alternate', // moves back and forth
   easing: 'ease-in-out', // smooth easing
 }
);
animation.pause()
animation.play()
animation.reverse()
animation.cancel()
```
### Canvas
Obrázky. Nutný canvas element
```js
const canvas = document.getElementById('my-canvas');

// Access the drawing context of the canvas. 
// "2d" allows you to draw in two dimensions 
const ctx = canvas.getContext('2d');

// Set the background color
ctx.fillStyle = 'crimson';

// Draw a rectangle
ctx.fillRect(1, 1, 150, 100);
```
## Modals
### showModal()
```html
<dialog id="my-modal">
   <p>This is a modal dialog.</p>
</dialog>
<button id="open-modal">Open Modal Dialog</button>
<script src="./index.js"></script>
```
```js
const dialog = document.getElementById('my-modal');
const openButton = document.getElementById('open-modal');

openButton.addEventListener('click', () => {
  dialog.showModal();
});
```
### close()
```js
const dialog = document.getElementById('my-modal');
const openButton = document.getElementById('open-modal');
const closeButton = document.getElementById('close-modal');

openButton.addEventListener('click', () => {
  dialog.show();
});

closeButton.addEventListener('click', () => {
  dialog.close();
});
```
