---
name: FTextFieldPageObject:FStaticField
title: FStaticField
layout: content-with-menu
---

FTextFieldPageObject: FStaticField

`FStaticField` används för att presentera information som användaren inte ska kunna redigera och är statisk.

## Syntax

```ts
textfield.FStaticField;
```

## Examples

```html static
<f-text-field v-test="'awesome-input'"> My Awesome Input </f-text-field>
```

```ts
const awesomeInput = new FTextFieldPageObject("[data-test=awesome-input]");

awesomeInput.FStaticField.el().should("contain.text", "My Awesome Input");
```

## Examples

```import
label.cy.ts
```

## See also

-   {@link FTextField}
