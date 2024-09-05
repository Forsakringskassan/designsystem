---
title: Sidhuvud
status: Produktionsklar
layout: component
component: FPageHeader
---

Sidhuvud ska visas längst upp på applikationer som öppnas i ett eget webbläsarfönster. Den innehåller alltid Försäkringskassans logotyp och namnet på applikationen

```import
FPageHeaderDefault.vue
```

Vid större skärmstorlekar visas hela Försäkringskassans logotyp med text och vid mindre visas en komprimerad variant med endast symbol.

I fall där applikationen innehåller flera olika sidor kan logotypen göras till en klickbar länk som leder användaren tillbaka till applikationens förstasida

Sidhuvudet kan också visa sekundär information till höger.

## Egen logotyp och brytpunkt

```import
FPageHeaderCustomLogo.vue
```

## API

:::api
vue:FPageHeader
:::
