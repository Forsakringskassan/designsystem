---
title: Välja rader i tabell (kod)
short-title: Välja rader (kod)
layout: article
search:
    terms:
        - tabell
---

```vue
<script setup lang="ts">
import { ref } from "vue";
import { useDatasetRef } from "@fkui/vue";
import { FTable, defineTableColumns } from "@fkui/vue";

interface Row {
    id: string;
    fruit: string;
}

const rows = useDatasetRef<Row>([
    { id: "1", fruit: "Apelsin" },
    { id: "2", fruit: "Banan" },
    { id: "3", fruit: "Päron" },
]);

const columns = defineTableColumns<Row>([
    {
        type: "text",
        header: "Frukt",
        key: "fruit",
    },
]);

const selectedRows = ref<Row[]>([]);
</script>

<template>
    <f-table
        v-model:selected-rows="selectedRows"
        :rows
        :columns
        key-attribute="id"
        selectable="multi"
    >
    </f-table>
</template>
```

## Flerval

Använd `selectable="multi"` för att låta användaren välja flera rader i tabellen.

Valda rader exponeras genom `v-model:selected-rows`.

```ts nocompile
const selectedRows = ref<Row[]>([]);
```

```html static
<f-table
    v-model:selected-rows="selectedRows"
    :columns
    :rows
    selectable="multi"
></f-table>
```

`selectedRows` innehåller de radobjekt som användaren har valt.

### Bulkoperation

Vid flerval kan du utföra bulkoperationer på de valda raderna.

Om användaren kan ta bort innehåll från tabellen bör du låta användaren bekräfta åtgärden innan den genomförs.

```ts
import { ref } from "vue";
import { removeDatasetRows, useDatasetRef, useModal } from "@fkui/vue";

interface Row {
    frukt: string;
}

const rows = useDatasetRef<Row>([
    { frukt: "Apelsin" },
    { frukt: "Banan" },
    { frukt: "Päron" },
]);

/* --- cut above --- */

const selectedRows = ref<Row[]>([]);

const { confirmModal } = useModal();

async function removeSelected(): Promise<void> {
    const selectedCount = selectedRows.value.length;
    const selectedFruitText =
        selectedCount === 1 ? "vald frukt" : "valda frukter";

    if (selectedRows.value.length === 0) {
        return;
    }

    const confirmed = await confirmModal({
        heading: "Ta bort frukt(er)",
        content: `Är du säker att du vill ta bort ${selectedCount} ${selectedFruitText}?`,
        confirm: "Ja, ta bort",
        dismiss: "Nej, behåll",
    });

    if (confirmed) {
        removeDatasetRows(rows, selectedRows);
    }
}
```

```html static
<f-button @click="removeSelected"> Ta bort valda </f-button>

<f-table
    v-model:selected-rows="selectedRows"
    :columns
    :rows
    selectable="multi"
></f-table>
```

::: info Tips
När texten innehåller antal kan du använda `fkui/i18n-translate` och skicka med antal som parameter, till exempel `count`.
Det gör det enklare att hantera forumuleringar för singular och plural i översatta texter.

{@link translate-text Läs mer om att anpassa och översätta text.}
:::

{@link create-delete-rows-code Läs mer om att lägga till och ta bort rader.}

## Enkelval

Använd `selectable="single"` för att låta användaren välja en rad i taget.

Vid enkelval innehåller `selectedRows` högst en rad.

```ts nocompile
const selectedRows = ref<Row[]>([]);
```

```html static
<f-table
    v-model:selected-rows="selectedRows"
    :columns
    :rows
    selectable="single"
></f-table>
```

## Relaterat

{@link code Kod för tabell}

{@link select-rows Välja rader i tabell}
