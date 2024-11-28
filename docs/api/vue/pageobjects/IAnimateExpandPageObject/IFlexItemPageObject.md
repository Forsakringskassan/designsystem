---
name: FTextFieldPageObject:IFlexItem
title: IFlexItem
layout: content-with-menu
---

FTextFieldPageObject: IFlexItem

`IFlexItem`

## Syntax

```ts
textfield.IFlexItem;
```

## Examples

```html static
<f-text-field v-test="'awesome-input'"> My Awesome Input </f-text-field>
```

```ts
const awesomeInput = new FTextFieldPageObject("[data-test=awesome-input]");

awesomeInput.IFlexItem.el().should("contain.text", "My Awesome Input");
```

## Examples

```import
label.cy.ts
```

## See also

-   {@link inmatningsfalt}
