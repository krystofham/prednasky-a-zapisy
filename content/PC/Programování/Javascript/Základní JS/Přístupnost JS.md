# Aria
## aria-expanded
screen reader users
```html
<button id="menuBtn" aria-expanded="false">Menu</button>

<script>
  const btn = document.getElementById("menuBtn");

  btn.addEventListener("click", () => {
    const expanded = btn.getAttribute("aria-expanded") === "true";
    btn.setAttribute("aria-expanded", String(!expanded));
  });
</script>
```
## aria-haspopup 
```html
<button
  id="menubutton"
  aria-haspopup="menu"
  aria-controls="filemenu"
  aria-expanded="false"
>
  File
</button>

<ul
  id="filemenu"
  role="menu"
  aria-labelledby="menubutton"
  hidden
>
  <li role="menuitem" tabindex="-1">Open</li>
  <li role="menuitem" tabindex="-1">New</li>
  <li role="menuitem" tabindex="-1">Save</li>
  <li role="menuitem" tabindex="-1">Delete</li>
</ul>

<script>
  const button = document.getElementById("menubutton");
  const menu = document.getElementById("filemenu");

  button.addEventListener("click", () => {
    const expanded = button.getAttribute("aria-expanded") === "true";

    button.setAttribute("aria-expanded", String(!expanded));
    menu.hidden = expanded;
  });
</script>
```
## aria-checked
```html
<div
  id="checkbox"
  role="checkbox"
  aria-checked="true"
  tabindex="0"
  style="
    display: inline-flex;
    align-items: center;
    gap: 6px;
    cursor: pointer;
  "
>
  <span
    id="box"
    aria-hidden="true"
    style="
      width: 16px;
      height: 16px;
      border: 2px solid blue;
      background: blue;
      display: inline-block;
    "
  ></span>
  Checkbox
</div>

<script>
  const checkbox = document.getElementById("checkbox");
  const box = document.getElementById("box");

  const toggle = () => {
    const checked = checkbox.getAttribute("aria-checked") === "true";
    checkbox.setAttribute("aria-checked", String(!checked));
    box.style.background = checked ? "white" : "black";
  };

  checkbox.addEventListener("click", toggle);

  checkbox.addEventListener("keydown", (e) => {
    if (e.key === " " || e.key === "Enter") {
      e.preventDefault();
      toggle();
    }
  });
</script>
```
## aria-disabled 
```html
<div
  id="editBtn"
  role="button"
  tabindex="-1"
  aria-disabled="true"
  style="opacity: 0.5; cursor: not-allowed;"
>
  Edit
</div>

<button id="toggle">Toggle Disabled</button>

<script>
  const editBtn = document.getElementById("editBtn");
  const toggleBtn = document.getElementById("toggle");

  toggleBtn.addEventListener("click", () => {
    const disabled = editBtn.getAttribute("aria-disabled") === "true";

    editBtn.setAttribute("aria-disabled", String(!disabled));
    editBtn.tabIndex = disabled ? 0 : -1;
    editBtn.style.opacity = disabled ? "1" : "0.5";
    editBtn.style.cursor = disabled ? "pointer" : "not-allowed";
  });
</script>
```
## aria-selected
```html
<div role="tablist">
  <button role="tab" aria-selected="true">Tab 1</button>
  <button role="tab" aria-selected="false">Tab 2</button>
  <button role="tab" aria-selected="false">Tab 3</button>
</div>

<script>
  const tabs = document.querySelectorAll('[role="tab"]');

  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      tabs.forEach(t => t.setAttribute("aria-selected", "false"));
      tab.setAttribute("aria-selected", "true");
    });
  });
</script>
```
## aria-controls
```html
<div role="tablist">
  <button 
    role="tab"
    id="tab1"
    aria-controls="section1"
    aria-selected="true"
  >
    Tab 1
  </button>
  <button
    role="tab"
    id="tab2"
    aria-controls="section2"
    aria-selected="false"
  >
    Tab 2
  </button>
  <button
    role="tab"
    id="tab3"
    aria-controls="section3"
    aria-selected="false"
  >
    Tab 3
  </button>
</div>
```
## Aria live
```html
<div aria-live="polite" id="status"></div>

<button id="updateStatus">Update Status</button>

<script>
  const statusEl = document.getElementById("status");
  const btn = document.getElementById("updateStatus");

  btn.addEventListener("click", () => {
    statusEl.textContent = "Your file has been successfully uploaded.";
  });
</script>
```
## contenteditable
```html
<div
  contenteditable="true"
  aria-label="Note editor"
  id="editor"
  style="border: 1px solid #ccc; padding: 8px;"
>
  Editable content goes here
</div>

<p id="status" aria-live="polite"></p>

<script>
  const editor = document.getElementById("editor");
  const status = document.getElementById("status");

  editor.addEventListener("input", () => {
    status.textContent = "Content updated";
  });
</script>
```
# Focus blur events
## Blur
```html
<input
  id="nameInput"
  type="text"
  placeholder="Type here and click outside"
  aria-label="Name input"
/>

<p id="status" aria-live="polite"></p>

<script>
  const input = document.getElementById("nameInput");
  const status = document.getElementById("status");

  input.addEventListener("blur", () => {
    status.textContent = "Input lost focus";
  });
</script>
```
## Focus
```html
<input
  id="emailInput"
  type="email"
  placeholder="Click or tab into this field"
  aria-label="Email input"
/>

<p id="status" aria-live="polite"></p>

<script>
  const input = document.getElementById("emailInput");
  const status = document.getElementById("status");

  input.addEventListener("focus", () => {
    status.textContent = "Input received focus";
  });
</script>
```
