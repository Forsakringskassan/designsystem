---
name: CalendarPageObject.navigateTo
title: "CalendarPageObject: navigateTo() method"
short-title: navigateTo()
layout: api.method
---

Uses the calendar navigation bar navigate to selected year and month jan = 0, dec = 11

## Syntax

```ts nocompile nolint
navigateTo(targetYear, targetMonth);
```

### Parametrar

`targetYear: number`
: Selected year
`targetMonth: number`
: Selected month 0-11, 0 = Jan 11 = dec

### Returvärde

`void`

## Exempel

```import static
CalendarPageObject-navigateTo.vue
```

```import
CalendarPageObject-navigateTo.cy.ts
```
