---
title: Datamängdsorterare
status: Produktionsklar
layout: component
sortorder: 4
component: FSortFilterDataset
search:
    terms:
        - sortera
        - filtrera
---

Datamängdsorterare används vid sortering av datamängd och/eller för sökning i en datamängd i komponenterna lista eller tabell.

## Användning

Sätt `data` till lista som ska sorteras och filtreras samt `sortableAttributes` till en beskrivning av de fält som är sorterbara.
Sätt `showSort` för att visa sorteringslistan och `showFilter` för att visa sökfältet.
Båda är dolda som standard och kan visas oberoende av varandra.
Förvald sortering och sortering via tabellens kolumnrubriker fungerar även när sorteringslistan är dold.

```html static
<f-sort-filter-dataset
    :data="items"
    :sortable-attributes="{ givenname: 'Förnamn', surname: 'Efternamn' }"
    show-sort
    show-filter
>
    <template #header="{ slotClass }">
        <h3 :class="slotClass">Rubrik</h3>
    </template>
    <template #default="{ sortFilterResult }">
        <!-- sortFilterResult is array with filtered items -->
    </template>
</f-sort-filter-dataset>
```

### Förvald sortering

Sätt `defaultSortAttribute` till namnet på fältet som ska sorteras samt `defaultSortAscending` till `true` (default) eller `false` för att välja om sorteringen ska ske i stigande (`true`) eller fallande (`false`) ordning.

```diff
 <f-sort-filter-dataset
     :data="items"
     :sortable-attributes="{ givenname: 'Förnamn', surname: 'Efternamn' }"
     show-sort
     show-filter
+    default-sort-attribute="name"
+    :default-sort-ascending="true"
 >
     <template #header="{ slotClass }">
         <h3 :class="slotClass">Rubrik</h3>
     </template>
     <template #default="{ sortFilterResult }">
         <!-- sortFilterResult is array with filtered items -->
     </template>
 </f-sort-filter-dataset>
```

### Filtrering

Sätt `filterAttributes` till en lista med vilka attribut som ska inkluderas i filtreringen.
Om `filterAttributes` inte anges inkluderas alla attribut i filtreringen.

```diff
 <f-sort-filter-dataset
     :data="items"
     :sortable-attributes="{ givenname: 'Förnamn', surname: 'Efternamn' }"
     show-sort
     show-filter
+    :filter-attributes="['surname']"
 >
     <template #header="{ slotClass }">
         <h3 :class="slotClass">Rubrik</h3>
     </template>
     <template #default="{ sortFilterResult }">
         <!-- sortFilterResult is array with filtered items -->
     </template>
 </f-sort-filter-dataset>
```

## Lista med datamängdsorterare

Visar hur `FSortFilterDataset` kan användas med {@link FList `FList`}.

```import
FSortFilterDatasetListExample.vue
```

## Tabell med datamängdsorterare

När {@link FTable} används med datamängdsorteraren behöver nycklarna i `sortableAttributes` matcha kolumnernas `key`.

```ts
import { defineTableColumns } from "@fkui/vue";

interface Row {
    date: string;
}

const columns = defineTableColumns<Row>([
    { type: "text:date", header: "Datum", key: "date" },
]);

const sortableAttributes = {
    date: "Datum",
};
```

### Tabell med förvald sortering

Visar hur `FSortFilterDataset` kan användas med {@link FTable}.

```import
FSortFilterDatasetTableExample.vue
```

### Tabell med åtgärder

Åtgärder som till exempel batch-funktioner som rör hela datamängden kan placeras i sloten Header för att gruppera med sortering och filtering.

```import
FSortFilterDatasetTableExampleToolbar.vue
```

## Redigering av innehåll

När rader läggs till, ändras eller tas bort körs varken sortering eller filtrering om.
Raderna ligger kvar där de är så att användaren inte tappar bort raden som just ändrats:

- Ändrade rader ligger kvar på samma plats.
- Nya rader läggs till sist.
- Borttagna rader försvinner.
- Sökningen och markerade rader behålls.
- Sorteringslistan återställs till "Välj" eftersom listan inte längre är sorterad.

Det gäller även om raden inte längre matchar sorteringen eller sökningen.
Användaren sorterar om genom att välja sortering igen och filtrerar om genom att ändra sökningen.

Samma sak gäller när `data` sätts till en ny lista som innehåller någon av de tidigare raderna, till exempel med {@link FCrudDataset datamängdredigeraren}.
Om datamängden ersätts helt, det vill säga den nya listan innehåller ingen av de tidigare raderna, töms sökningen och både filtrering och sortering körs på nytt.

## Datamängdsorterare och egen presentation

```import
FSortFilterDatasetCustomExample.vue
```

## Ändra rubriknivå

Du kan variera storleken genom att inte använda den tillgängliga `slotClass` (som sätter den standardiserade storleken för rubriken).

```diff
 <f-sort-filter-dataset
     :data="items"
     :sortable-attributes="{ givenname: 'Förnamn', surname: 'Efternamn' }"
     show-sort
     show-filter
 >
-    <template #header="{ slotClass }">
-        <h3 :class="slotClass">Rubrik</h3>
+    <template #header>
+        <h1>Rubrik</h1>
     </template>
     <template #default="{ sortFilterResult }">
         <!-- sortFilterResult is array with filtered items -->
     </template>
 </f-sort-filter-dataset>
```

```import
FSortFilterDatasetHeader.vue
```

## Visa antalet rader

För att visa antalet rader som presenteras använder man sig av de två listornas längd.

- Om längden av de ursprungliga raderna är `0` finns inga rader att visa oavsett filtrering.
- Om längden av de filtrerade raderna är `0` (men ursprungliga är större än `0`) visas inga rader på grund av filter.
- Om längden mellan de två skiljer sig åt har sökningen gett ett resultat.

Vi använder begreppet "träffar" för att presentera resultat.
Om det går att specificera träffar så är det bättre att göra det, till exempel "Det finns inga frukter att visa" istället för "Det finns inga träffar att visa".

```diff
 <f-sort-filter-dataset :data="items" :sortable-attributes show-sort show-filter>
     <template #default="{ sortFilterResult }">
+        Visar {{ sortFilterResult.length }} av {{ items.length }} frukter.
        <f-table :rows="sortFilterResult" :columns>
             <!-- [...] --->
        </f-table>
     </template>
 </f-sort-filter-dataset>
```

Detta går också utnyttja i tabell för att presentera om tabellen är tom pga filtrering eller att inga rader fanns från första början:

```diff
 <f-sort-filter-dataset :data="items" :sortable-attributes show-sort show-filter>
     <template #default="{ sortFilterResult }">
        <f-table :rows="sortFilterResult" :columns>
             <template #empty>
+                <template v-if="items.length === 0">
+                    Det finns inga frukter att visa.
+                </template>
+                <template v-else>
+                    Sökningen gav inga träffar.
+                </template>
             </template>
        </f-table>
     </template>
 </f-sort-filter-dataset>
```

```import nomarkup
FSortFilterDatasetEmptySlot.vue
```

## API

:::api
vue:FSortFilterDataset
:::
