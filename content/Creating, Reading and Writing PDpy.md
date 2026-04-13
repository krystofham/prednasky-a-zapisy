import pandas as pd
# Data
Dva klíčové objekty
## DataFrame
- Tabulka
```python
pd.DataFrame({'Yes': [50, 21], 'No': [131, 2]})
```

|     | Yes | No  |
| --- | --- | --- |
| 0   | 50  | 131 |
| 1   | 21  | 2   |

```python
pd.DataFrame(
	{
	'Bob': ['I liked it.', 'It was awful.'], 
	'Sue': ['Pretty good.', 'Bland.']
	},
    index=['Product A', 'Product B']
)             
```

|Bob|Sue|
|---|---|---|
|Product A|I liked it.|Pretty good.|
|Product B|It was awful.|Bland.|
## Series
- Single column dataframe
`pd.Series([1, 2, 3, 4, 5])`
0    1
1    2
2    3
3    4
4    5
dtype: int64

`pd.Series([30, 35, 40], index=['2015 Sales', '2016 Sales', '2017 Sales'], name='Product A')`
2015 Sales    30
2016 Sales    35
2017 Sales    40
Name: Product A, dtype: int64
# CSV read
`wine_reviews = pd.read_csv("../input/wine-reviews/winemag-data-130k-v2.csv")`
# velikost
`wine_reviews.shape`
(129971, 14)
$130000*14 = 2*10^6$
# head
`wine_reviews.head()`
Prvních pět řádků
