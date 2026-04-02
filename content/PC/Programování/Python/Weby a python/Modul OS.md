`os` je standardní modul pro komunikaci s operačním systémem. Musí se importovat.
## Import
```python
import os
```
## Příkazy

```python
# system() - spustí příkaz, vrátí jen exit code (0 = OK)
exit_code = os.system('dir')

# popen() - spustí příkaz, vrátí výstup jako file-like objekt
output = os.popen('dir').read()      # .read() převede na string
print(output)

# Windows vs Linux
os.popen('dir').read()               # Windows – výpis adresáře
os.popen('ls').read()                # Linux
os.popen('type soubor.txt').read()   # Windows – obsah souboru
os.popen('cat soubor.txt').read()    # Linux
os.popen('whoami').read()            # kdo jsem (obě platformy)
os.popen('ipconfig').read()          # Windows – síťové info
os.popen('ifconfig').read()          # Linux
```
## Cesty

```python
os.getcwd()                          # aktuální adresář
os.listdir('.')                      # seznam souborů v adresáři
os.listdir('C:/Users')               # seznam souborů v zadaném adresáři
os.path.exists('app.py')             # existuje soubor? → True/False
os.path.join('složka', 'soubor.py') # sestav cestu správně pro OS
os.path.abspath('app.py')           # absolutní cesta
os.path.dirname('/cesta/app.py')    # → '/cesta'
os.path.basename('/cesta/app.py')   # → 'app.py'
```
## proměnné prostředí
```python
os.environ                           # slovník všech env proměnných
os.environ['PATH']                   # čti konkrétní proměnnou
os.environ.get('SECRET_KEY', '')     # bezpečně – s výchozí hodnotou
os.environ['MOJE'] = 'hodnota'      # nastav proměnnou
```

## Info o systému

```python
os.name                              # 'nt' = Windows, 'posix' = Linux/Mac
os.getpid()                          # PID aktuálního procesu
os.cpu_count()                       # počet CPU
```