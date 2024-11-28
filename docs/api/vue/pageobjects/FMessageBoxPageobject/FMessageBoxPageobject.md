---
name: FTextFieldPageObject:FMessageBox
title: FMessageBox
layout: content-with-menu
---

FTextFieldPageObject: FMessageBox

`FMessageBox` används för att uppmärksamma användare på viktig information, varningar eller fel.

## Syntax

```ts
textfield.FMessageBox;
```

## Examples

```html static
<f-text-field v-test="'awesome-input'"> My Awesome Input </f-text-field>
```

```ts
const awesomeInput = new FTextFieldPageObject("[data-test=awesome-input]");

awesomeInput.FMessageBox.el().should("contain.text", "My Awesome Input");
```

## Examples

```import
label.cy.ts
```

## See also

-   {@link inmatningsfalt}
