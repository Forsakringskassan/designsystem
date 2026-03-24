---
title: Personnummer
layout: article
search:
    terms:
        - text:personnummer
        - personnummer
---

Personnummer (`text:personnummer`) används för svenska personnummer.
Typen har inbyggd formattering, parsning och validering, inklusive kontroll av format och kontrollsiffra.

```ts
import { defineTableColumns } from "@fkui/vue-labs";

const columns = defineTableColumns<Record<string, string>>([
    {
        type: "text:personnummer",
        header: "Personnummer",
        key: "personnummer",
        editable: true,
    },
]);
```

## Parametrar

**`type:`** `"text:personnummer"`
: Kolumnens typ.

**`header:`** `string | Readonly<Ref<string>>`
: Kolumnrubrik.

**`key:`** `K`
: Fält i raden med personnummer.

**`editable:`** `boolean | ((row: T) => boolean)` {@optional}
: Om cellen är redigerbar.

**`description:`** `string | Readonly<Ref<string | null>>` {@optional}
: Formatbeskrivning.

**`size:`** `TableColumnSize | Readonly<Ref<TableColumnSize | null>>` {@optional}
: Hur kolumnens bredd skalas.

**`enabled:`** `boolean | Readonly<Ref<boolean>>` {@optional}
: Om kolumnen är aktiv.
