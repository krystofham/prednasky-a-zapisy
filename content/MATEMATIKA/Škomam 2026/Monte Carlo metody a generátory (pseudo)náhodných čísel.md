**Autor**: L. Kapera
**Použití**: Kasino (především čistě náhodné hry např. ruleta a kostky), určité integrály
**Přístup**: Náhodné údaje, z toho pravděpodobnost
Náhodná dvojice (x, y) je *vzorek*. Po zpracování $n$ vzorků je pravděpodobnost $\frac{F_{S_1}}{n}$, kde F je počet vzorků patřící do plochy $S_1$, která je podmnožinou celé plochy.
**Odchylka**: 
n = počet simulací
$\vec{x} = \frac1n*\sum^n_{i=1} x_i$ (aritmetický průměr z dat)
Směrodatná odchylka je odmocnina všech rozdílů hodnot od matematického průměru poděleným o počet pokusů mínus 1
$$\sqrt{\frac{\sum_{i=1}^n(x_i - \vec x )^2}{n-1}}$$
## Příklad na směrodatnou odchylku 
Máme data 3, 3.15, 3.2, 3.5. Směrodatná odchylka?
Průměr je 3,2125.
Spočítáme rozdíl u každého data od průměru.
$x_1 \in \{-0.2125, -0.0625, -0.0125, 0,2875\}$
Druhé mocniny:
$x_1^2 \in \{0,04515625, 0,00390625, 0,00015625, 0,08265625\}$
Suma: 0,131 875
$o = \frac{suma}{n-1}=\frac{0,131875}{3}\approx 0,04395833333$
$\omega = \sqrt o \approx \sqrt{0,04395833333} \approx 0,2096624271$

---

**[[Fresnelovy integrály]]** - dálnice, horské dráhy - *eulerova spirála*
**Výpočet ceny opce** (právo něco koupit a něco prodat v nějaký čas za nějakou cenu)
# Opce

$N$= 100 akcií (počet)
$S_0$ = 40 euro (aktuální)
Nákupní garantovaná cena = 42 euro (za kolik nakupuju)
$t$ = 1 rok (čas)
$P$= 300 eur (3/akcie) (cena za opci)
Akcie $S_r = 55 \text{EUR} \rightarrow (55-40)*100 - 300$ (výpočet)
Drift - střední hodnot relativního výnosu [%] (za jak dlouho šla nahoru za rok)
Volatilita - směrodatná odchylka driftu r (den má 252 dní) $\sigma_{den} = \frac{\sigma_{rok}}{\sqrt {252}}$ [%] - krátkodobé
Platí že minulost *počítáme*, budoucnost *odhadujeme*.
*Fedora -> Desktop/python/monte_carlo
```
import numpy as np
# Parametry
S0 = 100 # Aktuální cena akcie
K = 105 # Strike cena (realizační cena)
T = 0.25 # Čas do splatnosti (3 měsíce = 0.25 roku)
r = 0.05 # Roční Drift(5 %)
sigma = 0.20 # Roční volatilita (20 %)
n_simulations = 100000
# 1. Generování náhodných šoků
z = np.random.standard_normal(n_simulations)
# 2. Výpočet koncových cen ST
# Všimni si, že T figuruje v driftu i v části s volatilitou
ST = S0 * np.exp((r - 0.5 * sigma**2) * T + sigma * np.sqrt(T) * z)
# 3. Výpočet výplaty (payoff)
# Výplata je max(S_T - K, 0)
payoffs = np.maximum(ST - K, 0)
# 4. Průměr a diskontování k dnešku
option_price = np.exp(-r * T) * np.mean(payoffs)
print(f"Odhadovaná cena evropské call opce (T=0.25): {option_price:.2f} €"
```
## Minulost 
$z = r\pm \sigma$ - historický výnos
z lze mít taky jako *náhodný šok*
$$S_r = S_0*e^{(r-\frac12\sigma^2)*T+{\sigma\sqrt{T}*z}}$$*Brownův model (více <a href="https://en.wikipedia.org/wiki/Brownian_model_of_financial_markets">zde - NA VLASTNÍ NEBEZPEČÍ</a> )*
*Black-Scholes model (<a href="https://en.wikipedia.org/wiki/Black%E2%80%93Scholes_model">zde</a>)*
Používá Gaussovu distribuci ([[Gaussův vzorec]]) 
Viz Monte Carlo na moji Fedoře

