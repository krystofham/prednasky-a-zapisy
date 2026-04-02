# Gobuster
admin                (Status: 403) [Size: 1399]  
documents            (Status: 302) [Size: 199] [--> /login]  
internal             (Status: 200) [Size: 1595]  
login                (Status: 200) [Size: 1698]  
logout               (Status: 302) [Size: 189] [--> /]  
robots.txt           (Status: 200) [Size: 69]  
search               (Status: 302) [Size: 199] [--> /login]

---
Disallow: /admin
Disallow: /internal
Disallow: /api/v2

---

Token-based auth required for API access.
API docs: /api/v2/docs BEZ INJECTION
VERZE 1.0. nenajita

| auth              | "Cookie: auth_token=<token>"                        |
| ----------------- | --------------------------------------------------- |
| endpoints         |                                                     |
| /api/v2/document  | "GET ?id=<id> — get document by id (auth required)" |
| /api/v2/employees | "GET — list employees (auth required)"              |
| version           | "2.0"                                               |
KAJ MA ZEBRAT TEN TOKEN

```
┌──(krystofham㉿kali)-[~]  
└─$ nuclei -u http://127.0.0.1:5000 -as    
  
                    __     _  
  ____  __  _______/ /__  (_)  
 / __ \/ / / / ___/ / _ \/ /  
/ / / / /_/ / /__/ /  __/ /  
/_/ /_/\__,_/\___/_/\___/_/   v3.7.1  
  
               projectdiscovery.io  
  
[WRN] Found 1 templates with runtime error (use -validate flag for further examination)  
[INF] Current nuclei version: v3.7.1 (latest)  
[INF] Current nuclei-templates version: v10.4.0 (latest)  
[INF] New templates added in latest release: 94  
[INF] Templates loaded for current scan: 9904  
[INF] Executing 9887 signed templates from projectdiscovery/nuclei-templates  
[WRN] Loading 17 unsigned templates for scan. Use with caution.  
[INF] Targets loaded for current scan: 1  
[INF] Automatic scan tech-detect: Templates clustered: 547 (Reduced 520 Requests)  
[INF] Executing Automatic scan on 1 target[s]  
[tech-detect:python] [http] [info] http://127.0.0.1:5000  
[INF] Found 2 tags and 1 matches on detection templates on http://127.0.0.1:5000 [wappalyzer: 2, detection: 2]  
[INF] Executing 16 templates on http://127.0.0.1:5000  
[INF] Scan completed in 37.576133354s. No results found.
```
```
└─$ ffuf -u http://127.0.0.1:5000/login -X POST -d "username=admin&password=FUZZ" -w /usr/share/wordlists/rockyou.txt -ac -v           
  
       /'___\  /'___\           /'___\          
      /\ \__/ /\ \__/  __  __  /\ \__/          
      \ \ ,__\\ \ ,__\/\ \/\ \ \ \ ,__\         
       \ \ \_/ \ \ \_/\ \ \_\ \ \ \ \_/         
        \ \_\   \ \_\  \ \____/  \ \_\          
         \/_/    \/_/   \/___/    \/_/          
  
      v2.1.0-dev  
________________________________________________  
  
:: Method           : POST  
:: URL              : http://127.0.0.1:5000/login  
:: Wordlist         : FUZZ: /usr/share/wordlists/rockyou.txt  
:: Data             : username=admin&password=FUZZ  
:: Follow redirects : false  
:: Calibration      : true  
:: Timeout          : 10  
:: Threads          : 40  
:: Matcher          : Response status: 200-299,301,302,307,401,403,405,500  
________________________________________________  
  
[WARN] Caught keyboard interrupt (Ctrl-C)
```
Přes fuzz login nešel, ani přes owasp zap
Navíc s tokeny jsem nikdy nepracoval