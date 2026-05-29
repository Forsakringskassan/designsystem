---
title: Välja rader i tabell (kod)
short-title: Välja rader (kod)
layout: article
search:
    terms:
        - tabell
---

## Flerval

Använd `selectable="multi"` för att låta användaren välja flera rader i tabellen.

Valda rader exponeras genom `v-model:selected-rows`.

```ts
import { ref } from "vue";

interface Row {
    frukt: string;
}

/* --- cut above --- */

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

Om använderen kan ta bort innehåll från tabellen bör du låta användaren bekräfta åtgärden innan den genomförs.

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
    if (selectedRows.value.length === 0) {
        return;
    }

    const confirmed = await confirmModal({
        heading: "Ta bort frukt(er)",
        content: "Är du säker att du vill ta bort valda frukt(er)?",
        confirm: "Ja, ta bort",
        dismiss: "Nej, behåll",
    });

    if (confirmed) {
        removeDatasetRows(rows, selectedRows);
    }
}
```

```html static
<f-button :disabled="selectedRows.length === 0" @click="removeSelected">
    Ta bort valda
</f-button>

<f-table
    v-model:selected-rows="selectedRows"
    :columns
    :rows
    selectable="multi"
></f-table>
```

{@link create-delete-rows-code Lägga till och ta bort rader}.

## Enkelval

Använd `selectable="single"` för att låta användaren välja en rad i taget.

Vid enkelval innehåller `selectedRows` högst en rad.

```ts
import { ref } from "vue";

interface Row {
    frukt: string;
}

/* --- cut above --- */

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
