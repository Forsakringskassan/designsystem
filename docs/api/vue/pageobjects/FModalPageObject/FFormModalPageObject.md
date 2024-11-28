---
name: FTextFieldPageObject:FFormModal
title: FFormModal
layout: content-with-menu
---

FTextFieldPageObject: FFormModal

`FFormModal` är en standardmodal som kan presentera formulärsfält och hantera validering.

## Syntax

```ts
textfield.FFormModal;
```

## Examples

```html static
<f-text-field v-test="'awesome-input'"> My Awesome Input </f-text-field>
```

```ts
const awesomeInput = new FTextFieldPageObject("[data-test=awesome-input]");

awesomeInput.FFormModal.el().should("contain.text", "My Awesome Input");
```

## Examples

```import
label.cy.ts
```

## See also

-   {@link inmatningsfalt}
