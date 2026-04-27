---
title: Bulkoperation i tabell (kod)
short-title: Bulkoperation (kod)
layout: article
search:
    terms:
        - selectable
        - selected-rows
---

Den här sidan riktar sig till utvecklare och beskriver hur bulkoperation i `FTable` fungerar.

Bulkoperation i tabell bygger på två delar:

- enkel eller flerval, `selectable="single"` eller `selectable="multi"`
- valda rader via `v-model:selected-rows="selectedRows"`

<!-- prettier-ignore -->
```html name=base hidden
<f-table
    :rows
    :columns
    key-attribute="id"
>
</f-table>
```

## Flerval

För att aktivera flerval används `selectable="multi"`.

<!-- prettier-ignore -->
```html compare=base context=4 name=multi
<f-table
    :rows
    :columns
    key-attribute="id"
    selectable="multi"
>
</f-table>
```

```import nomarkup
FTableBulkExampleMulti.vue
```

De valda raderna nås via `v-model:selected-rows="selectedRows"`.

```html compare=multi context=5
<f-table
    :rows
    :columns
    key-attribute="id"
    selectable="multi"
    v-model:selected-rows="selectedRows"
>
</f-table>
```

`selected-row` är en array `Row[]`, där `Row` är typen för dina rad-object.

```ts nocompile nolint
interface Row {}
/* --- cut above --- */
const selectedRows = ref<Row[]>([]);
```

Om `selectedRows` är tom så är inga rader valda, för att få förvalda rader så sätts `selectedRows` till de rad-objekt som ska vara valda.

```ts nocompile nolint
interface Row {}
const rows = ref<Row[]>([]);
declare function isSelected(): boolean;

/* --- cut above --- */
const selectedRows = ref(rows.filter(isSelected));
```

## Enkelval

För att aktivera enkelval används `selectable="single"`.

<!-- prettier-ignore -->
```html compare=base name=single context=4
<f-table
    :rows
    :columns
    key-attribute="id"
    selectable="single"
>
</f-table>
```

```import nomarkup
FTableBulkExampleSingle.vue
```

Den valda raden nås via `v-model:selected-rows="selectedRows"`.

```html compare=single context=5
<f-table
    :rows
    :columns
    key-attribute="id"
    selectable="single"
    v-model:selected-rows="selectedRows"
>
</f-table>
```

`selected-row` är en array `Row[]` trots att det är enkelval, men kan bara innehålla ett eller inga objekt, där `Row` är typen för dina rad-object.

```ts nocompile nolint
interface Row {}
/* --- cut above --- */
const selectedRows = ref<Row[]>([]);
```

Om `selectedRows` är tom så är ingen rad vald, för att få en förvald rad så sätt `selectedRows` till det rad-objekt som ska vara valt.

```ts nocompile nolint
interface Row {}
declare function isSelected(): boolean;
const rows = ref<Row[]>([]);
/* --- cut above --- */
const selectedRows = ref([rows[2]]);
```

## Implementationsexempel

Om valda rader ska tömmas efter utförd bulkoperation så hanteras det genom att sätta `selectedRows` till en tom array.
För att göra en bulkoperation på vald eller valda rader så anropa en funktion, exempelvis vid `@click` på en {@link button knapp}.
Tänk på att borttag/ändring av rader ska göras i original-datan (ej filtrerad data), annars återkommer de borttagna/ändrade objekten om filtreringen ändras.
Viktigt att även tömma `selectedRows` om raderna inte längre ska vara valda efter utförd bulkoperation.

```ts nocompile nolint
function onRemoveSelectedRows(): void {
    rows.value = rows.value.filter((row) => !selectedRows.value.includes(row));
    selectedRows.value = [];
}
```

```ts nocompile nolint
interface Row {
    id: string;
}
/* --- cut above --- */
function onRunSingleAction(selectedRows: Row[]): void {
    const row = selectedRows[0];
    if (!row) {
        return;
    }
    selectedRows.value = [];
    // Kör åtgärd för vald rad
}
```

## Relaterat

{@link bulk-operation Bulkoperation}

{@link code Kod för tabell}
