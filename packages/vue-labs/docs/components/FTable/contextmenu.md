---
title: "FTable: Kontextmeny"
short-title: Kontextmeny
layout: article
---

Använder FContextMenu.

I exemplet kommer åtgärd "A" och "B" visa ett meddelande.
Åtgärd "C" saknar avsiktligen funktion men ska inte krascha exemplet.

```import
FTableContextmenuExample.vue
```

::: warning

Känd bugg: tabbning när meny är öppen stämmer inte med krav.

:::

## Användning

```ts
import { defineTableColumns } from "@fkui/vue-labs";

const columns = defineTableColumns<never>([
    /* --- cut above --- */
    {
        header: "Kolumnrubrik",
        type: "menu",
        actions: [
            {
                label: "Etikett",
                icon: "trashcan",
                onClick(row) {
                    console.log("Run action A on row", { row });
                },
            },
            /* ... */
        ],
    },

    /* --- cut below --- */
]);
```

- `icon` är valfri
- `onClick` anropas med raden som kontextmenyn tillhör.

## Relaterat

- FContextMenu
