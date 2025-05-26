---
name: FInteractiveTablePageObject.getColumnSortedByIcon
title: "FInteractiveTablePageObject: getColumnSortedByIcon() method"
short-title: getColumnSortedByIcon()
layout: api.method
---

Get sort order icon in given column.

Index includes the columns for checkboxes in selectable rows and markers in expandable rows.

## Syntax

```ts nocompile nolint
getColumnSortedByIcon(index, order);
```

### Parametrar

`index: number`
: Column index (0-indexed).
`order: "ascending" | "descending" | "unsorted"`
: Column sort order.

### Returvärde

`DefaultCypressChainable`

icon of given sort order.

## Exempel

```import static
FInteractiveTablePageObject-getColumnSortedByIcon.vue
```

```import
FInteractiveTablePageObject-getColumnSortedByIcon.cy.ts
```
