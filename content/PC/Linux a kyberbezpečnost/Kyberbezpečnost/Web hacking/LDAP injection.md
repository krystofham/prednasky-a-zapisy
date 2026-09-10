Podobné SQL, ale jiný command.
Microsoft Active Directory to používá

```
(&(uid=Kryštof)(password=123456))
```

Pokud aplikace **nedostatečně escapuje speciální LDAP znaky**, může uživatel do vstupu vložit vlastní LDAP syntaxi a změnit význam dotazu.

Například konceptuálně:

```
*
```

může v některých LDAP filtrech znamenat **wildcard**.
Takže místo hledání konkrétního uživatele může aplikace skončit u dotazu typu:

```
(uid=*)
```
