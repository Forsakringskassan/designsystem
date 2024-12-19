---
name: FTextFieldPageObject:group
title: group
layout: content-with-menu
---

FTextFieldPageObject: group

`group` används för att gruppera komponenter.

## Syntax

```ts
textfield.group;
```

## Examples

```html static
<f-text-field v-test="'awesome-input'"> My Awesome Input </f-text-field>
```

```ts
const awesomeInput = new FTextFieldPageObject("[data-test=awesome-input]");

awesomeInput.group.el().should("contain.text", "My Awesome Input");
```

## Examples

```import
label.cy.ts
```

## See also

-   {@link FTextField}
