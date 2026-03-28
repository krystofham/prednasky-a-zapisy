Nutnost
Funkce, která se posílá do další funkce
```js
function hello(callback){
	console.log("Hello");
	callback();
}
function goodbye(){
	console.log("goodbye");
}
hello(goodbye)
```

```js
function sum(callback, x, y){
	callback(x+y);
}
function display(a){
	console.log(a);
}
sum(display, 1, 2);
```