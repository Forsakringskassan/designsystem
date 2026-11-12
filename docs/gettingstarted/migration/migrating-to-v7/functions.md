---
title: "Version 7 migreringsguide: Funktioner"
short-title: Funktioner
name: migrating-to-v7-funktioner
layout: article
redirect_from:
	- gettingstarted/migration/migrating-crud-button.html
---

## `@fkui/vue`

Följande komponenter är borttagna:

- [`FCrudButton`](#fcrudbutton)

Följande propar är ändrade:

- [`FModal` `size`](#fmodal)

Följande propar är borttagna:

- [`FSortFilterDataset` `placeholderFilter`](#fsortfilterdataset)

Följande funktioner är borttagna:

- [`getLegacyInternalKey()`](#getlegacyinternalkey)
- [`TableScroll.VERTICAL` och `TableScroll.BOTH`](#tablescroll)

### `FCrudButton`

Komponenten `FCrudButton` är borttagen.

För enskilda knappar använder du {@link component:FButton FButton}.
I tabeller använder du i stället en `menu`-kolumn i {@link component:FTable FTable}.
När du placerar tabellen i `FCrudDataset` kopplar du menyåtgärdernas `onClick` till `updateItem(item)` och `deleteItem(item)`, som du når via en template ref på `FCrudDataset`.
Utanför tabeller får du samma funktioner som slot-props i defaultslotten.

Så ersätter du propsen:

- `action` ersätts med `updateItem(item)` eller `deleteItem(item)` i menyåtgärdens `onClick` eller knappens `@click`.
- `icon` anges på en action i `menu`-kolumnen eller med `icon-left` på `FButton`.
- `label` anges med actionens `label` eller som knappens text i `FButton`.

För tabell, se {@link FCrudDataset#tabell-med-redigering Tabell med redigering} för ett exempel med `menu`-kolumn.

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
                    icon-left="trashcan"
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

### `FModal`

Propen `size` stödjer inte längre aliaset `fullscreen` och är ersatt med `fullwidth`.

```diff
 const modal = openModal(FModal, {
-    size: "fullscreen",
+    size: "fullwidth",
 });
```

### `FSortFilterDataset`

Propen `placeholderFilter` är borttagen och ersatt med `filterLabel`.

```diff
 <f-sort-filter-dataset
-    placeholderFilter="Lorem ipsum"
+    filter-label="Lorem ipsum"
 >
```

### `getLegacyInternalKey()`

Använd `findItemIdentifier()` eller `getItemIdentifier()` istället för att hämta ut identifieraren istället för dess nyckel.

```diff
-const key = getLegacyInternalKey();
-const id = myObj[key];
+const id = getItemIdentifier(myObj);
```

### `TableScroll`

`FDataTable` och `FInteractiveTable` stödjer inte längre `TableScroll.VERTICAL` och `TableScroll.HORIZONTAL`.
Vi rekommenderar att undvika vertikal scroll, behöver du trots allt det så behöver det implementeras i applikationen.

::: warning

Tänk på att scrollbara ytor måste vara kunna tangentbordsnavigeras för att vara tillgängliga.

:::
