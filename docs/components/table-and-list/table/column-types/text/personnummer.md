---
title: Kolumntyp personnummer i tabell
short-title: Personnummer
name: column-type-personnummer
layout: article
search:
    terms:
        - text:personnummer
---

Använd personnummer (`text:personnummer`) för inmatning och visning av personnummer i en tabell.
Personnummer följer samma validering, formatering och parsning som det {@link textfield-specialized#personnummer specialiserade inmatningsfältet personnummer}.

```ts
import { defineTableColumns } from "@fkui/vue";

const columns = defineTableColumns<Record<string, string>>([
    {
        type: "text:personnummer",
        header: "Personnummer",
        key: "personnummer",
        editable: true,
    },
]);
```

## Parametrar

::: api properties
interface:TableColumnText
:::
