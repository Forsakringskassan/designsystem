---
title: Kolumntyp kontextmeny i tabell
short-title: Kontextmeny
name: column-type-menu
layout: article
sortorder: 3
search:
    terms:
        - menu
---

Använd kolumntypen kontextmeny (`menu`) när en rad ska erbjuda flera åtgärder utan att tabellen fylls med många knappar.

```import
FTableContextmenuExample.vue
```

## Användning

Använd kolumntypen `menu` och sätt `actions` till en lista med åtgärder.
Åtgärdens `onClick()` anropas med raden som parameter när åtgärden väljs.

Knappens skärmläsartext sätts med `text()` metoden och du behöver förtydliga vilken rad åtgärderna gäller för.

```ts
import { defineTableColumns } from "@fkui/vue";

const row = { id: 1 };

const columns = defineTableColumns<typeof row>([
    /* --- cut above --- */
    {
        header: "Åtgärd",
        type: "menu",
        text(row) {
            return `Åtgärder för rad ${row.id}`;
        },
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

## Parametrar

**`type:`** `"menu"`
: Kolumnens typ.

**`header:`** `string | Readonly<Ref<string>>`
: Kolumnrubrik som visas i thead.

**`text:`** `(row: T): string | null => {}`
: Skärmläsartext för menyknappen.

**`actions:`** `Array<{ label: string, icon?: string, onClick?(row: T): void }>` {@optional}
: Lista med menyval.

**`description:`** `string | Readonly<Ref<string | null>>` {@optional}
: Formatbeskrivning.

**`size:`** `TableColumnSize | Readonly<Ref<TableColumnSize | null>>` {@optional}
: Hur kolumnens bredd skalas.

**`enabled:`** `boolean | Readonly<Ref<boolean>>` {@optional}
: Om kolumnen är aktiv.

## Relaterat

- FContextMenu
- FIcon
