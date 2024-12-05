---
name: FTextFieldPageObject:FProgressbar
title: FProgressbar
layout: content-with-menu
---

FTextFieldPageObject: FProgressbar

`FProgressbar` används för att visa status för en operation som förväntas ta relativt lång tid.

## Syntax

```ts
textfield.FProgressbar;
```

## Examples

```html static
<f-text-field v-test="'awesome-input'"> My Awesome Input </f-text-field>
```

```ts
const awesomeInput = new FTextFieldPageObject("[data-test=awesome-input]");

awesomeInput.FProgressbar.el().should("contain.text", "My Awesome Input");
```

## Examples

```import
label.cy.ts
```

## See also

-   {@link FTextField}
