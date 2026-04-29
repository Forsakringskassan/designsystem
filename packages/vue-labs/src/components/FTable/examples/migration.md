# Migrering från `FInteractiveTable` till `FTable`

## Vad som är samma

- Tabellen bygger fortfarande på rows
- `key-attribute` används fortfarande för att identifiera rader
- Tabellen används fortfarande för tabulär data
- Expanderbara rader finns kvar som koncept
- Selection finns kvar som koncept
- Slots som `caption` och `empty` finns kvar

---

## Vad som förändras

### Kolumner flyttas från template till konfiguration

**Tidigare**

```typescript
<f-interactive-table :rows="rows">
    <template #default="{ row }">
        <f-table-column title="Namn" type="text">
            {{ row.name }}
        </f-table-column>
    </template>
</f-interactive-table>
```

**Nu**

```typescript
const columns = defineTableColumns<Row>([
    {
        type: "text",
        header: "Namn",
        key: "name"
    },
]);

<f-table
    :rows
    :columns
/>
```

---

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

---

### Editering och validering ligger i kolumnen

```typescript
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
}
```

- `editable`, `label` och `validation` definieras i kolumnen
- valideringsregler dokumenteras separat

---

## Expanderbart innehåll

I gamla `FInteractiveTable` användes `expandable-attribute` för att ange vilket attrubut som innegöll expanderbart innehåll.

I nya `FTable` används istället `useDatasetRef(...)` för att skapa ett dataset där det nästlade attributet anges.

### Expanderbara tabeller

**Tidigare**

```typescript
<f-interactive-table
    :rows="rows"
    expandable-attribute="expandableRows"
/>
```

**Nu**

```typescript
const rows = useDatasetRef<Row>(initialRows, "expandableRows");
```

### Eget expanderat innehåll

**Tidigare**

```typescript
<f-interactive-table
    :rows="rows"
    expandable-attribute="expandableContent"
>
    <template #expandable="{ expandableRow }">
        {{ expandableRow.content }}
    </template>
</f-interactive-table>
```

**Nu**

```typescript
const rows = useDatasetRef<Row>(initialRows, "expandableContent")

<f-table :rows :columns>
    <template #expandable="{ row }">
        {{ row.content }}
    </template>
</f-table>
```

**Att tänka på**

- `useDatasetRef(...)` används både för expanderbara rader och eget expanderat innehåll
- attributet du skickar in styr vilket nästlat innehåll tabellen använder

---

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

---

## Vanliga migreringar

### Textkolumn

**Tidigare**

```typescript
<f-table-column title="Namn">
    {{ row.name }}
</f-table-column>
```

**Nu**

```typescript
{
    type: "text",
    header: "Namn",
    key: "name",
}
```

---

## Datum

**Tidigare**

```typescript
<span v-format:date="row.createdAt"></span>
```

**Nu**

```typescript
{
    type: "text:date",
    key: "createdAt",
}
```

### Nummer

**Tidigare**

```typescript
<f-table-column type="numeric">
    {{ row.amount }}
</f-table-column>
```

**Nu**

```typescript
{
    type: "text:number",
    key: "amount",
}
```

---

### Formatterade textkolumner

**Nu**

```typescript
{
    type: "text:email",
    header: "E-post",
    key: "email",
}
```

**Andra vanliga typer**

- `text:phoneNumber`
- `text:postalCode`
- `text:personnummer`
- `text:organisationsnummer`
- `text:bankAccountNumber`
- `text:bankgiro`
- `text:plusgiro`
- `text:clearingNumber`

---

### Checkbox-kolumn

```typescript
{
    type: "checkbox",
    header: "Aktiv",
    key: "active",
    label: (row) => `Aktivera ${row.id}`,
}
```

**Att tänka på**

- Detta är en vanlig kolumn i tabellen
- Det är inte samma sak som `selectable`

---

### Rowheader

**Tidigare**

- Radrubrik uttrycktes via `:row-header="true"` på `FTableColumn`

**Nu**

```typescript
{
    type: "rowheader",
    header: "Namn",
    text(row) {
        return row.name;
    },
}
```

**Att tänka på**

- `rowheader` är en egen kolumntyp
- Den används när en kolumn ska vara radrubrik
- Detta motsvarar konceptet `row-header` i gamla tabellen, men uttrycks nu i kolumnkonfigurationen

---

### Anchor

```typescript
{
    type: "anchor",
    header: "Länk",
    href: "/some-url",
    text(row) {
        return `Öppna ${row.id}`;
    },
}
```

---

### Button

**Tidigare**

```typescript
<f-table-column title="Åtgärd" type="action" shrink>
    <f-table-button icon="trashcan" @click="onRemoveRow(row)">
        Ta bort
    </f-table-button>
</f-table-column>
```

