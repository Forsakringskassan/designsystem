---
title: "FTable: Kontextmeny"
short-title: Kontextmeny
layout: article
---

Kontextmeny används för att visa åtgärder för en tabellrad och används istället för att lägga in flera knappar på raden.

Använder FContextMenu.

```import
FTableContextmenuExample.vue
```

## Användning

Använd kolumntypen `menu` och sätt `actions` till en lista med åtgärder.
Åtgärdens `onClick()` anropas med raden som parameter när åtgärden väljs.

Knappens skärmläsartext sätts med `text()` metoden och bör förtydliga vilken rad åtgärderna gäller för.

```ts
import { defineTableColumns } from "@fkui/vue-labs";

const row = { id: 1 };

const columns = defineTableColumns<typeof row>([
    /* --- cut above --- */
    {
        header: "Åtgärd",
        type: "menu",
        text(row) {
            return `Åtgärder för rad ${row.id}`;
        }
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

- `icon` är valfri och sätts till namnet på en [ikon](https://designsystem.forsakringskassan.se/latest/styles/icons.html).
- `onClick` anropas med raden som kontextmenyn tillhör som parameter.

## Relaterat

- FContextMenu
- FIcon
