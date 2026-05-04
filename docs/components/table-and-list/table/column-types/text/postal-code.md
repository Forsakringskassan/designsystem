---
title: Kolumntyp postnummer i tabell
short-title: Postnummer
name: column-type-postal-code
layout: article
search:
    terms:
        - text:postalCode
        - postnummer
---

Använd postnummer (`text:postalCode`) för inmatning och visning av postnummer i en tabell.
Postnummer följer samma validering, formatering och parsning som det {@link textfield-specialized#postnummer specialiserade inmatningsfältet postnummer}.

```ts
import { defineTableColumns } from "@fkui/vue";

const columns = defineTableColumns<Record<string, string>>([
    {
        type: "text:postalCode",
        header: "Postnummer",
        key: "postalCode",
        editable: true,
    },
]);
```

## Parametrar

::: api properties
interface:TableColumnText
:::
