# Python – modul requests

`requests` není součástí standardní knihovny – musí se nainstalovat.

## Instalace
```python
pip install requests
```
## Get
```python
import requests

# Základní GET
r = requests.get('http://server.com')

# GET s parametry (jdou automaticky do URL)
r = requests.get('http://server.com/file', params={'name': 'app.py'})
# výsledná URL: http://server.com/file?name=app.py

# Více parametrů
r = requests.get('http://server.com/search', params={
    'query': 'python',
    'page': 2,
    'sort': 'date'
})
# → /search?query=python&page=2&sort=date
```
## Post
```python
# POST formulářová data
r = requests.post('http://server.com/login', data={
    'username': 'admin',
    'password': 'heslo'
})

# POST JSON data
r = requests.post('http://server.com/api', json={
    'username': 'admin',
    'password': 'heslo'
})
```
## Hlavičky a cookies
```python
# Vlastní hlavičky
r = requests.get('http://server.com', headers={
    'User-Agent': 'Mozilla/5.0',
    'Authorization': 'Bearer token123'
})

# Cookies
r = requests.get('http://server.com', cookies={
    'session': 'abc123'
})
```
## Session – udržuj přihlášení

```python
# Session automaticky ukládá cookies mezi požadavky
s = requests.Session()

# Přihlaš se
s.post('http://server.com/login', data={'username': 'admin', 'password': 'heslo'})

# Teď jsi přihlášen – cookies se přenáší automaticky
r = s.get('http://server.com/admin')
print(r.text)
```
## Práce s odpovědí
```python
r = requests.get('http://server.com')

r.status_code       # stavový kód: 200, 302, 404...
r.text              # tělo odpovědi jako string (HTML)
r.content           # tělo odpovědi jako bytes (pro binární soubory)
r.json()            # parsuj JSON odpověď
r.headers           # slovník hlaviček odpovědi
r.cookies           # cookies které server nastavil
r.url               # finální URL (po redirectech)
r.history           # seznam redirectů
```
## Stažení bin
```python
r = requests.get('http://server.com/file?name=db.sqlite')
with open('db.sqlite', 'wb') as f:
    f.write(r.content)   # .content místo .text pro binární data
```
