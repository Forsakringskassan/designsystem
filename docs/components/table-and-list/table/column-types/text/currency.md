---
title: Kolumntyp valuta i tabell
short-title: Valuta
name: column-type-currency
layout: article
search:
    terms:
        - text:currency
---

Använd valuta (`text:currency`) för inmatning och visning av valuta i en tabell.
Valuta följer samma validering, formatering och parsning som det {@link textfield-specialized#valuta specialiserade inmatningsfältet valuta}.

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
