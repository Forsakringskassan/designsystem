---
title: Kolumntyp dropplista i tabell
short-title: Dropplista
name: column-type-select
layout: article
sortorder: 3
search:
    terms:
        - select
---

Använd kolumntypen dropplista (`select`) när användaren ska kunna välja ett värde från en fördefinierad lista direkt i cellen.

```ts
import { defineTableColumns } from "@fkui/vue";

interface Row {
    season: string;
}

const columns = defineTableColumns<Row>([
    {
        type: "select",
        header: "Säsong",
        key: "season",
        options: ["Vår", "Sommar", "Höst", "Vinter"],
        label() {
            return "Välj säsong";
        },
    },
]);
```

## Bra att veta

- `options` är obligatorisk.
- `selected(row)` kan användas om du inte vill läsa från `key`.
- `update(row, newValue, oldValue)` används när du behöver egen uppdateringslogik.

## Redigerbarhet

Som standard är det alltid möjligt att välja alternativ från en lista.

Om cellen ska vara redigerbar baserat på rad tillhandahåller du en `editable`-funktion
som returnerar `true` eller `false`.

```ts
import { defineTableColumns } from "@fkui/vue";

interface Row {
    fruit: string;
}

const columns = defineTableColumns<Row>([
    {
        type: "text",
        header: "Frukt",
        key: "fruit",
        editable(row) {
            return row.fruit !== "banana";
        },
    },
]);
```

Det är också möjligt att stänga av redigering för samtliga rader.

```ts
import { defineTableColumns } from "@fkui/vue";

interface Row {
    fruit: string;
}

const columns = defineTableColumns<Row>([
    {
        type: "text",
        header: "Frukt",
        key: "fruit",
        editable: false,
    },
]);
```

## Parametrar

::: api properties
interface:TableColumnSelect
:::
