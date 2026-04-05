```js
const now = new Date();
console.log(now); // prints the current date and time
```
## **`Date.now()`**
returns the number of milliseconds since January 1, 1970, 00:00:00 UTC

# **`getDate()`**
```js
const now = new Date("2014-10-15");
const date = now.getDate();
console.log(date); // 15
```

# **`getMonth()`**
```js
const now = new Date("2014-10-15");
const month = now.getMonth();
console.log(month); // 9
```

## **`getFullYear()`**
```js
const now = new Date("2014-10-15");
const year = now.getFullYear();
console.log(year); // 2014
```

## `toLocaleDateString()`
```js
const date = new Date("2014-10-15");
const options = {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
};
console.log(date.toLocaleDateString("en-GB", options)); // "Wednesday, 15 October 2014"
//'cs-CZ'

```
