---
name: FTextFieldPageObject:IPopup
title: IPopup
layout: content-with-menu
---

FTextFieldPageObject: IPopup

`IPopup` används tillsammans med andra komponenter för att kunna visa en komponent som overlay eller inline.

## Syntax

```ts
textfield.IPopup;
```

## Examples

```html static
<f-text-field v-test="'awesome-input'"> My Awesome Input </f-text-field>
```

```ts
const awesomeInput = new FTextFieldPageObject("[data-test=awesome-input]");

awesomeInput.IPopup.el().should("contain.text", "My Awesome Input");
```

## Examples

```import
label.cy.ts
```

## See also

-   {@link inmatningsfalt}
