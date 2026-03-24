---
title: Organisationsnummer
layout: article
search:
    terms:
        - text:organisationsnummer
        - organisationsnummer
---

Organisationsnummer (`text:organisationsnummer`) används när ett organisationsnummer ska visas eller redigeras i tabellen.
Typen har inbyggd parsning och validering.

```ts
import { defineTableColumns } from "@fkui/vue-labs";

const columns = defineTableColumns<Record<string, string>>([
    {
        type: "text:organisationsnummer",
        header: "Organisationsnummer",
        key: "organisationId",
        editable: true,
    },
]);
```

## Parametrar

**`type:`** `"text:organisationsnummer"`
: Kolumnens typ.

**`header:`** `string | Readonly<Ref<string>>`
: Kolumnrubrik.

**`key:`** `K`
: Fält i raden med organisationsnummer.

**`editable:`** `boolean | ((row: T) => boolean)` {@optional}
: Om cellen är redigerbar.

**`description:`** `string | Readonly<Ref<string | null>>` {@optional}
: Formatbeskrivning.

**`size:`** `TableColumnSize | Readonly<Ref<TableColumnSize | null>>` {@optional}
: Hur kolumnens bredd skalas.

**`enabled:`** `boolean | Readonly<Ref<boolean>>` {@optional}
: Om kolumnen är aktiv.
