curl je nástroj příkazového řádku pro posílání HTTP požadavků.
## Základní použití
```bash
# GET požadavek
curl http://server.com

# GET s parametry v URL
curl "http://server.com/file?name=app.py"

# Zobraz hlavičky odpovědi (-v = verbose)
curl -v http://server.com

# Ulož výstup do souboru
curl http://server.com/file --output soubor.txt

# Sleduj přesměrování
curl -L http://server.com
```
## POST požadavky
```bash
# Základní POST (formulářová data)
curl -X POST http://server.com/login \
  -d "username=admin&password=heslo"

# POST s Content-Type hlavičkou (správně pro formuláře)
curl -X POST http://server.com/login \
  -H "Content-Type: application/x-www-form-urlencoded" \
  -d "username=admin&password=heslo"

# POST s JSON
curl -X POST http://server.com/api \
  -H "Content-Type: application/json" \
  -d '{"username": "admin", "password": "heslo"}'
```
## Hlavička

```bash
# Přidej vlastní hlavičku
curl http://server.com \
  -H "User-Agent: Mozilla/5.0" \
  -H "Authorization: Bearer token123"

# Pošli cookie
curl http://server.com \
  -H "Cookie: session=abc123"

# Ulož a načti cookies automaticky
curl -c cookies.txt http://server.com/login   # ulož cookies
curl -b cookies.txt http://server.com/admin   # použij cookies
```

## Přepínače

```bash
-v          # verbose – zobraz celý request i response včetně hlaviček
-s          # silent – skryj progress bar
-o soubor   # ulož output do souboru
-L          # follow redirects
-X POST     # nastav metodu
-d "data"   # tělo požadavku
-H "hlavička: hodnota"  # přidej hlavičku
-b "cookie" # pošli cookie
-c soubor   # ulož cookies do souboru
--output    # ulož binární soubor (databáze, obrázky)e
```