---
title: "Version 7 migreringsguide"
short-title: "Sammanfattning"
name: migrating-to-v7
sortorder: 1
layout: article
---

## Sammanfattning

### Esm Only

FKUI-paketen stöder nu bara ESM, inte CommonJS (CJS).

[Läs mer hur du migrerar.](#esm_only--1)

### `@fkui/theme-desktop` avvecklas

[Läs mer hur du migrerar.](#fkui_theme_desktop_avvecklas--2)

### Färgpaletten omskriven till CSS-variabler

[Läs mer hur du migrerar.](#fargpaletten_ar_css_variabler--3)

### Standardtemat ingår inte längre i byggd CSS

Den kompilerade versionen utav `@fkui/design` innehåller inte längre det ljusa temat.

{@link migrating-to-v7-@fkui/design#borttag_utav_tema_i_forkompilerad_css Läs mer hur du migrerar.}

### Användning av `@fkui/theme-default` förändras

[Läs mer hur du migrerar](#anvandning_av_fkui_theme_default_forandras--4)

### Övriga ändringar

| Komponent                                                                                  | Ändring                                                                                           |
| :----------------------------------------------------------------------------------------- | :------------------------------------------------------------------------------------------------ |
| {@link migrating-to-v7-pageobjects Cypress}                                                | Namnändringar och borttagna metoder i våra Pageobjects.                                           |
| {@link migrating-to-v7-vue#fcrudbutton FCrudButton (FCrudButton)}                          | Komponenten har tagits bort.                                                                      |
| {@link migrating-to-v7-@fkui/design#ersattning_av_klasser_pa_knappar Knapp (@fkui/design)} | Vissa klasser på `button` ersätts.                                                                |
| {@link migrating-to-v7-vue#FModal Modal (Fmodal)}                                          | Tagit bort template Api:et.                                                                       |
| {@link migrating-to-v7-vue#ipopup Popup (IPopup)}                                          | Fokushantering och tangentbordsfälla är opt in.                                                   |
| {@link migrating-to-v7-vue#FWizard Steg för steg (FWizard)}                                | Focushantering är opt in istället för opt out                                                     |
| {@link migrating-to-v7-vue#ftable Tabell (FTable)}                                         | Egenskapen `text` har bytt namn till `screenreaderText`.                                          |
| {@link migrating-to-v7-vue#fsortfilterdataset Datamängdsorterare (FSortFilterDataset)}     | Sortering och sökfält är dolda som standard. Ny lista med befintliga rader räknas som redigering. |
| {@link migrating-to-v7-theme-builder @fkui/theme-builder}                                  | Flera uppdateringar för dig som bygger dina egna teman.                                           |

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

## Färgpaletten är CSS-variabler

Detta påverkar dig som använder Sass-variabler från `@fkui/theme-default`.

I version 7 är färgpaletten i `@fkui/theme-default` CSS-variabler istället för Sass-variabler.
Paletten följer namnstandarden `--fkds-palette-color-<namn>`, till exempel `--fkds-palette-color-neutral-900`.

Sass-variablerna `$palette-color-<namn>` i `@fkui/theme-default/src/palette-variables` finns inte längre.

### Migrering

Ersätt Sass-variabler med motsvarande CSS-variabel.
Använd om möjligt de semantiska färgvariablerna istället för paletten direkt.

```diff
-@use "@fkui/theme-default/src/palette-variables" as *;
-
 .my-component {
-    color: $palette-color-neutral-900;
+    color: var(--fkds-palette-color-neutral-900);
 }
```

### Använd semantiska variabler i applikationer

Applikationer bör inte ha beroenden till färgpaletten.

Använd i stället de semantiska CSS-variabler som beskriver färgens avsedda
användning.
Paletten är en intern källa till färger för temana och kan ändras utan att
applikationens färgval ska behöva uppdateras.

## Användning av `@fkui/theme-default` förändras

Tidigare räckte det att använda `@use "@fkui/theme-default"` i Sass för att indirekt lägga det ljusa temats CSS-variabler globalt i din applikation.

Det sker inte längre automatiskt.

För att använda det ljusa temat på hela sidan med Sass, använd mixinen `theme.light`:

```scss
@use "@fkui/theme-default" as theme;

:root {
    @include theme.light;
}

/* Begränsa temats CSS-variabler till den här delen av sidan */
.my-scope {
    @include theme.light;
}
```

Du kan också importera CSS-filen från applikationens JavaScript:

```js
import "@fkui/theme-default/theme-light";
```

Läs mer om hur du använder standardtemat i [dokumentationen för `@fkui/theme-default`](https://github.com/Forsakringskassan/designsystem/tree/main/packages/theme-default).
