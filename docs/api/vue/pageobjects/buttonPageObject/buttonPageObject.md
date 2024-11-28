---
name: FTextFieldPageObject:button
title: button
layout: content-with-menu
---

FTextFieldPageObject: button

`button` används för att utföra en handling.

## Syntax

```ts
textfield.button;
```

## Examples

```html static
<f-text-field v-test="'awesome-input'"> My Awesome Input </f-text-field>
```

```ts
const awesomeInput = new FTextFieldPageObject("[data-test=awesome-input]");

awesomeInput.button.el().should("contain.text", "My Awesome Input");
```

## Examples

```import
label.cy.ts
```

## See also

-   {@link inmatningsfalt}
