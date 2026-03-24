---
title: Radrubrik
layout: article
search:
    terms:
        - tabell
        - radrubrik
        - rowheader
---

Kolumntypen radrubrik (`rowheader`) används när en cell ska identifiera raden och fungera som rubrik för resten av radens innehåll.
Det förbättrar tabellens tillgänglighet.

## Exempel

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
- Välj radrubrik när kolumnen tydligt identifierar raden för användaren.

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
