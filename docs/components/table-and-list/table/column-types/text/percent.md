---
title: Kolumntyp procent i tabell
short-title: Procent
name: column-type-percent
layout: article
search:
    terms:
        - text:percent
---

Använd procent (`text:percent`) för inmatning och visning av procentvärden i en tabell.
Procent följer samma validering, formatering och parsning som det {@link textfield-specialized#procent specialiserade inmatningsfältet procent}.

```ts
import { defineTableColumns } from "@fkui/vue";

const columns = defineTableColumns<Record<string, string>>([
    {
        type: "text:percent",
        header: "Andel",
        key: "share",
        decimals: 1,
        editable: true,
    },
]);
```

## Bra att veta

- högerjusteras som standard
- validerar giltigt procentintervall

## Parametrar

**`type:`** `"text:percent"`
: Kolumnens typ.

**`header:`** `string | Readonly<Ref<string>>`
: Kolumnrubrik.

**`key:`** `K`
: Fält i raden med procentvärde.

**`decimals:`** `number` {@optional}
: Antal decimaler för formattering/parsing.

**`editable:`** `boolean | ((row: T) => boolean)` {@optional}
: Om cellen är redigerbar.

**`description:`** `string | Readonly<Ref<string | null>>` {@optional}
: Formatbeskrivning.

**`size:`** `TableColumnSize | Readonly<Ref<TableColumnSize | null>>` {@optional}
: Hur kolumnens bredd skalas.

**`enabled:`** `boolean | Readonly<Ref<boolean>>` {@optional}
: Om kolumnen är aktiv.
