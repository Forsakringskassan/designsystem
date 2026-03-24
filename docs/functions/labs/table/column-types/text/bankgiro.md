---
title: Bankgiro
layout: article
search:
    terms:
        - text:bankgiro
        - bankgiro
---

Bankgiro (`text:bankgiro`) används för värden som ska följa bankgiroformat.
Typen har inbyggd formatering, parsning och validering.

```ts
import { defineTableColumns } from "@fkui/vue-labs";

const columns = defineTableColumns<Record<string, string>>([
    {
        type: "text:bankgiro",
        header: "Bankgiro",
        key: "bankgiro",
        editable: true,
    },
]);
```

Bra att veta:

- passar för redigerbara tabellceller
- hjälper användaren att hålla korrekt format

## Parametrar

**`type:`** `"text:bankgiro"`
: Kolumnens typ.

**`header:`** `string | Readonly<Ref<string>>`
: Kolumnrubrik.

**`key:`** `K`
: Fält i raden med bankgiro.

**`editable:`** `boolean | ((row: T) => boolean)` {@optional}
: Om cellen är redigerbar.

**`description:`** `string | Readonly<Ref<string | null>>` {@optional}
: Formatbeskrivning.

**`size:`** `TableColumnSize | Readonly<Ref<TableColumnSize | null>>` {@optional}
: Hur kolumnens bredd skalas.

**`enabled:`** `boolean | Readonly<Ref<boolean>>` {@optional}
: Om kolumnen är aktiv.
