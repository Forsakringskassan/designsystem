---
title: Paginera i tabell (kod)
short-title: Paginera (kod)
name: table-paginate-code
layout: article
search:
    terms:
        - tabell
---

Tabellen kan kombineras med {@link component:FPaginateDataset paginering}.

```html static
<f-paginate-dataset :items="rows">
    <template #default="{ items: currentPageItems }">
        <f-table :rows="currentPageItems" :columns></f-table>
        <f-paginator></f-paginator>
    </template>
</f-paginate-dataset>
```

## Relaterat

{@link code Kod för tabell}

{@link table-paginate Paginera i tabell}
