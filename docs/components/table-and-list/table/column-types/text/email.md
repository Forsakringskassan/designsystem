---
title: Kolumntyp mejladress i tabell
short-title: Mejladress
name: column-type-email
layout: article
search:
    terms:
        - text:email
        - mejladress
---

Använd mejladress (`text:email`) för inmatning och visning av mejladress i en tabell.
Mejladress följer samma validering som det {@link textfield-specialized#mejladress specialiserade inmatningsfältet mejladress}.

```ts
import { defineTableColumns } from "@fkui/vue";

const columns = defineTableColumns<Record<string, string>>([
    {
        type: "text:email",
        header: "Mejladress",
        key: "email",
        editable: true,
    },
]);
```

## Parametrar

**`type:`** `"text:email"`
: Kolumnens typ.

**`header:`** `string | Readonly<Ref<string>>`
: Kolumnrubrik.

**`key:`** `K`
: Fält i raden med mejladress.

**`editable:`** `boolean | ((row: T) => boolean)` {@optional}
: Om cellen är redigerbar.

**`description:`** `string | Readonly<Ref<string | null>>` {@optional}
: Formatbeskrivning.

**`size:`** `TableColumnSize | Readonly<Ref<TableColumnSize | null>>` {@optional}
: Hur kolumnens bredd skalas.

**`enabled:`** `boolean | Readonly<Ref<boolean>>` {@optional}
: Om kolumnen är aktiv.
