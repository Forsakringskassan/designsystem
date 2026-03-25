---
title: withDatasetBehaviour() function
short-title: withDatasetBehaviour()
name: withDatasetBehaviour
layout: api.function
search:
    terms:
        - dataset
        - datamängd
---

Kör en callback-funktion medan ett specifikt beteende för uppdatering av elementmetadata i datamängder.

Beteendet återställs till det föregående värdet när callback-funktionen returnerar.

## Syntax

```ts nocompile
type DatasetUpdateMode = "preserve" | "reindex";

function withDatasetBehaviour<T>(mode: DatasetUpdateMode, callback: () => T): T;
function withDatasetBehaviour<T>(
    mode: DatasetUpdateMode,
    callback: () => Promise<T>,
): Promise<T>;
```

### Parametrar

`mode: DatasetUpdateMode`
: Beteendet som ska gälla under anropet:

    - `"preserve"` - befintlig elementmetadata behålls oförändrad; bara nya element utan metadata indexeras.
    - `"reindex"` - all elementmetadata räknas om baserat på elementets aktuella position i datamängden.

`callback: () => T`
: Funktion som körs med det angivna beteendet aktivt. Returvärdet vidarebefordras till anroparen.

### Returvärde

Returnerar det värde som `callback` returnerar.

## Exempel

Givet att vi har en datamängd:

```ts
import { getDatasetMetadata, useDatasetRef } from "@fkui/vue";

const dataset = useDatasetRef([
    { id: 1, name: "Äpple" },
    { id: 2, name: "Banan" },
    { id: 3, name: "Citron" },
]);

console.log(dataset.value.length); // 3
console.log(getDatasetMetadata(dataset.value).size); // 3
console.log(getDatasetMetadata(dataset.value[0]).ariaRowIndex); // 1
console.log(getDatasetMetadata(dataset.value[1]).ariaRowIndex); // 2
console.log(getDatasetMetadata(dataset.value[2]).ariaRowIndex); // 3
```

Med `"preserve"` kommer metadata behållas på existerande element:

```ts
import { useDatasetRef } from "@fkui/vue";

const dataset = useDatasetRef([
    { id: 1, name: "Äpple" },
    { id: 2, name: "Banan" },
    { id: 3, name: "Citron" },
]);

/* --- cut above --- */

import { getDatasetMetadata, withDatasetBehaviour } from "@fkui/vue";

/* remove a row */
withDatasetBehaviour("preserve", () => {
    dataset.value = dataset.value.filter((it) => it.id !== 2);
});

console.log(getDatasetMetadata(dataset.value[0]).ariaRowIndex); // 1
console.log(getDatasetMetadata(dataset.value[1]).ariaRowIndex); // 3
```

Med `"reindex"` kommer metadata genereras om:

```ts
import { useDatasetRef } from "@fkui/vue";

const dataset = useDatasetRef([
    { id: 1, name: "Äpple" },
    { id: 2, name: "Banan" },
    { id: 3, name: "Citron" },
]);

/* --- cut above --- */

import { getDatasetMetadata, withDatasetBehaviour } from "@fkui/vue";

/* remove a row */
withDatasetBehaviour("reindex", () => {
    dataset.value = dataset.value.filter((it) => it.id !== 2);
});

console.log(getDatasetMetadata(dataset.value[0]).ariaRowIndex); // 1
console.log(getDatasetMetadata(dataset.value[1]).ariaRowIndex); // 2
```

## Relaterat

- {@link useDatasetRef useDatasetRef()} composable
- {@link getDatasetMetadata getDatasetMetadata()} function