**Nu**

```typescript
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

**Att tänka på**

- Knappen är inbyggd i kolumnen
- Lokigen för vad som ska hända vid klick är fortfarande konsumentens ansvar

---

### Menu

```typescript
{
    type: "menu",
    header: "Åtgärder",
    text(row) {
        return `Visa åtgärder för ${row.id}`;
    },
    actions: [
        {
            label: "Visa",
            onClick(row) {
                show(row);
            },
        },
        {
            label: "Ta bort",
            onClick(row) {
                remove(row);
            },
        },
    ],
}
```

**Att tänka på**

- Används vid flera actions per rad
- `actions` innehåller poster med minst:
    - `label`
    - `onClick(row)`
- Kan även innehålla `icon`

---

### Select

```typescript
{
    type: "select",
    header: "Status",
    key: "status",
    label: (row) => `Status för rad ${row.id}`,
    options: ["Item 1", "Item 2"],
}
```

---

### Render

```typescript
{
    header: "Custom",
    render(row) {
        return customCell(row);
    },
}
```

**Att tänka på**

- Används när inbyggda kolumntyper inte räcker
- Bör ses som en escape hatch

---

## Editering och validering

### `key`

I vanliga fall räcker `key`.

När kolumnen har `key` kan tabellen själv läsa från och skriva till rätt fält på raden.

```typescript
{
    type: "text",
    key: "name",
    editable: true,
}
```

### `value` och `update`

Om kolumnen inte använder `key`, eller om du har ett specialfall där visning och uppdatering inte är en enkel 1:1 koppling mot ett fält, kan du själv styra det med `value` och `update`.

```typescript
{
    type: "text",
    editable: true,
    value(row) {
        return row.displayName;
    },
    update(row, newValue) {
        row.displayName = newValue;
    },
}
```

**Rekommendation**

- Använd `key` när det räcker
- Använd `value` och `update` när du behöver styra visning eller uppdatering själv

---

## Selection

Gamla `FInteractiveTable` hade selection via `selectable`.

Nya `FTable` har också selection via:

```typescript
selectable = "single";
```

```typescript
selectable = "multi";
```

```typescript
v-model:selected-rows="selectedRows"
```

**Att tänka på**

- `single` och `multi` fanns också i gamla `FInteractiveTable`
- Nytt i `multi` är stöd för att välja alla rader via kolumnrubriken
- Selections finns alltså kvar, men API't för v-model har ändrats till `v-model:selected-rows`

### Selection och radaktivering är separata begrepp

Gamla `FInteractiveTable` hade båda:

- selection via `selectable`
- Radaktivering / Aktiv rad via:
    - `click`
    - `change`
    - `active`
    - `update:active`
    - `showActive`

Nya `FTable` har selection, men inte samma inbyggda stöd för aktiv rad eller radaktivering.

Det betyder att gammal funktionalitet där man klickade på en rad för att sätta aktiv rad, få ut hela objektet eller trigga annan lokig behöver lösas med ett nytt, mer explicit mönster utanför tabellens inbyggda radbeteende.

---

## Expanderbara rader

**Tidigare**

```typescript
expandable-attribute="children"
```

**Nu**

```typescript
const rows = useDatasetRef(data, "children");
```

---

## `useDatasetRef`

`useDatasetRef(...)` används för att skapa ett dataset från en vanlig lista med rader.

Det andra argumentet är optionalt och används när raderna innehåller nästlat innehåll, till exempel:

- `expandableRows`
- `expandableContent`

### Grundfall

```typescript
const rows = useDatasetRef<Row>(initialRows);
```

### Med expanderbara tabellrader

```typescript
const rows = useDatasetRef<Row>(initialRows, "expandableRows");
```

### Med eget expanderat innehåll

```typescript
const rows = useDatasetRef<Row>(initialRows, "expandableContent");
```

### Att tänka på

- `useDatasetRef(...)` skapar ett dataset från vanlig data
- om ett nästed-attribute anges används det för att hantera expanderat innehåll
- dataset reindexeras när strukturen ändras

---

## Slots

- `caption`
- `empty`
- `footer`
- `expandable`

---

## Konsumentägd logik

### Lägg till rad

```typescript
rows.value.push(newRow);
```

### Ta bort rad

```typescript
rows.value = removeRow(rows.value, row);
```

### Bulk

```typescript
rows.value = rows.value.filter((r) => !selectedRows.value.includes(r));
```

### Persistens

- API
- State
- Felhantering vid spara/ladda
- Eventuell felhantering utanför tabellen

---

## Fall som kräver extra anpassning

- Custom rendering
- Komplexa actions
- Gammal aktiv-rad-logik
- Radclick-beteenden
- Flera interaktiva komponenter i samma cell

---

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

---

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
