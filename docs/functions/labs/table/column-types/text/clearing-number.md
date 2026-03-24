---
title: Clearingnummer
layout: article
search:
    terms:
        - text:clearingNumber
        - clearingnummer
---

Clearingnummer (`text:clearingNumber`) används när tabellen ska visa eller redigera clearingnummer.
Typen hanterar trimning, parsning och validering.

```ts
import { defineTableColumns } from "@fkui/vue-labs";

const columns = defineTableColumns<Record<string, string>>([
    {
        type: "text:clearingNumber",
        header: "Clearingnummer",
        key: "clearingNumber",
        editable: true,
    },
]);
```

## Parametrar

**`type:`** `"text:clearingNumber"`
: Kolumnens typ.

**`header:`** `string | Readonly<Ref<string>>`
: Kolumnrubrik.

**`key:`** `K`
: Fält i raden med clearingnummer.

**`editable:`** `boolean | ((row: T) => boolean)` {@optional}
: Om cellen är redigerbar.

**`description:`** `string | Readonly<Ref<string | null>>` {@optional}
: Formatbeskrivning.

**`size:`** `TableColumnSize | Readonly<Ref<TableColumnSize | null>>` {@optional}
: Hur kolumnens bredd skalas.

**`enabled:`** `boolean | Readonly<Ref<boolean>>` {@optional}
: Om kolumnen är aktiv.
