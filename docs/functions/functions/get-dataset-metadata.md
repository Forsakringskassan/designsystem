---
title: getDatasetMetadata() function
short-title: getDatasetMetadata()
name: getDatasetMetadata
layout: api.function
search:
    terms:
        - dataset
        - datamängd
        - metadata
---

Returnerar metadata om en datamängd eller ett enskilt element i en datamängd.

Kastar ett fel om ett element skickas in som inte tillhör någon datamängd.

## Syntax

```ts nocompile
function getDatasetMetadata<T extends object>(
    dataset: Dataset<T>,
): DatasetArrayMetadata;
function getDatasetMetadata(element: object): DatasetElementMetadata;
```

### Parametrar

`dataset: Dataset<T>`
: En datamängd. Returnerar metadata om datamängden som helhet.

`element: object`
: Ett enskilt element i en datamängd. Returnerar metadata om ett enskilt element i datamängden.

### Returvärde

`DatasetArrayMetadata`
: Metadata om datamängden som helhet:

    - `size` - totalt antal element i datamängden.

`DatasetElementMetadata`
: Metadata om ett enskilt element:

    - `rowIndex` - nollbaserad position i datamängden.
    - `ariaRowIndex` - ettbaserad position i datamängden.
    - `ariaLevel` - ettbaserat djup i en hierarkisk datamängd.
    - `ariaSetSize` - totalt antal element på samma nivå i en hierarki.
    - `ariaPosInSet` - ettbaserad position bland syskonelement i en hierarki.

## Exempel

Givet att vi har en datamängd likt:

```ts
import { getDatasetMetadata, useDatasetRef } from "@fkui/vue";

const dataset = useDatasetRef([
    { id: 1, name: "Äpple" },
    { id: 2, name: "Banan" },
]);
```

För att hämta ut metadata om en datamängd som helhet:

```ts
/* changes to this example should be kept in sync with get-dataset-metadata.spec.ts */

import { getDatasetMetadata, useDatasetRef } from "@fkui/vue";

const dataset = useDatasetRef([
    { id: 1, name: "Äpple" },
    { id: 2, name: "Banan" },
]);

/* --- cut above --- */

console.log(getDatasetMetadata(dataset.value).size); // 2
```

För att hämta ut metadata om ett enskilt element i datamängden:

```ts
/* changes to this example should be kept in sync with get-dataset-metadata.spec.ts */

import { getDatasetMetadata, useDatasetRef } from "@fkui/vue";

const dataset = useDatasetRef([
    { id: 1, name: "Äpple" },
    { id: 2, name: "Banan" },
]);

/* --- cut above --- */

console.log(getDatasetMetadata(dataset.value[0]).ariaRowIndex); // 1
console.log(getDatasetMetadata(dataset.value[1]).ariaRowIndex); // 2
```

## Relaterat

- {@link useDatasetRef useDatasetRef()} composable
