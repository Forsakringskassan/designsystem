---
title: Expandera rader i tabell (kod)
short-title: Expandera rader (kod)
layout: article
search:
    terms:
        - tabell
---

Givet att vi har en datakälla med nästlade rader:

```ts
interface Row {
    namn: string;
    land: string;
    nested?: Row[];
}
```

För att använda expanderade rader i tabellen anger du egenskapens namn när du skapar datamängden:

```ts name=base hidden
declare const data: Row[];

interface Row {
    namn: string;
    land: string;
    nested?: Row[];
}

/* --- cut above --- */

import { useDatasetRef } from "@fkui/vue";

const rows = useDatasetRef(data);
```

```ts compare=base
declare const data: Row[];

interface Row {
    namn: string;
    land: string;
    nested?: Row[];
}

/* --- cut above --- */

import { useDatasetRef } from "@fkui/vue";

const rows = useDatasetRef(data, "nested");
```

Tabellen känner av om datamängden har skapats med nästlad data automatiskt.

## Följa existerande kolumner

Tabellen presenterar rader med nästlad data som expanderade rader.
Som standard följer expanderade rader samma kolumnstruktur som överordnade rader.

```vue nomarkup
<script setup lang="ts">
import { FTable, defineTableColumns, useDatasetRef } from "@fkui/vue";

interface Row {
    namn: string;
    land: string;
    nested: Row[];
}

const data: Row[] = [
    {
        namn: "Apelsin",
        land: "Spanien",
    },
    {
        namn: "Banan",
        land: "Columbia",
    },
    {
        namn: "Äpple",
        land: "",
        nested: [
            {
                namn: "Aroma",
                land: "Sverige",
            },
            {
                namn: "Ingrid Marie",
                land: "Sverige",
            },
            {
                namn: "Pink Lady",
                land: "Italien",
            },
        ],
    },
];
const rows = useDatasetRef(data, "nested");
const columns = defineTableColumns<Row>([
    {
        type: "text",
        header: "Namn",
        key: "namn",
    },
    {
        type: "text",
        header: "Land",
        key: "land",
    },
]);
</script>
<template>
    <f-table :rows :columns></f-table>
</template>
```

## Valfritt innehåll

Valfritt innehåll kan presenteras istället för att följa tabellens kolumner genom att använda slotten `#expandable`.
Ditt innehåll placeras i en cell som sträcker sig över hela raden och vad som ligger i datastrukturen behöver inte följa ordinarie rader.

```html static
<f-table :rows :columns>
    <template #expandable="{ row }">
        <pre>{{ row }}</pre>
    </template>
</f-table>
```

```vue nomarkup
<script setup lang="ts">
import { FTable, defineTableColumns, useDatasetRef } from "@fkui/vue";

interface Row {
    namn: string;
    land: string;
    nested: Row[];
}

const data: Row[] = [
    {
        namn: "Apelsin",
        land: "Spanien",
    },
    {
        namn: "Banan",
        land: "Columbia",
    },
    {
        namn: "Äpple",
        land: "",
        nested: [
            {
                namn: "Aroma",
                land: "Sverige",
            },
            {
                namn: "Ingrid Marie",
                land: "Sverige",
            },
            {
                namn: "Pink Lady",
                land: "Italien",
            },
        ],
    },
];
const rows = useDatasetRef(data, "nested");
const columns = defineTableColumns<Row>([
    {
        type: "text",
        header: "Namn",
        key: "namn",
    },
    {
        type: "text",
        header: "Land",
        key: "land",
    },
]);
</script>
<template>
    <f-table :rows :columns>
        <template #expandable="{ row }">
            <pre>{{ row }}</pre>
        </template>
    </f-table>
</template>
```

Skapa inte ett för komplext expanderat innehåll som till exempel att placera ytterligare expanderbara tabeller inuti.

## Relaterat

{@link expand-rows Expandera rader i tabell}

{@link code Kod för tabell}
