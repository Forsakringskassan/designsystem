---
name: "@fkui/logo-default"
title: "Logotyp-paket"
layout: article
---

Innehåller Försäkringskassan logotyp som SVG och som shim för att sätta rätt logotyp till {@link FLogo `FLogo`-komponenten}.

## SVG

| Logotyp                            | Förhandsgranskning                                                                    | Beskrivning                              |
| ---------------------------------- | ------------------------------------------------------------------------------------- | ---------------------------------------- |
| `assets/fk-logo-primary.svg`       | ![Logo primary](../../packages/logo-default/assets/fk-logo-primary.png)               | Logotyp i färg med text.                 |
| `assets/fk-logo-small.svg`         | ![Logo small](../../packages/logo-default/assets/fk-logo-small.png)                   | Logotyp i färg utan text.                |
| `assets/fk-logo-primary-large.svg` | ![Logo primary (large)](../../packages/logo-default/assets/fk-logo-primary-large.png) | Logotyp med vit förgrundsfärg och text.  |
| `assets/fk-logo-primary-small.svg` | ![Logo primary (small)](../../packages/logo-default/assets/fk-logo-primary-small.png) | Logotyp med vit förgrundsfärg utan text. |

Samtliga logotyper har transparent bakgrund men visas här med vit samt svart bakgrund för förhandsgranskning.

## FLogo

Du använder `FLogo`-komponenten från `@fkui/vue` genom att importera `@fkui/default-logo` efter tema (exempelvis `@fkui/theme-default`):

```diff
 @use "@fkui/theme-default";
+@use "@fkui/logo-default";
```

För att applicera CSS på en egen selector sätter du `$global: false` och använder den som en mixin istället:

```scss
@use "@fkui/logo-default" with (
    $global: false
);

.awesome-selector {
    @include logo-default.f-logo;
}
```

Om du inte använder Vite behöver du:

1. Manuellt kopiera över filer till den katalog som innehåller dina kompilerade css-filer.
2. Sätta `$asset-path` till en relativ sökväg från den byggda css-filen till katalogen som innehåller filerna.

```diff
 @use "@fkui/theme-default";
+@use "@fkui/logo-default" with (
+  $asset-path: "./assets"
+);
```

## Metadata

Paketet levererar metadata i `@fkui/logo-default/metadata.json` med följande format:

```ts
export interface Asset {
    filename: string;
    description: string;
    width: number;
    height: number;
}

export declare const assets: Asset[];
```

Kan med fördel användas för att kopiera över samtliga logotyper.
