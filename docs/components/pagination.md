---
title: Paginering
status: Produktionsklar
layout: component
component:
    - FPaginateDataset
    - FPaginator
---

Paginering används för att låta användaren navigera mellan innehåll som är uppdelat på flera sidor.
Innehållet kan till exempel vara sökresultat eller tabeller.

```import live-example
PaginationExample.vue
```

## Sidknappar eller sidräknare

Sidknappar visas som standard.
Sidräknare ersätter sidknapparna om paginatorn är för smal för att kunna visa sidknappar.

```vue
<script lang="ts">
import { defineComponent } from "vue";
import { FPaginateDataset, FPaginator } from "@fkui/vue";

export default defineComponent({
    components: {
        FPaginateDataset,
        FPaginator,
    },
    data() {
        return {
            rows: Array.from({ length: 100 }),
        };
    },
});
</script>

<!-- [html-validate-disable-block unique-landmark -- for demo purpose only] -->
<template>
    <f-paginate-dataset :items="rows" :itemsPerPage="1">
        <template #default="{ items: currentPageItems }">
            <f-paginator />
        </template>
    </f-paginate-dataset>
</template>
```

## Dynamisk hämtning av data

Det går att använda dynamisk hämtning av data. Det innebär att komponenten hämtar enbart det data som visas på den aktuella sidan istället för att göra ett urval av alla objekt.

Attributet `itemsLength` anger hur många objekt det finns totalt och utgör grunden för siduppdelningen.

Attributet `fetchData` anger den funktion som ska användas för hämtning av det data som ska visas på sidan.
Denna funktion används i exemplet ovan:

```ts static
const persons = [] as unknown[];

/* --- cut above --- */

async function fetchData(first: number, last: number) {
    await new Promise((resolve) => setTimeout(resolve, 3000));
    return persons.slice(first, last);
}
```

## Textnycklar

Läs mer om att {@link translate-text anpassa och översätta text}.

:::api
translation:FPaginator
:::

## API

### FPaginateDataset

:::api
vue:FPaginateDataset
:::

### FPaginator

:::api
vue:FPaginator
:::
