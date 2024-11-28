---
name: FTextFieldPageObject:FFileSelector
title: FFileSelector
layout: content-with-menu
---

FTextFieldPageObject: FFileSelector

`FFileSelector` Filväljare används för att välja filer.

## Syntax

```ts
textfield.FFileSelector;
```

## Examples

```html static
<f-text-field v-test="'awesome-input'"> My Awesome Input </f-text-field>
```

```ts
const awesomeInput = new FTextFieldPageObject("[data-test=awesome-input]");

awesomeInput.FFileSelector.el().should("contain.text", "My Awesome Input");
```

## Examples

```import
label.cy.ts
```

## See also

-   {@link inmatningsfalt}
