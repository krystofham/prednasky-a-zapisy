# Groupwise
``groupby()``
- **Split (Rozdělení):** Vybereš sloupec, podle kterého chceš seskupovat.
    - `reviews.groupby('points')`
- **Apply (Aplikace):** Vybereš, co tě zajímá, a zvolíš funkci (matematickou operaci).
    - `.price.min()` (nejlevnější víno pro každý počet bodů)
- **Combine (Spojení):** Pandas automaticky spojí výsledky do nové tabulky nebo řady.
`reviews.groupby('points').price.min()`
Seznam, kde uvidíš každý počet bodů (např. 80, 81... 100) a u něj **cenu úplně nejlevnějšího vína**, které toto hodnocení dostalo.

`reviews.groupby('winery').apply(lambda df: df.title.iloc[0])`

Seznam všech vinařství. U každého vinařství uvidíš **název (title) prvního vína**, na které Pandas v tabulce narazil.

`reviews.groupby(['country', 'province']).apply(lambda df: df.loc[df.points.idxmax()])`

"Výběr šampionů". Pro každý stát a jeho provincii (např. Itálie -> Toskánsko) to najde **celý řádek s nejlépe hodnoceným vínem**.
`reviews.groupby(['country']).price.agg([len, min, max])`

"Statistický přehled cen podle zemí". Pro každý stát uvidíš tabulku, která má tři sloupce.
# sorting
```python
countries_reviewed = countries_reviewed.reset_index()
# Index se změní na obyčejná čísla (0, 1, 2...)

countries_reviewed.sort_values(by='len')
# Seřadí tabulku podle sloupce `len` (počet recenzí). od nejmenšího po největší

countries_reviewed.sort_values(by='len', ascending=False)
# Sestupně (**od největšího po nejmenší**).

countries_reviewed.sort_index()
# Pokud jsi předtím udělal `reset_index()`, seřadí se to podle těch čísel 0, 1, 2...

countries_reviewed.sort_values(by=['country', 'len'])
# Nejdříve seřaď všechna data abecedně podle `country`. Pokud by se stalo, že by jedna země měla víc řádků (což v tomto případě po groupby nemá, ale obecně ano), tak tyto řádky v rámci té země seřadí podle `len`.
```
# value counts
- **jablko:** 3
    
- **banán:** 2
    
- **pomeranč:** 1