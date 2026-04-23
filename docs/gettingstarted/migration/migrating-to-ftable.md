---
title: FTable migreringsguide
layout: article
---

`FDataTable` och `FInteractiveTable` är deprekerad och ersatt med {@link component:FTable}

## Vad som är samma

- Tabellen bygger fortfarande på rows
- `key-attribute` används fortfarande för att identifiera rader
- Tabellen används fortfarande för tabulär data
- Expanderbara rader finns kvar som koncept
- Selection finns kvar som koncept
- Slots som `caption` och `empty` finns kvar

## Vad som förändras

### Kolumner flyttas från template till konfiguration

```ts
import { defineTableColumns } from "@fkui/vue-labs";

interface Row {
    name: string;
}

const columns = defineTableColumns<Row>([
    {
        type: "text",
        header: "Namn",
        key: "name",
    },
]);
```

```html name=columns-from-template hidden
<f-interactive-table :rows="rows">
    <template #default="{ row }">
        <f-table-column title="Namn" type="text">
            {{ row.name }}
        </f-table-column>
    </template>
</f-interactive-table>
```

```html compare=columns-from-template
<f-table :rows :columns />
```

### Formattering flyttas in i kolumntypen

- Datum -> `text:date`
- Nummer -> `text:number`
- Valuta -> `text:currency`
- Procent -> `text:percent`

Andra formatterade texttyper som finns i `FTable`:

- `text:email`
- `text:phoneNumber`
- `text:postalCode`
- `text:personnummer`
- `text:orgainsationsnummer`
- `text:bankAccountNumber`
- `text:bankgiro`
- `text:plusgiro`
- `text:clearingNumber`

### Editering och validering ligger i kolumnen

```ts
import { defineTableColumns } from "@fkui/vue-labs";

interface Row {
    id: string;
    name: string;
}

const columns = defineTableColumns<Row>([
    {
        type: "text",
        header: "Namn",
        key: "name",
        editable: true,
        label: (row) => `Namn för rad ${row.id}`,
        validation: {
            required: {},
            minLength: { length: 3 },
        },
    },
]);
```

- `editable`, `label` och `validation` definieras i kolumnen
- valideringsregler dokumenteras separat

## Expanderbart innehåll

I gamla `FInteractiveTable` användes `expandable-attribute` för att ange vilket attrubut som innehöll expanderbart innehåll.

I nya `FTable` används istället `useDatasetRef(...)` för att skapa ett dataset där det nästlade attributet anges.

### Expanderbara tabeller

```ts
import { useDatasetRef } from "@fkui/vue";

interface Row {
    id: string;
    name: string;
    expandableRows?: Row[];
}

const rows = useDatasetRef<Row>(
    [
        {
            id: "1",
            name: "Rad 1",
            expandableRows: [],
        },
    ],
    "expandableRows",
);
```

```html name=expandable-table hidden
<f-interactive-table
    :rows
    key-attribute="id"
    expandable-attribute="expandableRows"
>
    <template #default="{ row }">
        <f-table-column title="Namn" type="text">
            {{ row.name }}
        </f-table-column>
    </template>
</f-interavtive-table>
```

```html compare=expandable-table
<f-table :rows :columns key-attribute="id" />
```

### Eget expanderat innehåll

```ts
import { useDatasetRef } from "@fkui/vue";

interface Row {
    id: string;
    content: string;
    expandableContent?: Row[];
}

const rows = useDatasetRef<Row>(
    [
        {
            id: "1",
            content: "Rad 1",
            expandableContent: [
                {
                    id: "1a",
                    content: "Extra information för rad 1",
                },
            ],
        },
    ],
    "expandableContent",
);
```

```html name=custom-expandable-content hidden
<f-interactive-table :rows expandable-attribute="expandableContent">
    <template #default="{ row }">
        <f-table-column title="Namn" type="text">
            {{ row.name }}
        </f-table-column>
    </template>

    <template #expandable="{ expandableRow }">
        {{ expandableRow.content }}
    </template>
</f-interactive-table>
```

```html compare=custom-expandable-content
<f-table
    :rows
    :columns
    key-attributes="id"
>
    <template #expandable="{ row }">
        {{ row.content }}
</f-table>
```

- `useDatasetRef(...)` används både för expanderbara rader och eget expanderat innehåll
- attributet du skickar in styr vilket nästlat innehåll tabellen använder

## Kolumntyper i `FTable`

- `text`
- `text:date`
- `text:number`
- `text:currency`
- `text:percent`
- `text:email`
- `text:phoneNumber`
- `text:postalCode`
- `text:personnummer`
- `text:organisationsnummer`
- `text:bankAccountNumber`
- `text:bankgiro`
- `text:plusgiro`
- `text:clearingNumber`

