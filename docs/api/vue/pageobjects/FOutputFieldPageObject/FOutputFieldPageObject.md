---
name: FTextFieldPageObject:FOutputField
title: FOutputField
layout: content-with-menu
---

FTextFieldPageObject: FOutputField

`FOutputField` används för att presentera information som användaren inte ska kunna redigera och som är dynamisk.

## Syntax

```ts
textfield.FOutputField;
```

## Examples

```html static
<f-text-field v-test="'awesome-input'"> My Awesome Input </f-text-field>
```

```ts
const awesomeInput = new FTextFieldPageObject("[data-test=awesome-input]");

awesomeInput.FOutputField.el().should("contain.text", "My Awesome Input");
```

## Examples

```import
label.cy.ts
```

## See also

-   {@link inmatningsfalt}
