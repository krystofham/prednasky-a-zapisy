```python
import heapq

ukoly = []
# (priorita, nazev) - nižší číslo = vyšší priorita
heapq.heappush(ukoly, (3, "Uklidit pokoj"))
heapq.heappush(ukoly, (1, "Uhasit požár v kuchyni"))
heapq.heappush(ukoly, (2, "Napsat domácí úkol"))

# První vyjede požár, i když jsme ho přidali jako druhý
print(heapq.heappop(ukoly))  # Výstup: (1, 'Uhasit požár v kuchyni')
```

- **Seřazení seznamu (`sort`)**: Je náročné, protože musíš srovnat úplně všechno se vším.
- **Halda (`heapq`)**: Neudržuje seznam perfektně seřazený. Udržuje ho jen "tak akorát", aby věděla, kdo je nejmenší. Díky tomu je přidávání a odebírání prvků mnohem rychlejší, zejména když máš tisíce položek.