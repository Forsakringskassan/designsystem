---
title: Tabell
short-title: Om tabell
name: FTable
status: Draft
layout: component
sortorder: 1
component:
    - FTable
alias: FTable
search:
    terms:
        - navigera i tabell
        - tangentbordsnavigering
        - kolumn
        - rad
        - kolumnrubrik
        - radrubrik
        - kolumntyper
---

```import live-example
FTableLiveExample.vue
```

## När används komponenten?

Använd en tabell när användaren behöver analysera och jämföra information strukturerad i rader och kolumner.
Tabeller kan antingen vara enkla tabeller för presentation eller vara mer avancerade tabeller med olika typer av interaktioner.

I en tabell har varje rad samma grupper av information som visas kolumnvis, till exempel namn, datum, belopp och diarienummer.

Här hittar du information om de gamla tabellkomponenerna {@link table#datatabell datatabell} och {@link table#interaktiv_tabell interaktiv tabell}.

## Tänk på att

När du ska utforma en tabell är det många saker du behöver tänka på.
Gör en ordentlig analys av vilken information som måste visas i tabellen.
Målet bör vara att alla kolumner får plats på skärmen.

Använd inte tabell för att

- organisera innehåll på en sida
- visa enkel information utan kolumnrubriker.

### Anpassa tabell

Anpassa bredden på tabellen till innehållet, gör den inte bredare än den behöver vara.
Samma princip gäller för kolumner.
Sätt vilka kolumner som ska ta maximal bredd och vilka som får ta minsta möjliga.

Bestäm också vilka celler som ska radbryta och vilka som inte ska göra det.

Innehåller tabellen många kolumner eller är det svårt att följa en och samma rad genom flera kolumner?
Tabellen har avskiljare mellan rader som standard.
För att ytterligare framhäva rader och göra det enklare för användaren att visuellt skanna av tabellen kan du göra tabellen zebrarandig.

Hur ska tabellen se ut när den är tom?
Bestäm vilken information användaren ska få.

Om inte användaren behöver all information direkt kan expanderbara rader vara ett sätt att visa mer information vid behov.

#### Kolumntyper

En kolumn i tabellen kan visa olika typer av innehåll.

Tabellen stödjer flera kolumntyper (exempelvis textfält, dropplista, kryssruta med flera), men kan bara visa en typ av innehåll per kolumn.

{@link column-types Läs mer om de olika kolumntyperna.}

#### Kolumnrubrik

Bestäm hur tabellens kolumnrubriker ska vara placerade och hur data i kolumnerna ska presenteras.
Kolumnrubriker är som standard vänsterjusterade, men om innehållet i kolumnen är numeriska tal ska den vara högerjusterad.
Vid kolumnrubrik kan du också lägga till

- beskrivning
- hjälpformat.

Om innehållet i kolumnens celler är text ska den vara vänsterjusterad och utan tnum.
Tnum (tabular figures) är en funktion som ersätter siffror med motsvarande tecken som tar samma utrymme i bredd.
Till exempel kommer talet 111 ta samma plats som 000.
Vid numeriska tal ska innehållet i kolumnen däremot vara högerjusterat och med tnum.

#### Radrubrik

En radrubrik underlättar för användare med skärmläsare genom att markera vilken eller vilka celler som utgör en rubrik och blir upplästa automatiskt när skärmläsaren navigerar på den raden i tabellen.

#### Interagerbara objekt

Tänk på att en cell i tabellen bara ska innehålla ett interagerbart objekt.
När användaren navigerar med piltangenter till en cell (eller tabbar in till första cellen) som innehåller ett interagerbart objekt kommer det interagerbara objektet i cellen få fokus.

### Formatera innehåll

Underlätta för användaren genom att formatera innehållet i tabellen så det blir mer lättläst.

Undvik långa texter i tabellceller.
Håll innehållet kort och koncist så att det blir lätt och överskådligt för användaren att hitta.

### Funktioner

Tabellen stödjer ett antal funktioner och kan låta användaren

- {@link navigate navigera i tabell}
- {@link sort-filter sortera och filtrera innehåll}
- {@link expand-rows expandera rader}
- {@link select-rows välja en eller flera rader}
- {@link bulk-operation utföra bulkoperationer}
- {@link table-paginate bläddra mellan sidor (paginering)}
- {@link edit redigera innehåll}
- {@link create-delete-rows lägga till och ta bort rader}
- {@link action-button-link klicka på länkar}
- {@link action-button-link utföra åtgärder genom knapp/kontextmeny}.

## Kod

{@link code Läs om hur du sätter upp/kodar en tabell för din applikation.}

## Bra att veta

Tabellen stödjer inte följande

- {@link edit#mobila_enheter_och_redigerbar_tabell redigerbar tabell i mobila enheter/surfplattor}
- {@link edit#mobila_enheter_och_redigerbar_tabell redigerbar tabell och skärmläsarverktyg voiceover och talkback}
- {@link expand-rows#felhantering_och_validering_av_nastlade_rader felhantering och validering av nästlade rader}.

## Återstående förbättringar

Följande förbättringar av tabell återstår:

- radbrytning av text i cell
- stöd för kolumntypen kombobox
- laddning av data (spinner)
- konsument ska kunna sätta kolumnbredd
- användare ska kunna ändra kolumnbredd dynamiskt.
