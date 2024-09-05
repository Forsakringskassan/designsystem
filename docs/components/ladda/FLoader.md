---
title: Laddningsindikator
status: Produktionsklar
layout: component
component: FLoader
---

Laddningsindikator används för att visa att en sida eller en del av en sida håller på att laddas.

```import
FLoaderExample.vue
```

-   En laddningsindikator visas när det tar mer än en sekund att ladda innehållet.
-   Placeras på ytan där innehåll som laddas sen ska visas eller i ett eget lager ovanpå sidan
-   Texten ska i de flesta fall vara "Vänligen vänta"

## Teleport

Komponenten teleporteras till body-elementet som standard när den visas som overlay.
Detta kan ändras till valfritt element genom att ändra värdet för `config.teleportTarget`.

## API

:::api
vue:FLoader
:::
