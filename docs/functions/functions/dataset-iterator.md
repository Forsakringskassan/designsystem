---
title: datasetIterator() function
short-title: datasetIterator()
name: datasetIterator
layout: api.function
search:
    terms:
        - dataset
        - datamängd
---

Returnerar en iterator över elementen i en datamängd, där varje element levereras tillsammans med sin metadata.

## Syntax

```ts nocompile
function datasetIterator<T extends object>(dataset, options);
```

### Parametrar

`dataset: Dataset<T>`
: Datamängden att iterera över.

`options` {@optional}
: Alternativ som styr iterationens beteende.

    - `flat` {@optional} – om `true` levereras nästlade rader i depth-first (pre-order) direkt efter sin förälder.

### Returvärde

`Generator<{ item: T; metadata: DatasetElementMetadata }>`
: En generator som för varje steg ger ett objekt med:

    - `item` - elementet från datamängden.
    - `metadata` - metadata om elementets position, se {@link getDatasetMetadata getDatasetMetadata()}.

## Exempel

Givet en datamängd:

```ts
import { useDatasetRef } from "@fkui/vue";

const rows = [
    {
        name: "Äpple",
        nested: [{ name: "Pink Lady" }, { name: "Granny Smith" }],
    },
    {
        name: "Banan",
    },
];
const dataset = useDatasetRef(rows, "nested");
```

Iterera över en datamängd och skriv ut varje elements position:

```ts
import { datasetIterator, useDatasetRef } from "@fkui/vue";

const rows = [
    {
        name: "Äpple",
        nested: [{ name: "Pink Lady" }, { name: "Granny Smith" }],
    },
    {
        name: "Banan",
    },
];
const dataset = useDatasetRef(rows, "nested");

/* --- cut above --- */

for (const { item, metadata } of datasetIterator(dataset.value)) {
    console.log(metadata.ariaRowIndex, item.name);
}
// 1 Äpple
// 4 Banan
```

Som standard itereras inte över nästlade element.
Använd `{ flat: true }` för att inkludera dem (depth first, pre order):

```ts
import { datasetIterator, useDatasetRef } from "@fkui/vue";

const rows = [
    {
        name: "Äpple",
        nested: [{ name: "Pink Lady" }, { name: "Granny Smith" }],
    },
    {
        name: "Banan",
    },
];
const dataset = useDatasetRef(rows, "nested");

/* --- cut above --- */

for (const { item, metadata } of datasetIterator(dataset.value, {
    flat: true,
})) {
    console.log(metadata.ariaRowIndex, item.name);
}
// 1 Äpple
// 2 Pink Lady
// 3 Granny Smith
// 4 Banan
```

## Relaterat

- {@link useDatasetRef useDatasetRef()} composable
- {@link getDatasetMetadata getDatasetMetadata()} function
