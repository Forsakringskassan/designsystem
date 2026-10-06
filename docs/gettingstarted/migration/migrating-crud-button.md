---
title: FCrudButton migreringsguide
layout: article
component: FCrudButton
---

`FCrudButton` är deprekerad.
För enskilda knappar använder du {@link component:FButton FButton}.
I tabeller använder du i stället en `menu`-kolumn i {@link component:FTable FTable}.
När du placerar tabellen i `FCrudDataset`:s defaultslot kopplar du menyåtgärdernas `onClick` till slot-funktionerna `updateItem(item)` och `deleteItem(item)`.

Så ersätter du propsen:

- `action` ersätts med `updateItem(item)` eller `deleteItem(item)` i menyåtgärdens `onClick` eller knappens `@click`.
- `icon` anges på en action i `menu`-kolumnen eller med `icon-left` på `FButton`.
- `label` anges med actionens `label` eller som knappens text i `FButton`.

## Tabell

```ts
import { type TableColumn, defineTableColumns, useDatasetRef } from "@fkui/vue";

interface Row {
    name: string;
}

const rows = useDatasetRef<Row>([
    {
        name: "Banan",
    },
]);

type CrudAction = (item: Row) => void;

let updateRow: CrudAction = (_row: Row) => undefined;
let deleteRow: CrudAction = (_row: Row) => undefined;

const columns: Array<TableColumn<Row>> = defineTableColumns<Row>([
    { type: "text", header: "Namn", key: "name" },
    {
        type: "menu",
        header: "Åtgärder",
        text(row) {
            return `Visa åtgärder för ${row.name}`;
        },
        actions: [
            {
                label: "Ändra",
                icon: "pen",
                onClick(row) {
                    updateRow(row);
                },
            },
            {
                label: "Ta bort",
                icon: "trashcan",
                onClick(row) {
                    deleteRow(row);
                },
            },
        ],
    },
]);

function getColumns(
    updateItem: CrudAction,
    deleteItem: CrudAction,
): Array<TableColumn<Row>> {
    updateRow = updateItem;
    deleteRow = deleteItem;
    return columns;
}
```

```html static
<f-crud-dataset v-model="rows">
    <template #default="{ updateItem, deleteItem }">
        <f-table :rows :columns="getColumns(updateItem, deleteItem)">
            <template #caption> Tabell </template>
        </f-table>
    </template>
</f-crud-dataset>
```

## Lista och övrigt

```html name=list-button-original hidden
<!-- [html-validate-disable-block deprecated -- migration guide] -->
<f-crud-dataset>
    <template #default>
        <f-list :items>
            <template #default="{ item }">
                <f-crud-button action="modify" :item icon>
                    Ändra {{ item.name }}
                </f-crud-button>
                <f-crud-button action="delete" :item icon>
                    Ta bort {{ item.name }}
                </f-crud-button>
            </template>
        </f-list>
    </template>
</f-crud-dataset>
```

```html compare=list-button-original
<f-crud-dataset>
    <template #default="{ updateItem, deleteItem }">
        <f-list :items>
            <template #default="{ item }">
                <f-button
                    icon-left="pen"
                    size="small"
                    variant="tertiary"
                    @click="updateItem(item)"
                >
                    Ändra {{ item.name }}
                </f-button>
                <f-button
                    icon-left="pen"
                    size="small"
                    variant="tertiary"
                    @click="deleteItem(item)"
                >
                    Ta bort {{ item.name }}
                </f-button>
            </template>
        </f-list>
    </template>
</f-crud-dataset>
```

## API

:::api
vue:FCrudButton
:::
