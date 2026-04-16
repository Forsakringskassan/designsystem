---
title: Kolumntyp radrubrik i tabell
short-title: Radrubrik
name: column-type-rowheader
layout: article
search:
    terms:
        - tabell
        - rowheader
---

Använd kolumntypen radrubrik (`rowheader`) när en cell ska identifiera raden och fungera som rubrik för resten av radens innehåll.
Det förbättrar tabellens tillgänglighet.

```ts
import { defineTableColumns } from "@fkui/vue-labs";

interface Row {
    fruit: string;
}

const columns = defineTableColumns<Row>([
    {
        type: "rowheader",
        header: "Frukt",
        key: "fruit",
    },
]);
```

## Bra att veta

- Använd `key` eller `text(row)` för innehållet.

## Parametrar

**`type:`** `"rowheader"`
: Kolumnens typ.

**`header:`** `string | Readonly<Ref<string>>`
: Kolumnrubrik som visas i thead.

**`key:`** `K` {@optional}
: Kopplar cellens värde till värde i `T`.

**`text:`** `(row: T): string => {}` {@optional}
: Radens rubriktext.

**`description:`** `string | Readonly<Ref<string | null>>` {@optional}
: Formatbeskrivning.

**`size:`** `TableColumnSize | Readonly<Ref<TableColumnSize | null>>` {@optional}
: Hur kolumnens bredd skalas.

**`enabled:`** `boolean | Readonly<Ref<boolean>>` {@optional}
: Om kolumnen är aktiv.
