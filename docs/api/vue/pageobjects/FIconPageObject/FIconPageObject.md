---
name: FTextFieldPageObject:FIcon
title: FIcon
layout: content-with-menu
---

FTextFieldPageObject: FIcon

`FIcon` ger dig åtkomst till en etikett som kan visa status, antal eller kategori.

## Syntax

```ts
textfield.FIcon;
```

## Examples

```html static
<f-text-field v-test="'awesome-input'"> My Awesome Input </f-text-field>
```

```ts
const awesomeInput = new FTextFieldPageObject("[data-test=awesome-input]");

awesomeInput.FIcon.el().should("contain.text", "My Awesome Input");
```

## Examples

```import
label.cy.ts
```

## See also

-   {@link FTextField}
