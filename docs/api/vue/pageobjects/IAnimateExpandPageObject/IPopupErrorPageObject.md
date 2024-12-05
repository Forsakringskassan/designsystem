---
name: FTextFieldPageObject:IPopupError
title: IPopupError
layout: content-with-menu
---

FTextFieldPageObject: IPopupError

`IPopupError` används för att visa felmeddelanden när inmatningsfält används i en tabell.

## Syntax

```ts
textfield.IPopupError;
```

## Examples

```html static
<f-text-field v-test="'awesome-input'"> My Awesome Input </f-text-field>
```

```ts
const awesomeInput = new FTextFieldPageObject("[data-test=awesome-input]");

awesomeInput.IPopupError.el().should("contain.text", "My Awesome Input");
```

## Examples

```import
label.cy.ts
```

## See also

-   {@link FTextField}
