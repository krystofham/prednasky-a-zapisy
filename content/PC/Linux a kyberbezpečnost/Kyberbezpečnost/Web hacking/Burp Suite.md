GOOGLE GEMINI
Burp Suite je komplexní platforma pro testování zabezpečení webových aplikací. Funguje jako „Man-in-the-Middle“ mezi tvým prohlížečem a cílovým serverem.
## Klíčové moduly (Základna útoku)

| Modul        | Funkce                                                | K čemu slouží?                                             |
| ------------ | ----------------------------------------------------- | ---------------------------------------------------------- |
| **Proxy**    | Zachytává a upravuje provoz v reálném čase.           | Změna parametrů (např. ceny v košíku) před odesláním.      |
| **Repeater** | Umožňuje opakovaně odesílat jeden upravený požadavek. | **Tvůj případ:** Testování SSTI nebo brute-force manuálně. |
| **Intruder** | Automatizovaný nástroj pro útoky (obdoba ffuf).       | Brute-force, hádání ID uživatelů, fuzzing parametrů.       |
| **Decoder**  | Rychlé kódování/dekódování dat (Base64, URL, Hex).    | Čtení zakódovaných cookies nebo hashů.                     |
| **Comparer** | Porovnává dvě HTTP odpovědi.                          | Hledání drobných rozdílů při testování SQL Injection.      |

---
## Intruder: Typy útoků (Attack Types)

Tohle je v Burpu nejdůležitější část pro automatizaci. Určuje, jak se wordlisty vkládají do pozic `§FUZZ§`.

|ID|Typ útoku|Jak funguje?|Kdy ho použít?|
|---|---|---|---|
|**1**|**Sniper**|Jeden wordlist, jedna pozice po druhé.|Testování jednoho pole (např. `username`).|
|**2**|**Battering Ram**|Jeden wordlist, stejné slovo do všech pozic najednou.|Když chceš mít stejné `user` i `pass`.|
|**3**|**Pitchfork**|Dva wordlisty, jedou paralelně (1. z prvního s 1. z druhého).|Testování dvojic `user:email`, které k sobě patří.|
|**4**|**Cluster Bomb**|Dva wordlisty, zkouší všechny kombinace (každý s každým).|**Klasický brute-force:** admin vs. 10 000 hesel.|

---
## Match & Replace (Obdoba evasion/ojebu)

Burp umí automaticky měnit data v požadavcích „za letu“, abys nemusel vše klikat ručně.

|ID|Technika|Popis|Cíl (Co chce oklamat)|
|---|---|---|---|
|**1**|**Auto-login**|Automaticky přidává Session cookie do každého požadavku.|Nutnost se znovu přihlašovat při vypršení session.|
|**2**|**IP Spoofing**|Přidává hlavičky jako `X-Forwarded-For: 127.0.0.1`.|Filtry povolených IP adres (ACL).|
|**3**|**No-Cache**|Odstraňuje hlavičky `If-Modified-Since`.|Vynucení čerstvé odpovědi ze serveru (ne z cache).|
|**4**|**User-Agent**|Mění identitu prohlížeče na mobilní nebo jiný OS.|Filtry omezující přístup jen pro určité prohlížeče.|
