---
name: "@fkui/font-default"
title: "Typsnittspaket"
layout: article
---

Innehåller den standardfont och konfiguration som Försäkringskassan använder ([Inter][inter]).

[inter]: https://rsms.me/inter/

## Användning

För att använda standardfonten importera `@fkui/default-font` efter tema (exempelvis `@fkui/theme-default`):

```diff
 @use "@fkui/theme-default";
+@use "@fkui/font-default";
```

För att applicera CSS på en egen selector sätter du `$global: false` och använder den som en mixin istället:

```scss
@use "@fkui/font-default" with (
    $global: false
);

.awesome-selector {
    @include font-default.font;
}
```

Om du inte använder Vite behöver du:

1. Manuellt kopiera över filer till den katalog som innehåller dina kompilerade css-filer.
2. Sätta `$asset-path` till en relativ sökväg från den byggda css-filen till katalogen som innehåller filerna.

```diff
 @use "@fkui/theme-default";
+@use "@fkui/font-default" with (
+  $asset-path: "./fonts"
+);
```

## Metadata

Paketet levererar metadata i `@fkui/font-default/metadata.json` med följande format:

```ts
export interface Asset {
    filename: string;
}

export declare const assets: Asset[];
```

Kan med fördel användas för att kopiera över samtliga fontfiler.
