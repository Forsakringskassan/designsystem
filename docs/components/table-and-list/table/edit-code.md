---
title: Redigera innehåll i tabell (kod)
short-title: Redigera innehåll (kod)
layout: article
search:
    terms:
        - tabell
---

```import
FTableInlineEdit.vue
```

## Inline-redigering

För kolumntypen {@link column-type-text Text} sätt `editable: true`.

```ts
import { defineTableColumns } from "@fkui/vue";

interface Row {
    pris: number;
}

/* --- cut above --- */

const columns = defineTableColumns<Row>([
    {
        type: "text:currency",
        header: "Pris per kilo",
        editable: true,
        key: "pris",
    },
]);
```

För kolumntypen {@link column-type-select Dropplista} är redigering påslaget by default.

```ts
import { defineTableColumns } from "@fkui/vue";

interface Row {
    land: string;
}

const lander = [
    "",
    "Colombia",
    "Costa Rica",
    "Dominikanska republiken",
    "Ecuador",
    "Frankrike",
    "Italien",
    "Spanien",
    "Sverige",
    "Sydafrika",
];

/* --- cut above --- */

const columns = defineTableColumns<Row>([
    {
        type: "select",
        options: lander,
        header: "Land",
        label: () => "Land",
        key: "land",
    },
]);
```

Det finns möjlighet att agera när värdet i en cell redigerats genom att specifiera `update()`-metoden.

```ts
import { defineTableColumns } from "@fkui/vue";

interface Row {
    pris: number;
}

/* --- cut above --- */

const columns = defineTableColumns<Row>([
    {
        type: "text:currency",
        header: "Pris per kilo",
        editable: true,
        value(row) {
            return row.pris;
        },
        update(row, value) {
            // möjlighet att agera på redigerat värde
        },
    },
]);
```

Läs mer om validering i respektive kolumntyp.

## Redigering via modaler

```import
FTableCrudEdit.vue
```

Med {@link FCrudDataset Datamängdredigeraren} kan du lägga till funktionalitet för att skapa, ändra och ta bort rader i tabellen via modaler.

## Relaterat

{@link code Kod för tabell}

{@link edit Redigera innehåll i tabell}
