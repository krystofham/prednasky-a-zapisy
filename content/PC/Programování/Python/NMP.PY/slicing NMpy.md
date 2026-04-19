```python
import numpy as np  
array = np.array([  
	[1,2,5,5,6],  
	[3,4,3,3,4]  
])  
# array[start:end:step]  
print(array[1][1:4:2])    
# [4 3]
print(array[:,0])    
# [1,3]
print(array[:,0:3:2])
[[1 5]  
[3 3]]
```