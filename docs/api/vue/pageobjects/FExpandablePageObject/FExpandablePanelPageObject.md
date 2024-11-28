---
name: FTextFieldPageObject:FExpandablePanel
title: FExpandablePanel
layout: content-with-menu
---

FTextFieldPageObject: FExpandablePanel

`FExpandablePanel` används för att gruppera information och formulärskomponenter.

## Syntax

```ts
textfield.FExpandablePanel;
```

## Examples

```html static
<f-text-field v-test="'awesome-input'"> My Awesome Input </f-text-field>
```

```ts
const awesomeInput = new FTextFieldPageObject("[data-test=awesome-input]");

awesomeInput.FExpandablePanel.el().should("contain.text", "My Awesome Input");
```

## Examples

```import
label.cy.ts
```

## See also

-   {@link inmatningsfalt}
