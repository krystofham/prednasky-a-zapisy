```python
df.drop(columns=["nazvy"])
df.dropna(subset=["Type2"]) #Každý pokemon co ma Nan type 2 smazat
df.fillna({"Type2":"None"}) #nahrazeni
df["Type1"] = df["Type1"].replace({"Grass":"GRASS"})
df["Type1"] = df["Type1"].str.upper()
df.drop_duplicates()
```