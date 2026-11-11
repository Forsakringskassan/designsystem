---
title: "Version 7 migreringsguide: Funktioner"
short-title: Funktioner
name: migrating-to-v7-funktioner
layout: article
---

Följande funktioner är borttagna:

- [`getLegacyInternalKey()`](#getlegacyinternalkey)

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
