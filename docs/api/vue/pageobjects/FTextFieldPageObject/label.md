---
name: FTextFieldPageObject:errorIcon
title: label
layout: content-with-menu
---

FTextFieldPageObject: label property

Label ger dig tillgång till etiketten i inmatningsfältet.

## Syntax

```ts
textfield.label;
```

## Examples

```html static
<f-text-field v-test="'awesome-input'"> My Awesome Input </f-text-field>
```

```ts
const awesomeInput = new FTextFieldPageObject("[data-test=awesome-input]");

awesomeInput.label.el().should("contain.text", "My Awesome Input");
```

## Examples

```import
label.cy.ts
```

## See also

-   {@link FTextField}
