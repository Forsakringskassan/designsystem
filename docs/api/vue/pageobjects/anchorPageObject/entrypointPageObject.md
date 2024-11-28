---
name: FTextFieldPageObject:entrypoint
title: entrypoint
layout: content-with-menu
---

FTextFieldPageObject: entrypoint

`entrypoint` används för att framhäva en länk extra tydligt, som till exempel en ingång till en digital tjänst.

## Syntax

```ts
textfield.entrypoint;
```

## Examples

```html static
<f-text-field v-test="'awesome-input'"> My Awesome Input </f-text-field>
```

```ts
const awesomeInput = new FTextFieldPageObject("[data-test=awesome-input]");

awesomeInput.entrypoint.el().should("contain.text", "My Awesome Input");
```

## Examples

```import
label.cy.ts
```

## See also

-   {@link inmatningsfalt}
