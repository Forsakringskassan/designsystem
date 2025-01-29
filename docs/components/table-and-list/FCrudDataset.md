---
title: Datamängdredigerare
status: Produktionsklar
layout: component
component:
    - FCrudDataset
    - FCrudButton
---

Datamändgredigeraren används för att erbjuda användare funktionerna "lägg till", "ändra" och "ta bort" i en datamängd.
Komponenten ansvarar inte för hur datamängden och åtgärderna "lägg till", "ändra" och "ta bort" presenteras.
Vanligtvis används lista eller tabell för presentation men kan även vara egenutvecklad.

## Interaktiv tabell med redigering

```import
FCrudDatasetTableExample.vue
```

## Förpopulera objekt

Använd propen `beforeCreate` med en callback som returnerar ett objekt för att förpopulera data som ska läggas till.
Callback anropas innan modalen visas.

```html static
<f-crud-dataset :before-create="onBeforeCreate">
    <template #default> ... </template>
</f-crud-dataset>
```

```ts
/* eslint-disable-next-line @typescript-eslint/no-empty-object-type */
interface MyInterface {}

/* --- cut above --- */

function onBeforeCreate(): MyInterface {
    return {
        /* ... */
    };
}
```

## Anpassade texter

Texterna i modaler kan anpassas för att bättre beskriva vad som läggs till, ändras eller tas bort genom att använda props. Även texten för "lägg till"-knapp kan ändras via slot add-button.

```import
FCrudDatasetCustomTextExample.vue
```

## Datatabell med lägg till-knapp

```import
FCrudDatasetTableCreateExample.vue
```

## Interaktiv tabell med knapp

```import
FCrudDatasetTableUpdateExample.vue
```

## Lista med redigering

```import
FCrudDatasetListExample.vue
```

## Sorterbar lista

```import
FCrudDatasetSortListExample.vue
```

## API

### `FCrudDataset`

:::api
vue:FCrudDataset
:::

### `FCrudButton`

:::api
vue:FCrudButton
:::
