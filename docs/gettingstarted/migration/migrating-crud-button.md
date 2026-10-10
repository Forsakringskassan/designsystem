---
title: FCrudButton migreringsguide
layout: article
component: FCrudButton
---

`FCrudButton` är deprekerad.
För enskilda knappar använder du {@link component:FButton FButton}.
I tabeller använder du i stället en `menu`-kolumn i {@link component:FTable FTable}.
När du placerar tabellen i `FCrudDataset` kopplar du menyåtgärdernas `onClick` till `updateItem(item)` och `deleteItem(item)`, som du når via en template ref på `FCrudDataset`.
Utanför tabeller får du samma funktioner som slot-props i defaultslotten.

Så ersätter du propsen:

- `action` ersätts med `updateItem(item)` eller `deleteItem(item)` i menyåtgärdens `onClick` eller knappens `@click`.
- `icon` anges på en action i `menu`-kolumnen eller med `icon-left` på `FButton`.
- `label` anges med actionens `label` eller som knappens text i `FButton`.

## Tabell

Se {@link FCrudDataset#tabell-med-redigering Tabell med redigering} för ett exempel med `menu`-kolumn.

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
