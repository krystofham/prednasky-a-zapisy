**Create, Read, Update, Delete (CRUD)**
PŘEŽIJE ZAVŘENÍ POČÍTAČE



# `localStorage` a `sessionStorage` Properties


|Local Storage|Session Storage|
|---|---|---|
|Zavření záložky|✅ přežije|❌ smaže se|
|Zavření prohlížeče|✅ přežije|❌ smaže se|
|Obnovení stránky|✅ přežije|✅ přežije|

## local storage
```js
localStorage.setItem('username', 'codingRules');

let username = localStorage.getItem('username');
console.log(username); // codingRules

localStorage.removeItem('username');

localStorage.clear();
sessionStorage.setItem('cart', '3 items');
```

## session storage
```js
sessionStorage.setItem('cart', '3 items');

let cart = sessionStorage.getItem('cart');
console.log(cart); // '3 items'

sessionStorage.removeItem('cart');

sessionStorage.clear();
```

# Cookies
```js
document.cookie = "organization=freeCodeCamp; expires=Fri, 31 Dec 2021 23:59:59 GMT; path=/";
//Delete cookie
document.cookie = "username=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/";
```

# Cache API
- umožnuje ukládá t do mezipaměti a fungovat i offline
- neukladat hesla
