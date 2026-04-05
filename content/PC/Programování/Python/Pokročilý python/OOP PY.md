# Getter + Setter

Představte si třídu `Clovek`, která má atribut `vek`.

- **Bez setteru:** Kdokoliv může nastavit `vek = -500`, což je nesmysl.
- **Se setterem:** Můžete přidat podmínku: _"Pokud je vkládané číslo menší než 0, vyhoď chybu nebo ho ignoruj."_

## Getter

Označuje se dekorátorem `@property`. Umožňuje číst data, jako by to byl běžný atribut, ale na pozadí se spustí funkce.

```python
@property
def vek(self):
    return dnesni_rok - self.datum_narozeni.year
```

## Setter 

Označuje se `@název_metody.setter`. Umožňuje měnit hodnotu a zároveň ji validovat.

```python
@radius.setter
def radius(self, hodnota):
    if hodnota < 0:
        raise ValueError("Poloměr nesmí být záporný!")
    self._radius = hodnota
```


```python
my_circle.radius # This will call the getter
my_circle.radius = 4 # This will call the setter
```
# Inheritance

Rodič, dítě -subclass

```python
# Rodičovská třída
class Zvire:
    def __init__(self, jmeno):
        self.jmeno = jmeno

    def snez(self):
        print(f"{self.jmeno} právě obědvá.")

# Podřazená třída (dědí ze Zvire)
class Pes(Zvire):
    def stekej(self):
        print("Haf! Haf!")

# Vytvoříme instanci psa
muj_pes = Pes("Alík")

muj_pes.snez()    # Funguje! Zděděno od Zvire.
muj_pes.stekej()  # Funguje! Vlastní metoda třídy Pes.
```

# Polymorphismus

```python
class Zvire:
    def ozvi_se(self):
        pass # Obecné zvíře nic neříká

class Pes(Zvire):
    def ozvi_se(self):
        return "Haf! Haf!"

class Kocka(Zvire):
    def ozvi_se(self):
        return "Mňau!"

# Tady se děje to kouzlo:
zvirata = [Pes(), Kocka(), Pes()]

for zviratko in zvirata:
    print(zviratko.ozvi_se()) # Voláme stejný název, ale pokaždé slyšíme něco jiného
```
# Name mangling

```python
class Rodic:
    def __init__(self):
        self.__poklad = "Zlato"  # Name mangling v akci

class Dite(Rodic):
    def __init__(self):
        super().__init__()
        self.__poklad = "Hračky" # Tohle nepřepíše Rodičovo zlato!

objekt = Dite()

# Pokud se podíváme "pod kapotu" objektu:
print(objekt.__dict__)
# Výstup bude: {'_Rodic__poklad': 'Zlato', '_Dite__poklad': 'Hračky'}
```

# Abstrakce

```python
from abc import ABC, abstractmethod

class Platba(ABC):
    @abstractmethod
    def provest_platbu(self, castka):
        """Tuhle metodu MUSÍ mít každá platební metoda!"""
        pass

class Kartou(Platba):
    def provest_platbu(self, castka):
        print(f"Platím {castka} Kč kartou přes terminál.")

class Hotove(Platba):
    # Kdybychom tady zapomněli napsat provest_platbu, 
    # Python nám hodí chybu při pokusu vytvořit objekt: 
    # TypeError: Can't instantiate abstract class Hotove with abstract method provest_platbu
    def provest_platbu(self, castka):
        print(f"Platím {castka} Kč hotovostí u pokladny.")
```