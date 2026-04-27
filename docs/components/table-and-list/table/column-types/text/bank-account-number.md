---
title: Kolumntyp kontonummer i tabell
short-title: Kontonnummer
name: column-type-bank-account-number
layout: article
search:
    terms:
        - text:bankAccountNumber
---

Använd kontonummer (`text:bankAccountNumber`) för inmatning och visning av bankkontonummer i en tabell.
Kontonummer följer samma validering och parsning som det {@link textfield-specialized#kontonummer specialiserade inmatningsfältet kontonummer}.

```ts
import { defineTableColumns } from "@fkui/vue-labs";

const columns = defineTableColumns<Record<string, string>>([
    {
        type: "text:bankAccountNumber",
        header: "Kontonummer",
        key: "accountNumber",
        editable: true,
    },
]);
```

## Parametrar

**`type:`** `"text:bankAccountNumber"`
: Kolumnens typ.

**`header:`** `string | Readonly<Ref<string>>`
: Kolumnrubrik.

**`key:`** `K`
: Fält i raden med kontonummer.

**`editable:`** `boolean | ((row: T) => boolean)` {@optional}
: Om cellen är redigerbar.

**`description:`** `string | Readonly<Ref<string | null>>` {@optional}
: Formatbeskrivning.

**`size:`** `TableColumnSize | Readonly<Ref<TableColumnSize | null>>` {@optional}
: Hur kolumnens bredd skalas.

**`enabled:`** `boolean | Readonly<Ref<boolean>>` {@optional}
: Om kolumnen är aktiv.
