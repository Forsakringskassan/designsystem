---
name: FTextFieldPageObject:FOffline
title: FOffline
layout: content-with-menu
---

FTextFieldPageObject: FOffline

`FOffline` används när användaren saknar internetuppkoppling.

## Syntax

```ts
textfield.FOffline;
```

## Examples

```html static
<f-text-field v-test="'awesome-input'"> My Awesome Input </f-text-field>
```

```ts
const awesomeInput = new FTextFieldPageObject("[data-test=awesome-input]");

awesomeInput.FOffline.el().should("contain.text", "My Awesome Input");
```

## Examples

```import
label.cy.ts
```

## See also

-   {@link FTextField}
