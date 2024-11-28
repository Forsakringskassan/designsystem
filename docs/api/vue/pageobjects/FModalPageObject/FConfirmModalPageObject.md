---
name: FTextFieldPageObject:FConfirmModal
title: FConfirmModal
layout: content-with-menu
---

FTextFieldPageObject: FConfirmModal

`FConfirmModal` används när användare har gjort ett val som har stor påverkan och som hen inte kan ångra enkelt.

## Syntax

```ts
textfield.FConfirmModal;
```

## Examples

```html static
<f-text-field v-test="'awesome-input'"> My Awesome Input </f-text-field>
```

```ts
const awesomeInput = new FTextFieldPageObject("[data-test=awesome-input]");

awesomeInput.FConfirmModal.el().should("contain.text", "My Awesome Input");
```

## Examples

```import
label.cy.ts
```

## See also

-   {@link inmatningsfalt}
