**Překrývající se podproblémy:** Když řešíš velký úkol, pořád narážíš na stejné malé úkoly. (Např. při výpočtu Fibonacciho posloupnosti počítáš F(3) pořád dokola).

### **Memoizace (Shora dolů / Top-Down)**

- **Jak to funguje:** Začneš od velkého problému. Jakmile narazíš na něco, co neznáš, vypočítáš to a zapíšeš si výsledek do "deníčku" (`memo`).
- **Příklad z tvého kódu:** Funkce se ptá: "Mám už v `memo` výsledek pro n?" Pokud ano, hned ho vrátí. Pokud ne, vypočítá ho a uloží.

### **Tabulace (Zdola nahoru / Bottom-Up)**
- **Jak to funguje:** Nejdřív vyřešíš ty nejjednodušší věci a výsledky skládáš do tabulky (pole), dokud se nedopracuješ k cíli.
- **Příklad z tvého kódu:** Vytvoříš si pole `dp`. Nejdřív vyplníš `dp[1]` a `dp[2]`. Pak v cyklu `for` počítáš další políčka na základě těch předchozích.

Když chceš po počítači `Fibonacci(5)` bez DP, dělá tohle:
1. Chce `Fib(5)`, tak musí spočítat `Fib(4)` a `Fib(3)`.  
2. Aby spočítal `Fib(4)`, musí spočítat `Fib(3)` a `Fib(2)`.
3. **STOP!** Vidíš to? Počítač už teď počítá `Fib(3)` dvakrát!
4. A u `Fib(100)` by ty samé malé kousky počítal miliardkrát.