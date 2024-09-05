---
title: Modal dialogruta
status: Produktionsklar
layout: component
component: FModal
---

Använd modala dialogrutor för korta interaktioner som är en del av ett flöde. Modaler kan användas för att låta användaren bekräfta ett val, för att förmedla information eller för enkel inmatning.

```import live-example
FModalLiveExample.vue
```

Använd inte modala dialogrutor för att presentera felmeddelanden eller information som användaren behöver kunna läsa under tiden som hen åtgärdar ett fel eller gör ändringar.

-   I de flesta fall där användaren måste uppmärksammas på viktig information eller problem är en {@link FMessageBox meddelanderuta} att föredra.
-   Rubriken har tabb-fokus när en modal dialogruta öppnas. Därefter knapparna i den ordning de presenteras och sist stängknappen. Tabb-fokus loopar genom alla klickbara ytor i en modal.
-   Öppna inte ytterligare en modal från en modal.

Modala dialogrutor finns i fyra varianter:

-   standard
-   information
-   varning
-   fel.

## Storlek

Modalens höjd anpassas utifrån innehållet. I desktop (>639px) kan modalens bredd anpassas till

-   `small` (standard)
-   `medium`
-   `large`
-   `fullwidth`.

I mobil (<640px) har en modal alltid samma bredd, men det går att sätta en modal till fullskärm. Använd fullskärm när användaren ska fokusera på en deluppgift i ett flöde, till exempel används fullskärm av {@link FFormModal formulärsmodalen}. Använd inte fullskärm för modala dialogrutor som visas som en reaktion på något användaren gör.

Använd `size`-prop för att välja storlek på modalen.

```diff
-<f-modal>
+<f-modal size="small">
```

För mobil finns det en `fullscreen`-prop för att säkerställa att modal täcker hela skärmen och är utan ram.

Den här `fullscreen`-propen påverkar inte modalen i desktop-läge.

```diff
-<f-modal size="medium">
+<f-modal size="medium" fullscreen>
```

### Anpassa storlek

Implementera en CSS-klass enligt följande:

```css
.my-fancy-modal {
    max-width: 500px;
}
```

Använd inte `size`-prop utan lägg istället till din klass direkt enligt `class=".."`:

```diff
-<f-modal size="small">
+<f-modal class="my-fancy-modal">
```

### Initialt fokus

När modalen öppnas så sätts initialt fokus enligt denna rangordning:

1. Rubrik
2. Första interagerbara element i innehåll
3. Hela innehållet

## API

:::api
vue:FModal
:::