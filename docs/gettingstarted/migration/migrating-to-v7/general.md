---
title: "Version 7 migreringsguide: Generellt"
short-title: "Generellt"
name: migrating-to-v7-general
sortorder: 2
layout: article
search:
    terms:
        - ESM
        - CommonJS
        - CJS
        - Javascript-ingång
        - Cypress
        - PageObject
---

| Ändring i                                         | Beskrivning                                             |
| :------------------------------------------------ | :------------------------------------------------------ |
| {@link migrating-to-v7-general JavaScript-ingång} | FKUI-paketen stöder nu bara ESM, inte CommonJS (CJS).   |
| {@link migrating-to-v7-general Cypress}           | Namnändringar och borttagna metoder i våra Pageobjects. |

## ESM Only

### Vad innebär ESM only?

ESM (ECMAScript Modules) är JavaScripts standardformat för moduler och använder `import` och `export`.
I version 7 exponerar FKUI-paketen sina JavaScript-ingångar som ESM.
CommonJS-ingångar via `require()` stöds inte längre som ett publikt sätt att ladda paketen.

Om du använder `require()` för att importera ett FKUI-paket behöver du ändra koden till ESM-import:

```diff
-const { FDate } from require("@fkui/date");
+import { FDate } from "@fkui/date";
```

## Vite-användare

Om applikationen använder Vite behöver du normalt inte ändra någon Vite-konfiguration.
Importera FKUI-paketen med `import` i applikationskoden, precis som tidigare.
Vite hanterar ESM-importerna när applikationen körs och byggs.

Om du däremot kör JavaScript direkt i Node.js behöver filen vara en ES-modul.
Ange då `"type": "module"` i projektets `package.json`, eller använd filändelsen `.mjs`.

## Test och andra byggverktyg

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

## Cypress

Följande pageobjekt är borttagna:

