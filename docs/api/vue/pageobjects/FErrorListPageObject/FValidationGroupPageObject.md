---
name: FTextFieldPageObject:FValidationGroup
title: FValidationGroup
layout: content-with-menu
---

FTextFieldPageObject: FValidationGroup

`FValidationGroup` används för att få information om alla objekt i en grupp uppfyller valideringskriterier.

## Syntax

```ts
textfield.FValidationGroup;
```

## Examples

```html static
<f-text-field v-test="'awesome-input'"> My Awesome Input </f-text-field>
```

```ts
const awesomeInput = new FTextFieldPageObject("[data-test=awesome-input]");

awesomeInput.FValidationGroup.el().should("contain.text", "My Awesome Input");
```

## Examples

```import
label.cy.ts
```

## See also

-   {@link inmatningsfalt}
