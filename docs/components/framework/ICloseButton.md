---
title: Stängknapp
layout: component
component: ICloseButton
---

Stängknapp är en ramverkskomponent för att stänga exempelvis en dialog eller informationsruta.
Knappen visar texten Stäng och ett kryss till höger.
Den bygger på {@link button tertiär knapp} i storlek medium.

Knappen har nedtonad text och den tertiära knappens hoverbakgrund och rundade hörn.
Med `compact` blir knappen lägre och saknar hoverbakgrund.
Det kompakta läget används i modaler med färgad balk för att behålla balkens höjd.
Utrymmet runt knappen för fokusmarkeringen behålls.
Knappen saknar förflyttning vid klick.
Fokusmarkeringen visas vid tangentbordsnavigation.

Du hanterar stängningen och eventuell återställning av fokus i komponenten som använder knappen.
Använd eventet `click` för att hantera klick och slotten `default` för att anpassa knapptexten.
Standardtexten översätts med textnyckeln `fkui.close-button.text`.

## API

:::api
vue:ICloseButton
:::
