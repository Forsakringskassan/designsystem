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

```html name=base hidden
<f-crud-dataset>
    <template #default> ... </template>
</f-crud-dataset>
```

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

## Knappordning

Standardinställningen för knappordningen i modalerna för "Lägg till" och "Ändra" är att primärknappen ligger först följt av sekundärknappen.
Standardinställningen för modalen "Ta bort" är att sekundärknappen ligger först följt av primärknappen.
Du kan ändra knappordningen för bekräftelsemodalen och därmed ändra knappordningen för modalen "Ta bort" genom inställning av {@link config#referens buttonOrder} i konfigurationen.

## Anpassade texter

Texterna i modaler kan anpassas för att bättre beskriva vad som läggs till, ändras eller tas bort genom att använda props. Även texten för "lägg till"-knapp kan ändras via slot add-button.

```import
FCrudDatasetCustomTextExample.vue
```

## Egna lägg till knappar

Använd slotten `#buttons` för att lägga till egna anpassade lägg-till knappar.
Du behöver själv hantera vad klick på knappen ska utföra för åtgärd.

```html compare=base
<f-crud-dataset>
    <template #default> ... </template>
    <template #buttons="{ buttonClasses }">
        <button type="button" :class="buttonClasses" @click="onClick">
            My button
        </button>
    </template>
</f-crud-dataset>
```

```import nomarkup
FCrudDatasetAdditionalButtons.vue
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
