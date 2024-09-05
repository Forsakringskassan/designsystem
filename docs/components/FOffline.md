---
title: Offline
status: Produktionsklar
layout: component
component: FOffline
---

Offline används när användaren saknar internetuppkoppling. Ett felmeddelande visas som uppmärksammar användaren om detta. 
Offline är en overlay som lägger sig högst upp över övrigt innehåll när internetanslutningen går ner. Den försvinner igen när anslutningen är tillbaka.
Den mountas med funktionen mountFOffline så tidigt som möjligt för att autoinkluderas i applikationen. Komponenten kan även läggas in på enstaka sidor där det är extra viktigt att internetanslutningen behöver fungera.

Det finns ett par alternativ för att få komponenten att visa sig:

-   Aktivera "offline-läge" i browsern
-   Stäng av nätverksanslutningen (exempelvis koppla ned Wi-Fi på en mobil enhet).

Du kan även använda knappen nedanför som simulerar nätverksproblem genom att skicka samma event som browsern gör då den upptäcker att uppkopplingen har misslyckats (detta visar komponenten men sätter inte browsern i offline-läge).

Endast för dokumentation!
Obeservera att knappen som simulerar ett offline-event kan bete sig konstigt om du byter sida när FOffline-komponenten visas.

```import
FOfflineExample.vue
```

## Användning av komponent

Användning med standardtext

```js
mountFOffline(this);
```

Användning med en egen text

```js
mountFOffline(
    this,
    "Det verkar som att du inte har någon internetuppkoppling just nu. Tänk på att du behöver uppkoppling för att kunna signera",
);
```

## API

:::api
vue:FOffline
:::