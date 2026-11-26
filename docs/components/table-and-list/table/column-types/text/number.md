---
title: Kolumntyp numeriskt i tabell
short-title: Numeriskt
name: column-type-number
layout: article
search:
    terms:
        - text:number
---

Använd numeriskt textfält (`text:number`) för inmatning och visning av numeriska värden i en tabell.
Numeriskt textfält följer samma validering, formatering och parsning som det {@link textfield-specialized#numeriskt specialiserade inmatningsfältet numeriskt}.

```ts
import { defineTableColumns } from "@fkui/vue";

const columns = defineTableColumns<Record<string, string>>([
    {
        type: "text:number",
        header: "Vikt",
        key: "weight",
        decimals: 2,
        editable: true,
    },
]);
```

## Bra att veta

- högerjusteras som standard
- `decimals` styr formattering och parsning

## Parametrar

::: api properties
interface:TableColumnText
:::
