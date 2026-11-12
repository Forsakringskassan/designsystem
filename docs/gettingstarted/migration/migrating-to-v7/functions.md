---
title: "Version 7 migreringsguide: Funktioner"
short-title: Funktioner
name: migrating-to-v7-funktioner
layout: article
---

Följande propar är borttagna:

- [`FSortFilterDataset` `placeholderFilter`](#fsortfilterdataset)

Följande funktioner är borttagna:

- [`getLegacyInternalKey()`](#getlegacyinternalkey)
- [`TableScroll.VERTICAL` och `TableScroll.BOTH`](#tablescroll)

## `FSortFilterDataset`

Propen `placeholderFilter` är borttagen och ersatt med `filterLabel`.

```diff
 <f-sort-filter-dataset
-    placeholder-filter="Lorem ipsum"
+    filter-label="Lorem ipsum"
 >
```

::: details 🤖 Prompt för AI Agenter

För varje användning av propen `placeholderFilter` på komponenten `FSortFilterDataset`, ersätt med propen med `filterLabel`.
Propen är identisk i funktion.

Verifiera resultatet genom att bygga projektet och köra enhetstester.
Ignorera övriga fel, applikationen migreras till FKUI v7 och det kan finnas orelaterade kvarstående fel.

:::

## `getLegacyInternalKey()`

Använd `findItemIdentifier()` om objektet kan sakna en identifierare, eller `getItemIdentifier()` om identifieraren är garanterad att finnas, istället för att hämta ut nyckeln.

```diff
-const key = getLegacyInternalKey();
-const id = myObj[key];
+const id = getItemIdentifier(myObj);
```

::: details 🤖 Prompt för AI Agenter

För varje användning av funktionen `getLegacyInternalKey()`, ersätt med `findItemIdentifier()` om objektet kan sakna en identifierare, annars `getItemIdentifier()`.
Funktionen `getLegacyInternalKey()` är borttagen och returnerade en unik nyckel för att slå upp en identifierare i ett objekt medans `findItemIdentifier()`/`getItemIdentifier()` returnerar identifieraren direkt.

Verifiera resultatet genom att bygga projektet och köra enhetstester.
Ignorera övriga fel, applikationen migreras till FKUI v7 och det kan finnas orelaterade kvarstående fel.

:::

## `TableScroll`

`FDataTable` och `FInteractiveTable` stödjer inte längre `TableScroll.VERTICAL` och `TableScroll.BOTH`.

```diff
 <f-interactive-table
   :rows
-  :scroll="TableScroll.VERTICAL"
 ></f-interactive-table>
```

Vi rekommenderar att undvika vertikal scroll, behöver du trots allt det så behöver det implementeras i applikationen.

::: warning

Tänk på att scrollbara ytor måste gå att tangentbordsnavigera för att vara tillgängliga.

:::

::: details 🤖 Prompt för AI Agenter

Summera för användaren vilka förekomster av `TableScroll.VERTICAL` och `TableScroll.BOTH` som förekommer i applikationen.
Per rekommendation från designsystemet föreslå att för `TableScroll.VERTICAL` ta bort användning och för `TableScroll.BOTH` ersätta med `TableScroll.HORIZONTAL`.
Gör inga ändringar förrän användaren bekräftat vilka åtgärder som ska göras.

Verifiera resultatet genom att bygga projektet och köra enhetstester.
Ignorera övriga fel, applikationen migreras till FKUI v7 och det kan finnas orelaterade kvarstående fel.

:::
