```python
teens = ages[ages < 18]
discount = ages[(ages < 18)|(ages>65)]
full = ages[(ages > 18)&(ages<65)]

adults = np.where(ages >= 18, ages, 0)
#(podmínka, list, nahrada)
#Nahrazení toho kde podmínka NENÍ
```