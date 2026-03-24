---
title: Knapp
layout: article
search:
    terms:
        - tabell
        - knapp
        - button
---

Kolumntypen knapp (`button`) används när användaren ska kunna utföra en radbunden åtgärd direkt i tabellen.

## Exempel

```ts
import { defineTableColumns } from "@fkui/vue-labs";

interface Row {
    id: string;
}

const columns = defineTableColumns<Row>([
    {
        type: "button",
        header: "Åtgärd",
        text() {
            return "Visa";
        },
        onClick(row) {
            console.log("Visa rad", row.id);
        },
        icon: "search",
    },
]);
```

## Bra att veta

- `text(row)` styr knappens text eller skärmläsartext.
- `onClick(row)` kör åtgärden för raden.
- `icon` och `iconLibrary` är valfria.

## Parametrar

**`type:`** `"button"`
: Kolumnens typ.

**`header:`** `string | Readonly<Ref<string>>`
: Kolumnrubrik som visas i thead.

**`text:`** `(row: T): string | null => {}`
: Funktion som returnerar knappens text.

**`onClick:`** `(row: T): void => {}` {@optional}
: Anropas vid klick på knapp.

**`icon:`** `string` {@optional}
: Namn på ikon.

**`iconLibrary:`** `string` {@optional}
: Ikonbibliotek för ikonen.

**`key:`** `K` {@optional}
: Kopplar cellens värde till värde i `T`.

**`description:`** `string | Readonly<Ref<string | null>>` {@optional}
: Formatbeskrivning.

**`size:`** `TableColumnSize | Readonly<Ref<TableColumnSize | null>>` {@optional}
: Hur kolumnens bredd skalas.

**`enabled:`** `boolean | Readonly<Ref<boolean>>` {@optional}
: Om kolumnen är aktiv.
