---
name: FTextFieldPageObject:FTableColumn
title: FTableColumn
layout: content-with-menu
---

FTextFieldPageObject: FTableColumn

`FTableColumn`

## Syntax

```ts
textfield.FTableColumn;
```

## Examples

```html static
<f-text-field v-test="'awesome-input'"> My Awesome Input </f-text-field>
```

```ts
const awesomeInput = new FTextFieldPageObject("[data-test=awesome-input]");

awesomeInput.FTableColumn.el().should("contain.text", "My Awesome Input");
```

## Examples

```import
label.cy.ts
```

## See also

-   {@link FTextField}
