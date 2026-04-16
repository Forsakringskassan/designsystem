---
title: Kolumntyp telefonnummer i tabell
short-title: Telefonnummer
name: column-type-phone-number
layout: article
search:
    terms:
        - text:phoneNumber
---

Använd telefonnummer (`text:phoneNumber`) för inmatning och visning av telefonnummer i en tabell.
Telefonnummer följer samma validering som det {@link textfield-specialized#telefonnummer specialiserade inmatningsfältet telefonnummer}.

```ts
import { defineTableColumns } from "@fkui/vue-labs";

const columns = defineTableColumns<Record<string, string>>([
    {
        type: "text:phoneNumber",
        header: "Telefonnummer",
        key: "phoneNumber",
        editable: true,
    },
]);
```

## Parametrar

**`type:`** `"text:phoneNumber"`
: Kolumnens typ.

**`header:`** `string | Readonly<Ref<string>>`
: Kolumnrubrik.

**`key:`** `K`
: Fält i raden med telefonnummer.

**`editable:`** `boolean | ((row: T) => boolean)` {@optional}
: Om cellen är redigerbar.

**`description:`** `string | Readonly<Ref<string | null>>` {@optional}
: Formatbeskrivning.

**`size:`** `TableColumnSize | Readonly<Ref<TableColumnSize | null>>` {@optional}
: Hur kolumnens bredd skalas.

**`enabled:`** `boolean | Readonly<Ref<boolean>>` {@optional}
: Om kolumnen är aktiv.
