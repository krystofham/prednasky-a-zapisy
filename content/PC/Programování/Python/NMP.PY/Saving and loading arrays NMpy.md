```python
np.save("data", name_of_array)
#tvoří data.npv
np.load(...)

np.savez("data", array1, array2, etc)
#Npz
a = np.load("daat.npz")
array = a["arr_0"]
```