---
title: Kontonummer
layout: article
search:
    terms:
        - text:bankAccountNumber
        - kontonummer
---

Kontonummer (`text:bankAccountNumber`) används för inmatning och visning av bankkontonummer.
Typen har inbyggd parsning och validering för formatet.

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

Bra att veta:

- lämpar sig för redigerbara celler
- använder numeriskt tangentbord där det är relevant
- validerar kontonummerformat

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
