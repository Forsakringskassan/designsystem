---
name: FTextFieldPageObject:FCard
title: FCard
layout: content-with-menu
---

FTextFieldPageObject: FCard

`FCard` ger dig åtkomst till en etikett som kan visa status, antal eller kategori.

## Syntax

```ts
textfield.FCard;
```

## Examples

```html static
<f-text-field v-test="'awesome-input'"> My Awesome Input </f-text-field>
```

```ts
const awesomeInput = new FTextFieldPageObject("[data-test=awesome-input]");

awesomeInput.FCard.el().should("contain.text", "My Awesome Input");
```

## Examples

```import
label.cy.ts
```

## See also

-   {@link inmatningsfalt}
