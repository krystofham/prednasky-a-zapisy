# Groupwise
``groupby()``
- **Split (Rozdělení):** Vybereš sloupec, podle kterého chceš seskupovat.
    - `reviews.groupby('points')`
- **Apply (Aplikace):** Vybereš, co tě zajímá, a zvolíš funkci (matematickou operaci).
    - `.price.min()` (nejlevnější víno pro každý počet bodů)
- **Combine (Spojení):** Pandas automaticky spojí výsledky do nové tabulky nebo řady.
`reviews.groupby('points').price.min()`
`reviews.groupby('winery').apply(lambda df: df.title.iloc[0])`
