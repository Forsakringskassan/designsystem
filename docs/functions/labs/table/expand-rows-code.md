---
title: Expandera rader (kod)
layout: article
search:
    terms:
        - tabell
---

Expanderbara rader aktiveras med propen `expandable-attribute` som pekar på den egenskap i radobjektet som innehåller en array med nästlade rader.

## Följa existerande kolumner

När `expandable-attribute` sätts utan sloten `expandable` visas de nästlade raderna med samma kolumnkonfiguration som förälderraden.
De nästlade raderna måste följa samma datastruktur som övriga rader.

```ts
import { defineTableColumns } from "@fkui/vue-labs";

interface Row {
    id: string;
    name: string;
    children?: Row[];
}

const columns = defineTableColumns<Row>([
    { type: "text", header: "Namn", key: "name" },
]);
```

```html
<f-table
    :rows
    :columns
    key-attribute="id"
    expandable-attribute="children"
></f-table>
```

## Valfritt innehåll

Med sloten `expandable` tar du full kontroll över hur den expanderade raden presenteras.
Innehållet placeras i en cell som sträcker sig över hela raden.
Du behöver fortfarande sätta `expandable-attribute` till den egenskap som håller det expanderade innehållet.

```ts
interface Detail {
    id: string;
    note: string;
}

interface Row {
    id: string;
    name: string;
    details?: Detail[];
}
```

```html
<f-table
    :rows
    :columns
    key-attribute="id"
    expandable-attribute="details"
>
    <template #expandable="{ row }">
        <p>{{ row.note }}</p>
    </template>
</f-table>
```

## Bra att veta

- Om du inte använder sloten `expandable` delar de nästlade raderna exakt samma kolumnkonfiguration som förälderraden.
- Rader utan nästlade rader (tom array eller `undefined`) får ingen expanderknapp.
- Skapa inte ett för komplext expanderat innehåll, till exempel ytterligare expanderbara tabeller inuti.

## Parametrar

**`expandable-attribute:`** `keyof T` {@optional}
: Anger vilken egenskap i radobjektet som innehåller nästlade rader.
  Om egenskapen saknas eller är en tom array för en rad visas ingen expanderknapp.

### Slot `expandable`

**`row:`** `ExpandedContent`
: Nästlad rad från `expandable-attribute` för den expanderade raden.

## Relaterat

{@link expand-rows Expandera rader}

{@link code Kod för tabell}
