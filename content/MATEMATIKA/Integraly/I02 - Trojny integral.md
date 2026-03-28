---
slug: I02---Trojny-integral
permalink: I02---Trojný-integrál
---

#integraly 
#trojny
![[Pasted image 20260325154301.png]]
# 2. Trojný integrál

## Intuice

Stejný skok jako od normálního k dvojnému — jen o dimenzi výš.

```
∫   →  délka / plocha pod křivkou     (1D)
∬   →  objem pod plochou              (2D)
∭   →  "hyperobjem" / hmotnost tělesa (3D)
```

Nejčastější použití: **hmotnost tělesa** s hustotou $\rho(x,y,z)$, nebo prostě objem oblasti v prostoru.

## Zápis

$$\iiint_E f(x,y,z),dV = \int_a^b\int_c^d\int_e^f f(x,y,z),dz,dy,dx$$

Integruje se opět **zevnitř ven**.

## Souřadnicové systémy

Obdélníkové souřadnice jsou někdy zbytečně složité. Dva alternativní systémy:

### Cylindrické souřadnice
více v [[I02.1 Sfericke souradnice]]
Vhodné pro válce, kužele.

$$x = r\cos\theta,\quad y = r\sin\theta,\quad z = z$$

$$\iiint f,dV = \iiint f\cdot r,dr,d\theta,dz$$

### Sférické souřadnice

Vhodné pro koule a polokoule.

$$x = \rho\sin\phi\cos\theta,\quad y = \rho\sin\phi\sin\theta,\quad z = \rho\cos\phi$$

$$\iiint f,dV = \iiint f\cdot \rho^2\sin\phi,d\rho,d\phi,d\theta$$

> Faktor $r$ (cylindrické) nebo $\rho^2\sin\phi$ (sférické) je **Jakobián** — cena za změnu souřadnic.

## Zdroje

- 🎥 [3B1B – Thinking about multivariable functions](https://www.youtube.com/watch?v=TrcCbdWwCBc)
- 📖 [Paul's Notes – Triple Integrals](https://tutorial.math.lamar.edu/Classes/CalcIII/TripleIntegrals.aspx)
- 📖 [Paul's Notes – Cylindrical coords](https://tutorial.math.lamar.edu/Classes/CalcIII/TIInCylCoords.aspx)
- 📖 [Paul's Notes – Spherical coords](https://tutorial.math.lamar.edu/Classes/CalcIII/TIInSphereCoords.aspx)