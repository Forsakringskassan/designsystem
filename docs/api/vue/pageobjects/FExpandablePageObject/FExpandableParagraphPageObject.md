---
name: FTextFieldPageObject:FExpandableParagraph
title: FExpandableParagraph
layout: content-with-menu
---

FTextFieldPageObject: FExpandableParagraph

`FExpandableParagraph` Används för att dölja innehållet under en rubrik och minska mängden information som presenteras för användaren vid en första anblick.

## Syntax

```ts
textfield.FExpandableParagraph;
```

## Examples

```html static
<f-text-field v-test="'awesome-input'"> My Awesome Input </f-text-field>
```

```ts
const awesomeInput = new FTextFieldPageObject("[data-test=awesome-input]");

awesomeInput.FExpandableParagraph.el().should(
    "contain.text",
    "My Awesome Input",
);
```

## Examples

```import
label.cy.ts
```

## See also

-   {@link FTextField}
