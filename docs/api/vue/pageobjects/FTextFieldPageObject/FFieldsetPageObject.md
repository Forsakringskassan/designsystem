---
name: FTextFieldPageObject:FFieldset
title: FFieldset
layout: content-with-menu
---

FTextFieldPageObject: FFieldset

`FFieldset` används när det ska vara möjligt att välja ett valfritt antal alternativ i en lista.

## Syntax

```ts
textfield.FFieldset;
```

## Examples

```html static
<f-text-field v-test="'awesome-input'"> My Awesome Input </f-text-field>
```

```ts
const awesomeInput = new FTextFieldPageObject("[data-test=awesome-input]");

awesomeInput.FFieldset.el().should("contain.text", "My Awesome Input");
```

## Examples

```import
label.cy.ts
```

## See also

-   {@link FTextField}
