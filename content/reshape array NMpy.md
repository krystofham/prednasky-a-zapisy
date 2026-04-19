```python
array = np.array([1,2,3,4])
array = array.reshape(2,2) #2*2 = 4
print(array)
# [[1,2],[3,4]]
array = array.reshape(-1,1)
[[1]  
[2]  
[3]  
[4]]
```