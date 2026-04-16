```python
with open(INPUT_FILE) as f:
    stanice = list(map(int, f.read().split()))
```

- `f.read()` — přečte celý soubor jako text: `"8 1 4 5 1 1 4 5 6"`
- `.split()` — rozdělí podle mezer: `["8","1","4",...]`
- `map(int, ...)` — převede každý string na číslo
- `list(...)` — z toho udělá seznam: `[8,1,4,5,1,1,4,5,6]`

```python
pocty = Counter(stanice)
```
Výsledek: `{1:3, 4:2, 5:2, 6:1, 8:1}` — klíč je číslo stanice, hodnota je kolikrát se vyskytuje.