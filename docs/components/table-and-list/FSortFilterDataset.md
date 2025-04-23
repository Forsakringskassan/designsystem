---
title: Datamängdsorterare
status: Produktionsklar
layout: component
component: FSortFilterDataset
---

Datamängdsorterare används vid sortering av datamängd och/eller för sökning i en datamängd i komponenterna lista eller tabell.

## Användning

Sätt `data` till lista som ska sorteras och filtreras samt `sortableAttributes` till en beskrivning av de fält som är sorterbara.

```html static
<f-sort-filter-dataset
    :data="items"
    :sortable-attributes="{ givenname: 'Förnamn', surname: 'Efternamn' }"
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

## Lista med datamängdsorterare

Visar hur `FSortFilterDataset` kan användas med {@link FList `FList`}.

```import
FSortFilterDatasetListExample.vue
```

## Tabell med datamängdsorterare

När tabell ({@link table#interaktiv_tabell `FInteractiveTable`} eller {@link table#datatabell `FDataTable`}) används med datamängdsorterare måste varje tabellkolumn använda `name` prop med ett unikt värde.
För objektet som du skickar till datamängdsorterarens `sortableAttributes` behöver egenskapernas namn även matcha kolumnernas namn för att kunna sortera dem.

```diff
-<f-table-column title="Datum">
+<f-table-column name="date" title="Datum">
```

```ts
const mySortableAttributes = {
    // Property name must match column name.
    date: "Datum",
};
```

### Tabell med förvald sortering

Visar hur `FSortFilterDataset` kan användas med {@link table#interaktiv_tabell `FInteractiveTable`}.

```import
FSortFilterDatasetTableExample.vue
```

### Tabell med åtgärder

Åtgärder som till exempel batch-funktioner som rör hela datamängden kan placeras i sloten Header för att gruppera med sortering och filtering.

```import
FSortFilterDatasetTableExampleToolbar.vue
```

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
 <f-sort-filter-dataset :data="items">
     <template #default="{ sortFilterResult }">
+        Visar {{ sortFilterResult.length }} av {{ items.length }} frukter.
         <f-data-table :rows="sortFilterResult">
             <!-- [...] --->
         </f-data-table>
     </template>
 </f-sort-filter-dataset>
```

Detta går också utnyttja i tabell för att presentera om tabellen är tom pga filtrering eller att inga rader fanns från första början:

```diff
 <f-sort-filter-dataset :data="items">
     <template #default="{ sortFilterResult }">
         <f-data-table :rows="sortFilterResult">
             <template #empty>
+                <template v-if="items.length === 0">
+                    Det finns inga frukter att visa.
+                </template>
+                <template v-else>
+                    Sökningen gav inga träffar.
+                </template>
             </template>
         </f-data-table>
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
