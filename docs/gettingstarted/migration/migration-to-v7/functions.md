---
title: "Version 7 migreringsguide: Funktioner"
short-title: Funktioner
name: migrating-to-v7-funktioner
layout: article
---

## `@fkui/vue`

Följande funktioner är borttagna:

- [`getLegacyInternalKey()`](#getlegacyinternalkey)

### `getLegacyInternalKey()`

Använd `findItemIdentifier()` eller `getItemIdentifier()` istället för att hämta ut identifieraren istället för dess nyckel.

```diff
-const key = getLegacyInternalKey();
-const id = myObj[key];
+const id = getItemIdentifier(myObj);
```

## Cypress pageobjekt

Följande methoder är borttagna:

- [`ICalendarNavbarPageObject.text()`][#icalendarnavbarpageobject_text]

### `ICalendarNavbarPageObject.text()`

Ersatt med `title()` metoden.

```diff
 const navbar = new ICalendarNavbarPageObject();
-navbar.text().should("contain.text", "Lorem ipsum");
+navbar.title().should("contain.text", "Lorem ipsum");
```
