---
title: "freeCodeCamp.org"
source: "https://www.freecodecamp.org/learn/javascript-v9/review-form-validation-with-javascript/review-form-validation-with-javascript"
author:
published:
created: 2026-04-02
description: "Learn to Code — For Free"
tags:
  - "clippings"
---
## **`checkValidity()` 

This method returns `true` if the element matches all HTML validation (based on its attributes), and `false` if it fails.

```html
<form>
  <label>
    Email:
    <input
      id="email"
      type="email"
      required
      pattern=".+\.com$"
      placeholder="example@site.com"
    />
  </label>
</form>

<script>
  const input = document.getElementById("email");

  input.addEventListener("input", (e) => {
    if (!e.target.checkValidity()) {
      e.target.setCustomValidity("You must use a .com email.");
    } else {
      e.target.setCustomValidity("");
    }
  });
</script>
```

## **`reportValidity()` Method**

This method tells the browser that the `input` is invalid. KŘIČÍ NA UŽIVATELE

```html
<form>
  <label>
    Email:
    <input
      id="email2"
      type="email"
      required
      pattern=".+\.com$"
      placeholder="example@site.com"
    />
  </label>
</form>

<script>
  const input = document.getElementById("email2");

  input.addEventListener("input", (e) => {
    if (!e.target.checkValidity()) {
      e.target.reportValidity();
    }
  });
</script>
```
## preventDefault() Method

Udělám to podle sebe, ne jak chce browser
```html
<form id="form">
  <input type="text" placeholder="Try to submit" />
  <button type="submit">Submit</button>
</form>

<p id="status"></p>

<script>
  const form = document.getElementById("form");
  const status = document.getElementById("status");

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    status.textContent = "Form submission prevented.";
  });
</script>
```

## Submitting Forms

## action

Kam se podílají data

```html
<form action="https://freecodecamp.org" method="GET">
  <input
    type="number"
    name="number"
    placeholder="Enter a number"
  />
  <button type="submit">Submit</button>
</form>
```

## `method` Attribute

Post/get

```html
<form action="/data" method="POST">
  <input
    type="number"
    id="input"
    placeholder="Enter a number"
    name="number"
  />
  <button type="submit">Submit</button>
</form>
```
