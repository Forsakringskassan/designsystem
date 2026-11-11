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

Följande methoder är borttagna:

- [`FTextareaFieldPageObject.errorIcon()`][#ftextareafieldpageobject]
- [`ICalendarNavbarPageObject.text()`][#icalendarnavbarpageobject_text]

### `FTextareaFieldPageObject`

Metoden `errorIcon()` är borttagen och har ingen ersättare.

### `ICalendarNavbarPageObject.text()`

Ersatt med `title()` metoden.

```diff
 const navbar = new ICalendarNavbarPageObject();
-navbar.text().should("contain.text", "Lorem ipsum");
+navbar.title().should("contain.text", "Lorem ipsum");
```
