---
title: Kolumntyp kryssruta i tabell
short-title: Kryssruta
name: column-type-checkbox
layout: article
sortorder: 3
search:
    terms:
        - tabell
        - kryssruta
        - checkbox
---

Använd kolumntypen kryssruta (`checkbox`) när användaren ska kunna utföra en radbunden åtgärd.

```ts
import { defineTableColumns } from "@fkui/vue-labs";

interface Row {
    selected: boolean;
}

const columns = defineTableColumns<Row>([
    {
        type: "checkbox",
        header: "Vald",
        key: "selected",
        label() {
            return "Välj rad";
        },
    },
]);
```

## Bra att veta

- Använd `key` eller `checked(row)` för att läsa aktuellt värde.
- Använd `update(row, newValue, oldValue)` om du behöver egen uppdateringslogik.
- `label(row)` bör alltid sättas för tydlig skärmläsartext.

## Parametrar

**`type:`** `"checkbox"`
: Kolumnens typ.

**`header:`** `string | Readonly<Ref<string>>`
: Kolumnrubrik som visas i thead.

**`key:`** `K` {@optional}
: Kopplar cellens värde till värde i `T`.

**`checked:`** `(row: T): boolean => {}` {@optional}
: Funktion som avgör om kryssrutan är markerad.

**`update:`** `(row: T, newValue: boolean, oldValue: boolean): void => {}` {@optional}
: Anropas vid uppdaterat värde.

**`label:`** `(row: T): string => {}` {@optional}
: Skärmläsartext för kryssruta.

**`description:`** `string | Readonly<Ref<string | null>>` {@optional}
: Formatbeskrivning.

**`size:`** `TableColumnSize | Readonly<Ref<TableColumnSize | null>>` {@optional}
: Hur kolumnens bredd skalas.

**`enabled:`** `boolean | Readonly<Ref<boolean>>` {@optional}
: Om kolumnen är aktiv.
