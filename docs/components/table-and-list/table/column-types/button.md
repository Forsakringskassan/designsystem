---
title: Kolumntyp knapp i tabell
short-title: Knapp
name: column-type-button
layout: api
sortorder: 3
search:
    terms:
        - tabell
        - button
---

Använd kolumntypen knapp (`button`) när användaren ska kunna utföra en radbunden åtgärd.

```ts
import { defineTableColumns } from "@fkui/vue";

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

**`description:`** `string | Readonly<Ref<string | null>>` {@optional}
: Formatbeskrivning

**`enabled:`** `boolean | ((row: T): boolean => {})` {@optional}
: Om knappen ska visas.
Default `true`.

**`header:`** `string | Readonly<Ref<string>>`
: Kolumnrubrik som visas i thead.

**`icon`** `string` {@optional}
: Namn på den ikon som ska visas på knappen, se FIcon.

**`key:`** `K` {@optional}
: Kopplar cellens värde till värde i `T`.

**`onClick:`** `(row: T):void => {}` {@optional}
: Funktion som anropas vid klick på knapp.

**`size:`** `TableColumnSize | Readonly<Ref<TableColumnSize | null>>` {@optional}
: Hur kolumnens bredd skalas. `"grow"` ger största möjliga bredd och `"shrink"` minsta möjliga bredd.
Default: `grow`.

**`text:`** `(row: T): string | null => {}`
: Funktion som retunerar knappens text.

**`type:`** `InputTypeText`
: Kolumnens typ, sätts till `button`.
