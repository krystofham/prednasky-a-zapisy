```python
array = np.zeros(10)
[0. 0. 0. 0. 0. 0. 0. 0. 0. 0.]
array = np.ones((1,3,4))

array = np.full((1,3,4), 9)
[[[9 9 9 9]  
 [9 9 9 9]  
 [9 9 9 9]]]
 
array = np.eye(4)
[[1. 0. 0. 0.]  
[0. 1. 0. 0.]  
[0. 0. 1. 0.]  
[0. 0. 0. 1.]]
# do čtverce

np.empty((2,3))  
[[ 1.79769313e+308 -1.79769313e+308  2.00000000e+000]  
[ 2.22044605e-016  2.22507386e-308  4.94065646e-324]]
# Rychlejší, ale random balast

np.arange(0,10,2) #start, stop, step
[0 2 4 6 8]

np.linspace(0,10,5) # rozdělí na pět částí 
[ 0.   2.5  5.   7.5 10. ]
```
# aggregate functions
```python
np.sum(array)
np.mean(array)
np.median(array)
np.std(array) #rozptyl
np.min(array)
np.max(array)
np.argmin(array) #index
np.argmax(array)
np.sum(array, axis=1) #radky, 0 pro sloupce
```