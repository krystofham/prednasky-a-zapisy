---
permalink: Taylor-series
---
#derivace
# Jak aproximovat
## Cos x
Víme, že chceme kvadratickou rovnici, takže tvar známe.
$$\cos(0) = 1$$
Takže
$$1 + ax + bx^2$$
Pro $$\frac d{dx} cos(0) = 0 \Rightarrow \frac d{dx} ax + bx^2 = 0, \Rightarrow a = 0$$
$$1 + bx^2$$
B musí být záporné
Přes druhý derivativ, protože $$\frac{d^2}{d^2x} \cos x= -\cos x$$
$$\frac{d^2}{d^2x} ax^2= 2a$$
$$-\cos 0 = -1 = 2a \Rightarrow a = \frac {-1}2$$
Takže aproximace je $$1-\frac{x^2}2$$
Takhle to jde pořád

| $\cos 0$  | 1   |
| --------- | --- |
| $-\sin 0$ | 0   |
| $-\cos 0$ | -1  |
| $\sin 0$  | 0   |
Z toho
$$1\frac{x^0}{0!} + 0\frac{x}{1!} -1\frac{x^2}{2!} + 0\frac{x^3}{3!} +1\frac{x^4}{4!}...$$
$$f(0)+\frac{df}{dx}(0)\frac{x^1}{1!}+\frac{df^2}{d^2x}(0)\frac{x^2}{2!}+\frac{df^3}{d^3x}(0)\frac{x^3}{3!}...$$
## $e^x$ a jeho series okolo 1
Derivace jsou fajn. Vždy je to $e^x$ a víme, že okolo x = 0 je $e^x= 1$
$$1+1\frac{x^1}{1!}+1\frac{x^2}{2!}+1\frac{x^3}{3!}...$$
Z toho $$e = \sum^\infty_{n=0} \frac{1}{n!}$$
# tags
#taylor_series 