---
title: FTable migreringsguide
layout: article
---

Den här guiden beskriver hur du migrerar från `FDataTable` och `FInteractiveTable` till {@link component:FTable}.

Om du tidigare importerade `FTable` från `@fkui/vue-labs` behöver du nu uppdatera importen till `@fkui/vue`.

**Vid migrering till `FTable` är det här de viktigaste skillnaderna:**

- `FTableColumn` i template ersätts av kolumndefinitioner i `defineTableColumns(...)`
- Formattering i template ersätts av kolumntyper som till exempel `text:date` och `text:number`
- `v-model` för valbara rader byter namn till `v-model:selected-rows`
- Expanderbart innehåll sätts upp via `useDatasetRef(...)`
- Aktiv rad och radklick har ingen direkt motsvarighet i `FTable`

**Om din tabell använder något av följande behöver du läsa vidare extra noggrant:**

Det här kräver en annan lösning i `FTable`:

- Aktiv rad
- Radklick
- Flera actions i samma cell
- Komplext innehåll i celler
- Eget expanderat innehåll

Aktiv rad och radklick har ingen direkt motsvarighet i `FTable`.

Flera actions i samma cell behöver vanligtvis lösas på ett annat sätt, till exempel med `kontextmeny`.

Läs mer i dokumentationen om {@link column-type-menu kontextmeny}.

Om tabellen innehåller mer komplext innehåll än vad de inbyggda kolumntyperna stödjer går det inte alltid att migrera rakt av.

Kontakta i första hand teamet för att reda ut om scenariot bör stödjas av `FTable` eller om det är ett rimligt specialfall.

## Kolumner flyttas från template till konfiguration

I `FInteractiveTable` definierades kolumner i template med `FTableColumn`.

```html static
<f-table-column title="Namn" type="text"> {{ row.name }} </f-table-column>
```

I `FTable` definieras kolumner istället i kod med `defineTableColumns(...)`.

```ts
import { defineTableColumns } from "@fkui/vue";

interface Row {
    name: string;
}

/* --- cut above --- */

const columns = defineTableColumns<Row>([
    {
        type: "text",
        header: "Namn",
        key: "name",
    },
]);
```

Det innebär i praktiken:

- `title` på `FTableColumn` blir `header`
- Kolumnen flyttas från template till kolumnkonfigurationen
- Hela kolumnuppsättningen skickas in via `:columns`

Om tabellen tidigare såg ut så här:

```html static
<f-interactive-table :rows>
    <template #caption> Tabellrubrik </template>

    <template #default="{ row }">
        <f-table-column title="Namn" type="text">
            {{ row.name }}
        </f-table-column>
    </template>
</f-interactive-table>
```

Så blir den i `FTable`:

```html static
<f-table :rows :columns>
    <template #caption> Tabellrubrik </template>
</f-table>
```

Läs mer i dokumentationen om {@link column-types kolumntyper}.

## Hur kolumner läser och skriver värden

Det vanligaste är att använda `key`.

```ts
import { defineTableColumns } from "@fkui/vue";

interface Row {
    name: string;
}

/* --- cut above --- */

const columns = defineTableColumns<Row>([
    {
        type: "text",
        header: "Namn",
        key: "name",
    },
]);
```

Om kolumnen bara ska läsa och skriva direkt mot ett fält på raden räcker `key`.
Till exempel innebär `key: "name"` att kolumnen läser från och skriver till `row.name`.
`key` är standardfallet. Om kolumnen bygger på ett fält i raden är `key` normalt det tydligaste valet, även när du senare behöver komplettera med annan logik.
Om du behöver styra läsning eller skrivning själv kan du använda `value` och `update`.

```ts
import { defineTableColumns } from "@fkui/vue";

interface Row {
    id: string;
    item: string;
}

/* --- cut above --- */

const columns = defineTableColumns<Row>([
    {
        type: "text",
        header: "Val",
        editable: true,
        label(row) {
            return `Val för rad ${row.id}`;
        },
        value(row) {
            return row.item;
        },
        update(row, newValue: string) {
            row.item = newValue;
        },
    },
]);
```

Använd `value` och `update` när visning eller uppdatering inte är en enkel 1:1 koppling mot ett fält, till exempel vid mappning eller annan speciallogik.

## Formattering flyttas in i kolumntypen

Om du tidigare definierade datum i template:

```diff
-<f-table-column title="Skapad" type="text">
-    <span v-format:date="row.createdAt"></span>
-</f-table-column>
+{
+    type: "text:date",
+    header: "Skapad",
+    key: "createdAt",
+}
```

Om du tidigare använde en numerisk kolumn:

```diff
-<f-table-column title="Antal" type="numeric">
-   {{ row.amount }}
-</f-table-column>
+{
+    type: "text:number",
+    header: "Antal",
+    key: "amount",
+}
```

Läs mer i dokumentationen om {@link column-types kolumntyper}.

## Editering och validering ligger i kolumnen

