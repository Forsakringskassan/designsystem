---
title: densify
name: densify
layout: content-with-menu
---

Sass hjälpfunktion för att anpassa värde baserat på aktuell densitet.

```scss
@function densify($value);
```

- `$value` - Värdet som ska ändras baserat på aktuell densitetsfaktor. Du kan inte skicka in flera värden i variabeln, utan det måste vara enbart ett värde (inte `1rem 2rem 3rem 4rem`).

```scss
.my-awesome-component {
    margin-bottom: densify(1rem);
}
```
