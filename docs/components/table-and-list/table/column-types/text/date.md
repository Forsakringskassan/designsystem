---
title: Kolumntyp datum i tabell
short-title: Datum
name: column-type-date
layout: article
search:
    terms:
        - text:date
        - datum
---

Använd datum (`text:date`) för inmatning och visning av datum i en tabell.
Datum har {@link validators#datum validering}, {@link formatters-and-parsers#datum formatering och parsning} för datum.

```ts
import { defineTableColumns } from "@fkui/vue";

const columns = defineTableColumns<Record<string, string>>([
    {
        type: "text:date",
        header: "Datum",
        key: "date",
        editable: true,
    },
]);
```

## Parametrar

::: api properties
interface:TableColumnText
:::
