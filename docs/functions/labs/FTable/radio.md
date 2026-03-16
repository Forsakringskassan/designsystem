---
title: "FTable: Radioknappar"
short-title: Radioknappar
layout: article
---

Kolumntypen `radio` i `FTable` kräver egenskapen `name`.
`name` avgör vilken grupp radioknapparna tillhör.

- Samma `name` för alla rader i en kolumn: en rad kan vara vald per kolumn.
- Samma `name` för flera radiokolumner i samma rad: en kolumn kan vara vald per rad.

## En vald rad per kolumn

Ange ett statiskt `name` på radiokolumnen.

```import live-example
FTableRadioColumnwiseExample.vue
```

## En vald kolumn per rad

Ange `name` som callback och returnera samma gruppnamn för de kolumner som ska tillhöra samma valgrupp i raden.

```import live-example
FTableRadioRowwiseExample.vue
```

## Exempel på kolumndefinition

```ts
import { defineTableColumns } from "@fkui/vue-labs";

interface ColumnwiseRow {
    id: number;
    name: string;
    selected: boolean;
}

const columnwiseColumns = defineTableColumns<ColumnwiseRow>([
    {
        type: "radio",
        header: "Val",
        key: "selected",
        name: "columnwise-selection",
        label: (row) => `Välj ${row.name}`,
    },
    {
        type: "text",
        header: "Namn",
        key: "name",
    },
]);
```

```ts
import { defineTableColumns } from "@fkui/vue-labs";

interface RowwiseRow {
    id: number;
    name: string;
    optionA: boolean;
    optionB: boolean;
}

const rowwiseColumns = defineTableColumns<RowwiseRow>([
    {
        type: "radio",
        header: "Alternativ A",
        key: "optionA",
        name: (row) => `rowwise-${row.id}`,
        label: (row) => `Välj alternativ A för ${row.name}`,
    },
    {
        type: "radio",
        header: "Alternativ B",
        key: "optionB",
        name: (row) => `rowwise-${row.id}`,
        label: (row) => `Välj alternativ B för ${row.name}`,
    },
]);
```
