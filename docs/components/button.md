---
title: Knapp
status: Produktionsklar
layout: component
component: FButton
---

En knapp används för att utföra en handling.
Detta till skillnad mot en länk som används för att navigera mellan sidor eller inom en sida.

Knappen finns i tre varianter och tre storlekar.
En knapp har en text och kan kompletteras med en ikon.

```import live-example
FButtonLiveExample.vue
```

## Primär knapp

Använd primär knapp för det primära och det mest troliga alternativet för användaren.
Det får bara finnas en primär knapp per sida.

## Sekundär knapp

Använd sekundär knapp fristående eller tillsammans med en primär knapp.

```diff
-<f-button> Knapptext </f-button>
+<f-button variant="secondary"> Knapptext </f-button>
```

## Tertiär knapp

Använd tertiär knapp om en sekundär knapp blir för framträdande.
Tertiär knapp passar bra när flera knappar ska grupperas,
till exmepel om ett kort ska ha knappar för att ändra eller ta bort objekt som kortet representerar.
Den kan användas som en tredje knapp tillsammans med en primär och en sekundär knapp i en grupp.
Knapptexten är understruken om en tertiär knapp används utan en ikon.

```diff
-<f-button> Knapptext </f-button>
+<f-button variant="tertiary"> Knapptext </f-button>
```

Svart tertiär knapp används för funktioner som inte har att göra med det huvudsakliga flödet eller innehållet på en sida, tex Skriv ut.

```diff
-<f-button variant="tertiary"> Knapptext </f-button>
+<f-button variant="tertiary" tertiary-style="black"> Knapptext </f-button>
```

Inverterad tertiär knapp användas för att få en bättre kontrast mot en mörk bakgrund.

```diff
-<f-button> Knapptext </f-button>
+<f-button variant="tertiary" tertiary-style="inverted"> Knapptext </f-button>
```

### Linjera tertiär knapp med innehåll

Om du vill linjera den tertiära knappens text eller ikon med innehåll placerat ovanför eller under knappen så använd prop `align-text`.
Detta lägger på en negativ vänstermarginal.
Observera att minimum bredd på knappen också tas bort.

```import
FCardExample.vue
```

## Storlekar

Alla varianter av knappen finns i tre storlekar:

- Small
- Medium (standard)
- Large

Knapparnas storlekar kan användas för att förstärka den visuella hierarkin mellan knapparna på en sida.
Knappens bredd bestäms av längden på knapptexten.
För varje knappstorlek finns en minsta bredd.

```diff
-<f-button> text </f-button>
+<f-button size="large"> text </f-button>
```

## Fullbredd

Fullbreddsknappar är främst avsedda att användas på ytor upp till 639 pixlars bredd.
Knappar som har storleken Large sätts automatiskt till fullbredd när skärmbredden är upp till 639 pixlar.

### Fullbredd i mobilläge

Knappar (small & medium) är som standard inte fullbredd i mobil men kan aktiveras med prop `mobile-full-width`.

```diff
-<f-button> text </f-button>
+<f-button mobile-full-width> text </f-button>
```

## Ikon

Alla typer av knappar kan ha en ikon som placeras till höger eller vänster om texten.
Använd ikoner för att förtydliga knappens funktion och skapa snabbare igenkänning.

```diff
-<f-button> text </f-button>
+<f-button icon-left="pen"> text </f-button>
```

## Inaktiv

Inaktiv knapp bör undvikas i stor utsträckning som möjligt.

## Gruppering

Knappar grupperas som standard i en **button-group**.
Med en button-group visas knapparna horisontellt.
Om bredden på ytan där knapparna visas inte räcker visas knapparna på flera rader.
En button-group kan användas när knappar ska visas horisontellt i desktop och vertikalt och fullbredd i mobil.

```import
FButtonGroupExample.vue
```

Använd en **button-list** om knapparna alltid ska visas vertikalt med en knapp per rad.
Alla knappar som är i en grupp ska ha samma storlek.

```import
FButtonListExample.vue
```

## Copy

En knapptext ska vara en tydlig och kort uppmaning, till exempel "Signera", "Skicka in", "Fyll i", "Ansök", "Lägg till".
Knappars text för endast skärmläsare (SR-only-text) ska vara så beskrivande att den fungerar utan någon annan kontext, till exempel "Signera ansökan om föräldrapenning".

## Äldre typer av knappar

Alla tidigare typer av knappar finns kvar för att nuvarande applikationer ska fortsätta att fungera utan ändringar.
Men när vi uppdaterar en applikation ska följande ändringar göras:

- Diskret knapp - ska ersättas med en tertiär knapp av lämplig storlek.
- Standard - ska ersättas med en sekundär knapp av lämplig storlek.
- Primär och sekundär ska ändras så att de använder en faktisk storlek.

## API

:::api
vue:FButton
:::

## Relaterat

- {@link component:FTableButton FTableButton} för åtgärdsknapp i tabell.
