---
title: Datum
layout: article
search:
    terms:
        - text:date
        - datum
---

Datum (`text:date`) används när cellen innehåller ett datumvärde som ska visas och valideras som datum.

```ts
import { defineTableColumns } from "@fkui/vue-labs";

const columns = defineTableColumns<Record<string, string>>([
    {
        type: "text:date",
        header: "Datum",
        key: "date",
        editable: true,
    },
]);
```

Bra att veta:

- parser och formatter hjälper till att normalisera datumformatet
- typen har inbyggd datumvalidering

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
