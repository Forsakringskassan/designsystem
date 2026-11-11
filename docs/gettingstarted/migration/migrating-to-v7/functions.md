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