- [`FCalenderDayPageobject`](#fcalenderdaypageobject) (alias med felstavning)
- [`FTableColumnPageObject`](#ftablecolumnpageobject)

Följande methoder är borttagna:

- [`FFileItemPageObject.typeOfFileIcon()`](#ffileitempageobject)
- [`FInteractiveTablePageObject.columnItem()`](#finteractivetablepageobject)
- [`FInteractiveTablePageObject.headerRowItem()`](#finteractivetablepageobject)
- [`FTextareaFieldPageObject.errorIcon()`](#ftextareafieldpageobject)
- [`ICalendarNavbarPageObject.text()`](#icalendarnavbarpageobject)

### `FCalenderDayPageobject`

Aliaset `FCalenderDayPageobject` (felstavning) är borttaget och ersatt med `FCalendarDayPageObject` (rättstavat).

::: details 🤖 Prompt för AI Agenter

For each usage of the Cypress pageobject `FCalenderDayPageobject`, replace with `FCalendarDayPageObject`.

Verify the result by running each affected Cypress test.

:::

### `FFileItemPageObject`

Aliaset `typeOfFileIcon()` är borttaget och ersatt med `typeOfFile()`.
Båda är funktionellt ekvivalenta och inga övriga åtgärder behöver göras.

::: details 🤖 Prompt för AI Agenter

For each usage of the Cypress pageobject `FFileItemPageObject`, replace each usage of `typeOfFileIcon()` with `typeOfFile()`.
The former was a deprecated alias and was functionally equivalent.

Verify the result by running each affected Cypress test.

:::

### `FTableColumnPageObject`

Pageobjektet `FTableColumnPageObject` är borttaget och ersatt med att anropa {@link FInteractiveTablePageObject.cell `cell()`} (och i vissa fall {@link FInteractiveTablePageObject.header `header()`}) på `FInteractiveTablePageObject()`.

::: details 🤖 Prompt för AI Agenter

For each usage of the Cypress pageobject `FTableColumnPageObject`, determine which table row it references and replace with using `cell()` on the `FInteractiveTablePageObject` pageobject.
Despite the class name it references a `<tr>` row.
`cell()` needs both row and column to be 1-indexed.

If the referenced row is the header row, it should be replaced with `header()` instead of `cell()`.

Verify the result by running each affected Cypress test.

:::

### `FInteractiveTablePageObject`

Metoden `columnItem()` är borttagen och ersatt med {@link FInteractiveTablePageObject.cell `cell()`} (och i vissa fall {@link FInteractiveTablePageObject.header `header()`}).

Notera att `cell()` refererar till en specifik tabellcell (`<td>` element) och inte hela tabellraden (`<tr>` element) samt att `FTableColumnPageObject` är 0-indexerat (första kolumnen är 0, andra är 1, osv) medans `cell()` är 1-indexerat.

```ts name=column-item hidden nocompile
import { FInteractiveTablePageObject } from "@fkui/vue/cypress";

/* --- cut above --- */

const table = new FInteractiveTablePageObject();
table
    .columnItem(1)
    .tableRowBodyContent(0)
    .should("contain.text", "Content for Row 1 Column 1");
table
    .columnItem(1)
    .tableRowBodyContent(1)
    .should("contain.text", "Content for Row 1 Column 2");
```

```ts compare=column-item
import { FInteractiveTablePageObject } from "@fkui/vue/cypress";

/* --- cut above --- */

const table = new FInteractiveTablePageObject();
table
    .cell({ row: 1, col: 1 })
    .should("contain.text", "Content for Row 1 Column 1");
table
    .cell({ row: 1, col: 2 })
    .should("contain.text", "Content for Row 1 Column 2");
```

`table.columnItem(0).tableRowHeaderContent().eq(N)` ska ersättas med `table.header(N + 1)`.

Behöver man tillgång till `<td>` elementen direkt (exempelvis för att assert antal kolumner med `.should("have.length")`) kan man använda `table.row(N).find("td")`.

Behöver man tillgång till checkbox för valbara rader kan man använda `table.selectable(N)`.

::: details 🤖 Prompt för AI Agenter

For each usage of the Cypress pageobject `FInteractiveTablePageObject`, replace each usage of `columnItem()` with `cell()`.
The former returns a wrapper around the `<tr>` row and the latter returns a specific `<td>` or `<th>` cell.
`cell()` needs both row and column to be 1-indexed.

If `columnItem()` is called with index 0 it referenced the row in `<thead>` and should be replaced with `header()` instead of `cell()`.

Flag other usages for manual review by the user.

Verify the result by running each affected Cypress test.

:::

Metoden `headerRowItem()` är borttagen och ersatt med {@link FInteractiveTablePageObject.header `header()`}).

Notera att `header()` refererar till en specifik kolumnrubrik (`<th>` element) och inte hela tabellhuvudet (`<thead>` element) samt att `tableRowHeaderContent().eq()` är 0-indexerat (första kolumnen är 0, andra är 1, osv) medans `header()` är 1-indexerat.

```ts name=header-row hidden nocompile
import { FInteractiveTablePageObject } from "@fkui/vue/cypress";

/* --- cut above --- */

const table = new FInteractiveTablePageObject();
table
    .headerRowItem()
    .tableRowHeaderContent()
    .eq(0)
    .should("contain.text", "Column 1");
```

```ts compare=header-row
import { FInteractiveTablePageObject } from "@fkui/vue/cypress";

/* --- cut above --- */

const table = new FInteractiveTablePageObject();
table.header(1).should("contain.text", "Column 1");
```

Behöver man tillgång till `<th>` elementen direkt (exempelvis för att assert antal kolumner med `.should("have.length")`) kan man använda `table.headersRow()`.

::: details 🤖 Prompt för AI Agenter

For each usage of the Cypress pageobject `FInteractiveTablePageObject`, replace each usage of `headerRowItem()` with `header()`.
The former returns a wrapper around the `<tr>` row and the latter returns a specific `<th>` cell.
`cell()` needs both row and column to be 1-indexed.

Flag other usages for manual review by the user.

Verify the result by running each affected Cypress test.

:::

Metoden `checkbox()` är borttagen och ersatt med `FInteractiveTablePageObject.selectable()`.

::: details 🤖 Prompt för AI Agenter

For each usage of the Cypress pageobject `FInteractiveTablePageObject`, replace each usage of `checkbox()` with `selectable()`.
The former returns a wrapper around the `input type="checkbox">` element and the latter returns the `<input>` element directly.

Verify the result by running each affected Cypress test.

:::

### `FTextareaFieldPageObject`

Metoden `errorIcon()` är borttagen och har ingen ersättare.

### `ICalendarNavbarPageObject`

Aliaset `text()` är borttaget och ersatt med `title()` metoden.
Båda är funktionellt ekvivalenta och inga övriga åtgärder behöver göras.

```diff
 const navbar = new ICalendarNavbarPageObject();
-navbar.text().should("contain.text", "Lorem ipsum");
+navbar.title().should("contain.text", "Lorem ipsum");
```

::: details 🤖 Prompt för AI Agenter

Ersätt alla anrop till `text()` på Cypress-pageobjeket `ICalendarNavbarPageObject` med `title()`.

Metoden `text()` tas bort i FKUI 7.
Den är ett föråldrat alias för `title()`, som redan finns.
Metoderna är funktionellt likvärdiga, så endast metodnamnet behöver ändras.
Behåll övrig kod och testernas förväntade resultat.

Verifera ändringen genom att köra samtliga berörda Cypress-tester med projektets befintliga testkommandon.
Redovisa resultatet och ange om några tester inte kunde köras.

:::
