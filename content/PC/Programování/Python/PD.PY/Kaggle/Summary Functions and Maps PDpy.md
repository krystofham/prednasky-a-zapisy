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

reviews.head(1) //jeden řádek

```

# Map
```python
reviews.points.map(lambda p: p - review_points_mean)

reviews.country + " - " + reviews.region_1

reviews.country.value_counts()
```

# Příklad
```python
# Calculate the mean of the price column first
review_price_mean = reviews.price.mean()

# Subtract the mean from every value in the price column
centered_price = reviews.price - review_price_mean
```

```python
def get_stars(row): 
	if row.country == 'Canada': 
		return 3 
	elif row.points >= 95: 
		return 3 
	elif row.points >= 85: 
		return 2 
	else: 
		return 1 
		# Aplikujeme funkci na každý řádek (axis='columns' nebo axis=1)
	star_ratings = reviews.apply(get_stars, axis='columns')
```
# Další funkce
`max()`
- Nejvyšší číslo
`idxmax()`
- Index nejvyššího čísla
`.sum()`
- Vrací kolikrát
`.contains()`
- Obsahuje
`.str()`
- Přepne na string