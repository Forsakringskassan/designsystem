---
title: Dropplista
status: Produktionsklar
layout: component
component: FSelectField
---

Använd dropplista när användaren ska välja ett av flera liknande, fördefinierade alternativ. En dropplista måste ha minst två alternativ men används oftast då det finns fyra val eller fler.

```import live-example test-id=live
FSelectFieldLiveExample.vue
```

Dropplista har alltid en etikett som beskriver vad användaren ska fylla i.

## Copy

I dropplistor är det vanligt att etiketten är formulerad som en fråga eller ett påstående.

Texten i själva dropplistan formuleras så att det blir tydligt vad användaren ska fylla i, men får inte ensam beskriva valet då den försvinner när användaren gjort ett val.

## Responsiv bredd

Etiketten och dropplistan kan ha olika bredd. När etikettens text radbryts behöver alltså inte vara kopplat till hur bred dropplistan i sig är.

Bredden för respektive del anges med antal kolumner vid olika skärmbredder (brytpunkter).

```import
FSelectFieldWidths.vue
```

## API

:::api
vue:FSelectField
:::
