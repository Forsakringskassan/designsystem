---
title: Sortera och filtrera i tabell (kod)
short-title: Sortera och filtrera (kod)
layout: article
search:
    terms:
        - tabell
---

```import
FTableBasicSortFilterExample.vue
```

## Sortering och filtrering

När tabellen används tillsammans med `FSortFilterDataset` skickar du resultatet från sortering och filtrering vidare till tabellen.

```ts nocompile
const sortableAttributes = {
    frukt: "Text",
};
```

```html static
<f-sort-filter-dataset :data="rows" :sortable-attributes>
    <template #default="{ sortFilterResult }">
        <f-table :rows="sortFilterResult" :columns></f-table>
    </template>
</f-sort-filter-dataset>
```

`sortFilterResult` innehåller de rader som ska visas efter sortering och filtrering.

## Sortera och filtera på värden från `value()`

`FTable` kan visa värden med hjälp av `value()`, till exempel om värdet är nästlat i objektet. `FSortFilterDataset` använder däremot inte `value()` när datan sorteras eller filtreras. Sortering och filtrering sker på attribut i datamängden.

Om en tabellkolumn visar ett beräknat eller nästlat värde med `value()`, behöver samma värde även finnas som ett attribut i datamängden. Använd sedan det attributet i både `sortableAttributes` och tabellens `key`.

I exemplet nedan visar tabellen `row.ursprung.land` med `value()`. Däremot fungerar inte sortering och filtrering på `land`, eftersom `row.land` inte finns.

```ts nocompile
const columns = defineTableColumns<Row>([
    {
        type: "text",
        header: "Land",
        value(row) {
            return row.ursprung.land;
        },
    },
]);

const sortableAttributes = {
    frukt: "Frukt",
    land: "Land", // Fungerar inte eftersom row.land inte finns.
};
```

För att sortering och filtrering ska ske på samma värde som visas i tabellen behöver värdet mappas ut till ett attribut i datamängden.

```ts nocompile
interface Fruit {
    frukt: string;
    ursprung: {
        land: string;
    };
    pris: string;
}

interface Row {
    frukt: string;
    land: string;
    pris: string;
}

const fruits: Fruit[] = [
    { frukt: "Apelsin", ursprung: { land: "Spanien" }, pris: "30" },
    { frukt: "Banan", ursprung: { land: "Ecuador" }, pris: "15" },
    { frukt: "Äpple", ursprung: { land: "Sverige" }, pris: "22" },
];

const rows = useDatasetRef<Row>(
    fruits.map((fruit) => ({
        frukt: fruit.frukt,
        land: fruit.ursprung.land,
        pris: fruit.pris,
    })),
);

const columns = defineTableColumns<Row>([
    {
        type: "text",
        header: "Frukt",
        key: "frukt",
    },
    {
        type: "text",
        header: "Land",
        key: "land",
    },
    {
        type: "text:currency",
        header: "Pris per kilo",
        key: "pris",
    },
]);

const sortableAttributes = {
    frukt: "Frukt",
    land: "Land",
};
```

```html static
<f-sort-filter-dataset :data="rows" :sortable-attributes>
    <template #default="{ sortFilterResult }">
        <f-table :rows="sortFilterResult" :columns></f-table>
    </template>
</f-sort-filter-dataset>
```

## Relaterat

{@link code Kod för tabell.}

{@link sort-filter Sortera och filtrera i tabell.}

{@link FSortFilterDataset Läs mer om datamängdsorteraren.}
