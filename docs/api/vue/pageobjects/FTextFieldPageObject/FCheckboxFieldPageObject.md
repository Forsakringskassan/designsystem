---
name: FTextFieldPageObject:FCheckboxField
title: FCheckboxField
layout: content-with-menu
---

FTextFieldPageObject: FCheckboxField

`FCheckboxField`

## Syntax

```ts
textfield.FCheckboxField;
```

## Examples

```html static
<f-text-field v-test="'awesome-input'"> My Awesome Input </f-text-field>
```

```ts
const awesomeInput = new FTextFieldPageObject("[data-test=awesome-input]");

awesomeInput.FCheckboxField.el().should("contain.text", "My Awesome Input");
```

## Examples

```import
label.cy.ts
```

## See also

-   {@link FTextField}
