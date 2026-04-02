# Syntax error
Chyba v tom jak to píšeš
# Reference error
```js
console.log(num);
const num = 50;
```
# TypeError
Špatný typ
# Range error
Mimo rozsah, který js umí
# Throw
Tvorba vlastní chyby
Když program narazí na příkaz `throw`, okamžitě zastaví vykonávání aktuální funkce a začne hledat nejbližší blok `catch`, který by chybu zpracoval. Pokud žádný nenajde, program obvykle skončí chybovou hláškou v konzoli.
```js
function overVek(vek) {
  if (vek < 18) {
    // Tady "vyhodíme" chybu
    throw new Error("Vstup zakázán: Musí ti být alespoň 18 let.");
  }
  return "Vítej v klubu!";
}

try {
  console.log(overVek(15));
} catch (error) {
  // Tady chybu "chytíme" a zpracujeme, aby nespadl celý web
  console.error("Chytili jsme chybu: " + error.message);
}
```

# Debugger
Pozastaví kod, muzu se na vsechno podívat v f12