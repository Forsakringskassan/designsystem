---
name: FTextFieldPageObject:FSelectField
title: FSelectField
layout: content-with-menu
---

FTextFieldPageObject: FSelectField

`FSelectField` används när användaren ska välja ett av flera liknande, fördefinierade alternativ.

## Syntax

```ts
textfield.FSelectField;
```

## Examples

```html static
<f-text-field v-test="'awesome-input'"> My Awesome Input </f-text-field>
```

```ts
const awesomeInput = new FTextFieldPageObject("[data-test=awesome-input]");

awesomeInput.FSelectField.el().should("contain.text", "My Awesome Input");
```

## Examples

```import
label.cy.ts
```

## See also

-   {@link inmatningsfalt}