### Övriga

- `checkbox`
- `rowheader`
- `anchor`
- `button`
- `select`
- `menu`
- `render`

## Vanliga migreringar

### Textkolumn

```diff
-<f-table-column title="Namn" type="text">
-    {{ row.name }}
-</f-table-column>
{
    type: "text",
    header: "Namn",
    key: "name",
}
```

### Formatterade textkolumner

```diff
-<f-table-column title="Skapad" type="text">
-   <span v-format:date="row.createdAt"></span>
-</f-table-column>
{
    type: "text:date",
    header: "Skapad",
    key: "createdAt",
}
```

```diff
-<f-table-column title="Antal" type="numeric">
-   {{ row.amount }}
-<f-table-column>
{
    type: "text:number",
    header: "Antal"
    key: "amount",
}
```

Andra vanliga formatterade texttyper:

- `text:currency`
- `text:percent`
- `text:email`
- `text:phoneNumber`
- `text:postalCode`
- `text:personnummer`
- `text:organisationsnummer`
- `text:bankAccountNumber`
- `text:bankgiro`
- `text:plusgiro`
- `text:clearingNumber`

### Checkbox-kolumn

```diff
-<f-table-column title="Aktiv">
-   <f-checkbox-field
-       :model-value="row.active"
-       @update:model-value="row.active = $event"
-   </f-checkbox-field>
-</f-table-column>
{
    type: "checkbox",
    header: "Aktiv",
    key: "active",
    label: (row) => `Välj rad för ${row.id}`,
}
```

- `checkbox` är en vanlig kolumn i tabellen
- Det är inte samma sak som `selectable`

### Rowheader

```diff
-<f-table-column title="Namn" :row-header="true">
-   {{ row.name }}
-</f-table-column>
{
    type: "rowheader",
    header: "Namn",
    text(row) {
        return row.name;
    },
}
```

- `rowheader` är en egen kolumntyp
- Den används när en kolumn ska vara radrubrik
- Detta motsvarar konceptet `row-header` i gamla tabellen, men uttrycks nu i kolumnkonfigurationen

### Anchor

```diff
-<f-table-column title="Länk" type="text">
-   <a :href="row.href">Öppna</a>
-</f-table-column>
{
    type: "anchor",
    header: "Länk",
    href: "#",
    text() {
        return "Öppna";
    },
}
```

### Button

```diff
-<f-table-column title="Åtgärd" type="action" shrink>
-   <f-table-button icon="trashcan" @click="onRemoveRow(row)">
-       Ta bort
-   </f-table-button>
-</f-table-column>
{
    type: "button",
    header: "Åtgärd",
    icon: "trashcan",
    text() {
        return "Ta bort",
    },
    onClick(row) {
        onRemoveRow(row);
    },
}
```

- Knappen är inbyggd i kolumnen
- Logiken för vad som ska hända vid klick är fortfarande konsumentens ansvar

### Menu

```ts
import { defineTableColumns } from "@fkui/vue-labs";

interface Row {
    id: string;
    name: string;
}

function onEdit(row: Row): void {
    console.log("Ändra", row);
}

function onDelete(row: Row): void {
    console.log("Ta bort", row);
}

const columns = defineTableColumns<Row>([
    {
        type: "menu",
        header: "Åtgärder",
        text(row) {
            return `Visa åtgärder för ${row.name}`;
        },
        actions: [
            {
                label: "Ändra",
                icon: "pen",
                onClick(row) {
                    onEdit(row);
                },
            },
            {
                label: "Ta bort",
                icon: "trashcan",
                onClick(row) {
                    onDelete(row);
                },
            },
        ],
    },
]);
```

- `menu` används när flera actions ska grupperas i samma kolumn
- Varje action definieras i `actions`
- Varje action kan ha `label`, `icon` och `onClick`

### Select

```ts
import { defineTableColumns } from "@fkui/vue-labs";

interface Row {
    id: string;
    item: string;
}

const columns = defineTableColumns<Row>([
    {
        type: "select",
        header: "Val",
        key: "item",
        label: (row) => `Val för rad ${row.id}`,
        options: ["Item 1", "Item 2", "Item 3"],
    },
]);
```

- `select` används när ett värde i raden ska väljas från en lista
- Använd `key` när värdet kan läsas och skrivas direkt på raden
- `value` och `update` behövs när visning eller uppdatering kräver speciallogik

Om alternativen laddas asynkront kan `columns` behöva byggas med `computed(...)` så att `options` uppdateras när datat har laddat klart.

### Render

