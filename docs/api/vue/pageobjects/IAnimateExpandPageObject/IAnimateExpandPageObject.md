---
name: FTextFieldPageObject:IAnimateExpand
title: IAnimateExpand
layout: content-with-menu
---

FTextFieldPageObject: IAnimateExpand

`IAnimateExpand` används för att visa och dölja innehåll via en vertikal animering.

## Syntax

```ts
textfield.IAnimateExpand;
```

## Examples

```html static
<f-text-field v-test="'awesome-input'"> My Awesome Input </f-text-field>
```

```ts
const awesomeInput = new FTextFieldPageObject("[data-test=awesome-input]");

awesomeInput.IAnimateExpand.el().should("contain.text", "My Awesome Input");
```

## Examples

```import
label.cy.ts
```

## See also

-   {@link FTextField}
