---
title: Tabell
status: Draft
layout: component
sortorder: 1
component:
    - FTable
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

## Hur används komponenten?

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

## Kolumntyper

En kolumn i tabellen kan visa olika typer av innehåll.

Tabellen stödjer kolumntyperna:

- textfält (enbart visning av data eller redigerbar) samt motsvarande format som de specialiserade inmatningsfälten
- radrubrik
- knapp
- länk
- kryssruta
- radioknapp
- dropplista
- kontextmeny.

```import live-example
FTableColumnLiveExample.vue
```

Tabellen kan bara visa en typ av innehåll per kolumn.
Det går inte att blanda så att till exempel de översta raderna i en kolumn har kolumntypen dropplista och de nedersta raderna har radioknapp.

## Navigera i tabell

I tabellen navigerar användaren med hjälp av piltangenterna. Pilningen är inte cirkulär.
Om en cell innehåller ett interagerbart objekt som exempelvis inmatningsfält eller dropplista kommer objektet få fokus direkt.
Användaren tar sig till och från tabellen med hjälp av tabbning.
Om användaren tabbar sig ur tabellen och sedan tabbar tillbaka med hjälp av shift + tab hamnar fokus på senast besökta cell.

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

## Välja rader

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
Åtgärdsknappar måste ha en etikett men etiketten behöver inte vara visuellt synlig.
Etiketten behöver tydligt förklara åtgärden och kontext (exempelvis som förklarar vilken rad som påverkas).
Om du behöver förtydliga sammanhanget för användare med skärmläsare kan du använda en sr-only för etiketten.

Länk till kodexempel

## Redigera innehåll

För tabell finns det två typer av redigeringar

- inline-redigering: användaren redigerar direkt innehållet på en rad genom att stå i aktuell cell
- via formulär: användaren öppnar separat formulär eller modal för att redigera innehåll på rad, se avsnitt nedan (länk till Ändra, lägga till och ta bort).

### Inline-redigering

Tabellen har stöd för inline-redigering.
Förutom vanligt textfält har tabellen även stöd för att lägga de specialiserade inmatningsfälten och dropplista i en cell.

Länk till kodexempel

## Ändra, lägga till eller ta bort rader

Användaren kan utöver att ändra innehåll i en rad även ta bort eller lägga till rader till tabellen.

Exempel på tabell med knappar för ta bort/lägga till.

## Sortera och filtrera

När tabellerna är stora och innehåller många rader behöver användaren kunna sortera och/eller filtrera innehållet.
Med datamängsorteraren (länk FSortFilterDataset) kan du lägga till funktionalitet för att sortera och filtrera i tabell.

Tänk på att tabell med sortering bör ha en förvald aktiverad kolumn som är sorterad i stigande/fallande ordning.
Du väljer den kolumn som är mest trolig att användaren vill sortera på och som vanligtvis är den första kolumnen.

Läs mer om hur du använder komponent (länk FSortFilterDataset datamängdsorteraren).

## Kod

{@link code-table Läs om hur du sätter upp/kodar en tabell för din applikation.}

## Förbättringar och buggar

Följande förbättringar av tabell återstår:

- stöd för paginering
- stöd för kolumntypen kombobox
- laddning av data (spinner)
- konsument ska kunna sätta kolumnbredd
- användare ska kunna ändra kolumnbredd dynamiskt.

## Relaterat

{@link test-table Testning av tabell}
