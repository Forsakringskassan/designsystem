---
name: FTextFieldPageObject:FLoader
title: FLoader
layout: content-with-menu
---

FTextFieldPageObject: FLoader

`FLoader` används för att visa att en sida eller en del av en sida håller på att laddas.

## Syntax

```ts
textfield.FLoader;
```

## Examples

```html static
<f-text-field v-test="'awesome-input'"> My Awesome Input </f-text-field>
```

```ts
const awesomeInput = new FTextFieldPageObject("[data-test=awesome-input]");

awesomeInput.FLoader.el().should("contain.text", "My Awesome Input");
```

## Examples

```import
label.cy.ts
```

## See also

-   {@link inmatningsfalt}