```ts
import { h } from "vue";
import { defineTableColumns } from "@fkui/vue-labs";

interface Row {
    id: string;
}

const columns = defineTableColumns<Row>([
    {
        header: "Custom",
        render(row) {
            return h("td", { id: `item-${row.id}` }, ["Item"]);
        },
    },
]);
```

- `render` används när en inbyggd kolumntyp inte räcker
- Använd i första hand en inbyggd kolumntyp

## Editering och validering

### Key

Använd `key` när kolumnen direkt läser och skriver till ett fält på raden.

```ts
import { defineTableColumns } from "@fkui/vue-labs";

interface Row {
    id: string;
    name: string;
}

const columns = defineTableColumns<Row>([
    {
        type: "text",
        header: "Namn",
        key: "name",
        editable: true,
        label: (row) => `Namn för rad ${row.id}`,
    },
]);
```

- `key` räcker när värdet kan läsas och skrivas direkt på raden
- Det är det enklaste och vanligaste mönstret i `FTable`

### Value och Update

Använd `value` och `update` när visning eller uppdatering inte är en enkel 1:1 koppling mot ett fält.

```ts
import { defineTableColumns } from "@fkui/vue-labs";

interface Row {
    id: string;
    item: string;
}

const columns = defineTableColumns<Row>([
    {
        type: "text",
        header: "Val",
        editable: true,
        label: (row: Row) => `Val för rad ${row.id}`,
        value: (row: Row) => {
            return row.item;
        },
        update(row: Row, newValue: string) {
            row.item = newValue;
        },
    },
]);
```

- Använd `value` när visningen inte ska komma direkt från `key`
- Använd `update` när du själv behöver styra hur värdet skrivs tillbaka
- Om `key` räcker behövs inte `value` och `update`

### Validering

```ts
import { defineTableColumns } from "@fkui/vue-labs";

interface Row {
    id: string;
    name: string;
}

const columns = defineTableColumns<Row>([
    {
        type: "text",
        header: "Namn",
        key: "name",
        editable: true,
        label: (row) => `Namn för rad ${row.id}`,
        validation: {
            required: {},
            maxLength: { length: 32 },
        },
    },
]);
```

- Validering definieras i kolumnen
- Själva valideringsreglerna dokumenteras separat

## Selection

`FInteractiveTable` hade selection via `selectable`.

I `FTable` finns selection kvar, men används via `selectable` tillsammans med `v-model:selected-rows`.

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
<f-table
    v-model:selected-rows="selectedRows"
    :columns
    :rows
    selectable="single"
/>
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
<f-table
    v-model:selected-rows="selectedRows"
    :columns
    :rows
    selectable="multi"
/>
```

- `single` används för enkelval
- `multi` används för flerval
- `multi` ger också stöd för att välja alla rader via kolumnrubruken
- `selectedRows` innehåller de valda raderna

### Selection och radaktivering är separate begrepp

`FInteractiveTable` hade både:

- selection via `selectable`
- Radaktivering / Aktiv rad via:
    - `click`
    - `change`
    - `active`
    - `update:active`
    - `showActive`

Nya `FTable` har selection, men inte samma inbyggda stöd för aktiv rad eller radaktivering.

Det betyder att gammal funktionalitet där man klickade på en rad för att sätta aktiv rad, få ut hela objektet eller trigga annan lokig behöver lösas med ett nytt, mer explicit mönster utanför tabellens inbyggda radbeteende.

## Slots

- `caption`
- `empty`
- `footer`
- `expandable`

## Konsumentägd logik

`FTable` ansvarar för rendering, kolumner och interaktion i tabellen, men viss logik ligger fortfarande hos konsumenten.

Det gäller till exempel:

- Att lägga till rader
- Att ta bort rader
- Att spara ändringar
- Att hantera bulk actions
- Att koppla tabellen till API eller annan state-hantering

## Fall som kräver extra anpassning

- Custom rendering
- Komplexa actions
- Gammal aktiv-rad-logik
- Radclick-beteenden
- Flera interaktiva komponenter i samma cell

## Snabbguide

- text -> `text` + `key`
- datum -> `text:date`
- nummer -> `text:number`
- checkbox -> `checkbox`
- radrubrik `( row-header )` -> `rowheader`
- länk i cell -> `anchor`
- action -> `button`
- flera actions -> `menu`
- custom UI -> `render`
- expanderbara rader / eget expanderat innehåll -> `useDatasetRef`
- radclick / aktiv rad -> ny lösning

## Relevanta delar i nya API:t

- `defineTableColumns(...)`
- `useDatasetRef(...)`
- `v-model:selected-row`
- `key-attribute`
- `selectable`
- `value`
- `update`
- `label`
- `validation`
- `options`
- `caption`
- `empty`
- `expandable`
