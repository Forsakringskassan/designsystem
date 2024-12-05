---
name: FTextFieldPageObject:FCheckboxGroup
title: FCheckboxGroup
layout: content-with-menu
---

FTextFieldPageObject: FCheckboxGroup

`FCheckboxGroup`

## Syntax

```ts
textfield.FCheckboxGroup;
```

## Examples

```html static
<f-text-field v-test="'awesome-input'"> My Awesome Input </f-text-field>
```

```ts
const awesomeInput = new FTextFieldPageObject("[data-test=awesome-input]");

awesomeInput.FCheckboxGroup.el().should("contain.text", "My Awesome Input");
```

## Examples

```import
label.cy.ts
```

## See also

-   {@link FTextField}
