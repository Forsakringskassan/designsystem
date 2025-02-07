---
title: Ta fram applikation
name: getting-started-application
layout: pattern
sortorder: 2
---

För att sätta det visuella utseendet på din applikation behöver du

- välja ett tema
- sätta temat för din applikation
- importera ett ikonbibliotek till din applikation.

## Välj tema

Välj ett av de fördefinierade temana som finns i FKUI eller ta fram ett eget tema.

{@link theme Läs mer om visuellt utseende och de fördefinierade teman som finns i FKUI}

## Sätt valt tema för applikation

Du kan applicera valt tema på två sätt.

Om din applikation använder Sass rekommenderar vi att du också använder Sass för att applicera temat.
På så sätt får du tillgång till de mixins och Sass-funktioner som finns i FKUI.

Det andra sättet är att använda en förkompilerad CSS-fil.

### Sass

Gå in i din main.scss-fil eller motsvarande och lägg in följande rader:

```scss
@use "@fkui/theme-default";
@use "@fkui/design";
```

Uppdatera exemplet ovan med de filer som din applikation ska använda.

Om du inte vill använda styling på alla komponenter utan bara specifika, skriv in nedan i din SCSS-fil.
I exemplet nedan importeras styling för enbart inmatningsfält och flerradigt inmatningsfält.

```diff
 @use "@fkui/theme-default";
-@use "@fkui/design";
+@use "@fkui/design/src/components/text-field/text-field";
+@use "@fkui/design/src/components/textarea-field/textarea-field";
```

Om du behöver applicera tema på en egen selector (exempelvis kanske du har flera uppsättningar av FKUI i olika versioner på samma webbsida) så lägger du inte in variablerna globalt utan använder en mixin.

Vid import:

```diff
-@use "@fkui/theme-default";
-@use "@fkui/design";
+@use "@fkui/theme-default" as fkui with (
+    $global: false
+);

.my-scope {
+    @include fkui.css-variables;
+    @import "@fkui/design";
}
```

Notera: variabeln `$global` måste sättas till `false` annars sätts samtliga variabler på `:root` selector.

### CSS

Om din applikation inte använder Sass ska du istället placera `@fkui/design/lib/fkui.min.css` i en assets-katalog.
Du behöver sedan referera till filen i assets-katalogen för varje sida.

```html static
<link rel="stylesheet" href="assets/fkui.min.css" />
```

Om du behöver importera styling till javascript:

```js
import "@fkui/design";
```

### Eget tema

Utgå från standardtemat och skriv över de variabler som ska ändras.

## Importera ikonbibliotek

{@link icons Biblioteket för standardikoner} ligger i `@fkui/icon-lib-default`. Det innehåller licensfria ikoner som används av komponenterna i FKUI.

För att använda ikoner i din applikation måste du ladda in den `spritesheet` med ikoner som du vill använda.
Komponenterna i FKUI är beroende av att minst ett ikon-bibliotek är inladdat.

Importera ikonbiblioteket genom att lägga nedan i applikationens index.ts eller motsvarande:

```javascript
import "@fkui/icon-lib-default/dist/f";
```

För att använda ett annat ikon-bibliotek ersätt `@fkui/icon-lib-default` med namnet på det paketet.

Spritesheets kommer automatiskt laddas in i DOM:en.

Om du vill ha tillgång till `injectSpritesheet`-funktionen kan du anropa den själv. Importera den genom:

```javascript
import { injectSpritesheet } from "@fkui/icon-lib-default/dist/f/injectSpritesheet";

injectSpritesheet();
```

Om du behöver andra ikoner utöver de standardikoner som finns kan du ändra på befintliga ikoner eller lägga till nya. Du bygger då ett nytt ikonbibliotek.

{@link icon-library#skapa-eget-ikonbibliotek Läs mer här om hur du tar fram egna ikoner.}
