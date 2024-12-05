---
name: FTextFieldPageObject:FExpand
title: FExpand
layout: content-with-menu
---

FTextFieldPageObject: FExpand

`FExpand` används för att gruppera information och formulärskomponenter.

## Syntax

```ts
textfield.FExpand;
```

## Examples

```html static
<f-text-field v-test="'awesome-input'"> My Awesome Input </f-text-field>
```

```ts
const awesomeInput = new FTextFieldPageObject("[data-test=awesome-input]");

awesomeInput.FExpand.el().should("contain.text", "My Awesome Input");
```

## Examples

```import
label.cy.ts
```

## See also

-   {@link FTextField}
