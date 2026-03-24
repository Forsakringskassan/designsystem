---
title: Eget Renderat Innehåll
layout: article
search:
    terms:
        - tabell
        - render
        - eget innehåll
---

Kolumntypen eget renderat innehåll (`render`) används när du behöver presentera något som inte ryms i de färdiga kolumntyperna.

## Exempel

```ts
import { h } from "vue";
import { defineTableColumns } from "@fkui/vue-labs";

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
- Använd den sparsamt. Välj en inbyggd kolumntyp när det går.
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
