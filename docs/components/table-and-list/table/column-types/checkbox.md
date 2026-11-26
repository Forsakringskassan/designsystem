---
title: Kolumntyp kryssruta i tabell
short-title: Kryssruta
name: column-type-checkbox
layout: article
sortorder: 3
search:
    terms:
        - tabell
        - kryssruta
        - checkbox
---

Använd kolumntypen kryssruta (`checkbox`) när användaren ska kunna utföra en radbunden åtgärd.

```ts
import { defineTableColumns } from "@fkui/vue";

interface Row {
    selected: boolean;
}

const columns = defineTableColumns<Row>([
    {
        type: "checkbox",
        header: "Vald",
        key: "selected",
        label() {
            return "Välj rad";
        },
    },
]);
```

## Bra att veta

- Använd `key` eller `checked(row)` för att läsa aktuellt värde.
- Använd `update(row, newValue, oldValue)` om du behöver egen uppdateringslogik.
- `label(row)` bör alltid sättas för tydlig skärmläsartext.

## Parametrar

::: api properties
interface:TableColumnCheckbox
:::
