---
title: Kolumntyp länk i tabell
short-title: Länk
name: column-type-anchor
layout: article
sortorder: 3
search:
    terms:
        - tabell
        - anchor
---

Använd kolumntypen länk (`anchor`) när en cell ska navigera vidare till mer information.
Varje rad visar en länktext och en `href`.

```ts
import { defineTableColumns } from "@fkui/vue";

interface Row {
    id: string;
    name: string;
}

const columns = defineTableColumns<Row>([
    {
        type: "anchor",
        header: "Ärende",
        href(row) {
            return `https://example.com/${row.id}`;
        },
        text(row) {
            return row.name;
        },
    },
]);
```

## Bra att veta

- `text(row)` styr vilken text som ska visas för länken.
- `href(row)` styr vilken adress som länken ska peka på.
- Som alla kolumntyper kan du även använda `header`, `description`, `size` och `enabled`.

## Parametrar

::: api properties
interface:TableColumnAnchor
:::
