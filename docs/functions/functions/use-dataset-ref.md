---
title: useDatasetRef() composable
short-title: useDatasetRef()
name: useDatasetRef
layout: api.composable
search:
    terms:
        - dataset
        - datamängd
---

Composable för att skapa en reaktiv datamängd inkapslad i en Vue ref.

Datamängder är arrayer utökade med extra metadata för att hantera tillgänglighet i tabeller och listor, specifikt när datamängden är ett urval av en större mängd, och används lämpligtvis av komponenter så som {@link FSortFilterDataset datamängdsorterare} (FSortFilterDataset) och {@link FTable tabell} (FTable).

## Syntax

```ts nocompile
function useDatasetRef<T>(initial?: T[]): Ref<Dataset<T>>;
```

### Parametrar

`initial` {@optional}
: Initialt värde. Default är en tom array.

### Returvärde

`Ref<Dataset<T>>`
: En Vue ref som kapslar in en datamängd.

## Exempel

Skapa en ny datamängd:

```ts
import { useDatasetRef } from "@fkui/vue";

const dataset = useDatasetRef([
    { id: "1", name: "Äpple" },
    { id: "2", name: "Banan" },
]);
```

Datamängden hanterar alla vanliga operationer en array har:

```ts
import { useDatasetRef } from "@fkui/vue";

const dataset = useDatasetRef([
    { id: "1", name: "Äpple" },
    { id: "2", name: "Banan" },
]);

/* --- cut above --- */

console.log(dataset.value.length); // 2
console.log(dataset.value.at(0)); // { id: "1", name: "Äpple" }
console.log(dataset.value.filter((it) => it.name.startsWith("B"))); // [{ id: "2", name: "Banan" }]
```

## Relaterat

- {@link FSortFilterDataset Datamängdsorterare} (FSortFilterDataset)
- {@link component:FPaginateDataset Paginering} (FPaginateDataset)
- {@link FTable Tabell} (FTable)
