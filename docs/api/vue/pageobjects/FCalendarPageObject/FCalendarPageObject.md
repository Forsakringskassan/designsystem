---
name: FTextFieldPageObject:FCalendar
title: FCalendar
layout: content-with-menu
---

FTextFieldPageObject: FCalendar

`FCalendar` används när en användare behöver välja flera dagar, välja dagar och fylla i information om dem, se mer information om en dag eller få en överblick över en månad.

## Syntax

```ts
textfield.FCalendar;
```

## Examples

```html static
<f-text-field v-test="'awesome-input'"> My Awesome Input </f-text-field>
```

```ts
const awesomeInput = new FTextFieldPageObject("[data-test=awesome-input]");

awesomeInput.FCalendar.el().should("contain.text", "My Awesome Input");
```

## Examples

```import
label.cy.ts
```

## See also

-   {@link FTextField}
