**Soubor metod a hodnot**
```js
const person1 {
	firstname:"Bob";
	lastname:"the Builder"
	isEmployed = true;
	sayHello: function(){console.log("Hello")},
} 
```
Přídání do objektu:
```js
const person = {
  name: "Alice",
  age: 30
};

person.job = "Engineer"
person["hobby"] = "Knitting"
console.log(person);  // {name: 'Alice', age: 30, job: 'Engineer', hobby: 'Knitting'}
```
# Mazání v objektu
```js
const person = {
  name: "Alice",
  age: 30,
  job: "Engineer"
};
delete person.job;
console.log(person.job); // undefined
```
# Kontrola
```js
const person = {
  name: "Alice",
  age: 30
};

console.log(person.hasOwnProperty("name")); // true
console.log(person.hasOwnProperty("job")); // false

console.log(Object.hasOwn(person, "name")); // true
console.log(Object.hasOwn(person, "job")); // false
```
# Vnořené objekty
```js
const person = {
  name: "Alice",
  age: 30,
  contact: {
    email: "alice@example.com",
    phone: {
      home: "123-456-7890",
      work: "098-765-4321"
    }
  }
};
//BEZPEČNĚ
console.log(user.profile?.address?.street); // "123 Main St"
console.log(user.profile?.phone?.number);   // undefined
```
# This
```js
const person = {
  name: "Bob",
  age: 30,
  sayHello: function() {
    return "Hello, my name is " + this.name;
  }
};

console.log(person.sayHello()); // "Hello, my name is Bob"
```
# JSON
```json
{
  "name": "Alice",
  "age": 30,
  "isStudent": false,
  "list of courses": ["Mathematics", "Physics", "Computer Science"]
}
```
## Koverze 
```js
const user = {
  name: "John",
  age: 30,
  isAdmin: true
};

const jsonString = JSON.stringify(user);
//Poté
const jsonString = '{"name":"John","age":30,"isAdmin":true}';
const userObject = JSON.parse(jsonString);

// result: { name: 'John', age: 30, isAdmin: true }
console.log(userObject);
```json
console.log(jsonString); // '{"name":"John","age":30,"isAdmin":true}'
