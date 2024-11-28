---
name: FTextFieldPageObject:ICalendarMonthGrid
title: ICalendarMonthGrid
layout: content-with-menu
---

FTextFieldPageObject: ICalendarMonthGrid

`ICalendarMonthGrid` Kalenderrutnät är en ramverkskomponent avsedd att användas i kalendermånad (ICalendarMonth) för att modellera och rita rutnätet av dagar.

## Syntax

```ts
textfield.ICalendarMonthGrid;
```

## Examples

```html static
<f-text-field v-test="'awesome-input'"> My Awesome Input </f-text-field>
```

```ts
const awesomeInput = new FTextFieldPageObject("[data-test=awesome-input]");

awesomeInput.ICalendarMonthGrid.el().should("contain.text", "My Awesome Input");
```

## Examples

```import
label.cy.ts
```

## See also

-   {@link inmatningsfalt}
