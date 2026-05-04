---
title: Kolumntyp telefonnummer i tabell
short-title: Telefonnummer
name: column-type-phone-number
layout: article
search:
    terms:
        - text:phoneNumber
---

Använd telefonnummer (`text:phoneNumber`) för inmatning och visning av telefonnummer i en tabell.
Telefonnummer följer samma validering som det {@link textfield-specialized#telefonnummer specialiserade inmatningsfältet telefonnummer}.

```ts
import { defineTableColumns } from "@fkui/vue";

const columns = defineTableColumns<Record<string, string>>([
    {
        type: "text:phoneNumber",
        header: "Telefonnummer",
        key: "phoneNumber",
        editable: true,
    },
]);
```

## Parametrar

::: api properties
interface:TableColumnText
:::
