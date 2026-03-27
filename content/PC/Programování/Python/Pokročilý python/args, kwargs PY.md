---
permalink: args,-kwargs-PY
---
Nutnost: [[Dictionary PY]], seznamy, funkce python (pouze [[Funkce JS]] v JS, jiná syntax, podobný meaning)
SRC: https://www.youtube.com/watch?v=4jBJhCaNrWU

```python
*args
**kwargs
```

**Unpacking**
```python
nums = [1,2,3]
print(nums)
# [1,2,3]
print(*nums)
# 1,2,3
```
## Args

```js
function (...args) {
	console.log(...args)
	return args
}
```

```python
def order_pizza(velikost, *polevy):
	print(f"Objednal sis {velikost} pizzu.")
	print("Polevy:)
	for x in polevy:
		print(x)
```
polevy jsou args. Bere jakékoliv množství.

## Kwargs

```python
def order_pizza(velikost, *polevy, **detaily):
	print(f"Objednal sis {velikost} pizzu.")
	print("Polevy:)
	for x in polevy:
		print(x)
	print("Detaily")
	for key, value in details.items():
		print(key, value)
order_pizza(delivery=True, tip=5) 
```

Detaily jsou kwargs, bere dictionary
