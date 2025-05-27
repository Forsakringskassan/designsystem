---
name: FInteractiveTablePageObject.row
title: "FInteractiveTablePageObject: row() method"
short-title: row()
layout: api.method
---

Get row (`<tr>` in `<tbody>`) of given index.

Includes expandable rows even if not expanded.

## Syntax

```ts nocompile nolint
row(index);
```

### Parametrar

`index: number`
: Row number (0-indexed).

### Returvärde

`DefaultCypressChainable`

## Exempel

```import static
FInteractiveTablePageObject-row.vue
```

```import
FInteractiveTablePageObject-row.cy.ts
```
