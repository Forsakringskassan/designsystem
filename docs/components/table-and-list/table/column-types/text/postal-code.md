---
title: Kolumntyp postnummer i tabell
short-title: Postnummer
name: column-type-postal-code
layout: article
search:
    terms:
        - text:postalCode
        - postnummer
---

Använd postnummer (`text:postalCode`) för inmatning och visning av postnummer i en tabell.
Postnummer följer samma validering, formatering och parsning som det {@link textfield-specialized#postnummer specialiserade inmatningsfältet postnummer}.

```ts
import { defineTableColumns } from "@fkui/vue";

const columns = defineTableColumns<Record<string, string>>([
    {
        type: "text:postalCode",
        header: "Postnummer",
        key: "postalCode",
        editable: true,
    },
]);
```

## Parametrar

**`type:`** `"text:postalCode"`
: Kolumnens typ.

**`header:`** `string | Readonly<Ref<string>>`
: Kolumnrubrik.

**`key:`** `K`
: Fält i raden med postnummer.

**`editable:`** `boolean | ((row: T) => boolean)` {@optional}
: Om cellen är redigerbar.

**`description:`** `string | Readonly<Ref<string | null>>` {@optional}
: Formatbeskrivning.

**`size:`** `TableColumnSize | Readonly<Ref<TableColumnSize | null>>` {@optional}
: Hur kolumnens bredd skalas.

**`enabled:`** `boolean | Readonly<Ref<boolean>>` {@optional}
: Om kolumnen är aktiv.
