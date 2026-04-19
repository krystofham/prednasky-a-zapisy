```python
array = np.array("a")
print(array.ndim)
# 0
# 0 dimenzí
array = np.array([])
print(array.ndim)
# 1
array = np.array([
[], []
])
print(array.ndim)
# 2
# nutnost konzistence pro 3D. Pokud má nějký elemenent 2 prvky a zbytek tři => error
print(array.shape)
# (3,3)
print(array[0][0])
print(array[0,0])
```