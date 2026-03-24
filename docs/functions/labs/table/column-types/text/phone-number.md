---
title: Telefonnummer
layout: article
search:
    terms:
        - text:phoneNumber
        - telefonnummer
---

Telefonnummer (`text:phoneNumber`) används för telefonnummer i tabellen.
Typen har inbyggd validering och lämpliga attribut för telefoninmatning.

```ts
import { defineTableColumns } from "@fkui/vue-labs";

const columns = defineTableColumns<Record<string, string>>([
    {
        type: "text:phoneNumber",
        header: "Telefonnummer",
        key: "phoneNumber",
        editable: true,
    },
]);
```

## Parametrar

**`type:`** `"text:phoneNumber"`
: Kolumnens typ.

**`header:`** `string | Readonly<Ref<string>>`
: Kolumnrubrik.

**`key:`** `K`
: Fält i raden med telefonnummer.

**`editable:`** `boolean | ((row: T) => boolean)` {@optional}
: Om cellen är redigerbar.

**`description:`** `string | Readonly<Ref<string | null>>` {@optional}
: Formatbeskrivning.

**`size:`** `TableColumnSize | Readonly<Ref<TableColumnSize | null>>` {@optional}
: Hur kolumnens bredd skalas.

**`enabled:`** `boolean | Readonly<Ref<boolean>>` {@optional}
: Om kolumnen är aktiv.
