# Kolumnkonfigurering

## Exempel

```typescript
const columns = defineTableColumns<Row>([
    {
        type: "text",
        key: "caseType",
        editable: true, // redigerbar
        validation: { // validering
            required: {},
        },
    },
    {
        type: "select", // valbar lista
        key: "status",
        editable: true,
        options: [...],
    },
    {
        type: "text:date", // formattering
        key: "start",
    },
    {
        type: "text:number", // formattering
        key: "amount",
    },
    {
        type: "button", // action
        icon: "trashcan",
        onClick(row) {
            onRemoveRow(row);
        },
    },
]);
```

### Speaker notes

Här visar jag inte hela konfigurationen, utan några utvalda delar.

Det viktiga att ta med sig är att mycket av beterrndet nu ligger direkt i kolumndefinitionen.

- editable gör en kolumn redigerbar
- select ger oss en färdig dropplista
- text:date och text:number hanterar formattering
- button låter oss definiera actions direkt i tabellen

---

# Migrering

## Från `FInteractiveTable` till `FTable`

### Innehåll

- Samma användningsområde, men ett nytt sätt att konfigurera tabellen
- Ny setup: tydligare och mer strukturerad
- Mindre fokus på template-logik
- Mer fokus på `rows` + `columns`
- Fler beteenden beskrivs direkt i kolumnkonfigurationen

### Speaker notes

Här vill jag kort visa vad som förändras om man går från gamla `FInteractiveTable` till nya `FTable`.

Det här är inte ett nytt sätt att tänka kring tabeller som koncept.
Man har fortfarande rader, kolumner, valbara rader, expanderbara rader och olika celltyper.

Skillnaden är framförallt hur man bygger upp tabellen.

`FInteravtiveTable` var mer template-styrd.
Man definierade mycket direkt i markupen med `FTableColumn` och slot-innehåll.

`FTable` är istället mer strukturerad kring två tydliga delar

- Rows: själva datat
- Columns: Tabellens struktur och beteenden

Det gör komponenten lättare att läsa, lättare att förstå och enklare att återanvända.

## Samma funktionalitet, olika setup

### FInteractiveTable

```typescript
<template #default="{ row }">
    <f-table-column title="Ärendetyp" type="text">
        <f-text-field v-model="row.caseType" v-validation.required />
    </f-table-column>

    <f-table-column title="Från och med" type="text">
        <span v-format:date="row.start"/>
    </f-table-column>

    <f-table-column title="Åtgärd" type="action" shrink>
        <f-table-button icon="trashcan" @click="onRemoveRow(row)">
            Ta bort
        </f-table-button>
    </f-table-column>
</template>
```

### FTable

```typescript
const columns = defineTableColumns<Row>([
    {
        type: "text",
        header: "Ärendetyp",
        key: "caseType",
        editable: true,
        validation: {
            required: {},
        },
    },
    {
        type: "text:date",
        header: "Från och med",
        key: "start",
    },
    {
        type: "button",
        header: "Åtgärd",
        onClick: (row) => onRemoveRow(row),
    },
]);
```

Från kolumner i templaten -> kolumner i konfiguration

### Speaker notes

Här jämför jag inte hela implementationen, utan ett utsnitt av samma tabell

I den gamla tabellen låg mer av strukturen och beteendet direkt i templaten.

I den ny tabellen ligger motsvarande ansvar i kolumnkonfigurationen.

Det blir särskillt tydligt för formattering, actions och validering.

---

# Sammanfattning

- En gemensam tabell istället för flera tabellvarianter
- Mindre setup direkt i templaten
- Tydligare uppdelning mellan rows och columns
- Mer beteende direkt i kolumnkonfigurationen
- Enklare och renare komponent-API

## Speaker notes

Om man ska sammanfatta migrationen så handlar den inte om att lära om vad en tabell är.

Det handlar snarare om att gå från en mer template styrd modell till en mer konfigurationsstyrd modell.

Resultatet är en setup som är:

- Enklare att läsa
- Enklare att resonera om
- Enklare att återanvända
- Bättre anpassad för tabellens inbyggda beteenden

För den som redan använder de äldre tabellerna är det viktigaste att känna igen att mycket av funktionalliteten finns kvar, men att den nu beskrivs på ett tydligare och mer samlat sätt.

Full dokumentation finns på ..
Release datum ..
Frågor?
