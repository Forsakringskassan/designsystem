---
title: Sortera och filtrera i tabell (kod)
short-title: Sortera och filtrera (kod)
layout: article
search:
    terms:
        - tabell
---

```import
FTableBasicSortFilterExample.vue
```

## Sortering och filtrering

När tabellen används tillsammans med `FSortFilterDataset` skickar du resultatet från sortering och filtrering vidare till tabellen.

```ts nocompile
const sortableAttributes = {
    frukt: "Text",
};
```

```html static
<f-sort-filter-dataset :data="rows" :sortable-attributes>
    <template #default="{ sortFilterResult }">
        <f-table :rows="sortFilterResult" :columns></f-table>
    </template>
</f-sort-filter-dataset>
```

`sortFilterResult` innehåller de rader som ska visas efter sortering och filtrering.

## Relaterat

{@link code Kod för tabell.}

{@link sort-filter Sortera och filtrera i tabell.}

{@link FSortFilterDataset Läs mer om datamängdsorteraren.}
