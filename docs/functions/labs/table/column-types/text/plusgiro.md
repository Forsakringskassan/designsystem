---
title: Plusgiro
layout: article
search:
    terms:
        - text:plusgiro
        - plusgiro
---

Plusgiro (`text:plusgiro`) används när tabellen innehåller plusgironummer.
Typen har inbyggd formatering, parsning och validering.

```ts
import { defineTableColumns } from "@fkui/vue-labs";

const columns = defineTableColumns<Record<string, string>>([
    {
        type: "text:plusgiro",
        header: "Plusgiro",
        key: "plusgiro",
        editable: true,
    },
]);
```

## Parametrar

**`type:`** `"text:plusgiro"`
: Kolumnens typ.

**`header:`** `string | Readonly<Ref<string>>`
: Kolumnrubrik.

**`key:`** `K`
: Fält i raden med plusgiro.

**`editable:`** `boolean | ((row: T) => boolean)` {@optional}
: Om cellen är redigerbar.

**`description:`** `string | Readonly<Ref<string | null>>` {@optional}
: Formatbeskrivning.

**`size:`** `TableColumnSize | Readonly<Ref<TableColumnSize | null>>` {@optional}
: Hur kolumnens bredd skalas.

**`enabled:`** `boolean | Readonly<Ref<boolean>>` {@optional}
: Om kolumnen är aktiv.
