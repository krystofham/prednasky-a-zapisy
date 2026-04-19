dtype
argument, jaký je datový typ
nmpy defaultně hádá, když se setuje manuálně je to lepší.
# typy
```python
int8 / 16 / 32 / 64
float 16 /32/60
bool_
str_
object_
```

```python
array = np.array([1,2])
print(array)
#1 2
print(array.dtype)
# int64

array = np.array([1,2], dtype=np.int32)
# Pozor na overflow
```

```python
array =array.astype(np.float16)
# konverze
```