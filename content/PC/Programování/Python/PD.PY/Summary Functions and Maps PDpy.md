# Summary functions
```python
reviews.points.describe()
count    129971.000000
mean         88.447138
             ...      
75%          91.000000
max         100.000000
Name: points, Length: 8, dtype: float64


reviews.points.mean()
reviews.points.median()

reviews.taster_name.unique()
// array([...], dtype=object)


```

# Map
```python
reviews.points.map(lambda p: p - review_points_mean)

reviews.country + " - " + reviews.region_1

reviews.country.value_counts()
```
