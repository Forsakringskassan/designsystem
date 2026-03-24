---
title: Länk
layout: article
search:
    terms:
        - tabell
        - länk
        - anchor
---

Kolumntypen länk (`anchor`) används när en cell ska navigera vidare till mer information.
Varje rad visar en länktext och en `href`.

## Exempel

```ts
import { defineTableColumns } from "@fkui/vue-labs";

interface Row {
    id: string;
    name: string;
}

const columns = defineTableColumns<Row>([
    {
        type: "anchor",
        header: "Ärende",
        href: "/detaljer",
        text(row) {
            return row.name;
        },
    },
]);
```

## Bra att veta

- `text(row)` styr vad som visas i länken.
- `href` är obligatorisk.
- Som alla kolumntyper kan du även använda `header`, `description`, `size` och `enabled`.

## Parametrar

**`type:`** `"anchor"`
: Kolumnens typ.

**`header:`** `string | Readonly<Ref<string>>`
: Kolumnrubrik som visas i thead.

**`text:`** `(row: T): string | null => {}`
: Funktion som returnerar texten i länken.

**`href:`** `string`
: Länkens mål.

**`key:`** `K` {@optional}
: Kopplar cellens värde till värde i `T`.

**`description:`** `string | Readonly<Ref<string | null>>` {@optional}
: Formatbeskrivning.

**`size:`** `TableColumnSize | Readonly<Ref<TableColumnSize | null>>` {@optional}
: Hur kolumnens bredd skalas.

**`enabled:`** `boolean | Readonly<Ref<boolean>>` {@optional}
: Om kolumnen är aktiv.
