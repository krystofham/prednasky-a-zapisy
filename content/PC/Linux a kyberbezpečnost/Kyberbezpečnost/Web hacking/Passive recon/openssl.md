```
openssl s_client -connect example.com:443
```
odpoved:
- navazani spojeni
- overeni certifikacní cesty
```
depth=3 C=US, O=Internet Security Research Group, CN=ISRG Root X1
verify return:1

depth=2 C=US, O=ISRG, CN=Root YR
verify return:1

depth=1 C=US, O=Let's Encrypt, CN=YR2
verify return:1

depth=0 CN=h4cker.org
verify return:1
```

- Certificate chain
- formát PEM (base64)
- subject issuer 
```
subject=CN=h4cker.org

issuer=C=US, O=Let's Encrypt, CN=YR2
```
- certifikát patří doméně h4cker.org
- vydala ho Let's Encrypt