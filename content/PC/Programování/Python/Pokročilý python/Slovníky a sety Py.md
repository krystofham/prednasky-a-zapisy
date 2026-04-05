# Slovník 
[[Dictionary PY]]
# Sety
- kolekce unikátních prvků
- Není index
- optimalizované
# Linked list
- Spojený list tvořený uzly
```python
class Uzel:
    def __init__(self, data):
        self.data = data
        self.next = None  # Zatím nikam neukazuje

# Vytvoříme uzly
uzel1 = Uzel("Banán")
uzel2 = Uzel("Jablko")
uzel3 = Uzel("Pomeranč")

# Propojíme je (vytvoříme řetěz)
uzel1.next = uzel2
uzel2.next = uzel3

# Teď uzel1 ví o uzel2, ale neví o uzel3 (musí se k němu dopátrat)
```
# Deque
V Pythonu ji najdeš v modulu `collections`. Použij ji vždy, když:

1. Potřebuješ **frontu** (první přijde, první odejde – FIFO).
2. Potřebuješ **zásobník** (poslední přijde, první odejde – LIFO).

```python
from collections import deque

# Vytvoření deque
d = deque([1, 2, 3])

# Operace na pravé straně (klasika)
d.append(4)      # [1, 2, 3, 4]
d.pop()         # odstraní 4

# Operace na levé straně (tady deque září!)
d.appendleft(0)  # [0, 1, 2, 3]
d.popleft()      # odstraní 0 a vrátí ji
```