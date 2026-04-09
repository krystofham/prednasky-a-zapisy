# Set
Manage data collection

```js
const set = new Set([1, 2, 3, 4, 5]);
console.log(set);
```
## Metody
- `add()`: Adds a new element to the `Set`.
- `delete()`: Removes an element from the `Set`.
- `has()`: Checks if an element exists in the `Set`.
- `clear()`: Removes all elements from the `Set`.
- `keys()` and `values()`: Both returns a `SetIterator` that contains the values of the `Set`. They are the same because `keys()` is an alias for `values()`.
- `forEach()`: for iterating over the values of the `Set`.
# WeakSets
- Memory use, na hovno
# Maps
- key-value pair
- Stejný princip jako [[Dictionary PY]]
```js
const map = new Map([
  ['flower', 'rose'],
  ['fruit', 'apple'],
  ['vegetable', 'carrot']
]);
console.log(map); // Map(3) { 'flower' => 'rose', 'fruit' => 'apple', 'vegetable' => 'carrot' }
```
## Metody
- `set()`: Adds a new key-value pair to the `Map`.
- `get()`: Retrieves the value of a key from the `Map`.
- `delete()`: Removes a key-value pair from the `Map`.
- `has()`: Checks if a key exists in the `Map`.
- `clear()`: Removes all key-value pairs from the `Map`.
# WeakMaps
- Memory use, na hovno