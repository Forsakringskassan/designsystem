---
name: FTextFieldPageObject:FList
title: FList
layout: content-with-menu
---

FTextFieldPageObject: FList

`FList` används när användaren behöver gå igenom ett antal poster för att hitta en särskild post som ska visas eller hanteras.

## Syntax

```ts
textfield.FList;
```

## Examples

```html static
<f-text-field v-test="'awesome-input'"> My Awesome Input </f-text-field>
```

```ts
const awesomeInput = new FTextFieldPageObject("[data-test=awesome-input]");

awesomeInput.FList.el().should("contain.text", "My Awesome Input");
```

## Examples

```import
label.cy.ts
```

## See also

-   {@link FTextField}
