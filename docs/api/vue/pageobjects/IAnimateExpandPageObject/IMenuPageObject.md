---
name: FTextFieldPageObject:IMenu
title: IMenu
layout: content-with-menu
---

FTextFieldPageObject: IMenu

`IMenu` en ramverkskomponent som används av komponenten Navigeringsmeny för att visa en rad av navigeringsalternativ.

## Syntax

```ts
textfield.IMenu;
```

## Examples

```html static
<f-text-field v-test="'awesome-input'"> My Awesome Input </f-text-field>
```

```ts
const awesomeInput = new FTextFieldPageObject("[data-test=awesome-input]");

awesomeInput.IMenu.el().should("contain.text", "My Awesome Input");
```

## Examples

```import
label.cy.ts
```

## See also

-   {@link inmatningsfalt}
