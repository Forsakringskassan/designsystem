---
title: Kolumntyp clearingnummer i tabell
short-title: Clearingnummer
name: column-type-clearing-number
layout: article
search:
    terms:
        - text:clearingNumber
---

Använd clearingnummer (`text:clearingNumber`) för inmatning och visning av clearingnummer i en tabell.
Clearingnummer följer samma validering, formatering och parsning som det {@link textfield-specialized#clearingnummer specialiserade inmatningsfältet clearingnummer}.

```ts
import { defineTableColumns } from "@fkui/vue";

const columns = defineTableColumns<Record<string, string>>([
    {
        type: "text:clearingNumber",
        header: "Clearingnummer",
        key: "clearingNumber",
        editable: true,
    },
]);
```

## Parametrar

::: api properties
interface:TableColumnText
:::
