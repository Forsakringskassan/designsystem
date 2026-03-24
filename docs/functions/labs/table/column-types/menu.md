---
title: Åtgärdsmeny
layout: article
search:
    terms:
        - tabell
        - meny
        - menu
---

Kolumntypen åtgärdsmeny (`menu`) används när en rad ska erbjuda flera åtgärder utan att tabellen fylls med många knappar.

## Exempel

```ts
import { defineTableColumns } from "@fkui/vue-labs";

interface Row {
    id: string;
}

const columns = defineTableColumns<Row>([
    {
        type: "menu",
        header: "Åtgärder",
        text(row) {
            return `Visa åtgärder för rad ${row.id}`;
        },
        actions: [
            {
                label: "Visa",
                icon: "search",
                onClick(row) {
                    console.log("Visa rad", row.id);
                },
            },
            {
                label: "Ta bort",
                icon: "trashcan",
                onClick(row) {
                    console.log("Ta bort rad", row.id);
                },
            },
        ],
    },
]);
```

## Bra att veta

- `text(row)` används som knappens skärmläsartext.
- `actions` är en lista med menyval och tillhörande callbacks.
- Om en rad bara har en enda enkel åtgärd är `button` ofta ett bättre val.

## Parametrar

**`type:`** `"menu"`
: Kolumnens typ.

**`header:`** `string | Readonly<Ref<string>>`
: Kolumnrubrik som visas i thead.

**`text:`** `(row: T): string | null => {}`
: Skärmläsartext för menyknappen.

**`actions:`** `Array<{ label: string, icon?: string, onClick?(row: T): void }>` {@optional}
: Lista med menyval.

**`description:`** `string | Readonly<Ref<string | null>>` {@optional}
: Formatbeskrivning.

**`size:`** `TableColumnSize | Readonly<Ref<TableColumnSize | null>>` {@optional}
: Hur kolumnens bredd skalas.

**`enabled:`** `boolean | Readonly<Ref<boolean>>` {@optional}
: Om kolumnen är aktiv.
