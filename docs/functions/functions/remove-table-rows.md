---
title: removeTableRows() function
short-title: removeTableRows()
name: removeTableRows
layout: api.function
search:
    terms:
        - table
        - tabell
        - row
        - rad
---

Tar bort en eller flera rader från en tabell.
Funktionen muterar arrayen.

## Syntax

```ts nocompile
function removeTableRows<T extends object>(
    rows,
    rowsToRemove,
    expandableAttribute,
);
```

### Parametrar

`rows: T[]`
: Tabellens rader.

`rowsToRemove: T | T[]`
: Raden eller raderna som ska tas bort.

`expandableAttribute: keyof T` {@optional}
: Egenskapen som innehåller expanderade rader.
Om den anges kan även rader från nästlade arrayer tas bort.

## Exempel

```ts
import { removeTableRows } from "@fkui/vue";

interface Row {
    name: string;
    children?: Row[];
}

const rows: Row[] = [{ name: "Parent", children: [{ name: "Child" }] }];

/* --- cut above --- */

removeTableRows(rows, rows[0].children![0], "children");
```
