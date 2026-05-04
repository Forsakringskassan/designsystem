---
title: Kolumntyp mejladress i tabell
short-title: Mejladress
name: column-type-email
layout: article
search:
    terms:
        - text:email
        - mejladress
---

Använd mejladress (`text:email`) för inmatning och visning av mejladress i en tabell.
Mejladress följer samma validering som det {@link textfield-specialized#mejladress specialiserade inmatningsfältet mejladress}.

```ts
import { defineTableColumns } from "@fkui/vue";

const columns = defineTableColumns<Record<string, string>>([
    {
        type: "text:email",
        header: "Mejladress",
        key: "email",
        editable: true,
    },
]);
```

## Parametrar

::: api properties
interface:TableColumnText
:::
