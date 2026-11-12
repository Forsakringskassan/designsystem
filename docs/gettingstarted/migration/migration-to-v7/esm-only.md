---
title: "Version 7 migreringsguide: ESM only"
short-title: ESM Only
name: migrating-to-v7-esm
layout: article
---

## Vad innebär ESM only?

ESM (ECMAScript Modules) är JavaScripts standardformat för moduler och använder `import` och `export`.
I version 7 exponerar FKUI-paketen sina JavaScript-ingångar som ESM.
CommonJS-ingångar via `require()` stöds inte längre som ett publikt sätt att ladda paketen.

Om du använder `require()` för att importera ett FKUI-paket behöver du ändra koden till ESM-import:

```diff
-const date = require("@fkui/date");
+import * as date from "@fkui/date";
```

### Vite-användare

Om applikationen använder Vite behöver du normalt inte ändra någon Vite-konfiguration.
Importera FKUI-paketen med `import` i applikationskoden, precis som tidigare.
Vite hanterar ESM-importerna när applikationen körs och byggs.

Om du däremot kör JavaScript direkt i Node.js behöver filen vara en ES-modul.
Ange då `"type": "module"` i projektets `package.json`, eller använd filändelsen `.mjs`.

#### Test och andra byggverktyg

Kontrollera även test och byggverktyg samt konfigurationsfiler som laddar FKUI-paketen.
De måste kunna hantera ESM, direkt eller genom ett byggsteg.
