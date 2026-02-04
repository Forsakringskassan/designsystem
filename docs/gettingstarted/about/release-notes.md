---
title: Releaseanteckningar
name: release-notes
layout: pattern
search:
    terms:
        - version
redirect_from:
    - gettingstarted/about/news.html
---

## Version 6.35.0

2026-02-04

Applikationslayout, vi har satt en bakgrundsfärg på sidhuvudet (slot= #header) för att dölja innehåll som skrollas bakom.  
Vi har förbättrat validering och felhantering för nya tabellkomponenten så att första felet får fokus.  
Vi har rättat till komponent f-button så att den byter state om disable ändras efter knappen har renderats.

Buggfixar, se {@link changelog Changelog}.

## Version 6.34.0

2026-01-23

Vi har fixat en del små buggar och annat i den här releasen, se {@link changelog Changelog}.

## Version 6.31.0

2025-12-15

Vi har ändrat i navigerigen för komponent kontextmeny.
Det går inte längre att tabba mellan menyvalen i en kontextmeny.
Användaren kan bara använda piltangenter för att navigera i kontextmeny.
På så sätt kan användaren snabbare tabba sig ur från kontextmenyn och gå vidare i innehållet.

Buggfixar, se {@link changelog Changelog}.

## Version 6.30.0

2025-12-05

Buggfix för tooltip som ger följande ändringar:

- återställd till den större klickytan som var tidigare
- större ikon
- ikonens placering är inte vertikalt centrerad (förskjuten neråt).

Övriga buggfixar, se {@link changelog Changelog}.

## Version 6.29.0

2025-11-27

Vi släpper en ny {@link pagination pagineringskomponent}.  
Om du kombinerar paginering med tabell kan vissa funktioner i tabell skapa oönskade beteenden vid paginering.
Stöd för paginering till tabell kommer senare.  
Buggfixar, se {@link changelog Changelog}

## Version 6.28.0

2025-11-25

Komponenten {@link FExpandablePanel expanderbar panel} har fått ny design och semantiska färgvariabler.
{@link table#valja_rader Interaktiv tabell} har nu stöd för radioknappar (att välja en rad).  
Buggfixar, se {@link changelog#v6-28-0 Changelog}

## Version 6.27.0

2025-11-21

Lagt till en prop `formModalSize`i Datamängdredigeraren för att kunna kontrollera storleken på modalen, läs mer {@link FCrudDataset Datamängdredigeraren}.  
Buggfixar, se {@link changelog#v6-27-0 Changelog}

## Version 6.26.0

2025-11-10

Möjliggör för konsumenten att sätta antal decimaler för `parseNumber` och `parsePercent`.  
Buggfixar, se {@link changelog#v6-26-0 Changelog}

## Version 6.25.0

2025-11-06

Deprekering av gamla färgvariabler.  
Temabyggare släppt med byggskript för designsystemets tema (theme-default och theme-desktop).  
Buggfixar, se {@link changelog#v6-25-0 Changelog}

## Version 6.24.0

2025-10-29

Semantiska färgvariabler för expanderbart stycke.  
Buggfixar, se se {@link changelog#v6-24-0 Changelog}

## Version 6.23.0

2025-10-24

Stöd för ljust och mörkt tema infört för standard-temat (theme-default).  
Semantiska färgvariabler uppdaterade för ikon.  
Nya paket för logotyp, font och desktop-tema (theme-desktop).  
Buggfixar, se {@link changelog#v6-23-0 Changelog}

## Version 6.22.0

2025-10-15

Status för hover och vald justerat för högkontrastläge.  
Buggfixar, se {@link changelog#v6-22-0 Changelog}

## Version 6.21.0

2025-10-09

Meddelanderutan har nu samma storlek och rubrikstorlek oavsett skärmstorlek.  
Buggfixar, se {@link changelog#v6-21-0 Changelog}

## Version 6.20.0

2025-09-28

Lagt till ellipsis icon till ikon biblioteket.  
Buggfixar, se {@link changelog#v6-20-0 Changelog}

## Version 6.19.0

2025-09-19

### Spinner för knapp

`FButton` har nu stöd för att visa en spinner vid operationer som tar lång tid.
Knappen blir då inaktiv och förhindrar upprepade klick, {@link button#hantering_av_asynkrona_atgarder läs mer här}.

## Version 6.16.0

2025-08-22

### Ny komponent för knapp

En Vue-komponent finns nu för knapp.
Vi rekommenderar att ni byter till denna nya Vue-komponent för att slippa hålla reda på knapp-klasser.

### Årsväljare för kalender

För att användare snabbt ska kunna byta till annat år i kalender och datumväljare finns nu funktionen årsväljare.
Läs mer här om {@link FCalendar#arsvaljare årsväljare}.

### Bugg åtgärdad för datamängdsorteraren

Tabellen behåller nu sorteringen på den kolumn som användaren har valt efter att data har ändrats i tabellen.

## Version 6.9.0

2025-05-23

`FCrudButton` är deprekerad, läs mer om att {@link migrating-crud-button migrera FCrudButton}.

## Version 6.7.0

2025-05-14

### Uppdatering av applikationslayout (beta)

- Lagt till komponent {@link FFixedPane fixerad yta} (FFixedPane) som används för fasta ytor.
- Applikationsmall (FPageLayout) använder sig nu av native slots (kräver kodändringar).

### Vertikal skroll i tabell

Tabell har inte längre stöd för vertikal skroll då det har fungerat bristfälligt.
Påverkar komponenterna {@link table#interaktiv_tabell interaktiv tabell} (FInteractiveTable) och {@link table#datatabell datatabell} (FDatatable).
`TableScroll.VERTICAL` och `TableScroll.BOTH` är deprekerade och bör ej användas.

### Åtgärdsknappar i tabell

Ny komponent för {@link component:FTableButton åtgärdsknappar i tabell} (FTableButton).

## Version 6.6.0

2025-04-25

Version 6.6.0 innehåller bland annat följande uppdateringar:

### Formatering av data vid presentation

Stöd för att formatera data som presenteras samt förhindra radbrytning av dessa.
Läs {@link FormatPlugin här} om hur du får formatering på till exempel datum och personnummer som presenteras.

### Applikationslayout i beta

Alla nya komponenter för applikationslayout är nu släppta i {@link about#beta status beta).
Observera att de nya komponenterna inte ska användas i produktion förrän de har status produktionsklar.
Vi räknar med att kunna sätta status produktionsklar i någon av de närmast kommande releaserna.
Läs mer om de nya komponenterna {@link FPageLayout applikationsmall}, {@link FResizePane justerbar yta},
{@link FMinimizablePanel minimerbar panel} och {@link FDetailsPanel detaljpanel}.

## Version 6.5.0

2025-04-23

Inställningen för knappordning påverkar nu enbart bekräftelsemodaler.
Dokumentationen för {@link config konfiguration} är uppdaterad med vilken inbyggd knappordning FKUI-komponenter använder.

## Version 6.4.0

2025-04-12

### Ändringar i nya applikationslayout

Mer kontroll över justerbara ytor i nya applikationslayouten (fortfarande beta):

- overlay
- stäng av/på om storlek ska kunna justeras
- dölj/visa yta.

Flera buggar är rättade.

### Stöd för egna knappar i `FCrudDataset`

Använd slotten #buttons för att lägga till egna anpassade lägg-till knappar.

## Version 6.3.0

2025-03-11

Release innehåller följande uppdateringar:

- Nytt paket `@fkui/tsconfig` med rekommenderad konfiguration för TypeScript och FKUI. Läs mer om {@link tsconfig}.
- Inmatningsfält (FTextField) hanterar `null` som modellvärde.
- Ändringar i {@link FPageLayout} och relaterade komponenter (fortfarande i beta).
- Flera buggar är rättade.

## Version 6.2.0

2025-02-28

Release innehåller följande uppdateringar:

- Betaversion av nya komponenter för applikationslayout finns tillgängliga.
  Observera att de inte går att använda förrän de ligger i status produktionsklar.
- Flera buggar är rättade.

## Version 6.0.0

2025-02-10

### Ny release med brytande ändringar

Releasen innehåller bland annat följande uppdateringar:

- Vi har tagit bort stöd för containermanéret då det inte uppfyller krav på tillgänglighet.
  De relaterade komponenterna formulär (FForm), formulärsteg (FFormStep) har tagits bort.

- Modal (FModal): Knappordningen är ändrad i modaler så att den sekundära knappen ligger före den primära knappen.
  Anledningen är att användare inte ska ändra något av misstag, till exempel ta bort något.

- Kryssruta och radioknapp: De gamla grupperingskomponenterna för kryssruta och radioknapp har tagits bort, använd istället {@link migrating-to-fieldset FFieldset}.

- Sidhuvud (FPageHeader): Komponenten innehåller inte längre länk eller logotyp som standard.

- Ett antal andra funktioner, typer och komponenter är också borttagna.

- Pageobject: Ett antal deprekerade metoder är borttagna (bland annat trimmedText()).

- Valideringsservice: Den deprekerade validatorn personnummer är borttagen, använd istället validatorerna personnummerFormat och personnummerLuhn.

- Tema och variabler: Designsystemet tillhandahåller nu endast ett tema.
  Som konsument finns det fortfarande möjlighet att själv tillhandahålla specifika tillämpningar.

- Formatbeskrivning etikett: Klassnamnet för formatbeskrivning på etikett är ändrat.

{@link migrating-to-v6 Läs mer i migreringsguiden för version 6}

## Version 5.44.0

2024-12-17

### Kombobox

Komboboxen kombinerar ett textfält med en lista som har förbestämda alternativ. Listan filtreras för att matcha det som skrivs in i textfältet och presenterar förslag. För användaren innebär detta ett smidigare sätt att göra ett val bland ett stort antal alternativ i stället för att behöva skrolla i en lång dropplista. Komboboxen kan också användas i de fall då användaren både ska kunna skriva en godtycklig fritext eller välja i en lista med förbestämda förslag.

{@link combobox Läs mer om kombobox}

## Version 5.26.0

2024-06-04

### Densitet

Densitet styr hur många komponenter och hur mycket information som får plats på skärmen utan att användaren behöver skrolla. Höjden är frikopplad från fontstorlek och rem. Densitet påverkar en komponents höjd samt avståndet mellan komponenter. Hög densitet ger en kompakt layout för applikationer som behöver presentera mycket information som användaren måste kunna överblicka. Till exempel handläggningsstöd.

Densitet är en viktig pusselbit i vår strävan att leverera ett designsystem med bara ett tema. Temat ska följa Försäkringskassans visuella identitet och ska kunna användas för alla typer av applikationer på Försäkringskassan. Oavsett om applikationen riktar sig till medborgare, arbetsgivare eller är ett internt IT-stöd. Vi vill kunna stödja allt från e-tjänster för självbetjäning till handläggningsstöd med samma tema.

Det ska tilläggas att webbapplikationer som körs i Hapo kommer att fortsätta följa Hapos färger. Därför behåller vi det temat i designsystemet, men har döpt om det till FK Hapo.

{@link density Läs mer om densitet}

## Version 5.25.0

2024-05-29

### Inmatning i tabellceller

Inmatningsfält kan placeras i en tabell för att direkt kunna redigera värdet i cellen. Fältens standardetikett är visuellt dolda och ersätts av tabellrubriken för en seende användare men läsas upp som vanligt av skärmläsare. Vid fältvalidering visas felmeddelande i en tooltip när fältet har fokus. Utöver inmatningsfält har datumväljare och dropplista stöd för att användas i tabell.

{@link table#inmatning_i_tabell Läs mer om inmatning i tabell }

### Internt tema byter namn

Det interna temat byter i dokumentationen namn till FK Hapo. Detta är ett steg mot att framöver lägga till stöd för att kunna bygga desktopanpassade applikationer med samma tema för hela Försäkringskassan.

## Version 5.17.0

2024-03-22

### Deprekering av gruppkomponenter för radio och kryssruta

- `FRadioGroup`, `FCheckboxGroup` ersätts med Fältgruppering (`FFieldset`)
- `FRadioGroupField` byter namn till `FRadioField`
- `FCheckboxGroupField` byter namn till `FCheckboxField`

{@link migrating-to-fieldset Läs mer om hur du uppdaterar din användning av radio och kryssrutor }

## Version 5.16.0

2024-03-11

### Expanderbara rader i tabeller

{@link table#interaktiv_tabell Interaktiva tabeller } kan ha expanderbara rader för att visa ytterligare rader eller valfritt innehåll.

## Version 5.15.0

2024-02-09

### Validering och visning av status

Ett obligatoriskt inmatningsfält som lämnas tomt när användaren tabbar förbi fältet visas inte längre som felaktigt. Istället visas de som felaktiga först när användaren
försöker skicka in formuläret.
Det här underlättar främst för skärmläsaranvändare som ofta tabbar igenom formulär för att skapa sig en överblick innan de börjar fylla i information. De användarna slipper alltså att få fel presenterade för sig när de shift-tabbar tillbaka till första fältet igen.
Det här är en ändring som följer Arbetsförmedlingens designmönster. Eftersom vi dessutom strävar efter att bara be om information som vi verkligen behöver och därmed bara använder frivilliga fält i undantagsfall känns ändringen än mer motiverad. Oberoende av om användaren har en skärmläsare eller inte.
En användare som väljer att klicka sig igenom ett formulär och fylla i uppgifterna i en annan ordning än den de presenteras kommer inte heller att få en massa fel presenterade för sig.

Som ytterligare en del i att förenkla och linjera med vanliga mönster (bl.a. Arbetsförmedlingen) visar vi inte fält med grön markering. Vi vill inte belasta användaren med onödig information.
Istället förblir ett ifyllt fält neutralt när det är ifyllt. Notera att det är så som dropplistor redan beter sig.
Innan den här ändringen visades inmatningsfält som OK när uppgifterna som användaren matade in uppfyllde formatregler eller när ett fält utan formatregler helt enkelt bara
blev ifyllt (t.ex. ett fält för att ange ett namn).

## Version 5.10.0

2023-12-14

### Förlåtande personnummer

Det {@link textfield-specialized#personnummer specialiserade inmatningsfältet för personnummer} har uppdaterats med förlåtande inmatning. Användaren kan skriva in personnummer med både 10 siffror eller 12 siffror. Det inmatade värdet kommer efter godkänd validering att formateras enligt [Skatteverkets regler](https://www.skatteverket.se/privat/folkbokforing/personnummer.4.3810a01c150939e893f18c29.html) för personnummer. Från och med det år en person fyller 100 år har personnumret plustecken istället för bindestreck.

## Version 5.0.0

2023-09-22

### Vue3

FKUI har uppdaterats till Vue3.

{@link migrating-to-v5 Läs mer om hur du migrerar din applikation till Vue3}
