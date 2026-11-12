---
title: "Version 7 migreringsguide: Funktioner"
short-title: Funktioner
name: migrating-to-v7-funktioner
layout: article
---

## `@fkui/vue`

Följande propar är borttagna:

- [`FSortFilterDataset` `placeholderFilter`](#fsortfilterdataset)

Följande funktioner är borttagna:

- [`getLegacyInternalKey()`](#getlegacyinternalkey)
- [`TableScroll.VERTICAL` och `TableScroll.BOTH`](#tablescroll)

### `FSortFilterDataset`

Propen `placeholderFilter` är borttagen och ersatt med `filterLabel`.

```diff
 <f-sort-filter-dataset
-    placeholderFilter="Lorem ipsum"
+    filter-label="Lorem ipsum"
 >
```

### `getLegacyInternalKey()`

Använd `findItemIdentifier()` eller `getItemIdentifier()` istället för att hämta ut identifieraren istället för dess nyckel.

```diff
-const key = getLegacyInternalKey();
-const id = myObj[key];
+const id = getItemIdentifier(myObj);
```

### `TableScroll`

`FDataTable` och `FInteractiveTable` stödjer inte längre `TableScroll.VERTICAL` och `TableScroll.HORIZONTAL`.
Vi rekommenderar att undvika vertikal scroll, behöver du trots allt det så behöver det implementeras i applikationen.

::: warning

Tänk på att scrollbara ytor måste vara kunna tangentbordsnavigeras för att vara tillgängliga.

:::
