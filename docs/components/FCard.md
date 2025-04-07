---
title: Kort
status: Produktionsklar
layout: component
component: FCard
---

Använd ett kort för att representera ett objekt eller en person, till exempel ett dokument, en kalenderbokning, ett barn eller en föräldradag.

```import
FCardExample.vue
```

Ett kort innehåller information och åtgärder. Ett kort ska kunna stå ensamt utan att förlita sig på sammanhanget, till exempel rubriker. Ett kort kan inte slås samman med ett annat kort, eller delas upp i flera. Om du behöver en underrubrik i ett kort så är det ett tecken på att du borde dela upp kortet i flera kort.

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

## Felstatus på kort

Det är möjligt att indikera om ett kort är felaktigt genom att aktivera validering (`v-validation`).
Det går inte att lägga på enskilda validatorer, utan status hanteras helt manuellt av konsumenten.

```diff
-<f-card>
+<f-card v-validation>
```

Konsumenten behöver ange det element som ska fokuseras på kopplat till ett fel (`focus-ref`).
Vanligtvis är detta en knapp för att redigera ett korts innehåll.
Fokus sätts vanligtvis på elementet av omkringliggande formulär vid submit, lite beroende på
vad man satt för felhantering på formuläret (visa fellista eller fokus på första fel).

```diff
-<f-card>
+<f-card :focus-ref="editButton">
```

När fokus hamnar på angivet `focus-ref`-element har konsumenten ansvar att informera
skärmläsaranvändare om att det finns felaktiga uppgifter i kortet.
Komponenten förser `footer`-slotten med detaljer om felet.

```html static
<template #footer="{ hasError, validationMessage }">
    <button type="button">
        <span>Ändra</span>
        <span v-if="hasError" class="sr-only">{{ validationMessage }}</span>
    </button>
</template>
```

Som standard visas ett felmeddelande tillsammans med en felikon under kortets rubrik.
Använd `error-message`-slotten för att definiera ett eget beteende.

```diff
<f-card>
+    <template #error-message="{ hasError, validationMessage }">
+        Egen visning av felmeddelande
+    </template>
/<f-card>
```

Felstatus sätts manuellt av konsumenten genom att anropa metoder i `ValidationService`.

```ts static
import { ValidationService } from "@fkui/logic";

const element = document.createElement("div");

/* --- cut above --- */

/* sätter ogiltig status */
ValidationService.setError(element, "Felmeddelande");

/* nollställer till giltig status */
ValidationService.resetState(element);

/* omvaliderar så att ändrad status återspeglas direkt */
ValidationService.validateElement(element);
```

```import
FCardValidationExample.vue
```

## API

:::api
vue:FCard
:::
