---
title: "Version 7 migreringsguide"
short-title: "sammanfattning"
name: migrating-to-v7
sortorder: 1
layout: article
---

## Sammanfattning

### Esm Only

[Läs mer hur du migrerar](#esm_only)

### `@fkui/theme-desktop` avvecklas

[Läs mer hur du migrerar](#fkuitheme_desktop_avvecklas)

### Övriga ändringar

| Komponent                                                                   | Ändring                                                                    |
| :-------------------------------------------------------------------------- | :------------------------------------------------------------------------- |
| cypress                                                                     | Lorem ipsum                                                                |
| {@link migrating-to-v7-vue#fcrudbutton FCrudButton}                         | Komponenten har tagits bort                                                |
| Knapp (@fkui/design)                                                        | Lorem                                                                      |
| {@link migrating-to-v7-vue#fcruddataset Datamängdredigerare (FCrudDataset)} | Modaler öppnas av applikationen via `onCreate`, `onUpdate` och `onDelete`. |
| Modal (Fmodal)                                                              | Tagit bort template Api:et                                                 |
| Steg för steg guide (FWizard)                                               | Focushantering är opt in istället för opt out                              |
| {@link migrating-to-v7-vue#ftable Tabell (FTable)}                          | Egenskapen `text` har bytt namn till `screenreaderText`.                   |

## ESM Only

### Vad innebär ESM only?

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

## `@fkui/theme-desktop` avvecklas

`@fkui/theme-desktop` kommer inte längre att underhållas eller få uppdateringar.
Ersätt det med [`@fkui-community/theme-int`](https://www.npmjs.com/package/@fkui-community/theme-int).

### Migrering

Avinstallera `@fkui/theme-desktop` och installera sedan ersättaren:

```bash
npm uninstall @fkui/theme-desktop
npm install @fkui-community/theme-int
```

Byt därefter ut importen av `@fkui/theme-desktop` mot importen av det nya temat.
Gör ändringen i den Sass-fil där temat importeras, till exempel `src/main.scss`:

```css
@use "@fkui-community/theme-int";
```

Importen läser in det ljusa färgschemat som standard.
Information om hur du konfigurerar ljust och mörkt läge finns i dokumentationen för [`@fkui-community/theme-int`](https://www.npmjs.com/package/@fkui-community/theme-int).
