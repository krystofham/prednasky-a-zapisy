---
slug: ffuf
permalink: ffuf
---

# Http option
-u URL
-w wordlist
-X metoda (get, post)
-d Data, která se posílají v těle 
-d "user=admin&pass=123"
# Filtrování
-fs size ignoruj odpověd o těchto bytech
-fc code (404, 403)
-fw words (počet slov)
-fl lines (počet řádků)
# Vypiš
-mc code (200)
-mr regexp (konkrétní text)
-mr "Vítejte, admine"

**-ac** kalibrace automaticky
**-c** obravi výtup
**-p** delay
**-v** verbose
