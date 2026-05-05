---
title: Kolumntyp radrubrik i tabell
short-title: Radrubrik
name: column-type-rowheader
layout: article
sortorder: 3
search:
    terms:
        - tabell
        - rowheader
---

Använd kolumntypen radrubrik (`rowheader`) när en cell ska identifiera raden och fungera som rubrik för resten av radens innehåll.
Det förbättrar tabellens tillgänglighet.

```ts
import { defineTableColumns } from "@fkui/vue";

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

::: api properties
interface:TableColumnRowHeader
:::
