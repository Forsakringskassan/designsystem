---
title: Anpassa egen kolumntyp i tabell
short-title: Anpassa egen kolumntyp
name: column-type-render
layout: article
sortorder: 4
search:
    terms:
        - tabell
        - render
        - eget innehåll
---

Använd kolumntypen renderat innehåll (`render`) när du behöver presentera något som inte ryms i de övriga färdiga kolumntyperna.

```ts
import { h } from "vue";
import { defineTableColumns } from "@fkui/vue";

interface Row {
    status: string;
}

const columns = defineTableColumns<Row>([
    {
        header: "Status",
        render(row) {
            return h("td", row.status);
        },
    },
]);
```

## Bra att veta

- Den här varianten använder `render(row)` i stället för ett vanligt `type`-värde.
- Använd den sparsamt, välj i första hand någon av de färdiga kolumntyperna.
- Eget renderat innehåll passar bra när du behöver en helt anpassad presentation.

## Parametrar

**`render:`** `(row: T): VNode | Component => {}`
: Returnerar cellens innehåll.

**`header:`** `string | Readonly<Ref<string>>`
: Kolumnrubrik som visas i thead.

**`key:`** `K` {@optional}
: Kopplar cellens värde till värde i `T`.

**`description:`** `string | Readonly<Ref<string | null>>` {@optional}
: Formatbeskrivning.

**`size:`** `TableColumnSize | Readonly<Ref<TableColumnSize | null>>` {@optional}
: Hur kolumnens bredd skalas.

**`enabled:`** `boolean | Readonly<Ref<boolean>>` {@optional}
: Om kolumnen är aktiv.
