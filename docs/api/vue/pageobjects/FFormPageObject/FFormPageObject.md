---
name: FTextFieldPageObject:FForm
title: FForm
layout: content-with-menu
---

FTextFieldPageObject: FForm

`FForm`

## Syntax

```ts
textfield.FForm;
```

## Examples

```html static
<f-text-field v-test="'awesome-input'"> My Awesome Input </f-text-field>
```

```ts
const awesomeInput = new FTextFieldPageObject("[data-test=awesome-input]");

awesomeInput.FForm.el().should("contain.text", "My Awesome Input");
```

## Examples

```import
label.cy.ts
```

## See also

-   {@link inmatningsfalt}
