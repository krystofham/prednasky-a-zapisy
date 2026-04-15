# Co to je:
- Dělat **ideální možnost v aktuálním kroku**
- Hladový algoritmus
- Bez zpětných úprav
# Kdy použít?
nejlepší krok teď vede k nejlepšímu výsledku
Budoucnost NEovlivní aktuální kód.Nen
# Příklad
```python
def activity_selection(activities):
    # seřadíme podle času konce
    activities.sort(key=lambda x: x[1])

    result = []
    last_end = 0

    for start, end in activities:
        if start >= last_end:
            result.append((start, end))
            last_end = end

    return result
activities = [(1, 3), (2, 5), (4, 7), (6, 9), (8, 10)]

selected = activity_selection(activities)
print(selected)
```