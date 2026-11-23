---
title: "Version 7 migreringsguide: Ändringar i theme-builder"
short-title: Theme-builder
name: migrating-to-v7-theme-builder
layout: article
---

## Ändringar i `@fkui/theme-builder`

Den här sektionen gäller enbart dig som bygger egna teman.

### `palette.json` genereras inte längre

`palette.json` genereras inte längre.
Palette-information finns i stället i `metadata.mjs` under `palette`.

Exempel `dist/metadata.mjs`:

```javascript
export default {
    themes: ["light", "dark"],
    palette: [
        {
            name: "--fkds-palette-color-neutral-900",
            value: "#1b1e23",
            group: "Neutral",
        },
    ],
    tokens: [
        {
            name: "--fkds-color-action-background-secondary-focus",
            comment: null,
            values: {
                light: {
                    value: "#ffffff",
                    palette: "--fkds-palette-color-neutral-0",
                },
                dark: {
                    value: "#1b1e23",
                    palette: "--fkds-palette-color-neutral-900",
                },
            },
        },
    ],
};
```

### CSS-variabler kan läsas ut

Theme-builder läser nu CSS-variabler med palettprefixet
`--<prefix>-palette-color-`.
Med standardprefixet är ett giltigt namn exempelvis
`--fkds-palette-color-neutral-900`.
Andra CSS-variabler i palettkällan stoppar bygget.

CSS-variabler kan finnas på rotnivå eller i en Sass-container och extraheras
med hela namnet.

### Sass-variabler stöds fortfarande

Sass-variabler läses fortfarande från palettkällans rotnivå med sitt
fullständiga namn, till exempel `$palette-color-neutral-900`.

Sass- och CSS-variabler grupperas med `@group`, precis som tidigare.

### Temaexporterna är ES-moduler

Temaexporterna är ES-moduler i stället för CommonJS-moduler.
Filerna använder nu tillägget `.mjs`, exempelvis `theme-light.mjs`.

Importera temavariablerna med ESM och dess default-export:

```diff
-const variables = require("@fkui/theme-default/dist/theme-light.js");
+import variables from "@fkui/theme-default/dist/theme-light.mjs";
```
