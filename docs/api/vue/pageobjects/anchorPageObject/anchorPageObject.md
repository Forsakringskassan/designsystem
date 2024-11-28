---
name: FTextFieldPageObject:anchor
title: anchor
layout: content-with-menu
---

FTextFieldPageObject: anchor

`anchor` används för navigation mellan olika sidor eller inom samma sida.

## Syntax

```ts
textfield.anchor;
```

## Examples

```html static
<f-text-field v-test="'awesome-input'"> My Awesome Input </f-text-field>
```

```ts
const awesomeInput = new FTextFieldPageObject("[data-test=awesome-input]");

awesomeInput.anchor.el().should("contain.text", "My Awesome Input");
```

## Examples

```import
label.cy.ts
```

## See also

-   {@link inmatningsfalt}
