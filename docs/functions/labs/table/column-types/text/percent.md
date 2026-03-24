---
title: Procent
layout: article
search:
    terms:
        - text:percent
        - procent
---

Procent (`text:percent`) används för procenttal.
Typen har inbyggd formattering, parsning och validering för procentvärden.

```ts
import { defineTableColumns } from "@fkui/vue-labs";

const columns = defineTableColumns<Record<string, string>>([
    {
        type: "text:percent",
        header: "Andel",
        key: "share",
        decimals: 1,
        editable: true,
    },
]);
```

Bra att veta:

- högerjusteras som standard
- validerar giltigt procentintervall

## Parametrar

**`type:`** `"text:percent"`
: Kolumnens typ.

**`header:`** `string | Readonly<Ref<string>>`
: Kolumnrubrik.

**`key:`** `K`
: Fält i raden med procentvärde.

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
