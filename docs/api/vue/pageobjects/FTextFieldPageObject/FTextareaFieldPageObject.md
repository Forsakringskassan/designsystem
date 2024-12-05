---
name: FTextFieldPageObject:FTextareaField
title: FTextareaField
layout: content-with-menu
---

FTextFieldPageObject: FTextareaField

`FTextareaField` används för information som användaren behöver skriva in själv, men som inte får plats i ett vanligt inmatningsfält.

## Syntax

```ts
textfield.FTextareaField;
```

## Examples

```html static
<f-text-field v-test="'awesome-input'"> My Awesome Input </f-text-field>
```

```ts
const awesomeInput = new FTextFieldPageObject("[data-test=awesome-input]");

awesomeInput.FTextareaField.el().should("contain.text", "My Awesome Input");
```

## Examples

```import
label.cy.ts
```

## See also

-   {@link FTextField}
