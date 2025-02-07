---
title: "Version 6 migreringsguide: @fkui/design"
short-title: "@fkui/design"
name: migrating-to-v6-design
layout: article
---

Tillämpnings-specifika leverabler (internt, externt, HAPO) har ersatts av rena FKUI-leverabler:

- paketet `@fkui/css-variables` har bytt namn till `@fkui/theme-default` och levererar ett standardtema
- paketet `@fkui/design` levererar enbart standarddesign

## Tillämpnings-specifika leverabler borttagna

FKUI tillhandahåller istället standardleverabler för tema, design.
Som konsument finns det möjlighet att själv tillhandahålla specifika tillämpningar.

````diff
@import "@fkui/design/src/fkui-int";
@import "@fkui/css-variables/dist/fkui-int-css-variables";

```diff
-@use "@fkui/css-variables/dist/fkui-int-css-variables";
+@use "@fkui/theme-default/dist/fkui-css-variables";

-@use "@fkui/design/src/fkui-int";
+@use "@fkui/design/src/fkui";
````

## Deprekerade CSS-variabler excluderade från standardtema

Möjlighet finns att importera separat vid behov.

```scss
@use "@fkui/theme-default/src/deprecated-css-variables" as *;

:root {
    @include deprecated-variables;
}
```

## `FModal` deprekerade CSS-klasser

De deprekerade CSS klasserna `modal__dialog-container-large` och `modal__dialog-container-fullscreen` är borttagna.
Detta påverkar endast dig som använder stylingen direkt, använder man `@fkui/vue` komponenten `FModal` påverkas man inte.
Klasserna är ersatta med `modal__dialog-container--large` respektive `modal__dialog-container--fullscreen`.

```diff
-<div class="modal__dialog-container modal__dialog-container-large">
+<div class="modal__dialog-container modal__dialog-container--large">
```
