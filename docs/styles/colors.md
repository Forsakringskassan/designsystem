---
title: Färger
layout: article
search:
    terms:
        - semantiska
        - färgpalett
---

Försäkringskassans digitala färgpalett är baserad på färgerna som finns i den grafiska profilen.
Dessa färger har tagits fram för att skapa ett konsekvent och inbjudande gränssnitt för alla Försäkringskassans digitala kanaler.

## Semantiska färger

```import nomarkup borderless
SemanticVariables.vue
```

## Färgpaletten

Våra färger är uppdelade i primära, gråskala, text, komplement och förmånsfärger.
Flera av färgerna finns i olika nyanser för att hjälpa till att markera eller organisera information genom våra gränssnitt.

```import nomarkup borderless
PaletteList.vue
```

## Legacy-palett

Om din applikation inte är redo för den nya färgpaletten kan du slå på legacy-paletten.
De semantiska färgerna får då samma färger som innan den nya paletten infördes.
Legacy-paletten är avslagen som standard.

```scss
@use "@fkui/theme-default" with (
    $legacy-palette: true
);
```

Du kan också slå på legacy-paletten för en avgränsad yta:

```scss
@use "@fkui/theme-default" as theme with (
    $global: false
);

.my-scope {
    @include theme.light($legacy-palette: true);
}
```

Om du använder förkompilerad CSS finns motsvarande filer med suffixet `-legacy`, till exempel `@fkui/theme-default/dist/theme-light-legacy.css`.

I exemplet nedan visas samma komponenter med nuvarande palett och med legacy-paletten:

```import nomarkup
LegacyPaletteExample.vue
```
