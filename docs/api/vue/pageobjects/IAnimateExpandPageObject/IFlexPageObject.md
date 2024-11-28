---
name: FTextFieldPageObject:IFlex
title: IFlex
layout: content-with-menu
---

FTextFieldPageObject: IFlex

`IFlex` används när en eller flera objekt som inte ligger i grid ska placeras bredvid varandra.

## Syntax

```ts
textfield.IFlex;
```

## Examples

```html static
<f-text-field v-test="'awesome-input'"> My Awesome Input </f-text-field>
```

```ts
const awesomeInput = new FTextFieldPageObject("[data-test=awesome-input]");

awesomeInput.IFlex.el().should("contain.text", "My Awesome Input");
```

## Examples

```import
label.cy.ts
```

## See also

-   {@link inmatningsfalt}
