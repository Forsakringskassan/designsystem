---
name: FTextFieldPageObject:FCrudDataset
title: FCrudDataset
layout: content-with-menu
---

FTextFieldPageObject: FCrudDataset

`FCrudDataset` används för att erbjuda användare funktionerna "lägg till", "ändra" och "ta bort" i en datamängd.

## Syntax

```ts
textfield.FCrudDataset;
```

## Examples

```html static
<f-text-field v-test="'awesome-input'"> My Awesome Input </f-text-field>
```

```ts
const awesomeInput = new FTextFieldPageObject("[data-test=awesome-input]");

awesomeInput.FCrudDataset.el().should("contain.text", "My Awesome Input");
```

## Examples

```import
label.cy.ts
```

## See also

-   {@link FTextField}
