---
name: FTextFieldPageObject:FDialogueTree
title: FDialogueTree
layout: content-with-menu
---

FTextFieldPageObject: FDialogueTree

`FDialogueTree` är en strukturerad visning av val och förgreningar som leder användaren geneom olika alternativ.

## Syntax

```ts
textfield.FDialogueTree;
```

## Examples

```html static
<f-text-field v-test="'awesome-input'"> My Awesome Input </f-text-field>
```

```ts
const awesomeInput = new FTextFieldPageObject("[data-test=awesome-input]");

awesomeInput.FDialogueTree.el().should("contain.text", "My Awesome Input");
```

## Examples

```import
label.cy.ts
```

## See also

-   {@link inmatningsfalt}
