---
title: "Version 7 migreringsguide: Färgpalett"
short-title: Färgpalett
name: migrating-to-v7-palette
layout: article
---

## Färgpaletten är CSS-variabler

Detta påverkar dig som använder Sass-variabler från `@fkui/theme-default`-paletten.
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

## Använd semantiska variabler i applikationer

Applikationer bör inte ha beroenden till färgpaletten.
Använd i stället de semantiska CSS-variabler som beskriver färgens avsedda
användning.
Paletten är en intern källa till färger för temana och kan ändras utan att
applikationens färgval ska behöva uppdateras.
