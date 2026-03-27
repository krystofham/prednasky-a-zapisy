---
permalink: Forms-HTML
---
Placeholder - příklad
# Typy
- checkbox
- email
- name
- number
- radio
	- spojují se pomocí name
# Textarea

```html
<label for="text">Notes</label>

<textarea id="text" name="textarea"></textarea>
```
# Dropdown

```html
<select id="dropdown">
	<option value="student">Student</option>
	<option value="teacher">Teacher</option>
</select>
```

# Fieldset

```html
<fieldset>
	<legend>
	<label>
```
 Div pro form. Označuje logickou část formu.
 **spjat s legend**
# Legend
Nadpis ve formu pro fieldset.

# Datalist
Kod gemini
```html
<label for="jazyk">Vyberte jazyk (nebo napište jiný):</label>
<input list="programovaci-jazyky" id="jazyk" name="jazyk" placeholder="Např. Python...">

<datalist id="programovaci-jazyky">
  <option value="HTML">
  <option value="CSS">
  <option value="JavaScript">
  <option value="Python">
  <option value="Java">
  <option value="C++">
</datalist>
```
`<input>` s atributem `list`. ALE našeptává odpověd. Automatické hledání odpovědi. **Může napsat cokoliv**

# pattern
```html
<form>
  <label for="psc">Poštovní směrovací číslo (5 číslic):</label>
  <input type="text" 
         id="psc" 
         name="psc" 
         pattern="[0-9]{5}" 
         title="Zadejte prosím 5 číslic bez mezer." 
         required>
  
  <button type="submit">Odeslat</button>
</form>
```
**nutný title**

|**Chci validovat...**|**Kód v pattern**|**Vysvětlení**|
|---|---|---|
|**Jen malá písmena**|`[a-z]+`|Jedno nebo více malých písmen.|
|**Číslo (3 cifry)**|`[0-9]{3}`|Přesně tři číslice.|
|**Uživatelské jméno**|`[A-Za-z0-9]{5,12}`|Písmena a čísla, délka 5 až 12 znaků.|
|**Datum (DD.MM.)**|`[0-3][0-9]\.[0-1][0-9]\.`|Jednoduchý vzor pro den a měsíc s tečkou.|