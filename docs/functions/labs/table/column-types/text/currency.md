---
title: Valuta
layout: article
search:
    terms:
        - text:currency
        - valuta
---

Valuta (`text:currency`) används för heltalsbelopp som ska presenteras som valuta.
Typen formaterar värdet och blir högerjusterad med tabular figures som standard.

```ts
import { defineTableColumns } from "@fkui/vue-labs";

const columns = defineTableColumns<Record<string, string>>([
    {
        type: "text:currency",
        header: "Belopp",
        key: "amount",
        editable: true,
    },
]);
```

Bra att veta:

- typen använder numerisk inmatning
- belopp visas formaterat i läsläge

## Parametrar

**`type:`** `"text:currency"`
: Kolumnens typ.

**`header:`** `string | Readonly<Ref<string>>`
: Kolumnrubrik.

**`key:`** `K`
: Fält i raden med belopp.

**`editable:`** `boolean | ((row: T) => boolean)` {@optional}
: Om cellen är redigerbar.

**`description:`** `string | Readonly<Ref<string | null>>` {@optional}
: Formatbeskrivning.

**`size:`** `TableColumnSize | Readonly<Ref<TableColumnSize | null>>` {@optional}
: Hur kolumnens bredd skalas.

**`enabled:`** `boolean | Readonly<Ref<boolean>>` {@optional}
: Om kolumnen är aktiv.
