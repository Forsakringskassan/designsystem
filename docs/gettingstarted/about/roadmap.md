---
title: På gång
name: roadmap
layout: pattern
search:
    terms:
        - pågående arbete
        - planerat arbete
        - framtid
redirect_from:
    - gettingstarted/about/release-plan.html
---

## Pågående arbete

### Semantiska tokens för färger

Vi inför semantiska tokens för färger.
Det är en förutsättning för att kunna ha dark mode, men underlättar framför allt för dig som vill sätta eget tema eller ändra på specifika variabler.

### Nya komponenter för applikationslayout

På sikt kommer dagens komponenter för applikationslayout ({@link application-layout applikationsmall}, {@link application-layout#hogeryta högeryta} och {@link application-layout#vansteryta vänsteryta}) ersättas med de nya komponenterna {@link FPageLayout applikationsmall}, {@link FFixedPane fixerad yta}, {@link FResizePane justerbar yta},
{@link FMinimizablePanel minimerbar panel} och {@link FDetailsPanel detaljpanel}.
De nya komponenterna är mer flexibla, till exempel kan du fylla en yta med valfritt innehåll oberoende var den ligger.
Till att börja med kommer ett antal olika varianter av layouter släppas.
De nya komponenterna är släppta med {@link about#status_for_komponenter status beta} och kommer släppas som produktionsklara under hösten.

### Årsväljare till kalender

Årsväljaren gör att användare på ett snabbt sätt kan byta till annat år i kalender.

### Ny komponent för tabell

Vi tar fram en ny komponent för tabell som underlättar navigering för användaren.
Samtidigt rättar vi buggar, uppdaterar dokumentationen och lägger till mindre förbättringar för tabell.
Den nya komponenten kommer på sikt att ersätta dagens komponenter för tabell (datatabell och interaktiv tabell).

### Förhindra dubbelklick på knapp och knapp i väntande läge

Vi inför ett väntande läge på knapp när användare har klickat på knapp och det är en fördröjning innan knappens åtgärd är utförd. Vi ser också till att förhindra dubbelklick på knapp.

### Omskrivning av valideringsservice

Vi vill förenkla för hur du som konsument använder valideringsservice vid

- att vänta ut om ett inmatningsfält är giltigt eller ej
- samma sak för samlad grupp av inmatningskomponenter (typ i formulär)
- korsvalidering.

Vi vill också

- förbättra våra validatorer genom att till exempel kunna arbeta med ett tolkat värde
- ha stöd för asynkron validering som till exempel att vänta in validering från backend.

När vi skrivit om valideringsservice kommer vi göra en generell översyn på validatorer och de specialiserade inmatningsfälten.

## Planerat arbete

- Ny komponent för att visa inmatade uppgifter på ett mer kompakt sätt till exempel i ett kort eller granskasteg.
- Uppdatera och förbättra prioriterade komponenter.
  Nästa komponent i ordningen är datamängdredigeraren.

## Framtid

Framtidssäkra designsystemet, till exempel genom att göra webbkomponenter.

## Relaterat

{@link release-notes Releaseanteckningar}

{@link releases Releaser}
