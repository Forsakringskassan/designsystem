---
title: Tabell
status: Draft
layout: component
sortorder: 1
component:
    - FTable
search:
    terms:
        - navigering i tabell
        - tangentbordsnavigering
        - kolumn
        - rad
        - kolumnrubrik
        - radrubrik
        - kolumntyper
---

Använd en tabell när användaren behöver analysera och jämföra information strukturerad i rader och kolumner.
Tabeller kan antingen vara enkla tabeller för presentation eller vara mer avancerade tabeller med olika typer av interaktioner.

I en tabell har varje rad samma grupper av information som visas kolumnvis, till exempel namn, datum, belopp och diarienummer.

(länk table Här hittar du information om de gamla tabellkomponenerna datatabell och interaktiv tabell.)

Exempel på tabell.

Använd inte tabell för att

- sätta upp innehåll på en sida
- visa enkel information utan kolumnrubriker.

## Navigering i tabell

I tabellen navigerar användaren med hjälp av piltangenterna. Pilningen är inte cirkulär.
Om en cell innehåller ett interagerbart objekt som exempelvis inmatningsfält eller dropplista kommer objektet få fokus direkt.
Användaren tar sig till och från tabellen med hjälp av tabbning.

Länk till kodexempel

### Tangentbordsnavigering

Tabellen har stöd för följande tangentbordsnavigering:

- pil upp: flyttar fokus till cell com ligger ovanför
- pil ner: flyttar fokus till cell som ligger nedanför
- högerpil: flyttar fokus till cell som ligger till höger
- vänsterpil: flyttar fokus till cell som ligger till vänster
- Home: flyttar fokus till första cellen i raden
- End: flyttar fokus till sista cellen i raden
- ctrl + Home: flyttar fokus till cell längst till vänster i översta raden
- ctrl + End: flyttar fokus till cell längst till höger i nedersta raden.

## Välja en eller flera rader

Användaren kan välja en eller flera rader i tabellen genom komponenterna kryssruta (länk) och radioknapp (länk).
Om tabellen har kryssruta (flerval) ingår även funktionen för bulkoperation (länk) i tabellen.

Länk till kodexempel

## Bulkoperation

Bulkoperation innebär att användaren kan välja ett antal rader och utföra åtgärd/operation för alla valda rader samtidigt. Bulkoperation ingår som standard för kolumn med kryssrutor.

Om antal synliga rader ändras i tabellen kommer alla markeringar i kryssrutor tas bort och status för bulkoperation nollställs.
Till exempel innebär en filtrering och att lägga till/ta bort rader ändringar som nollställer bulkoperation.

Länk till kodexempel

## Expandera rader

Det går att skapa ytterligare tabellrader som visas genom att expandera en rad.
Raderna kan presenteras på två sätt:

- raden följer existerande kolumner
- raden är utsträckt över alla kolumner och med valfritt innehåll.

Länk till kodexempel

## Åtgärdsknappar och länkar

Tabellen kan ha åtgärdsknappar för att utföra en operation på en rad som till exempel ta bort, ändra eller visa mer information.
Det går också att placera länkar i tabellen.

Länk till kodexempel

## Redigera

För tabell finns det två typer av redigeringar

- inline-redigering: användaren redigerar direkt innehållet på en rad genom att stå i aktuell cell
- via formulär: användaren öppnar separat formulär eller modal för att redigera innehåll på rad.

Tabellen har stöd för inline-redigering.

### Inline-redigering

Tabellen har stöd för inline-redigering vilket innebär att användaren direkt kan redigera innehåll i cell med hjälp av inmatningsfält.
Förutom vanligt textfält har tabellen även stöd för att lägga de specialiserade inmatningsfälten och dropplista i en cell.

Länk till kodexempel

## Lägga till/ta bort rader

Om användaren behöver lägga till och ta bort rader i tabellen får du som konsument sätta upp detta.

Exempel på tabell med knappar för ta bort/lägga till.

## Sortera och filtrera

När tabellerna är stora och innehåller många rader behöver användaren kunna sortera och/eller filtrera innehållet.
Med datamängsorteraren (FSortFilterDataset) kan du lägga till funktionalitet för sortering och filtrering i tabell.

Tänk på att tabell med sortering bör ha en förvald aktiverad kolumn som är sorterad i stigande/fallande.
Du väljer den kolumn som är mest trolig att användaren vill sortera på och som vanligtvis är den första kolumnen.

Läs mer om hur du använder komponent (länk FSortFilterDataset datamängdsorteraren).

## Utforma en tabell

(länk design-table Läs om hur du utformar/designar en tabell för din applikation.)

## Användning

(länk use-table Läs om hur du sätter upp/kodar en tabell för din applikation.)

## Relaterat
