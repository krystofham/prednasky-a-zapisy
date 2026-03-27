# LinkedIn příspěvek – Pentest vlastní Flask aplikace

---

## Varianta A – Technická (pro IT komunitu)

---

🔐 **Hackl jsem vlastní web. A naučil se víc za jeden večer než za měsíc čtení.**

Postavil jsem záměrně zranitelnou Flask aplikaci – jednoduchý online časopis s JSON databází a admin přihlášením. Pak jsem si sedl za Kali Linux a zkusil ji prolomit.

**Co jsem testoval:**

🔍 **Recon** – nmap odhalil Werkzeug verzi a HTTP hlavičky. Gobuster našel endpointy, které jsem zapomněl schovat.

📡 **API Security** – `/api/issues/` byl veřejný záměrně. Ale IDOR útok mi dovolil číst i nepublikované články pouhým inkrementováním ID. Klasika.

🗃️ **JSON databáze** – soubor byl přístupný přes `/static/`. Jedna špatná konfigurace = celá databáze na dlani.

🔑 **Admin login** – Hydra + rockyou.txt. Slabé heslo padlo rychle. Flask session cookie? flask-unsign to crackl během minut.

⚠️ **Werkzeug debug mode** – `/console` byl dostupný. Python RCE přímo v prohlížeči. Nejnebezpečnější nález.

---

**Nástroje:** nmap · gobuster · curl · Hydra · Burp Suite · flask-unsign · ffuf · Python3

**Klíčové poučení:**

> Bezpečnost není funkce, kterou přidáš na konci. Je to rozhodnutí, které děláš od prvního řádku kódu.

Celý write-up a dokumentaci nástrojů sdílím níže v komentářích.

Učíš se také cybersecurity? Napiš – rád se pobavím.

#cybersecurity #pentest #ethicalhacking #flask #python #kalilinux #webdevelopment #infosec #learninpublic

---

## Varianta B – Storytelling (širší dosah)

---

🖥️ **"Váš web je bezpečný?" – Zeptal jsem se sám sebe. Pak jsem ho hackl.**

Nedávno jsem dokončil svůj první webový projekt. Časopis s články, přihlašováním a API.

Místo abych ho rovnou nasadil, udělal jsem jednu věc navíc: **Pokusil jsem se ho prolomit.**

Vzal jsem Kali Linux, pár open-source nástrojů a začal testovat jako útočník.

Výsledky? Upřímně překvapivé.

→ Skryté endpointy, které jsem si myslel, že nikdo nenajde? Gobuster je našel za 30 sekund. → API, které mělo vracet jen veřejné články? Vrátilo i ty nepublikované – stačilo změnit číslo v URL. → Celá databáze? Přístupná přes přímou URL na statický soubor. → Admin heslo? Padlo na slovníkový útok.

Žádná z těchto zranitelností nebyla sofistikovaná. Byly to základní chyby – a přesně takové útočníci hledají jako první.

**Co jsem si z toho odnesl:**

Bezpečnost se nedá "doplnit" na konci projektu. Musí být součástí myšlení od začátku.

A nejlepší způsob, jak se to naučit? Hackovat vlastní věci. Legálně. Záměrně. Opakovaně.

Pokud také stavíš projekty a chceš vědět, jak je otestovat – napiš mi. Rád se podělím o postup.

#webdevelopment #cybersecurity #ethicalhacking #python #flask #learninpublic #infosec #programming

---

## Varianta C – Krátká / engagement-first

---

Postavil jsem web. Pak jsem ho hackl.

Trvalo to 2 hodiny.

Našel jsem: ✅ Přístupnou databázi přes přímou URL ✅ API bez autorizace vracející nepublikovaný obsah ✅ Admin heslo padlé na slovníkový útok ✅ Debug konzoli s Python RCE

Žádná z chyb nebyla složitá. Všechny jsem udělal já sám.

Nejlepší lekce z bezpečnosti? **Hackni vlastní věci dřív, než to udělá někdo jiný.**

Write-up v komentářích 👇

#cybersecurity #pentest #flask #python #kalilinux #ethicalhacking

---

_Poznámka: Vyber variantu podle svého publika. Varianta A je nejlepší pro technické lidi a recruitery v IT. Varianta B má největší potenciál pro širší dosah a engagement. Varianta C je ideální jako úvodní hook před sdílením write-upu._