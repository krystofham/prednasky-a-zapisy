$$F(x) = \int f(x) <=> F(x)'=f(x) $$
## Integrál součtu
$$\int f(x) + g(x) dx= \int f(x) dx + \int g(x) dx$$
## Integrál exponenciální funkce
$$\int 2^x = \frac{2^x}{\ln(2)}$$
$$\int \tan^2(x) dx = \int \frac{\sin^2(x)}{\cos^2(x)} dx = \int \frac{1 - \cos^2(x)}{\cos^2(x)} dx = \int \frac{1}{\cos^2(x)} dx - \int \frac{\cos^2(x)}{\cos^2(x)} dx = tg(x)-x+C$$
## Per partes (integrál součtu)
$$\int f(x) \cdot g'(x) dx= f(x) \cdot g(x)\int f'(x)\cdot g(x) dx$$
$$\int x^2 \cdot e^x = e^x \cdot x^2 - \int 2x \cdot e^x  = e^x \cdot x^2 - e^x \cdot 2x + \int 2 \cdot e^x = e^x \cdot x^2 - e^x \cdot 2x -2e^x$$

```python 
import sympy as sp

x = sp.symbols("x")

f = x**2 * math.e**x
print(sp.integrate(f, x))


> 1.0*2.71828182845905**x*(1.0*x**2 - 2.0*x + 2.0)
```

---
$$\int \sin(x) \cdot e^x dx = \sin(x)\cdot e^x - \int e^x \cdot \cos(x) = \sin(x)\cdot e^x - e^x \cos (x) - \int e^x \cdot \sin (x)dx$$
$$2 \int \sin(x) \cdot e^x dx =\sin(x)\cdot e^x - e^x \cos (x) $$
$$ \int \sin(x) \cdot e^x dx = \frac{e^x(\sin(x)\cdot -  \cos (x))}2$$
---
$$\int \ln(x) = x \cdot \ln(x) - \int \frac 1x\cdot x dx = x (\ln(x) - 1)+C$$
## Substituce
$$\int f(g(x)) \cdot g'(x) dx$$
$$z = g(x)$$
$$\int f(z) dz$$
Musí tam být její vlastní derivace,  kterou 'sežere'
$$\int (3x-2)^{10}$$
$$z = 3x - 2, z'= 3$$
$$\int z^{10} \cdot \frac 13 = \frac{z^{11}}{33} = \frac{(3x - 2)^{11}}{33}$$
---
$$\int x e^{x^{-2}}$$
$$x^{-2} = t, t' = -2x$$
$$\frac1{-2}\int e^t dt = \frac{e^t}{-2} = \frac{e^{x^{-2}}}{-2}$$

---
# Polynom v jmenovateli
$$\int \frac 1 {ax^2 + bx +c}$$
1) 0 kořenu v reálných číslech - $\arctan(x)$
$$\int\frac{1}{x^2-x+2} dx = \int \frac{dx}{(x^2-x+\frac14)+\frac74} = \int \frac{dx}{(x-\frac12)^2 + \frac74} = \frac47\int \frac{dx}{\frac47(x-\frac12)^2 +1} = \frac47\int \frac{dx}{(\frac2{\sqrt{7}}x-\frac1{\sqrt{7}})^2 +1} = \frac47\int\frac{\sqrt{7}}{t^2 +1} dx = \frac2{\sqrt{7}} \arctan(t) = \frac2{\sqrt{7}} \arctan(\frac2{\sqrt{7}}x - \frac 1 {\sqrt{7}})$$
```python
import sympy as sp

x = sp.symbols("x")

f = 1 / (x**2 - x + 2)
a = sp.integrate(f, x)
print(sp.latex(a))
```
$$\frac{2 \sqrt{7} \operatorname{atan}{\left(\frac{2 \sqrt{7} x}{7} - \frac{\sqrt{7}}{7} \right)}}{7}$$
---
## Zakrývací metoda (idk)
$$\frac{\ln{\left(x - 2 \right)}}{3} - \frac{\ln{\left(x + 1 \right)}}{3}$$
$$\int \frac1{x^2 -x-2} dx = \int \frac1{(x + 1)(x - 2)} = \int \frac{a}{x-1} + \int \frac{b}{x+2} = \frac{(x+1) A + (x-2) B)}{(x+1)(x-2)}$$