I `FTable` definieras redigering och validering i kolumnkonfigurationen.

```ts
import { defineTableColumns } from "@fkui/vue";

interface Row {
    id: string;
    name: string;
}

/* --- cut above --- */

const columns = defineTableColumns<Row>([
    {
        type: "text",
        header: "Namn",
        key: "name",
        editable: true,
        label(row) {
            return `Namn för rad ${row.id}`;
        },
        validation: {
            required: {},
            minLength: { length: 3 },
        },
    },
]);
```

Det innebär i praktiken:

- `editable` används för redigerbara textkolumner
- Validering definieras i kolumnen med `validation`

Objektet i `validation` är samma typ av objekt som skickas till `v-validation` direktivet.

Läs mer i dokumentationen om {@link edit att redigera innehåll}.

Läs mer i dokumentationen om {@link validators validatorer}.

## Expanderbart innehåll

I `FInteractiveTable` användes `expandable-attribute` för att ange vilket attribut som innehöll expanderbart innehåll.

```html static
<f-interactive-table
    :rows
    key-attribute="id"
    expandable-attribute="expandableRows"
>
    <template #caption> Tabellrubrik </template>

    <template #default="{ row }">
        <f-table-column title="Namn" type="text">
            {{ row.name }}
        </f-table-column>
    </template>
</f-interactive-table>
```

I `FTable` skapas motsvarande `rows` med `useDatasetRef(...)`, där det nästlade attributet anges som andra parameter.

```ts
import { useDatasetRef } from "@fkui/vue";

interface Row {
    id: string;
    name: string;
    expandableRows?: Row[];
}

/* --- cut above --- */

const rawData: Row[] = [
    {
        id: "1",
        name: "Rad 1",
        expandableRows: [],
    },
];

const rows = useDatasetRef(rawData, "expandableRows");
```

Det datasetet skickas sedan in som `rows` till `FTable`.

```html static
<f-table :rows :columns key-attribute="id"></f-table>
```

För vanliga expanderbara rader behövs ingen `#expandable-slot`.

Läs mer i dokumentationen om {@link useDatasetRef useDatasetRef}.

Läs mer i dokumentationen om {@link expand-rows expanderbara rader}.

### Eget expanderat innehåll

`#expandable` används bara när det expanderade innehållet ska renderas som eget innehåll.

Både `FInteractiveTable` och `FTable` använder slotten `#expandable`, men slot-parametern byter namn vid migrering:

```diff
-<template #expandable="{ expandableRow }">
-   {{ expandableRow.content }}
-</template>
+<template #expandable="{ row }">
+    {{ row.content }}
+</template>
```

Läs mer i dokumentationen om {@link useDatasetRef useDatasetRef}.

Läs mer i dokumentationen om {@link expand-rows expanderbara rader}.

## Valbara rader

Propen `selectable` fungerar som tidigare:

- Använd `single` för enkelval
- Använd `multi` för flerval

Det som ändras är `v-model` för valbara rader.

```diff
-<f-interactive-table v-model="selectedRows">
+<f-table v-model:selected-rows="selectedRows">
```

### Enkelval

```diff
-<f-interactive-table
-   v-model="selectedRows"
-   :rows
-   selectable="single"
->
-   <template #default="{ row }">
-       <f-table-column title="Namn" type="text">
-           {{ row.name }}
-       </f-table-column>
-   </template>
-</f-interactive-table>
+<f-table
+    v-model:selected-rows="selectedRows"
+    :columns
+    :rows
+    selectable="single"
+/>
```

### Flerval

```diff
-<f-interactive-table
-   v-model="selectedRows"
-   :rows
-   selectable="multi"
->
-   <template #default="{ row }">
-       <f-table-column title="Namn" type="text">
-           {{ row.name }}
-       </f-table-column>
-   </template>
-</f-interactive-table>
+<f-table
+    v-model:selected-rows="selectedRows"
+    :columns
+    :rows
+    selectable="multi"
+/>
```

- `multi` ger också stöd för att välja alla rader via kolumnrubriken
- `selectedRows` innehåller de valda raderna

Läs mer i dokumentationen om {@link select-rows valbara rader}.

## Button

```diff
-<f-table-column title="Åtgärd" type="action" shrink>
-   <f-table-button icon="trashcan" @click="onRemoveRow(row)">
-       Ta bort
-   </f-table-button>
-</f-table-column>
+{
+    type: "button",
+    header: "Åtgärd",
+    icon: "trashcan",
+    text() {
+        return "Ta bort",
+    },
+    onClick(row) {
+        onRemoveRow(row);
+    },
+}
```

I `FTable` går det inte längre att ha flera knappar i samma kolumn. Det är ett design och tillgänglighetsval.

Om du tidigare hade flera actions i samma kolumn behöver du istället:

- lägga actions i olika kolumner, eller
- använda `menu`

Läs mer i dokumentationen om {@link column-type-menu kontextmeny}.
