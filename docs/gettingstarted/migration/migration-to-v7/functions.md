---
title: "Version 7 migreringsguide: Funktioner"
short-title: Funktioner
name: migrating-to-v7-funktioner
layout: article
---

## `@fkui/vue`

Följande funktioner är borttagna:

- [`getLegacyInternalKey()`](#getlegacyinternalkey)
- [`TableScroll.VERTICAL` och `TableScroll.BOTH`](#tablescroll)

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

## Cypress pageobjekt

Följande pageobjekt är borttagna:

- [`FTableColumnPageObject`](#ftablecolumnpageobject)

Följande methoder är borttagna:

- [`FTextareaFieldPageObject.errorIcon()`][#ftextareafieldpageobject]
- [`ICalendarNavbarPageObject.text()`][#icalendarnavbarpageobject_text]

### `FTableColumnPageObject`

Pageobjektet `FTableColumnPageObject` är borttaget och ersatt med att anropa `header()` eller `cell()` på `FInteractiveTablePageObject()`.

### `FInteractiveTablePageObject`

Metoden `headerRowItem()` är borttagen och ersatt med `header()`.
Notera att `header()` refererar till en specifik kolumnrubrik (`<th>` element) och inte hela tabellhuvudet (`<thead>` element).

Metoden `columnItem()` är borttagen och ersatt med `cell()` (och i vissa fall `header()`).
Notera att `cell()` refererar till en specifik tabellcell (`<td>` element) och inte hela tabellraden (`<tr>` element).

### `FTextareaFieldPageObject`

Metoden `errorIcon()` är borttagen och har ingen ersättare.

### `ICalendarNavbarPageObject.text()`

Ersatt med `title()` metoden.

```diff
 const navbar = new ICalendarNavbarPageObject();
-navbar.text().should("contain.text", "Lorem ipsum");
+navbar.title().should("contain.text", "Lorem ipsum");
```
