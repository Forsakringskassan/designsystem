---
title: Kolumntyp kontonummer i tabell
short-title: Kontonnummer
name: column-type-bank-account-number
layout: article
search:
    terms:
        - text:bankAccountNumber
---

Använd kontonummer (`text:bankAccountNumber`) för inmatning och visning av bankkontonummer i en tabell.
Kontonummer följer samma validering och parsning som det {@link textfield-specialized#kontonummer specialiserade inmatningsfältet kontonummer}.

```ts
import { defineTableColumns } from "@fkui/vue";

const columns = defineTableColumns<Record<string, string>>([
    {
        type: "text:bankAccountNumber",
        header: "Kontonummer",
        key: "accountNumber",
        editable: true,
    },
]);
```

## Parametrar

::: api properties
interface:TableColumnText
:::
