---
slug: Vim---basic-cmd
---

# 🧠 Vim – Crash Course pro začátečníky

> **Vim** je terminálový textový editor, který je na první pohled matoucí, ale po zvládnutí základů extrémně rychlý a efektivní.

---
permalink: Vim---basic-cmd

## 🚀 Jak spustit Vim

```bash
vim soubor.txt       # otevře soubor (nebo vytvoří nový)
vim                  # otevře prázdný Vim
```

---

## 🔑 Nejdůležitější koncept: Režimy (Modes)

Vim má **různé režimy** – ne jako jiné editory, kde prostě píšeš. Tohle je věc č. 1, kterou musíš pochopit.

|Režim|Jak se do něj dostat|Co v něm děláš|
|---|---|---|
|**Normal**|`Esc` (výchozí po spuštění)|Navigace, příkazy|
|**Insert**|`i`|Psaní textu|
|**Visual**|`v`|Výběr textu|
|**Command**|`:`|Ukládání, zavírání, hledání|

> 💡 **Zlaté pravidlo:** Kdykoliv nevíš co se děje, zmáčkni `Esc` (klidně vícekrát). Vrátíš se do Normal režimu.

---

## ✍️ Vkládání textu (Insert Mode)

Z Normal režimu přejdeš do Insert režimu těmito klávesami:

|Klávesa|Co udělá|
|---|---|
|`i`|Vloží kurzor před aktuální znak|
|`a`|Vloží kurzor **za** aktuální znak|
|`I`|Přeskočí na začátek řádku a přejde do Insert|
|`A`|Přeskočí na konec řádku a přejde do Insert|
|`o`|Vytvoří nový řádek **pod** kurzorem|
|`O`|Vytvoří nový řádek **nad** kurzorem|

---

## 💾 Uložení a zavření

Toto se píše v **Command režimu** (zmáčkni `:`):

|Příkaz|Co udělá|
|---|---|
|`:w`|Uloží soubor|
|`:q`|Zavře Vim (jen pokud nejsou neuložené změny)|
|`:wq` nebo `:x`|Uloží **a** zavře|
|`:q!`|Zavře **bez uložení** (force quit)|
|`:wqa`|Uloží a zavře **všechny** otevřené soubory|

> 🆘 **Zasekl ses ve Vimu?** Napiš `:q!` a Enter. Funguje vždy.

---

## 🧭 Navigace (Normal Mode)

### Základní pohyb – klávesy místo šipek

```
        k
        ↑
   h ←     → l
        ↓
        j
```

|Klávesa|Pohyb|
|---|---|
|`h`|Vlevo|
|`l`|Vpravo|
|`j`|Dolů|
|`k`|Nahoru|

### Pohyb po slovech

|Klávesa|Pohyb|
|---|---|
|`w`|Na začátek **dalšího** slova|
|`b`|Na začátek **předchozího** slova|
|`e`|Na konec aktuálního slova|

### Pohyb po řádku

|Klávesa|Pohyb|
|---|---|
|`0`|Na začátek řádku|
|`$`|Na konec řádku|
|`^`|Na první neprázdný znak řádku|

### Pohyb v souboru

|Klávesa|Pohyb|
|---|---|
|`gg`|Na začátek souboru|
|`G`|Na konec souboru|
|`5G` nebo `:5`|Na řádek číslo 5|
|`Ctrl+d`|Půl stránky dolů|
|`Ctrl+u`|Půl stránky nahoru|

---

## ✂️ Mazání a editace (Normal Mode)

|Klávesa|Co udělá|
|---|---|
|`x`|Smaže znak pod kurzorem|
|`dd`|Smaže celý řádek|
|`dw`|Smaže slovo (od kurzoru)|
|`d$`|Smaže od kurzoru do konce řádku|
|`D`|Totéž jako `d$`|
|`cc`|Smaže řádek a přejde do Insert|
|`cw`|Smaže slovo a přejde do Insert|

> 💡 Smazaný text jde do **clipboardu Vimu** – dá se vložit zpět přes `p`.

---

## 📋 Kopírování a vkládání

