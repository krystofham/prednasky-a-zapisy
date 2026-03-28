---
slug: Grep
permalink: Grep
---
Command do terminálu v Linuxu.
# Příkaz Grep – tahák

Příkaz `grep` (Global Regular Expression Print) je nástroj pro příkazovou řádku používaný k prohledávání textových dat pomocí regulárních výrazů.
## Základní syntaxe
`grep [přepínače] "vzor" [soubor]`
## Vyhledávání ve složce (rekurzivně)

Pro prohledání aktuální složky a všech podsložek se používá přepínač `-r`:

- `grep -r "hledany_text" .`    
## Nejužitečnější přepínače
- `-i` : Ignoruje velikost písmen (case-insensitive).
- `-n` : Zobrazí číslo řádku, na kterém se shoda nachází.
- `-l` : Vypíše pouze názvy souborů, které obsahují hledaný text.
- `-v` : Invertované vyhledávání (vypíše řádky, které vzor **neobsahují**).
- `-w` : Hledá pouze celá slova.
## Pokročilé filtrování
- **Vyloučení složek:** `--exclude-dir={node_modules,.git}`
- **Omezení na typy souborů:** `--include="*.md"`
## Příklady
- `grep -rn "TODO" .` – Najde všechna "TODO" v aktuální složce i s čísly řádků.
```
krystofham@fedora:~$ grep -rn "TODO" /home/krystofham/Dokumenty/  
/home/krystofham/Dokumenty/Obsidian/Přednášky/Linux a kyberbezpečnost/Linux/Grep.md:22:- `grep -rn "TODO" .` – Najde všechna "TODO" v aktuální složce i s čísly řádků.  
/home/krystofham/Dokumenty/Obsidian/Přednášky/.obsidian/themes/Typewriter/theme.css:552:/* OBSIDIAN TODO by @larslockefeer */
```
- `grep -c "error" log.txt` – Spočítá počet výskytů slova "error" v souboru.
``` 
krystofham@fedora:~$ grep -cr "error" .bash_history  
0
```