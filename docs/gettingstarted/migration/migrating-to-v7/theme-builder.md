---
title: "Version 7 migreringsguide: Ändringar i theme-builder"
short-title: "@fkui/theme-builder"
name: migrating-to-v7-theme-builder
layout: article
---

## Ändringar i `@fkui/theme-builder`

Den här sektionen gäller enbart dig som bygger egna teman.

### `palette.json` genereras inte längre

`palette.json` genereras inte längre.
Palette-information finns i stället i `metadata.mjs` under nyckeln `palette`.

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

### Paletten har stöd för CSS-variabler

Theme-builder läser nu CSS-variabler med palettprefixet
`--<prefix>-palette-color-`.

Med standardprefixet är ett giltigt namn exempelvis
`--fkds-palette-color-neutral-900`.
Andra CSS-variabler i palettkällan stoppar bygget.

CSS-variabler kan finnas på rotnivå eller i en Sass-container och extraheras
med hela namnet.

#### Sass-variabler stöds fortfarande

Sass-variabler läses fortfarande från palettkällans rotnivå med sitt
fullständiga namn, till exempel `$palette-color-neutral-900`.
Vår rekommendation är dock att du migrerar över befintliga SASS-variabler till CSS.

Sass- och CSS-variabler grupperas med `@group`, precis som tidigare.

### Temavariabler har flyttats i metadata

`@fkui/theme-default` exporterar inte längre temavariabler som separata JavaScript-objekt.

Semantiska temavariabler finns fortfarande i metadata.
Exemplet hämtar värdet för varje variabel i det ljusa temat:

```js
import metadata from "@fkui/theme-default/metadata";

const tokens = metadata.tokens.map((token) => ({
    name: token.name,
    value: token.values.light.value,
}));
```

Byt `light` mot `dark` för att hämta värden för det mörka temat.
