[_https://cheatsheetseries.owasp.org/cheatsheets/Authentication_Cheat_Sheet.html_](https://cheatsheetseries.owasp.org/cheatsheets/Authentication_Cheat_Sheet.html).
A web session is a sequence of HTTP request and response transactions between a web client and a server.
Když se uživatel přihlásí, dostane session token, což je porzatimní heslo. Nejčastěji cookies.

Příklady názvů session cookies:
- PHP → `PHPSESSID`
- Java/J2EE → `JSESSIONID`
- ColdFusion → `CFID`, `CFTOKEN`
- ASP.NET → `ASP.NET_SessionId`