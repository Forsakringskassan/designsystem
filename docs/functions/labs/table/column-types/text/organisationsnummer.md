---
title: Kolumntyp organisationsnummer i tabell
short-title: Organisationsnummer
name: column-type-organisationsnummer
layout: article
search:
    terms:
        - text:organisationsnummer
---

Använd organisationsnummer (`text:organisationsnummer`) för inmatning och visning av organisationsnummer i en tabell.
Organisationsnummer följer samma validering, formatering och parsning som det {@link textfield-specialized#organisationsnummer specialiserade inmatningsfältet organisationsnummer}.

```ts
import { defineTableColumns } from "@fkui/vue-labs";

const columns = defineTableColumns<Record<string, string>>([
    {
        type: "text:organisationsnummer",
        header: "Organisationsnummer",
        key: "organisationId",
        editable: true,
    },
]);
```

## Parametrar

**`type:`** `"text:organisationsnummer"`
: Kolumnens typ.

**`header:`** `string | Readonly<Ref<string>>`
: Kolumnrubrik.

**`key:`** `K`
: Fält i raden med organisationsnummer.

**`editable:`** `boolean | ((row: T) => boolean)` {@optional}
: Om cellen är redigerbar.

**`description:`** `string | Readonly<Ref<string | null>>` {@optional}
: Formatbeskrivning.

**`size:`** `TableColumnSize | Readonly<Ref<TableColumnSize | null>>` {@optional}
: Hur kolumnens bredd skalas.

**`enabled:`** `boolean | Readonly<Ref<boolean>>` {@optional}
: Om kolumnen är aktiv.
