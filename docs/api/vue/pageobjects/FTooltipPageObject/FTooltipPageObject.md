---
name: FTextFieldPageObject:FTooltip
title: FTooltip
layout: content-with-menu
---

FTextFieldPageObject: FTooltip

`FTooltip` används för att visa detaljerad information om ett inmatningsfält i de fall där etikettens rubrik, hjälptext eller formatbeskrivning inte räcker till.

## Syntax

```ts
textfield.FTooltip;
```

## Examples

```html static
<f-text-field v-test="'awesome-input'"> My Awesome Input </f-text-field>
```

```ts
const awesomeInput = new FTextFieldPageObject("[data-test=awesome-input]");

awesomeInput.FTooltip.el().should("contain.text", "My Awesome Input");
```

## Examples

```import
label.cy.ts
```

## See also

-   {@link inmatningsfalt}
