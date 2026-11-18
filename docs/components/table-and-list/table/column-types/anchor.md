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
Varje rad visar en länktext, eventuell ikon och en `href`.

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
        target: "_self",
        iconRight: "arrow-right",
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
- `target` styr var länken ska öppnas, t ex samma flik eller i en ny flik i webbläsaren.
- `iconLeft` och `iconRight` anger en ikon ({@link FIcon Ikon}) som visas till vänster respektive höger om länktexten.
- Som alla kolumntyper kan du även använda `header`, `description`, `size` och `enabled`.

## Parametrar

::: api properties
interface:TableColumnAnchor
:::
