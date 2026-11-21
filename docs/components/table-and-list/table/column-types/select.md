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

## Alternativ i dropplistan

`options` kan innehålla strängar eller objekt med `value` och `label`.
Använd objekt när värdet som sparas i raden ska skilja sig från texten som visas för användaren.

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
        options: [
            { value: "spring", label: "Vår" },
            { value: "summer", label: "Sommar" },
            { value: "autumn", label: "Höst" },
            { value: "winter", label: "Vinter" },
        ],
    },
]);
```

Det är också möjligt att blanda strängar och objekt i samma lista.
För strängar används samma text som både värde och etikett.

Alternativen kan även anges med en funktion som returnerar en lista baserat på den aktuella raden.

```ts
import { defineTableColumns } from "@fkui/vue";

interface Row {
    season: string;
    availableSeasons: string[];
}

const columns = defineTableColumns<Row>([
    {
        type: "select",
        header: "Säsong",
        key: "season",
        options(row) {
            return row.availableSeasons;
        },
    },
]);
```

Funktionen kan returnera både strängar och objekt med `value` och `label`.

## Bra att veta

- `options` är obligatorisk.
- `value` är värdet som sparas i raden, medan `label` är texten som visas i dropplistan.
- `selected(row)` kan användas om du inte vill läsa från `key`.
- `update(row, newValue, oldValue)` används när du behöver egen uppdateringslogik.

## Redigerbarhet

Som standard är det alltid möjligt att välja alternativ från en lista.

Om cellen ska vara redigerbar baserat på en rad tillhandahåller du en `editable`-funktion
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

Det är också möjligt att stänga av redigering för samtliga rader genom att sätta `editable` till värdet `false`.

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
