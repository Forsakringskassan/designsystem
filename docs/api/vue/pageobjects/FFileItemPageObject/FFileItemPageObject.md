---
name: FTextFieldPageObject:FFileItem
title: FFileItem
layout: content-with-menu
---

FTextFieldPageObject: FFileItem

`FFileItem` används för att presentera fil.

## Syntax

```ts
textfield.FFileItem;
```

## Examples

```html static
<f-text-field v-test="'awesome-input'"> My Awesome Input </f-text-field>
```

```ts
const awesomeInput = new FTextFieldPageObject("[data-test=awesome-input]");

awesomeInput.FFileItem.el().should("contain.text", "My Awesome Input");
```

## Examples

```import
label.cy.ts
```

## See also

-   {@link inmatningsfalt}
