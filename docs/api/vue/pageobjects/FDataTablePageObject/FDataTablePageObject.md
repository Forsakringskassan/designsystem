---
name: FTextFieldPageObject:FDataTable
title: FDataTable
layout: content-with-menu
---

FTextFieldPageObject: FDataTable

`FDataTable` används när användaren behöver analysera och jämföra information strukturerad i rader och kolumner.

## Syntax

```ts
textfield.FDataTable;
```

## Examples

```html static
<f-text-field v-test="'awesome-input'"> My Awesome Input </f-text-field>
```

```ts
const awesomeInput = new FTextFieldPageObject("[data-test=awesome-input]");

awesomeInput.FDataTable.el().should("contain.text", "My Awesome Input");
```

## Examples

```import
label.cy.ts
```

## See also

-   {@link inmatningsfalt}
