---
title: Komponentgrupp
status: Produktionsklar
layout: component
component:
    - name: group
      source: _group.scss
---

Komponentgrupp används för att gruppera komponenter.

## Exempel

### Ett antal komponenter som grupperas visuellt.

Avstånd justeras mellan komponenter och efter gruppen genom att lägga på klassen "component-group" på ett överliggande element och "component-group\_\_item" på komponenterna i gruppen.

```html static
<div class="component-group">
    <div class="component-group__item">Komponent 1</div>
    <div class="component-group__item">Komponent 2</div>
</div>
```

```html nomarkup
<div class="component-group">
    <div class="component-group__item">
        <label for="field-1" class="label">Komponent 1</label>
        <div class="text-field__icon-wrapper">
            <input id="field-1" type="text" class="text-field__input" />
        </div>
    </div>
    <div class="component-group__item">
        <label for="field-2" class="label">Komponent 2</label>
        <div class="text-field__icon-wrapper">
            <input id="field-2" type="text" class="text-field__input" />
        </div>
    </div>
</div>
```
