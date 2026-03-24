---
title: Mejladress
layout: article
search:
    terms:
        - text:email
        - mejladress
---

Mejladress (`text:email`) används för e-postadresser.
Typen har inbyggd validering för e-postformat och sätter lämpliga attribut för inmatningsfältet.

```ts
import { defineTableColumns } from "@fkui/vue-labs";

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
