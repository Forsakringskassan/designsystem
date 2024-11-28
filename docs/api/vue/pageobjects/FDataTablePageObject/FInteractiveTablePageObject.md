---
name: FTextFieldPageObject:FInteractiveTable
title: FInteractiveTable
layout: content-with-menu
---

FTextFieldPageObject: FInteractiveTable

`FInteractiveTable` används när användaren behöver interagera med tabellen.

## Syntax

```ts
textfield.FInteractiveTable;
```

## Examples

```html static
<f-text-field v-test="'awesome-input'"> My Awesome Input </f-text-field>
```

```ts
const awesomeInput = new FTextFieldPageObject("[data-test=awesome-input]");

awesomeInput.FInteractiveTable.el().should("contain.text", "My Awesome Input");
```

## Examples

```import
label.cy.ts
```

## See also

-   {@link inmatningsfalt}