| Klávesa | Co udělá                                   |
| ------- | ------------------------------------------ |
| `yy`    | Zkopíruje (yank) celý řádek                |
| `yw`    | Zkopíruje slovo                            |
| `y$`    | Zkopíruje do konce řádku                   |
| `p`     | Vloží **za** kurzor / pod aktuální řádek   |
| `P`     | Vloží **před** kurzor / nad aktuální řádek |

---

## ↩️ Undo a Redo

|Klávesa|Co udělá|
|---|---|
|`u`|Undo (vrátit zpět)|
|`Ctrl+r`|Redo (vrátit dopředu)|

---

## 🔍 Hledání a nahrazování

### Hledání

```vim
/slovo       " hledá dopředu
?slovo       " hledá dozadu
n            " další výskyt
N            " předchozí výskyt
```

### Nahrazování (Command Mode)

```vim
:s/staré/nové/         " nahradí první výskyt na řádku
:s/staré/nové/g        " nahradí všechny výskyty na řádku
:%s/staré/nové/g       " nahradí všechny výskyty v celém souboru
:%s/staré/nové/gc      " totéž, ale ptá se na potvrzení
```

---

## 👁️ Visual Mode – výběr textu

|Klávesa|Co udělá|
|---|---|
|`v`|Spustí výběr znak po znaku|
|`V`|Spustí výběr po řádcích|
|`Ctrl+v`|Blokový výběr (obdélník)|

Po výběru můžeš:

- `d` – smazat výběr
- `y` – zkopírovat výběr
- `>` / `<` – odsadit doprava / doleva

---

## 🔢 Čísla před příkazy (multiplikátory)

Před většinu příkazů můžeš napsat číslo a příkaz se opakuje:

```
5j      " přesune kurzor 5 řádků dolů
3dd     " smaže 3 řádky
10w     " skočí 10 slov dopředu
2yy     " zkopíruje 2 řádky
```

---

## ⚙️ Užitečné příkazy v Command Mode

```vim
:set number        " zobrazí čísla řádků
:set nonumber      " skryje čísla řádků
:set hlsearch      " zvýrazní výsledky hledání
:syntax on         " zapne syntax highlighting
:help klávesa      " nápověda k dané klávese
```

---

## 🗂️ Práce s více soubory

```vim
:e soubor.txt      " otevře soubor
:bn                " další buffer (soubor)
:bp                " předchozí buffer
:ls                " zobrazí seznam otevřených bufferů
:sp soubor.txt     " horizontální split
:vsp soubor.txt    " vertikální split
Ctrl+w + šipka     " přepínání mezi splity
```

---

## 🗺️ Rychlá reference – cheat sheet

```
NORMAL MODE                    INSERT MODE
──────────────────────         ──────────────────
h j k l  →  pohyb             i  →  vložit před
w b e    →  po slovech         a  →  vložit za
gg / G   →  začátek/konec      o  →  nový řádek pod
0 / $    →  začátek/konec ř.   Esc →  zpět do Normal
                               
dd  →  smaž řádek             COMMAND MODE (:)
yy  →  kopíruj řádek          ─────────────────
p   →  vlož                    w   →  uložit
u   →  undo                    q   →  zavřít
x   →  smaž znak               wq  →  uložit a zavřít
/   →  hledej                  q!  →  zavřít bez uložení
```

---

## 📈 Doporučený postup pro začátečníky

1. **Den 1–2:** Nauč se otevřít, zavřít a uložit soubor. Přepínat mezi Normal a Insert.
2. **Den 3–5:** Procvičuj pohyb (`h j k l`, `w`, `b`, `gg`, `G`).
3. **Týden 2:** Přidej mazání (`dd`, `dw`), kopírování (`yy`, `p`) a undo (`u`).
4. **Týden 3:** Hledání (`/`), nahrazování (`:s`), Visual mode.
5. **Měsíc 2+:** Multiplikátory, splits, vlastní konfigurace `~/.vimrc`.

---

## 🛠️ Interaktivní výuka

```bash
vimtutor        " vestavěný interaktivní tutoriál (~30 minut)
```

> Spusť `vimtutor` v terminálu – je přímo ve Vimu a naučí tě základy krok po kroku.

---

_Vim se učí praxí. Každý den ho používej alespoň 15 minut a za týden ti přijde přirozený._