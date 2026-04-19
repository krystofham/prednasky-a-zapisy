```python
array1 = np.array([[1,2,3,4]])
array2 = np.array([[1],[2],[3],[4]])
print(array1.shape)
print(array2.shape)
# 1,4
# 4,1
print(array1*array2)
[[ 1  2  3  4]  
[ 2  4  6  8]  
[ 3  6  9 12]  
[ 4  8 12 16]]
# Musí být správně škálovatelné
# Bud jsou stejné, nebo je to 1
```