---
name: FInteractiveTablePageObject.columnItem
title: "FInteractiveTablePageObject: columnItem() method"
short-title: columnItem()
layout: api.method
---

Get page object for `FTableColumn` with selector targeting the given row number.

Index includes the header row (index 0 selects the header row while 1 selects first row in table body). Index ignores expandable rows.

## Syntax

```ts nocompile nolint
columnItem(index);
```

### Parametrar

`index: number`
: Row number (0-indexed).

### Returvärde

`FTableColumnPageObject`

Page object for `FTableColumn`.

## Exempel

```import static
FInteractiveTablePageObject-columnItem.vue
```

```import
FInteractiveTablePageObject-columnItem.cy.ts
```
