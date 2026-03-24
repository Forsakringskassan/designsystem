---
title: Numeriskt Värde
layout: article
search:
    terms:
        - text:number
        - numeriskt
---

Numeriskt värde (`text:number`) används för numeriska värden som inte är valuta eller procent.
Typen stöder formattering med decimaler.

```ts
import { defineTableColumns } from "@fkui/vue-labs";

const columns = defineTableColumns<Record<string, string>>([
    {
        type: "text:number",
        header: "Vikt",
        key: "weight",
        decimals: 2,
        editable: true,
    },
]);
```

Bra att veta:

- högerjusteras som standard
- `decimals` styr formattering och parsning

## Parametrar

**`type:`** `"text:number"`
: Kolumnens typ.

**`header:`** `string | Readonly<Ref<string>>`
: Kolumnrubrik.

**`key:`** `K`
: Fält i raden med numeriskt värde.

**`decimals:`** `number` {@optional}
: Antal decimaler för formattering/parsing.

**`editable:`** `boolean | ((row: T) => boolean)` {@optional}
: Om cellen är redigerbar.

**`description:`** `string | Readonly<Ref<string | null>>` {@optional}
: Formatbeskrivning.

**`size:`** `TableColumnSize | Readonly<Ref<TableColumnSize | null>>` {@optional}
: Hur kolumnens bredd skalas.

**`enabled:`** `boolean | Readonly<Ref<boolean>>` {@optional}
: Om kolumnen är aktiv.
