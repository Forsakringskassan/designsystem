---
title: Dropplista
layout: article
search:
    terms:
        - tabell
        - dropplista
        - select
---

Kolumntypen dropplista (`select`) används när användaren ska kunna välja ett värde från en fördefinierad lista direkt i cellen.

## Exempel

```ts
import { defineTableColumns } from "@fkui/vue-labs";

interface Row {
    season: string;
}

const columns = defineTableColumns<Row>([
    {
        type: "select",
        header: "Säsong",
        key: "season",
        editable: true,
        options: ["Vår", "Sommar", "Höst", "Vinter"],
        label() {
            return "Välj säsong";
        },
    },
]);
```

## Bra att veta

- `options` är obligatorisk.
- `selected(row)` kan användas om du inte vill läsa från `key`.
- `update(row, newValue, oldValue)` används när du behöver egen uppdateringslogik.

## Parametrar

**`type:`** `"select"`
: Kolumnens typ.

**`header:`** `string | Readonly<Ref<string>>`
: Kolumnrubrik som visas i thead.

**`options:`** `string[]`
: Lista med valbara alternativ.

**`key:`** `K` {@optional}
: Kopplar cellens värde till värde i `T`.

**`selected:`** `(row: T): string => {}` {@optional}
: Returnerar valt värde för raden.

**`update:`** `(row: T, newValue: string, oldValue: string): void => {}` {@optional}
: Anropas vid uppdaterat värde.

**`editable:`** `boolean | ((row: T) => boolean)` {@optional}
: Om cellen är redigerbar.

**`label:`** `(row: T): string => {}` {@optional}
: Skärmläsartext för dropplistan.

**`description:`** `string | Readonly<Ref<string | null>>` {@optional}
: Formatbeskrivning.

**`size:`** `TableColumnSize | Readonly<Ref<TableColumnSize | null>>` {@optional}
: Hur kolumnens bredd skalas.

**`enabled:`** `boolean | Readonly<Ref<boolean>>` {@optional}
: Om kolumnen är aktiv.
