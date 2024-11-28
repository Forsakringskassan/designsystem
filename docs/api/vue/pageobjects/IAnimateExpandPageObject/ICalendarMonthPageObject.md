---
name: FTextFieldPageObject:ICalendarMonth
title: ICalendarMonth
layout: content-with-menu
---

FTextFieldPageObject: ICalendarMonth

`ICalendarMonth` användas i kalender (FCalendar) för att integrera kalenderrutnät (ICalendarMonthGrid) med daginnehåll.

## Syntax

```ts
textfield.ICalendarMonth;
```

## Examples

```html static
<f-text-field v-test="'awesome-input'"> My Awesome Input </f-text-field>
```

```ts
const awesomeInput = new FTextFieldPageObject("[data-test=awesome-input]");

awesomeInput.ICalendarMonth.el().should("contain.text", "My Awesome Input");
```

## Examples

```import
label.cy.ts
```

## See also

-   {@link inmatningsfalt}