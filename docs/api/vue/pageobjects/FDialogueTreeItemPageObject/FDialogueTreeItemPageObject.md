---
name: FTextFieldPageObject:FDialogueTreeItem
title: FDialogueTreeItem
layout: content-with-menu
---

FTextFieldPageObject: FDialogueTreeItem

`FDialogueTreeItem`

## Syntax

```ts
textfield.FDialogueTreeItem;
```

## Examples

```html static
<f-text-field v-test="'awesome-input'"> My Awesome Input </f-text-field>
```

```ts
const awesomeInput = new FTextFieldPageObject("[data-test=awesome-input]");

awesomeInput.FDialogueTreeItem.el().should("contain.text", "My Awesome Input");
```

## Examples

```import
label.cy.ts
```

## See also

-   {@link inmatningsfalt}
