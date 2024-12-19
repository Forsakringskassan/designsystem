---
name: FTextFieldPageObject:IPopupMenu
title: IPopupMenu
layout: content-with-menu
---

FTextFieldPageObject: IPopupMenu

`IPopupMenu` är en ramverkskomponent som används i samband med meny (IMenu).

## Syntax

```ts
textfield.IPopupMenu;
```

## Examples

```html static
<f-text-field v-test="'awesome-input'"> My Awesome Input </f-text-field>
```

```ts
const awesomeInput = new FTextFieldPageObject("[data-test=awesome-input]");

awesomeInput.IPopupMenu.el().should("contain.text", "My Awesome Input");
```

## Examples

```import
label.cy.ts
```

## See also

-   {@link FTextField}
