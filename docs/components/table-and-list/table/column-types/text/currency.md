---
title: Kolumntyp valuta i tabell
short-title: Valuta
name: column-type-currency
layout: article
search:
    terms:
        - text:currency
---

Använd valuta (`text:currency`) för inmatning och visning av valuta i en tabell.
Valuta följer samma validering, formatering och parsning som det {@link textfield-specialized#valuta specialiserade inmatningsfältet valuta}.

```ts
import { defineTableColumns } from "@fkui/vue";

const columns = defineTableColumns<Record<string, string>>([
    {
        type: "text:currency",
        header: "Belopp",
        key: "amount",
        editable: true,
    },
]);
```

## Parametrar

::: api properties
interface:TableColumnText
:::
