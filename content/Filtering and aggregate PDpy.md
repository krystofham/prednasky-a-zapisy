# Filter
```python
tall_pokemon = df[df["Height"]>2]
tall_and_heavy = df[(df["Height"]>2) & (df["Weight"]>100)]
```
# Aggregate
```python
df.mean(numeric_only=True)
# Vrátí series s hodnotami
df.sum(numeric_only=True)
df.min(numeric_only=True)
df.max(numeric_only=True)
df.count()

df["Height"].mean()

group = df.groupby("Type1") #Objekt
group["Height"].mean()
# Series podle typu
```