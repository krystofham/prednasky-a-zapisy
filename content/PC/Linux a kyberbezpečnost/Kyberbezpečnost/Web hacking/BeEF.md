# BeEF (Browser Exploitation Framework)

## Co je BeEF

- Open-source framework pro **testování bezpečnosti webových prohlížečů**.
- Zaměřuje se na **client-side security** (prohlížeč), nikoliv na server.
- Používá se při:
    - Penetračním testování
    - Red Teamingu
    - Bezpečnostních školeních
    - Demonstraci dopadu klientských zranitelností (např. XSS)

---

## Jak funguje

BeEF využívá JavaScript spuštěný v prohlížeči v rámci **autorizovaného testovacího scénáře**.

```
Tester
      │
      ▼
 BeEF Server
      ▲
      │
 JavaScript Hook
      ▲
      │
 Web Browser
```

Pokud je prohlížeč v rámci testu připojen k BeEF serveru, lze z něj získávat informace a provádět bezpečnostní testy, které jsou omezené možnostmi běžného JavaScriptu.

---

## Co lze zjišťovat

Například:

- operační systém
- typ prohlížeče
- verzi prohlížeče
- jazyk
- časové pásmo
- velikost obrazovky
- podporované webové technologie
- informace dostupné JavaScriptu

---

## Typické použití

BeEF se používá například pro:

- ověření dopadu XSS
- školení zaměstnanců
- red team cvičení
- demonstraci útoků na klienta
- ověření nastavení bezpečnostních hlaviček
- výuku browser security

---

## Co BeEF není

❌ není skener zranitelností

❌ není exploit framework jako Metasploit

❌ není nástroj pro prolomení hesel

❌ neumí automaticky převzít kontrolu nad počítačem

---

## Výhody

- zaměřuje se na browser security
- jednoduché webové rozhraní
- vhodný pro demonstrace
- mnoho připravených testovacích modulů

---

## Omezení

- funguje pouze na připojeném (hooknutém) prohlížeči v rámci autorizovaného testu,
- omezuje jej bezpečnostní model prohlížečů (Same Origin Policy, CSP, sandboxing apod.),
- moderní prohlížeče řadu starších technik blokují.