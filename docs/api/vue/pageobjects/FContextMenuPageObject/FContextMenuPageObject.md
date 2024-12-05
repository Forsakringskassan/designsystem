---
name: FTextFieldPageObject:FContextMenu
title: FContextMenu
layout: content-with-menu
---

FTextFieldPageObject: FContextMenu

`FContextMenu` används för att presenterar en popup-ruta med funktioner kopplade till ett objekt, till exempel en lista eller tabellrad.

## Syntax

```ts
textfield.FContextMenu;
```

## Examples

```html static
<f-text-field v-test="'awesome-input'"> My Awesome Input </f-text-field>
```

```ts
const awesomeInput = new FTextFieldPageObject("[data-test=awesome-input]");

awesomeInput.FContextMenu.el().should("contain.text", "My Awesome Input");
```

## Examples

```import
label.cy.ts
```

## See also

-   {@link FTextField}
