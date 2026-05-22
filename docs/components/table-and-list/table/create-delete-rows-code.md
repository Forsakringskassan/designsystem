---
title: Lägga till och ta bort rader i tabell (kod)
short-title: Lägga till och ta bort rader (kod)
layout: article
search:
    terms:
        - tabell
---

```import
FTableAddRemoveExample.vue
```

## Lägga till en rad

Använd [`Array.push()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push) eller motsvarande för att lägga till en ny rad i ditt befintliga dataset.

```ts nocompile
dataset.push(newRow);
```

## Ta bort en rad

Använd metoden `withTabstopBehaviour` som tabellkomponenten exponerar för att fokus ska landa på prioriterad cell efter borttag.

Använd metoden `removeDatasetRows` för att smidigt ta bort en eller flera rader i din datamängd.
Metoden muterar ditt befintliga dataset.

```ts
import { ref, useTemplateRef } from "vue";
import { assertRef } from "@fkui/logic";
import {
    type FTableApi,
    FButton,
    FTable,
    defineTableColumns,
    removeDatasetRows,
    useDatasetRef,
} from "@fkui/vue";

interface Row {
    namn: string;
}

const rows = useDatasetRef<Row>([
    {
        namn: "Apelsin",
    },
]);

/* --- cut above --- */
const columns = defineTableColumns<Row>([
    {
        type: "text",
        header: "Frukt",
        key: "namn",
    },
    {
        type: "button",
        header: "Åtgärd",
        icon: "trashcan",
        text() {
            return "Ta bort";
        },
        onClick: onRemoveRow,
    },
]);

const tableRef = useTemplateRef<FTableApi>("table");

function onRemoveRow(row: Row): void {
    assertRef(tableRef);

    tableRef.value.withTabstopBehaviour("row-removal", () => {
        removeDatasetRows(rows, row);
    });
}
```

```html static
<template>
    <f-table ref="table" :rows :columns> </f-table>
</template>
```

## Relaterat

{@link code Kod för tabell}

{@link create-delete-rows Lägga till och ta bort rader i tabell}
