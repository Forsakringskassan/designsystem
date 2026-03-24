---
title: Postnummer
layout: article
search:
    terms:
        - text:postalCode
        - postnummer
---

Postnummer (`text:postalCode`) används när ett postnummer ska visas eller redigeras.
Typen har inbyggd formattering och validering för postnummerformat.

```ts
import { defineTableColumns } from "@fkui/vue-labs";

const columns = defineTableColumns<Record<string, string>>([
    {
        type: "text:postalCode",
        header: "Postnummer",
        key: "postalCode",
        editable: true,
    },
]);
```

## Parametrar

**`type:`** `"text:postalCode"`
: Kolumnens typ.

**`header:`** `string | Readonly<Ref<string>>`
: Kolumnrubrik.

**`key:`** `K`
: Fält i raden med postnummer.

**`editable:`** `boolean | ((row: T) => boolean)` {@optional}
: Om cellen är redigerbar.

**`description:`** `string | Readonly<Ref<string | null>>` {@optional}
: Formatbeskrivning.

**`size:`** `TableColumnSize | Readonly<Ref<TableColumnSize | null>>` {@optional}
: Hur kolumnens bredd skalas.

**`enabled:`** `boolean | Readonly<Ref<boolean>>` {@optional}
: Om kolumnen är aktiv.
