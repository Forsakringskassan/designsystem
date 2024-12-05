---
name: FTextFieldPageObject:ISkipLink
title: ISkipLink
layout: content-with-menu
---

FTextFieldPageObject: ISkipLink

`ISkipLink`

## Syntax

```ts
textfield.ISkipLink;
```

## Examples

```html static
<f-text-field v-test="'awesome-input'"> My Awesome Input </f-text-field>
```

```ts
const awesomeInput = new FTextFieldPageObject("[data-test=awesome-input]");

awesomeInput.ISkipLink.el().should("contain.text", "My Awesome Input");
```

## Examples

```import
label.cy.ts
```

## See also

-   {@link FTextField}
