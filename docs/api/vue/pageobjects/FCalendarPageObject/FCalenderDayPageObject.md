---
name: FTextFieldPageObject:errorIcon
title: FCalenderDay
layout: content-with-menu
---

FTextFieldPageObject: FCalenderDay

FCalenderDay visar och hanterar interaktioner för en enskilda dag i kalendern.

## Syntax

```ts
textfield.FCalenderDay;
```

## Examples

```html static
<f-text-field v-test="'awesome-input'"> My Awesome Input </f-text-field>
```

```ts
const awesomeInput = new FTextFieldPageObject("[data-test=awesome-input]");

awesomeInput.FCalenderDay.el().should("contain.text", "My Awesome Input");
```

## Examples

```import
label.cy.ts
```

## See also

-   {@link inmatningsfalt}
