---
name: densify
title: densify() function
short-title: densify()
layout: api
redirect_from:
    - functions/helpers/densify.html
search:
    terms:
        - densitet
        - sass
---

Sass hjälpfunktion för att anpassa värde baserat på aktuell densitet.

## Syntax

```scss nocompile
@function densify($value);
```

### Parametrar

`$value: number`
: Värdet som ska ändras baserat på aktuell densitetsfaktor. Du kan inte skicka in flera värden i variabeln, utan det måste vara enbart ett värde (inte `1rem 2rem 3rem 4rem`).

## Exempel

```scss
@use "@fkui/design" as fkui;

.my-awesome-component {
    margin-bottom: fkui.densify(1rem);
}
```
