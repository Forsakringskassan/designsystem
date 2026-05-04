---
title: Kolumntyp knapp i tabell
short-title: Knapp
name: column-type-button
layout: api
sortorder: 3
search:
    terms:
        - tabell
        - button
---

Använd kolumntypen knapp (`button`) när användaren ska kunna utföra en radbunden åtgärd.

```ts
import { defineTableColumns } from "@fkui/vue";

interface Row {
    id: string;
}

const columns = defineTableColumns<Row>([
    {
        type: "button",
        header: "Åtgärd",
        text() {
            return "Visa";
        },
        onClick(row) {
            console.log("Visa rad", row.id);
        },
        icon: "search",
    },
]);
```

## Bra att veta

- `text(row)` styr knappens text eller skärmläsartext.
- `onClick(row)` kör åtgärden för raden.
- `icon` och `iconLibrary` är valfria.

## Parametrar

::: api properties
interface:TableColumnButton
:::
