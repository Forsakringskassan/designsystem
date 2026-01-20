---
title: Om tabell
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

Sidan är under omarbetning för nya tabellkomponenten och kan innehålla felaktigheter.

```import live-example
FTableLiveExample.vue
```

## När används komponenten?

Använd en tabell när användaren behöver analysera och jämföra information strukturerad i rader och kolumner.
Tabeller kan antingen vara enkla tabeller för presentation eller vara mer avancerade tabeller med olika typer av interaktioner.

I en tabell har varje rad samma grupper av information som visas kolumnvis, till exempel namn, datum, belopp och diarienummer.

Här hittar du information om de gamla tabellkomponenerna datatabell och interaktiv tabell (länk, ska uppdateras)

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
Gör tabellen zebrarandig för att enklare visuellt skanna av tabellen och följa rader.

Hur ska tabellen se ut när den är tom?
Bestäm vilken information användaren ska få.

Om inte användaren behöver all information direkt kan expanderbara rader vara ett sätt att visa mer information vid behov.

Exempel med hur du kan anpassa/bygga kolumner.

#### Interagerbara objekt

Tänk på att en cell i tabellen bara ska innehålla ett interagerbart objekt.
När användaren navigerar med piltangenter till en cell (eller tabbar in till första cellen) som innehåller ett interagerbart objekt kommer det interagerbara objektet i cellen få fokus.

### Formatera innehåll

Underlätta för användaren genom att formatera innehållet i tabellen så det blir mer lättläst.

Undvik långa texter i tabellceller.
Håll innehållet kort och koncist så att det blir lätt och överskådligt för användaren att hitta.

## Kod

{@link code Läs om hur du sätter upp/kodar en tabell för din applikation.}

## Bra att veta om komponenten

Tabellen stödjer inte följande

- redigerbar tabell i mobila enheter/surfplattor
- redigerbar tabell och skärmläsarverktyg voiceover och talkback
- felhantering och validering av nästlade rader
- tangentbordsnavigering och skroll i tabell.

## Återstående förbättringar i komponenten

Följande förbättringar av tabell återstår:

- stöd för kolumntypen kombobox
- laddning av data (spinner)
- konsument ska kunna sätta kolumnbredd
- användare ska kunna ändra kolumnbredd dynamiskt.

## Relaterat

{@link action-button-link Åtgärdsknappar och länkar}

{@link bulk-operation Bulkoperation}

{@link column-type Kolumntyper}

{@link create-delete-rows Lägga till och ta bort rader}

{@link edit Redigera innehåll}

{@link expand-rows Expandera rader}

{@link navigate Navigera}

{@link table-paginate Paginera}

{@link select-rows Välja rader}

{@link sort-filter Sortera och filtrera}

{@link test-table Testning av tabell}
