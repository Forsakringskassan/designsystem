---
name: FTextFieldPageObject:FFieldset
title: FFieldset
layout: content-with-menu
---

FTextFieldPageObject: FFieldset

`FFieldset` Används för att gruppera och knyta ihop flera inmatningskomponenter semantiskt och ge dem en gemensam etikett.

## Syntax

```ts
textfield.FFieldset;
```

## Examples

```html static
<f-text-field v-test="'awesome-input'"> My Awesome Input </f-text-field>
```

```ts
const awesomeInput = new FTextFieldPageObject("[data-test=awesome-input]");

awesomeInput.FFieldset.el().should("contain.text", "My Awesome Input");
```

## Examples

```import
label.cy.ts
```

## See also

-   {@link FTextField}