```
import pandas as pd
import matplotlib
matplotlib.use('module://matplotlib_inline.backend_inline')
from collections import Counter
import matplotlib.pyplot as plt
import math
import random
def count_volatility_and_drift(prices):
    # Máš historické ceny: [100, 102, 98, 103, 101...]
    # Spočítáš logaritmické výnosy
    returns = []
    for i in range(1, len(prices)):
        r = math.log(prices[i] / prices[i-1])
        returns.append(r)
    
    # Drift = průměrný výnos * 252 (trading days)
    drift = sum(returns) / len(returns) * 252
    
    # Volatilita = std. odchylka výnosů * sqrt(252)
    volatility = miss(returns) * math.sqrt(252)  # tvoje miss funkce je std. odchylka
    return drift, volatility
def miss(lis):
    number = 0
    for x in lis:
        number +=x
    average = number/len(lis)
    semi_list = []
    for x in lis:
        if (x-average)**2 < 0:
           semi_list.append((average-x)**2)
        else:
            semi_list.append((x-average)**2)
    number = 0
    for x in semi_list:
        number+=x
    return math.sqrt(number/len(lis))
def count(stock_price, strike_price, time, volatility, drift, simulation):
    stock_prices = []
    for x in range(simulation):
        z = random.gauss(0,1)
        u = time*(drift-0.5*volatility**2)+volatility*math.sqrt(time)*z
        new_stock = stock_price*math.e**(u)
        stock_prices.append(new_stock)
    mis = 0
    mis = miss(stock_prices)
    ave = 0
    for x in stock_prices:
        ave+=x
    return ave/(len(stock_prices)+1), mis
def count_all_data(stock_price, strike_price, time, volatility, drift, simulation):
    stock_prices = []
    for x in range(simulation):
        z = random.gauss(0,1)
        u = time*(drift-0.5*volatility**2)+volatility*math.sqrt(time)*z
        new_stock = stock_price*math.e**(u)
        stock_prices.append(new_stock)

    return stock_prices
def filter_outliers(data, percentile_low=1, percentile_high=99):
    """
    Odfiltruje extrémní hodnoty mimo percentily
    """
    data_sorted = sorted(data)
    n = len(data_sorted)
    low_idx = int(n * percentile_low / 100)  # ← PŘIDEJ /100
    high_idx = int(n * percentile_high / 100)  # ← PŘIDEJ /100
    
    low_bound = data_sorted[low_idx]
    high_bound = data_sorted[high_idx]
    
    return [x for x in data if low_bound <= x <= high_bound]
def get_values():
    type = 0
    while type not in ["1","2"]: 
        type = input("Chceš zadat volatilitu manuálně [1] nebo ze souboru [2]: ")
        if type == "1":
            drift = None
            while drift is None:
                user_input = input("Drift v procentech: ")
                try:
                    drift = float(user_input) / 100
                except:
                    print("Napiš číslo.")
                    continue
            volatility = None
            while volatility is None:
                user_input = input("Volatilita v procentech: ")
                try:
                    volatility = float(user_input) / 100
                except:
                    print("Napiš číslo.")
                    continue
        else:
            prices = None  # Inicializuj na začátku!
            answear = False
            
            while not answear:
                user = input("Chceš načíst z Excel xlsx [1], csv souboru [2] nebo txt souboru - oddělené řádky [3] \n")
                if user == "1":
                    file_type = "excel"
                    print("Ujisti se, že sloupec s cenou se jmenuje 'Price'")
                    answear = True
                elif user == "2":
                    file_type = "csv"
                    print("Ujisti se, že sloupec s cenou se jmenuje 'Price'")
                    answear = True
                elif user == "3":
                    file_type = "text"
                    answear = True
            
            abc = input("Zadej platný název souboru. Nezadávej příponu.\n")

            try:
                if file_type == "excel":
                    df = pd.read_excel(f'{abc}.xlsx')
                    prices = df['Price'].tolist()
                elif file_type == "csv":
                    df = pd.read_csv(f'{abc}.csv')
                    prices = df['Price'].tolist()
                elif file_type == "text":
                    prices = []
                    with open(f'{abc}.txt', 'r') as file:
                        for line in file:
                            prices.append(float(line.strip()))
                
                # ↓↓↓ PŘIDEJ TENHLE KÓD ↓↓↓
                # Vyčisti data od NaN a neplatných hodnot
                prices = [p for p in prices if pd.notna(p) and p > 0]
                
                if len(prices) < 2:
                    print(f"Chyba: Soubor má jen {len(prices)} platných cen. Potřebuješ aspoň 2.")
                    return get_values()
                
                print(f"Načteno {len(prices)} platných cen z rozmezí {min(prices):.2f} - {max(prices):.2f}")
                # ↑↑↑ KONEC NOVÉHO KÓDU ↑↑↑
                
            except Exception as e:
                print(f"Chyba při načítání souboru: {e}")
                print("Zkus to prosím znovu.")
                return get_values()
            
            # Teď můžeš bezpečně použít prices
            returns = []
            for i in range(1, len(prices)):
                r = math.log(prices[i] / prices[i-1])
                returns.append(r)
            
            drift = sum(returns) / len(returns) * 252
            volatility = miss(returns) * math.sqrt(252)
            
            # ↓↓↓ PŘIDEJ DEBUG INFO ↓↓↓
            print(f"Drift: {drift:.4f} ({drift*100:.2f}%)")
            print(f"Volatilita: {volatility:.4f} ({volatility*100:.2f}%)")

    while True:
        try:
            stock_price = float(input("Zadej cenu akcie: "))
            break
        except:
            print("Zadej prosím platné číslo.")
    while True:
        try:
            strike_price = float(input("Zadej strike price: "))
            break
        except:
            print("Zadej prosím platné číslo.")
    while True:
        try:
            time = int(input("Zadej časové období (roky): "))
            time = time*12+1
            break
        except:
            print("Zadej prosím platné číslo.")    
    return drift, volatility, stock_price, strike_price, time 
drift, volatility, stock_price, strike_price, month = get_values()
print("Úspěšně inicializováno. Počkej na grafy")
simulation = 150000
#drift = 0.05 #5% výnosnost
#stock_price =  100
#strike_price =  115
#volatility = 0.20
times = []
#month = 7*12+1
for x in range(month):
    times.append(x/12)
price = []
mis = []
for x in times:
    prices = count(stock_price, strike_price, x, volatility, drift, int(simulation))
    prices = list(prices)
    price.append(prices[0])
    mis.append(prices[1])
prices_low = []
prices_high = []
strike_prices = []
for x in range(month):
    if price[x] - mis[x] > 0:
        prices_low.append(price[x] - mis[x])
    else:
        prices_low.append(0)
    prices_high.append(price[x] + mis[x])
    strike_prices.append(strike_price)
plt.figure()  # ← PŘIDEJ TUHLE ŘÁDKU
plt.xlabel("čas (roky)")
plt.ylabel("odhadovaná cena stocku (EUR)")
plt.grid()
plt.plot(times, prices_low, label='Minimální cena akcie v čase')
plt.plot(times, prices_high, label='Maximální cena akcie v čase')
plt.plot(times, price, label='Cena akcie v čase')
plt.plot(times, strike_prices, label="strike price")
plt.legend()
plt.show(block=True)
# Výpočet v určitých časech
times = [round(0.55*month/12,2), round(month/12, 2), round(1.45*month/12, 2)]

# Vytvoř 1 řádek, 3 sloupce
fig, (ax1, ax2, ax3) = plt.subplots(1, 3, figsize=(20, 6), dpi=550)

for x in times:
    # GRAF 1
    data = count_all_data(stock_price, strike_price, x, volatility, drift, int(simulation*100*volatility))
    data = filter_outliers(data, percentile_low=0.1, percentile_high=99.8)
    for y in range(len(data)):        
        data[y] = int(data[y])
    cetnosti = Counter(data)
    values = sorted(cetnosti.keys())
    counts = [cetnosti[v]/len(data) for v in values]
    ax1.plot(values, counts, label=f"{x} roky")
    
    # GRAF 2 - Přesný s logaritmickou osou (stejná data jako graf 1)
    ax2.plot(values, counts, label=f"{x} roky")
    
    # GRAF 3 - Histogram
    ax3.hist(data, bins=50, alpha=0.5, density=True, label=f'{x} roky')  
    
ax1.set_xlabel('Cena akcie')
ax1.axvline(x=strike_price, color='red', linestyle='--', label='Strike price')
ax1.set_ylabel('Relativní četnost')
ax1.set_title('Distribuce - lineární škála')
ax1.legend()

# Nastavení pro graf 2 (logaritmická osa)
ax2.set_yscale('log')  # Tohle je klíčové - logaritmická Y osa
ax2.set_xlabel('Cena akcie')
ax2.axvline(x=strike_price, color='red', linestyle='--', label='Strike price')
ax2.set_ylabel('Relativní četnost (log škála)')
ax2.set_title('Distribuce - logaritmická škála')
ax2.legend()

# Nastavení pro graf 3 (histogram)
ax3.set_xlabel('Cena akcie')
ax3.set_ylabel('Četnost')
ax3.axvline(x=strike_price, color='red', linestyle='--', label='Strike price')
ax3.set_title('Histogram')
ax3.legend()

plt.tight_layout()
plt.show()
```
# Tags
#algoritmy