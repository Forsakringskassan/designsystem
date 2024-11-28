---
name: FTextFieldPageObject:FErrorList
title: FErrorList
layout: content-with-menu
---

FTextFieldPageObject: FErrorList

`FErrorList` används för att sammanställa inmatningsfel i stora formulär.

## Syntax

```ts
textfield.FErrorList;
```

## Examples

```html static
<f-text-field v-test="'awesome-input'"> My Awesome Input </f-text-field>
```

```ts
const awesomeInput = new FTextFieldPageObject("[data-test=awesome-input]");

awesomeInput.FErrorList.el().should("contain.text", "My Awesome Input");
```

## Examples

```import
label.cy.ts
```

## See also

-   {@link inmatningsfalt}
