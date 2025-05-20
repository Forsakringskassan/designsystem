---
title: FCrudButton migreringsguide
layout: article
component: FCrudButton
---

`FCrudButton` är deprekerad och ersatt med {@link component:FTableButton FTableButton} för tabeller eller {@link component:button knapp} för andra användningsområden.

Proparna

- `action` är ersatt med slot attributes `updateItem()` respektive `deleteItem()`.
- `icon` är ersatt med prop `icon` på `FTableButton` samt `FIcon` för övriga användningsområden.
- `label` är ersatt med prop `label` på `FTableButton` samt vanlig text i knapp för övriga användningsområden.

## Tabell

```html name=table-button-original hidden
<!-- [html-validate-disable-block deprecated -- migration guide] -->
<f-crud-dataset>
    <template #default>
        <f-interactive-table :rows>
            <template #caption> Tabell </template>
            <template #default="{ row }">
                <f-table-column title="Åtgärder">
                    <f-crud-button action="modify" :item="row" icon>
                        Ändra {{ row.name }}
                    </f-crud-button>
                    <f-crud-button action="delete" :item="row" icon>
                        Ta bort {{ row.name }}
                    </f-crud-button>
                </f-table-column>
            </template>
        </f-interactive-table>
    </template>
</f-crud-dataset>
```

```html compare=table-button-original
<f-crud-dataset>
    <template #default="{ updateItem, deleteItem }">
        <f-interactive-table :rows>
            <template #caption> Tabell </template>
            <template #default="{ row }">
                <f-table-column title="Åtgärder">
                    <f-table-button icon="pen" @click="updateItem(item)">
                        Ändra {{ item.name }}
                    </f-table-button>
                    <f-table-button icon="trashcan" @click="deleteItem(item)">
                        Ta bort {{ item.name }}
                    </f-table-button>
                </f-table-column>
            </template>
        </f-interactive-table>
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
                <button
                    type="button"
                    class="button button--small button--tertiary"
                    @click="updateItem(item)"
                >
                    <f-icon name="pen">
                        <title>Ändra {{ item.name }}</title>
                    </f-icon>
                </button>
                <button
                    type="button"
                    class="button button--small button--tertiary"
                    @click="deleteItem(item)"
                >
                    <f-icon name="pen">
                        <title>Ta bort {{ item.name }}</title>
                    </f-icon>
                </button>
            </template>
        </f-list>
    </template>
</f-crud-dataset>
```

## API

:::api
vue:FCrudButton
:::
