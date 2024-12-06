---
title: Kort
status: Preliminär
layout: component
component: FCard
---

Använd ett kort för att representera ett objekt eller en person, till exempel ett dokument, en kalenderbokning, ett barn eller en föräldradag.

```import
FCardExample.vue
```

Ett kort innehåller information och åtgärder. Ett kort ska kunna stå ensamt utan att förlita sig på sammanhanget, till exempel rubriker. Ett kort kan inte slås samman med ett annat kort, eller delas upp i flera. Om du behöver en underrubrik i ett kort så är det ett tecken på att du borde del upp kortet i flera kort.

Om det är mycket information som ska presenteras kan kortet visa en sammanfattning medan all information visas på en egen sida som öppnas från kortet. Undvik att expanderbara kort för att visa ytterligare information. Ett kort ska aldrig öppna ytterligare kort.

Ett kort kan innehålla flera knappar eller länkar, till exempel för att visa detaljer, redigera uppgifter eller för att radera objektet eller personens uppgifter.

## Innehåll

Ett kort har tre ytor där innehåll kan placeras:

- Rubrik (header)
- Innehåll (default)
- Knappar och länkar (footer)

Rubriken kan också användas som en länk för att visa detaljer om objektet eller personen. Undvik att göra hela kortet till en länk.

Rubriken ska sättas till rätt nivå.

## När du inte ska använda kort

- En lista med kort ska inte användas när du behöver lista ett större antal objekt som har samma innehåll och layout. Då passar komponenterna lista eller tabell bättre. Lista och tabell är framförallt att föredra om användaren behöver ha en bra överblick över alla poster för att kunna jämföra dem.
- Placera inte långa listor eller mycket omfattande information i kort.
- Gruppera inte information eller formulärskomponeter med kort.

## API

:::api
vue:FCard
:::
