---
title: Kolumntyp plusgiro i tabell
short-title: Plusgiro
name: column-type-plusgiro
layout: article
search:
    terms:
        - text:plusgiro
---

Använd plusgiro (`text:plusgiro`) för inmatning och visning av plusgiro i en tabell.
Plusgiro följer samma validering, formatering och parsning som det {@link textfield-specialized#plusgiro specialiserade inmatningsfältet plusgiro}.

```ts
import { defineTableColumns } from "@fkui/vue";

const columns = defineTableColumns<Record<string, string>>([
    {
        type: "text:plusgiro",
        header: "Plusgiro",
        key: "plusgiro",
        editable: true,
    },
]);
```

## Parametrar

::: api properties
interface:TableColumnText
:::
