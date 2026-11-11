---
title: "Version 7 migreringsguide: Cypress Pageobjects"
short-title: Cypress Pageobjects
name: migrating-to-v7-pageobjects
layout: article
---

Följande pageobjekt är borttagna:

- [`FCalenderDayPageobject`](#fcalenderdaypageobject) (alias med felstavning)

Följande methoder är borttagna:

- [`ICalendarNavbarPageObject.text()`](#icalendarnavbarpageobject)

## `FCalenderDayPageobject`

Aliaset `FCalenderDayPageobject` (felstavning) är borttaget och ersatt med `FCalendarDayPageObject` (rättstavat).

::: details 🤖 Prompt för AI Agenter

For each usage of the Cypress pageobject `FCalenderDayPageobject`, replace with `FCalendarDayPageObject`.

Verify the result by running each affected Cypress test.

:::

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
