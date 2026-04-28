---
title: Kolumntyp bankgiro i tabell
short-title: Bankgiro
name: column-type-bankgiro
layout: article
search:
    terms:
        - text:bankgiro
---

Använd bankgiro (`text:bankgiro`) för inmatning och visning av bankgiro i en tabell.
Bankgiro följer samma validering och parsning som det {@link textfield-specialized#bankgiro specialiserade inmatningsfältet bankgiro}.

```ts
import { defineTableColumns } from "@fkui/vue";

const columns = defineTableColumns<Record<string, string>>([
    {
        type: "text:bankgiro",
        header: "Bankgiro",
        key: "bankgiro",
        editable: true,
    },
]);
```

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
