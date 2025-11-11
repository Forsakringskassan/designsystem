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
De nya komponenterna är släppta med {@link about#status_for_komponenter status beta} och kommer släppas som produktionsklara vid ett senare tillfälle.

### Ny komponent för tabell

Vi tar fram en ny komponent för tabell som underlättar navigering för användaren. Den nya tabellen kommer ha stöd för inline-redigering, dvs att användaren direkt kan redigera innehåll i en tabellcell.
Samtidigt rättar vi buggar, uppdaterar dokumentationen och lägger till mindre förbättringar för tabell.
Den nya komponenten kommer på sikt att ersätta dagens komponenter för tabell (datatabell och interaktiv tabell).

### Pagineringskomponent

Komponent för paginering är på gång.
Den kan användas för att låta användaren navigera mellan innehåll som är uppdelat på flera sidor.
Till att börja med stöds inte paginering av tabell, varken för befintliga tabellkomponenter (datatabell eller interaktiv tabell) eller den nya tabellen.
När den nya tabellen är släppt kommer vi att arbeta vidare med hur pagineringen ska fungera tillsammans med den.

### Omskrivning av valideringsservice

Vi vill förenkla för hur du som konsument använder valideringsservice vid

- att vänta ut om ett inmatningsfält är giltigt eller ej
- samma sak för samlad grupp av inmatningskomponenter (typ i formulär)
- korsvalidering.

Vi vill också

- förbättra våra validatorer genom att till exempel kunna arbeta med ett tolkat värde
- ha stöd för asynkron validering som till exempel att vänta in validering från backend.

När vi skrivit om valideringsservice kommer vi göra en generell översyn på validatorer och de specialiserade inmatningsfälten.

### Komponent för att visa uppgifter kompakt

Ny komponent för att visa inmatade uppgifter på ett mer kompakt sätt till exempel i ett kort eller granskasteg kommer snart.

## Planerat arbete

- Uppdatera och förbättra prioriterade komponenter.
  Nästa komponent i ordningen är datamängdredigeraren.

## Framtid

Framtidssäkra designsystemet, till exempel genom att göra webbkomponenter.

## Relaterat

{@link release-notes Releaseanteckningar}

{@link releases Releaser}
