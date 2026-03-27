---
permalink: Dictionary-PY
---
# Printing

```python
settings["key"]
```

# New value

```python
settings["language"] = "english"
```

# If exist

```python
if "theme" in settings: print("theme exists!")
```
# Remove a key

```python
del settings["volume"]
setting.pop(volume)
```
# For loop

```python
for key in settings:
	print(key, settings[key])
```