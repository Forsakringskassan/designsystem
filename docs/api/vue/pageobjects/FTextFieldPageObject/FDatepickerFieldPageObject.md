---
name: FTextFieldPageObject:FDatepickerField
title: FDatepickerField
layout: content-with-menu
---

FTextFieldPageObject: FDatepickerField

`FDatepickerField` underlättar när användaren ska välja en dag som har en tydlig koppling till en veckodag.

## Syntax

```ts
textfield.FDatepickerField;
```

## Examples

```html static
<f-text-field v-test="'awesome-input'"> My Awesome Input </f-text-field>
```

```ts
const awesomeInput = new FTextFieldPageObject("[data-test=awesome-input]");

awesomeInput.FDatepickerField.el().should("contain.text", "My Awesome Input");
```

## Examples

```import
label.cy.ts
```

## See also

-   {@link inmatningsfalt}
