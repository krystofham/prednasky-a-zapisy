```python
pd.Series([11,12,23], index=["a","b","c"])
print(series.loc["a"]) # 11
print(series.iloc[0]) # 11
print(series[series >= 2]) # filtr pro vští než 2

# series lze přímo vytvoř z dictionary

```