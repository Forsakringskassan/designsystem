---
name: FTextFieldPageObject:FFormStep
title: FFormStep
layout: content-with-menu
---

FTextFieldPageObject: FFormStep

`FFormStep`

## Syntax

```ts
textfield.FFormStep;
```

## Examples

```html static
<f-text-field v-test="'awesome-input'"> My Awesome Input </f-text-field>
```

```ts
const awesomeInput = new FTextFieldPageObject("[data-test=awesome-input]");

awesomeInput.FFormStep.el().should("contain.text", "My Awesome Input");
```

## Examples

```import
label.cy.ts
```

## See also

-   {@link inmatningsfalt}
