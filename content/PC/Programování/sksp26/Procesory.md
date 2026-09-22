KSP 2026
---

# Procesor typu RISK

32 bitů
## R-type
- Má OP code, jednoduchá operace
- Má rd, indexace, 5bitů
- Má fun 3, nastavení výpočetní jednotky
## I-type
intermediate
Dolních 12 bitů
## U-type
upper
Horních 20 bitů

> Kombinací IU type vznikne 32 bitová const

# B-type
porovnají hodnoty ve dvou registrech, a pokud je podmínka splněna, skočí program na jinou adresu
## J-type
Na rozdíl od B-type (který skáče jen při splnění podmínky) instrukce typu J-type skočí vždy. Používají se především pro volání funkcí/podprogramů a pro dlouhé skoky v programu.
## CSR
Tyto registry neslouží k běžným výpočtům (k tomu jsou registry R0–R31), ale k řízení provozu samotného procesoru, sledování jeho stavu a řešení systémových úloh.

> Von Neumann - jedna pamet na data i instrukce
> Harvard - oddělená paměť a sběrnice pro program a pro data


---
Jeden takt = jedna instrukce - pro nás

IF - Instruction Fetch 
ID - Instruction Decode
EX - execute instruvtin
MEM - memory access, load a store
WB - writeback

To všechno je jeden takt - pipelin0e
Kazda operace je asynchronni a nezavisla.

```
IF ID EX MEM WB
   IF ID EX MEM WB
      IF ID EX MEM WB
         IF ID EX MEM WB
            IF ID EX MEM WB
```

## Errors
HDU
- Kdyz loaduju neco asynchfronne a dalsi oprace probhne driv nez je dokonana predchozi, tak nastane stall, ceka se na isntrukci az se dokonci