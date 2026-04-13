# Column first
Default

Pouze jeden column
1) `reviews.country`
2) `reviews['country']`
Pouze jeden prvek
`reviews['country'][0]`
# Row first
loc, iloc
## iloc
`reviews.iloc[0]` první řádek

```python
reviews.iloc[:, 0] == reviews['country']
// True
```
## loc
`df.loc['Anna']`
vrací podle indexu
# Manipulování indexu
`reviews.set_index("title")`
# Podmíněný výběr

```python
reviews.country == 'Italy'

0          True
1         False
          ...  
129969    False
129970    False
Name: country, Length: 129971, dtype: bool


reviews.loc[(reviews.country == 'Italy') | (reviews.points >= 90)]
// A zároveň

reviews.loc[reviews.country.isin(['Italy', 'France'])]

reviews.loc[reviews.price.notnull()]
```

# Přiřazení data
```python
reviews['critic'] = 'everyone'
reviews['critic']

0         everyone
1         everyone
            ...   
129969    everyone
129970    everyone
Name: critic, Length: 129971, dtype: object
```

