---
name: FTextFieldPageObject:ICalendarNavbar
title: ICalendarNavbar
layout: content-with-menu
---

FTextFieldPageObject: ICalendarNavbar

`ICalendarNavbar` r en ramverkskomponent avsedd att användas i kalender (FCalendar) för att möjliggöra navigation i kalendern.

## Syntax

```ts
textfield.ICalendarNavbar;
```

## Examples

```html static
<f-text-field v-test="'awesome-input'"> My Awesome Input </f-text-field>
```

```ts
const awesomeInput = new FTextFieldPageObject("[data-test=awesome-input]");

awesomeInput.ICalendarNavbar.el().should("contain.text", "My Awesome Input");
```

## Examples

```import
label.cy.ts
```

## See also

-   {@link inmatningsfalt}
