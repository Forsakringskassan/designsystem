---
name: FTextFieldPageObject:FSortFilterDataset
title: FSortFilterDataset
layout: content-with-menu
---

FTextFieldPageObject: FSortFilterDataset

`FSortFilterDataset` används vid sortering av datamängd och/eller för sökning i en datamängd i komponenterna lista eller tabell.

## Syntax

```ts
textfield.FSortFilterDataset;
```

## Examples

```html static
<f-text-field v-test="'awesome-input'"> My Awesome Input </f-text-field>
```

```ts
const awesomeInput = new FTextFieldPageObject("[data-test=awesome-input]");

awesomeInput.FSortFilterDataset.el().should("contain.text", "My Awesome Input");
```

## Examples

```import
label.cy.ts
```

## See also

-   {@link inmatningsfalt}
