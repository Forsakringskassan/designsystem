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

`rows: MaybeRef<T[]>`
: Tabellens rader, antingen som array eller ref till en array.

`rowsToRemove: MaybeRef<T | T[]>`
: Raden eller raderna som ska tas bort, antingen direkt eller som ref.

`expandableAttribute: MaybeRefOrGetter<keyof T | undefined>` {@optional}
: Egenskapen som innehåller expanderade rader, direkt, som ref eller som getter.
Om den anges kan även rader från nästlade arrayer tas bort.

## Exempel

```ts
import { ref } from "vue";
import { removeTableRows } from "@fkui/vue";

interface Row {
    name: string;
    children?: Row[];
}

const rows = ref<Row[]>([{ name: "Parent", children: [{ name: "Child" }] }]);

/* --- cut above --- */

removeTableRows(rows, rows.value[0].firstElementChild, "children");
```
