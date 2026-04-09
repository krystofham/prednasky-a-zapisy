# Pattern
```js
const regex = /freeCodeCamp/;
```
# test()
hledání
```js
const regex = /freeCodeCamp/;
const test = regex.test("e");
console.log(test); // false
```
# replace()

```js
const regex = /Jessica/;
const str = "Jessica is rly kewl";
const replaced = str.replace(regex, "freeCodeCamp");
console.log(replaced); // "freeCodeCamp is rly kewl"
```

## replaceAll()


```js
const text = "I hate JavaScript! I hate programming!";
const newText = text.replaceAll("hate", "love");
console.log(newText);  // "I love JavaScript! I love programming!"
```

# Flags

```js
const regex = /freeCodeCamp/i;
```

| Flag                    | meaning                                          |
| ----------------------- | ------------------------------------------------ |
| i                       | case insensitive                                 |
| g                       | více nálezů                                      |
| ^ (začátek)             | pouze explicitní shoda na začátku                |
| $ (konec před závorkou) | pouze explicitní shoda na konci                  |
| m                       | stejně jako ^ $ ale na řádek                     |
| d                       | verbose                                          |
| (.+)                    | zachycení textu                                  |
| .                       | jakýkoliv jeden znak (písmeno, číslo, mezera...) |
| +                       | "jeden nebo více"                                |
| ( )                     | skupina                                          |
