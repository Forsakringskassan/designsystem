---
title: Meddelanderuta
status: Produktionsklar
layout: component
component: FMessageBox
---

Använd en meddelanderuta för att uppmärksamma användare på viktig information, varningar eller fel.
En meddelanderuta kan visas inför att användaren ska använda en tjänst eller fylla i ett formulär samt som
en reaktion på att användaren gör ett val i ett formulär eller trycker på en knapp.

```import live-example
FMessageBoxLiveExample.vue
```

Använd ett kort meddelande när du inte behöver en rubrik för att förtydliga informationen i meddelandet.
Ett kort meddelande används ofta som en följd av att användaren har gjort ett visst val på samma sida.

Använd en stor meddelanderuta när du vill uppmärksamma användaren på extra viktig information som hen behöver känna till eller agera på.
En stor meddelanderuta har alltid en rubrik. Rubrik ska sättas till rätt nivå utifrån var meddelanderutan placeras. Rubriknivån påverkar inte rubrikens styling.
Rubriken ska beskriva kärnfrågan så tydligt som möjligt.
Ord som “information” ska inte användas i en rubrik.

-   Informationsmeddelanden används för att förmedla extra viktig information som gäller alla eller majoriteten av besökarna på sidan.
-   Varningsmeddelanden används för att uppmärksamma användaren på sådant som är viktigt att veta och som kan
    kräva att användaren agerar i ett senare skede.
-   Felmeddelanden används för att informera användaren om kritiska och stoppande fel och vad användaren behöver
    göra för att kunna fortsätta.
-   Positiv återkoppling används för att informera användaren när denne har gjort vad som behövs och att resultatet var lyckat.

## Copy

### Informationsmeddelande (blått)

Fundera först på om meddelandet behövs överhuvudtaget eller om informationen passar bättre i någon annan
del av informationsprocessen
(t.ex. i en ingress på samma sida). Rubriken bör oftast beskriva kärnfrågan så tydligt som möjligt.
Men om det inte är nödvändigt kan man använda rubriken för att jobba med tonaliteten.

### Varningsmeddelande (gult)

Rubriken bör tydligt och direkt beskriva vad användaren ska tänka på, eller vad som är problem med val som användaren gjort.
Tidigare har vi använt rubriken Tänk på att... men vi strävar efter att arbeta bort det.
Exempel
_Har du fått ny lön?_
Dina inkomstuppgifter är äldre än ett år. Kolla att de fortfarande stämmer.
_Du har redan ansökt om ersättning för den här dagen_
Du har redan ansökt om 100 procent vab för den här dagen.

### Felmeddelande (rött)

Rubriken bör tydligt och direkt beskriva vad som är fel.
Brödtexen bör beskriva vad användaren kan göra för att lösa problemet.

Exempel

_Innan du går vidare_
Oj, du har missat något. Gå till:

1. Dagar och tid
2. Kompletterande frågor om vab-dagarna

## Banner

```import
FMessageBoxBanner.vue
```

## Meddelanderuta med länk och ikon

```import
FMessageBoxIconLink.vue
```

## Skärmläsare

Komponenten har inbyggda texter för skärmläsare som är anpassade efter vilken typ av meddelande som visas.
För typen "info" läser den till exempel upp "Informationsmeddelande".
Om applikationen inte önskar detta beteende och själv vill redogöra för detta går det att stänga av.

```import
FMessageBoxContext.vue
```

```import
FMessageBoxContextPartial.vue
```

```import
FMessageBoxContextSeparate.vue
```

## API

:::api
vue:FMessageBox
:::
