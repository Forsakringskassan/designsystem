---
name: FTextFieldPageObject:FValidationForm
title: FValidationForm
layout: content-with-menu
---

FTextFieldPageObject: FValidationForm

`FValidationForm` använder valideringsformulär när du har ett formulär eller ett mindre delformulär som ska valideras.

## Syntax

```ts
textfield.FValidationForm;
```

## Examples

```html static
<f-text-field v-test="'awesome-input'"> My Awesome Input </f-text-field>
```

```ts
const awesomeInput = new FTextFieldPageObject("[data-test=awesome-input]");

awesomeInput.FValidationForm.el().should("contain.text", "My Awesome Input");
```

## Examples

```import
label.cy.ts
```

## See also

-   {@link FTextField}
