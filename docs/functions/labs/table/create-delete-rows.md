---
title: Lägga till och ta bort rader
layout: article
search:
    terms:
        - tabell
---

Du kan låta användaren lägga till och ta bort rader direkt i tabellen.
Mönstret bygger på att nya rader alltid läggs sist och att fokus hanteras rätt vid borttagning.

// plats för kodexempel

## Lägga till rader

När en rad läggs till ska den alltid placeras sist i tabellen och fokus ska automatiskt flyttas till den nya raden.

```ts
interface Row {
    id: string;
    name: string;
}

function onAddRow(rows: Row[]): Row[] {
    return rows.concat({
        id: String(rows.length + 1),
        name: "Ny rad",
    });
}
```

## Ta bort rader

Använd `removeRow` från `@fkui/vue-labs` för att ta bort en rad.
Lindra vid borttagning med `withTabstopBehaviour("row-removal")` för att flytta fokus rätt.

Fokus vid borttagning prioriteras så här:

1. Cellen i raden ovanför
2. Cellen i raden nedanför
3. Meddelandet "Tabellen är tom" om inga rader finns kvar

```ts
import { removeRow } from "@fkui/vue-labs";

interface Row {
    id: string;
    name: string;
}

function onRemoveRow(rows: Row[], row: Row): Row[] {
    return removeRow(rows, row);
}
```

Koppla knappen till kolumntypen `button`:

```ts
import { defineTableColumns } from "@fkui/vue-labs";

interface Row {
    id: string;
    name: string;
}

function onRemoveRow(_row: Row): void {
    if (!_row.id) {
        return;
    }
}

const columns = defineTableColumns<Row>([
    { type: "text", header: "Namn", key: "name" },
    {
        type: "button",
        header: "Ta bort",
        icon: "trashcan",
        size: "shrink",
        text(row) {
            return `Ta bort ${row.name}`;
        },
        onClick(row) {
            onRemoveRow(row);
        },
    },
]);
```

## Bra att veta

- Om tabellen har expanderbara rader skickar du in `expandable-attribute` som tredje argument till `removeRow` — annars hittas inte nästlade rader.
- `withTabstopBehaviour("row-removal")` krävs när du tar bort en enstaka rad för korrekt fokushantering. Vid bulkborttagning sans `withTabstopBehaviour`.
- Att lägga till rader kräver ingen speciell API-anrop — fokuset hanteras automatiskt av tabellen när radlistan uppdateras.

## Relaterat

{@link column-type Kolumntyper}

{@link bulk-operation Bulkoperation}

{@link code Kod för tabell}
