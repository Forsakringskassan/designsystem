---
title: Stängknapp
layout: component
component: ICloseButton
---

Stängknappen är en ramverkskomponent för att stänga en yta, till exempel en dialog eller popup.
Som standard visar knappen texten **Stäng** och ett kryss till höger.

## Användning

Hantera stängningen med `click` i komponenten som använder stängknappen.
Om den fokuserade knappen försvinner när ytan stängs, flytta fokus till exempelvis knappen som öppnade ytan.

Ange en egen knapptext i `default`-slotten.
Använd `aria-label` om det tillgängliga namnet behöver förtydliga vad knappen stänger.

I exemplet visas **Stäng** och knappens tillgängliga namn är **Stäng popupen**.
`IPopup` återställer fokus till **Öppna popup** efter stängning.

```import
ICloseButtonExample.vue
```

## Kompakt läge

I kompakt läge är stängknappen lägre och saknar hoverbakgrund.

## Ikonknapp

Med `icon-only` visas bara krysset.
Knapptexten döljs visuellt och ger knappen dess tillgängliga namn som standard.

## API

:::api
vue:ICloseButton
:::
