---
title: "Version 6 migreringsguide: Cypress Pageobjects"
short-title: Cypress Pageobjects
name: migrating-to-v6-cypress-pageobjects
layout: article
---

## Paketets namn

```diff
-import { ... } from "@fkui/vue/pageobject"
+import { ... } from "@fkui/vue/cypress"
```

Använder du TypeScript med Cypress behöver du sätta två inställningar i din `cypress/tsconfig.json`:

```json name=tsconfig.json.orig hidden
{
    "compilerOptions": {
        "target": "es6",
        "lib": ["es6", "dom"],
        "types": ["cypress", "node"]
    },
    "include": ["**/*.ts"]
}
```

```json compare=tsconfig.json.orig
{
    "compilerOptions": {
        "module": "node16",
        "moduleResolution": "bundler",
        "target": "es6",
        "lib": ["es6", "dom"],
        "types": ["cypress", "node"]
    },
    "include": ["**/*.ts"]
}
```

`moduleResolution` kan sättas till något av:

- `bundler`
- `node16`
- `nodenext`

## `trimmedText()`

Den deprekerade `trimmedText()` metoden är borttagen från samtliga pageobjekt.
Ej att förväxla med tredjeparts kommando/assertion med samma namn som med fördel kan användas som ersättare.

Som förslag till ersättare kan någon av följande tekniker användas:

- `cy.get(..).should("have.text", "...")` - givet att det inte finns inledande eller efterföljande whitespace kan native `have.text` användas.
- `cy.get(..).should("contain.text", "...")` - givet att du testar hela textens innehåll kan native `contain.text` användas.
- `cy.get(..).should("trimmedText", "...")` - tredjeparts assertion som tillhandhåller motsvarande (och buggfri) lösning kan användas.

Specifikt, för varje pageobjekt kan `.trimmedText().should(..)` ersättas med:

- För `FBadgePageObject` ersätt med `.el().should(..)`.-
- För `FCheckboxFieldPageObject` ersätt med `.label().should(..)`.
- För `FLabelPageObject` ersätt med `.el().should(..)`
- För `FRadioFieldPageObject` ersätt med `.label().should(..)`.
- För `FSelectFieldPageObject` ersätt med `.selectedOption().should(..)`.

## `FLabelPageobject`

Metoden `discreteDescription` har ändrat namn till `formatDescription` för att matcha motsvarande ändringar på FLabel komponenten.

```diff
-label.discreteDescription().should("have.text", "...");
+label.formatDescription().should("have.text", "...");
```

## `FLoaderPageobject`

Den deprekerade metoden `FLoaderPageobject.loader()` är borttagen.
Då metoden inte fungerar i normalfallet finns ingen direkt ersättare, om man använder metoden så ska man rätta sin selector och använda `.el()`.

```diff
-const loader = new FLoaderPageObject("#parent-element");
-loader.loader().should("be.visible");
+const loader = new FLoaderPageObject("#loader-element");
+loader.el().should("be.visible");
```

## `FMessageBoxPageObject`

De deprekerade metoderna `FMessageBoxPageObject.title()` och `FMessageBoxPageObject.body()` är borttagna.
Eftersom innehållet i meddelanderutan slottas in finns ingen direkt ersättare utan får antingen använda `.content()` för att hämta ut hela innehållet i slotten eller använda en egen selector.

```diff
-messagebox.title().should("have.text", "..");
+messagebox.content().should("contain.text", "..");
```

## `FNavigationMenuPageobject`

Den deprekerade metoden `FNavigationMenuPageobject.menu()` är borttagen och ersatt med direkta metoder på `FNavigationMenuPageobject`.

```diff
-nav.menu().item(0).click();
+nav.item(0).click();
```

## `FPageHeaderPageobject`

Metoden `FPageHeaderPageobject.logoRouterLink` är borttagen.
Eftersom `FPageHeader` inte längre tillhandahåller en `router-link` så finns det ingen direkt ersättare.
Du får istället använda selector för egen implementerad `router-link` i `FPageHeader` `logo` slot.

## `FProgressbarPageObject`

Metoden `ariaValueNow()` har ändrats till `value()` och returnerar nu `number` istället för `string`.

```ts name=progressbar-ariavaluenow nocompile hidden
progressbar.ariaValueNow().should("equal", "40");
```

```ts compare=progressbar-ariavaluenow nocompile
progressbar.value().should("equal", 40);
```

## `FTooltipPageObject`

Den deprekerade metoden `FTooltipPageObject.content()` har tagits bort och är ersatt med direkta metoder på `FTooltipPageObject`.

```diff
-tooltip.content().closeButtonTop().click();
+tooltip.closeButton().click();
```

```diff
-tooltip.content().closeButtonBottom().click();
+tooltip.closeButton().click();
```

```diff
-tooltip.content().heading().should("have.text", "Lorem ipsum");
+tooltip.heading().should("have.text", "Lorem ipsum");
```

```diff
-tooltip.content().brodtext().should("have.text", "Lorem ipsum");
+tooltip.body().should("have.text", "Lorem ipsum");
```

::: warning Notera

Både `closeButtonBottom()` och `closeButtonTop()` är ersatt med `closeButton()` då det inte längre finns två separata knappar.

:::
