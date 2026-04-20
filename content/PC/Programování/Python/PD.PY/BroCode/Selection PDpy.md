```python
print(df["Height"].to_string()) #sloupec
print(df[["Height", "Weight"]].to_string()) #sloupce
print(df.loc["Charizard"])#řádek
print(df.loc["Charizard", ["Height", "Weight"]])#řádek s některýmy sloupci
print(df.loc["Charizard":"Blastoise", ["Height", "Weight"]])
# Nebo iloc
```