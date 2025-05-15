---
title: Laddningsindikator
status: Produktionsklar
layout: component
component: FLoader
---

Laddningsindikator används för att visa att en sida eller en del av en sida håller på att laddas.

```import live-example
FLoaderLiveExample.vue
```

- En laddningsindikator bör visas när det tar mer än en sekund att ladda innehållet.
- Placeras på ytan där innehåll som laddas sen ska visas eller i ett eget lager ovanpå sidan
- Texten ska i de flesta fall vara standardtexten "Vänligen vänta"

## Teleport

Komponenten teleporteras till body-elementet som standard när den visas som overlay.

Detta kan ändras till valfritt element antingen genom att

- ändra värdet för `config.teleportTarget` (global för applikationen).
- sätta prop `teleport` (per komponentinstans)

```diff
-<f-loader> </f-loader>
+<f-loader teleport="floader-target"> </f-loader>
```

## Fokushantering

Som standard när laddningsindikatorn visas så informeras skärmläsaranvändare med hjälp av `role="alert"`, som sätts på laddningsindikatorns text.

Om `overlay` används så sätts istället fokus på laddningsindikatorns text,
för att sedan flyttas tillbaka till föregående element när den stängs.

Om man inte vill att fokus ska flyttas till laddningsindikatorns text vid `overlay` kan man sätta egenskapen `focusOnOverlay` till `false`. Då informeras skärmläsaranvändare med hjälp av `role="alert"` även vid `overlay`.

```diff
-<f-loader overlay> </f-loader>
+<f-loader overlay :focusOnOverlay="false"> </f-loader>
```

## API

:::api
vue:FLoader
:::
