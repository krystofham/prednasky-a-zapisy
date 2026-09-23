FKS 2026
## Stacionární
$$h\rho g = \frac12\rho v^2$$
$$P_1 + h_1\rho g + \frac12\rho v_1^2 = P_2 + h_2\rho g + \frac12\rho v_2^2$$
## Nestacionární
$$dv = \frac {dv}{dt} dt$$
$$F = dm \frac{dv}{dt}$$
$$\frac{dv}{dt} = v \frac{dv}{ds}$$
Po dosazení $\rho S$
$$ds(\frac{dv}{dt}  +v \frac{dv}{ds}) = \frac{-dp}{\rho} - g \cdot dz$$
$$\frac{dv}{dt}ds-d(\frac12v^2)= - \frac{dv}S-gdz$$
$$\int\frac{dv}{dt}ds-\int d(\frac12v^2)= - \int\frac{dv}S-\int gdz$$
Integruje se po proudnici - středu trubky od 1 do 2
$$\int_1^2\frac{dv}{dt}ds-\int [\frac 12v^2]^2_1= - S^{-1}[v]_1^2-g[z]_1^2$$
Což nějak dá ($z = h\cdot \rho$):
$$P_1 + h_1\rho g + \frac12\rho v_1^2 = P_2 + h_2\rho g + \frac12\rho v_2^2 -\int_1^2\frac{dv}{dt}ds$$
$$\frac{P_1}S + h_1\rho g + \frac12\rho v_1^2 = \frac{P_2}S + h_2\rho g + \frac12\rho v_2^2 -\int_1^2 \frac{dv}{dt} \cdot ds$$
