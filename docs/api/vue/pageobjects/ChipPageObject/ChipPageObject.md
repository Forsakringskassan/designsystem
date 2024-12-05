---
name: FTextFieldPageObject:Chip
title: Chip
layout: content-with-menu
---

FTextFieldPageObject: Chip

Ett `Chip` används för interaktivt val eller filtrering.

## Syntax

```ts
textfield.Chip;
```

## Examples

```html static
<f-text-field v-test="'awesome-input'"> My Awesome Input </f-text-field>
```

```ts
const awesomeInput = new FTextFieldPageObject("[data-test=awesome-input]");

awesomeInput.Chip.el().should("contain.text", "My Awesome Input");
```

## Examples

```import
label.cy.ts
```

## See also

-   {@link FTextField}
