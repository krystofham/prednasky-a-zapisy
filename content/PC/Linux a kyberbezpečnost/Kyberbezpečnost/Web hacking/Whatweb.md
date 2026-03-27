---
slug: Whatweb
---

```bash
whatweb [options] URL
```

# Agrese
`-a=LEVEL`
1. Stealth - 1 request /target
---
permalink: Whatweb
3. Agressive - Více requestů
4. Hodně requsetů
# HTTP možnosti
`-U = AGENT`
předstírá jiný agent místo whatweb

`--follow-redirect=WHEN`

Určuje, co má program dělat, když ho webová stránka přesměruje jinam (např. z `http://` na `https://`).

- **never:** Zůstane na první adrese a dál nejde.
- **http-only:** Sleduje jen klasická HTTP přesměrování
- **meta-only:** Sleduje přesměrování napsaná v kódu stránky (meta tagy).
- **always (výchozí):** Sleduje jakékoli přesměrování.
# Autentikace

` --user, -u=<user:password>`
vyskakovací okno
`--no-cookies` zrychlení

# Proxy

`--proxy <hostname[:port]> `

# Output
`-v` verbose

# Log
- **`--log-brief`**: Uloží jen stručný výpis (jeden řádek na jeden web). Ideální, když skenujete tisíce adres.
- **`--log-verbose`**: Uloží podrobné informace o každém nalezeném pluginu, verzi a technologii.
# Výkon
```bash
  --max-threads, -t Number of simultaneous threads. Default: 25.
  --open-timeout Time in seconds. Default: 15.
  --read-timeout Time in seconds. Default: 30.
  --wait=SECONDS Wait SECONDS between connections.
```
