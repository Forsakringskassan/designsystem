---
name: FTextFieldPageObject:FLabel
title: FLabel
layout: content-with-menu
---

FTextFieldPageObject: FLabel property

`FLabel` används för att visa etiketter för att filtera innehåll.

## Syntax

```ts
textfield.FLabel;
```

## Examples

```html static
<f-text-field v-test="'awesome-input'"> My Awesome Input </f-text-field>
```

```ts
const awesomeInput = new FTextFieldPageObject("[data-test=awesome-input]");

awesomeInput.FLabel.el().should("contain.text", "My Awesome Input");
```

## Examples

```import
label.cy.ts
```

## See also

-   {@link FTextField}
