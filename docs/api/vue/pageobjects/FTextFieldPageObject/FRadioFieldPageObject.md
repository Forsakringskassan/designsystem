---
name: FTextFieldPageObject:FRadioField
title: FRadioField
layout: content-with-menu
---

FTextFieldPageObject: FRadioField

`FRadioField` används för att låta en användare välja ett alternativ i en lista.

## Syntax

```ts
textfield.FRadioField;
```

## Examples

```html static
<f-text-field v-test="'awesome-input'"> My Awesome Input </f-text-field>
```

```ts
const awesomeInput = new FTextFieldPageObject("[data-test=awesome-input]");

awesomeInput.FRadioField.el().should("contain.text", "My Awesome Input");
```

## Examples

```import
label.cy.ts
```

## See also

-   {@link FTextField}
