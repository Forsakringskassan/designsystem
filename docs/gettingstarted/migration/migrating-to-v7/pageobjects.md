---
title: "Version 7 migreringsguide: Cypress Pageobjects"
short-title: Cypress Pageobjects
name: migrating-to-v7-pageobjects
layout: article
---

Följande pageobjekt är borttagna:

- [`FCalenderDayPageobject`](#fcalenderdaypageobject) (alias med felstavning)

Följande methoder är borttagna:

- [`FInteractiveTablePageObject.columnItem()`](#finteractivetablepageobject)
- [`FInteractiveTablePageObject.headerRowItem()`](#finteractivetablepageobject)
- [`FTextareaFieldPageObject.errorIcon()`](#ftextareafieldpageobject)
- [`ICalendarNavbarPageObject.text()`](#icalendarnavbarpageobject)

## `FCalenderDayPageobject`

Aliaset `FCalenderDayPageobject` (felstavning) är borttaget och ersatt med `FCalendarDayPageObject` (rättstavat).

::: details 🤖 Prompt för AI Agenter

For each usage of the Cypress pageobject `FCalenderDayPageobject`, replace with `FCalendarDayPageObject`.

Verify the result by running each affected Cypress test.

:::

## `FInteractiveTablePageObject`

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

Behöver man tillgång till `<td>` elementen direkt (exempelvis för att assert antal kolumner med `.should("have.length")`) kan man använda `table.row(N)`.

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

## `FTextareaFieldPageObject`

Metoden `errorIcon()` är borttagen och har ingen ersättare.

## `ICalendarNavbarPageObject`

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
