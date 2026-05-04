---
title: Kolumntyp organisationsnummer i tabell
short-title: Organisationsnummer
name: column-type-organisationsnummer
layout: article
search:
    terms:
        - text:organisationsnummer
---

Använd organisationsnummer (`text:organisationsnummer`) för inmatning och visning av organisationsnummer i en tabell.
Organisationsnummer följer samma validering, formatering och parsning som det {@link textfield-specialized#organisationsnummer specialiserade inmatningsfältet organisationsnummer}.

```ts
import { defineTableColumns } from "@fkui/vue";

const columns = defineTableColumns<Record<string, string>>([
    {
        type: "text:organisationsnummer",
        header: "Organisationsnummer",
        key: "organisationId",
        editable: true,
    },
]);
```

## Parametrar

::: api properties
interface:TableColumnText
:::
