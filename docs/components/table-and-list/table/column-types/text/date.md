---
title: Kolumntyp datum i tabell
short-title: Datum
name: column-type-date
layout: article
search:
    terms:
        - text:date
        - datum
---

Använd datum (`text:date`) för inmatning och visning av datum i en tabell.
Datum har {@link validators#datum validering}, {@link formatters-and-parsers#datum formatering och parsning} för datum.

```ts
import { defineTableColumns } from "@fkui/vue";

const columns = defineTableColumns<Record<string, string>>([
    {
        type: "text:date",
        header: "Datum",
        key: "date",
        editable: true,
    },
]);
```

## Parametrar

**`type:`** `"text:date"`
: Kolumnens typ.

**`header:`** `string | Readonly<Ref<string>>`
: Kolumnrubrik.

**`key:`** `K`
: Fält i raden med datum.

**`editable:`** `boolean | ((row: T) => boolean)` {@optional}
: Om cellen är redigerbar.

**`description:`** `string | Readonly<Ref<string | null>>` {@optional}
: Formatbeskrivning.

**`size:`** `TableColumnSize | Readonly<Ref<TableColumnSize | null>>` {@optional}
: Hur kolumnens bredd skalas.

**`enabled:`** `boolean | Readonly<Ref<boolean>>` {@optional}
: Om kolumnen är aktiv.
