---
title: Bulkoperation i tabell (kod)
short-title: Bulkoperation (kod)
layout: article
search:
    terms:
        - selectable
        - selected-rows
---

Den här sidan riktar sig till utvecklare och beskriver API:t för bulkoperation i `FTable`.

Bulkoperation i tabell bygger på två delar:

- val-läge med `selectable="single"` eller `selectable="multi"`
- vald status via `v-model:selected-rows`

## Snabbstart

```vue
<script setup lang="ts">
import { ref } from "vue";
import { FButton } from "@fkui/vue";
import { FTable, defineTableColumns } from "@fkui/vue-labs";

interface Row {
    id: string;
    fruit: string;
}

const rows = ref<Row[]>([
    { id: "1", fruit: "Apelsin" },
    { id: "2", fruit: "Banan" },
]);

const selectedRows = ref<Row[]>([]);

const columns = defineTableColumns<Row>([
    {
        type: "text",
        header: "Frukt",
        key: "fruit",
        value(row) {
            return row.fruit;
        },
    },
]);

function onRemoveSelectedRows(): void {
    rows.value = rows.value.filter((row) => !selectedRows.value.includes(row));
    selectedRows.value = [];
}
</script>

<template>
    <f-button variant="secondary" @click="onRemoveSelectedRows"
        >Ta bort markerade</f-button
    >

    <f-table
        v-model:selected-rows="selectedRows"
        :rows
        :columns
        key-attribute="id"
        selectable="multi"
    >
        <template #caption>Frukter</template>
    </f-table>
</template>
```

## API i detalj

### `selectable`

Styr hur rader kan väljas.

- `"multi"`: flerval med kryssrutor
- `"single"`: enradersval med radioknapp
- utelämnad prop: inget radval

```html static
<f-table selectable="multi"> </f-table> <f-table selectable="single"> </f-table>
```

Beteende:

- `multi` visar kryssruta i varje rad och en välj-alla-kryssruta i headern.
- `single` visar radioknapp i varje rad och ingen välj-alla i headern.

### `v-model:selected-rows`

Innehåller de rader som är valda.

```html static
<f-table v-model:selected-rows="selectedRows"> </f-table>
```

Typ:

- `selectedRows` är en array av samma radtyp som skickas in i `rows`.
- även i `single`-läge används array (normalt 0 eller 1 element).

### `rows`

Källdatan för tabellen.

```html static
<f-table :rows="rows"> </f-table>
```

Viktigt för bulkoperation:

- om uppsättningen rader ändras så att nycklar läggs till, tas bort eller byts ut rensas `selectedRows`.
- detta förhindrar att gamla val lever kvar när datamängden inte längre matchar.

### `key-attribute`

Anger vilken egenskap som identifierar en rad.

```vue static
<f-table key-attribute="id"> </f-table>
```

Rekommendation:

- använd alltid en stabil och unik nyckel per rad (till exempel `id`) vid bulkoperation.
- det gör urvalet robust när tabellen renderas om.

## Implementationsmönster

### Ta bort markerade rader (multi)

```ts
interface Row {
    id: string;
}

function onRemoveSelectedRows(rows: Row[], selectedRows: Row[]): Row[] {
    return rows.filter((row) => !selectedRows.includes(row));
}
```

### Kör en åtgärd för en vald rad (single)

```ts
interface Row {
    id: string;
}

function onRunSingleAction(selectedRows: Row[]): void {
    const row = selectedRows[0];
    if (!row) {
        return;
    }

    // Kör åtgärd för vald rad
    console.log("Vald rad", row.id);
}
```

## Vanliga fallgropar

- Glömmer `v-model:selected-rows`: tabellen visar valkontroller men du kan inte läsa valen i din komponent.
- Instabil eller saknad nyckel: val kan bli svårt att följa när rader uppdateras.
- Förväntar scalar i `single`: API:t använder alltid array för `selectedRows`.
- Behåller val efter destruktiv bulkåtgärd: rensa `selectedRows` efter att rader tagits bort.

## Relaterat

{@link bulk-operation Bulkoperation}

{@link code Kod för tabell}
