---
title: "Version 6 migreringsguide: @fkui/design"
short-title: "@fkui/design"
name: migrating-to-v6-design
layout: article
---

Från version 6.0.0 levereras bara ett tema, det som tidigare hette EXP är nu standard.
INT-temat är utbrutet och levereras inte av designsystemet längre.

- `@fkui/css-variables` har bytt namn till `@fkui/theme-default`.
- `@fkui/design` levererar nu enbart ett tema.

## Tillämpnings-specifika leverabler borttagna

Designsystemet tillhandahåller nu endast ett tema.
Som konsument finns det fortfarande möjlighet att själv tillhandahålla specifika tillämpningar.

```diff
-@use "@fkui/css-variables/dist/fkui-exp-css-variables";
+@use "@fkui/theme-default";

-@use "@fkui/design/src/fkui-exp";
+@use "@fkui/design";
```

{@link getting-started-application Läs mer om att använda ett eget tema.}

## Deprekerade CSS-variabler borttagna

Möjlighet finns att importera separat vid behov.

```scss
@use "@fkui/theme-default/src/deprecated-css-variables" as *;

:root {
    @include deprecated-variables;
}
```

## `FModal` borttagna CSS-klasser

De deprekerade CSS klasserna `modal__dialog-container-large` och `modal__dialog-container-fullscreen` är borttagna.
Detta påverkar endast dig som använder stylingen direkt, använder man `@fkui/vue` komponenten `FModal` påverkas man inte.
Klasserna är ersatta med `modal__dialog-container--large` respektive `modal__dialog-container--fullscreen`.

```diff
-<div class="modal__dialog-container modal__dialog-container-large">
+<div class="modal__dialog-container modal__dialog-container--large">
```

## Entrypoint tar alltid upp 100% yta

Tidigare tog komponenten enbart upp 66% bredd i desktop, om du vill återskapa det beteendet kan du exempelvis nyttja grid'en:

```diff
+ <div class="row">
+    <div class="col col--md-8">
        <a class="entrypoint" href="javascript:">...</a>
+    </div>
+ </div>
```
