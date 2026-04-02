[[Python request]]
## HTTP metody

HTTP je protokol – domluvený jazyk mezi prohlížečem a serverem. Každý požadavek má **metodu** která říká co chceme udělat.
### GET
Žádám server o data. Parametry jsou viditelné v URL.
```
GET /search?query=python&page=2 HTTP/1.1
Host: google.com
```

- Používá se pro čtení stránek, vyhledávání, načítání souborů
- Lze bookmarkovat, sdílet URL
- Nikdy pro hesla – URL je vidět v historii, logu serveru

### POST
Posílám data serveru. Parametry jsou skryté v těle požadavku.
```
POST /login HTTP/1.1
Host: server.com
Content-Type: application/x-www-form-urlencoded

username=admin&password=heslo
```
- Používá se pro přihlášení, formuláře, vytváření dat
- Data nejsou v URL
- Může posílat velká data (soubory atd.)

### Další metody (méně časté)

- `PUT` – aktualizuj existující data
- `DELETE` – smaž data
- `PATCH` – částečná aktualizace
- `OPTIONS` – zjisti co server podporuje
- `HEAD` – jako GET ale bez těla odpovědi

## HTTP Request struktura
```
METODA /cesta HTTP/1.1
Host: server.com
Content-Type: application/x-www-form-urlencoded
User-Agent: Mozilla/5.0
Cookie: session=abc123

tělo požadavku (jen u POST, PUT, PATCH)
```
## HTTP Response struktura
```
HTTP/1.1 200 OK
Content-Type: text/html
Set-Cookie: session=xyz

<!DOCTYPE html>...
```
## Stavové kódy
```
200 OK              – vše OK
301/302 Redirect    – přesměrování
400 Bad Request     – špatný požadavek
401 Unauthorized    – nejsi přihlášen
403 Forbidden       – nemáš oprávnění
404 Not Found       – stránka neexistuje
500 Internal Error  – chyba serveru
```
## Query string vs tělo

```
GET  /file?name=app.py&color=red    ← parametry v URL
POST /login                          ← parametry v těle
     username=admin&password=heslo
```