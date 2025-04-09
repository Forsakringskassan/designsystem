---
title: Justerbar yta
status: Beta
layout: component
component: FResizePane
---

Justerbar yta (FResizePane) används tillsammand med {@link FPageLayout Applikationslayout} för göra en yta med justerbar storlek.

Ytans storlek kan justeras med pekdon genom att dra i och släppa avgränsaren mellan ytorna eller med tangentbord:

- <kbd>Vänster</kbd> och <kbd>Höger</kbd> ökar/minskar storleken.
- <kbd>Home</kbd> och <kbd>End</kbd> maximerar/minimerar storleken.

Ytans storlek lagras i webläsaren så nästa gång användaren tar upp samma applikation så återställs ytans storlek.

```import live-example
FResizePaneLiveExample.vue
```

## Användning

FResizePane kan enbart användas i ytor där paneler kan fästas, för de standardlayouter som designsystemet levererar är det ytorna:

- `left` (för paneler till vänster)
- `right` (för paneler till höger)

Skapar du en egen layout är det alla ytor där `attachPanel` inte är `"none"`.

Lägg `FResizePanel` komponenten som första elementet i respektive yta:

```html static
<f-page-layout layout="left-panel">
    <template #left>
        <f-resize-pane> Vänster ytans innehåll </f-resize-pane>
    </template>
</f-page-layout>
```

## Begränsa storlek

Storleken på ytan kan begränsas genom att använda `min`- och `max` propen.
Värden kan anges antingen som absolut storlek i pixlar (`px`), i procent (`%`) eller båda samtidigt.

- `200px` - minsta/största storlek är 200px
- `20%` - minsta/största storlek är 20% av applikationslayoutens totala bredd.
- `200px 20%` - minsta/största är det minsta/största av 200px eller 20%.

Storleken refererar till innehållet i ytan, dvs `200px` innebär att det finns 200px effektiv yta för innehåll.
Ytans totala storlek blir 200px + storleken på handtaget för att justera storleken.

## Initial storlek

Den initiala storleken på ytan kan anges med `initial` propen.
Värde kan anges antingen som absolut storlek i pixlar (`px`) eller i procent (`%`).

- `200px` - initial storlek är 200px
- `20%` - initial storlek är 20% av applikationslayoutens totala bredd.

## Anpassad panel

```import live-example
CustomPanelExample.vue
```

En anpassad panel använder composable {@link useResize} för att få tillgång till det API som exponeras från justerbar yta.
Som konsument kan du styra om ytan ska

- vara justerbar
- visas.

Samtliga är valfria och aktiverade som standard.

```vue static
<script setup lang="ts">
import { ref } from "vue";
import { useResize } from "@fkui/vue";

const enabled = ref(true);
const visible = ref(true);

useResize({
    enabled,
    visible,
});
</script>
```

{@link useResize Läs mer om useResize}.

## Props, Events & Slots

:::api
vue:FResizePane
:::
