---
slug: Jak-rychle-rostou-faktorialy-a-proc-je-dobre-to-vedet?
permalink: Jak-rychle-rostou-faktoriály-a-proč-je-dobré-to-vědět?
---
**Autor**: P. Vodstrčil.
Platí: $1*2*3 * ... * (n-1)*n \Leftrightarrow (n!)^2 = (1**n)(2*(n-1)) ... ((n-1)*2)*(n*1)$ 
Každá závorka má tvar $k(n-k+1)$, kde $k \in \{1...,n\}$. Platí, že $$n \leqq k(n-k+1) \leqq \big( \frac{n+1}{2}\big)^2$$ Proto platí $$n^n \leq (n!)^2 \leq \big(\frac{n+1}{2}\big)^{2n}$$
Tato nerovnost platí, ale je to v řádu několik desítek u čísla 100. Přesnější odhad bude pomocí integrace. Často nelze spočítat nebo je to velmi obtížné. Proto se používá numerický výpočet. Integrál  je sčítaní, ale faktoriál násobení.
$$\ln(n!) = \ln(1*2*...*(n-1)*n) = \ln 1 + \ln2 + \ln(n-1) + \ln(n)$$
$$\ln 1 + ... + ln(n-1) \le \int^n_1 \ln (x) dx \le \ln 2 + ... + \ln(n) $$
$$ ln 1 +ln (n-1) = ln(n-1)!$$
$$ln 2 + ... + ln(n) = ln(n)!$$
$$\int^n_1 ln(x)dx= n*ln (n)-n+1 = ln[(\frac{n}e)^n*e]$$
Z toho $$(n-1)! \le ln[(\frac{n}e)^n*e] \le n!$$
Ale tyto odhady jsou pro 100 přesné na dvě cifry (lepší). Toto lze udělat s lichoběžníky.
Po úpravách:
$$(\frac{n}{e})^n*e \le n! \le (\frac{n}{e})^n *e * \sqrt n$$
Stirlingův vzorec: $$n! \approx (\frac{n}{e})^n* \sqrt{2\pi n}\approx (\frac{n}{e})^n* \sqrt{2\pi n} * e^{\frac{1}{12n}}$$
Chyba 1.5 promile u Stirlingova vzorce, poté $1*10^{-7}$. Ten vzorec lze zlogaritmovat a dát do kalkulačky.
# Příklad
Jdu na procházku, pro každý k krok se posunu bud doprava nebo doleva. Jaká je šance, že se po k krocích vrátím na stejný bod?
Řešení: $$ P(2n) = \frac{2n!}{2^{2n}(n!)^2}$$Dosadit stirlingův vzorec: $\frac{1}{\sqrt{\pi n}}$ 
**Galtonova deska**
# Tags

#kombinatorika
#pravdepodobnost 
#integraly 