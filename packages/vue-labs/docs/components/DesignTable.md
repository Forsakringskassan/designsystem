---
title: Utforma tabell
layout: article
sortorder: 2
search:
    terms:
        - design
---

Den här sidan innehåller information om hur du utformar/designar en tabell för din applikation.

När du ska utforma en tabell är det många saker du behöver tänka på.
Gör en ordentlig analys av vilken information som måste visas i tabellen.
Målet bör vara att alla kolumner får plats på skärmen.

## Anpassa tabellen

Anpassa bredden på tabellen till innehållet, gör den inte bredare än den behöver vara.
Samma princip gäller för kolumner.
Sätt vilka kolumner som ska ta maximal bredd och vilka som får ta minsta möjliga.

Bestäm också vilka celler som ska radbryta och vilka som inte ska göra det.

Innehåller tabellen många kolumner eller är det svårt att följa en och samma rad genom flera kolumner?
Gör tabellen zebrarandig för att enklare visuellt skanna av tabellen och följa rader.

Hur ska tabellen se ut när den är tom?
Bestäm vilken information användaren ska få.

Om inte användaren behöver all information direkt kan expanderbara rader vara ett sätt att visa mer information vid behov.

### Interagerbara objekt

Tänk på att en cell i tabellen bara ska innehålla ett interagerbart objekt.
När användaren navigerar med piltangenter till en cell (eller tabbar in till första cellen) som innehåller ett interagerbart objekt kommer det interagerbara objektet i cellen få fokus.

## Formatera innehåll

Underlätta för användaren genom att formatera innehållet i tabellen så det blir mer lättläst.
Du behöver bestämma hur tabellens kolumnrubriker ska vara placerade och hur data i kolumnerna ska presenteras.

Text i en tabellecell ska som regel vara vänsterjusterad.
Undantag är belopp och andra numeriska värden som till exempel procent som ska visas högerställt för att lättare kunna jämföras.

Undvik långa texter i tabellceller.
Håll innehållet kort och koncist så att det blir lätt och överskådligt för användaren att hitta.

Tnum (tabular figures) är en funktion som ersätter siffror med motsvarande tecken som tar samma utrymme i bredd.
Till exempel kommer talet 111 ta samma plats som 000.
Vid numeriska värden ska innehållet i kolumn visas med tnum.

## Välja en eller flera rader

Ska användaren kunna välja en eller flera rader samtidigt?
Användaren kan välja en eller flera rader i tabellen genom komponenterna kryssruta (länk) och radioknapp (länk).
Om du använder kryssruta (flerval) ingår även funktionen för bulkoperation (länk) i tabellen.

## Åtgärdsknappar och länkar

För att låta användaren utföra en operation på en rad kan du placera åtgärdsknappar i tabellen.
Åtgärdsknappar måste ha en etikett men etiketten behöver inte vara visuellt synlig. Etiketten behöver tydligt förklara åtgärden och kontext (exempelvis som förklarar vilken rad som påverkas).
Om du behöver förtydliga sammanhanget för användare med skärmläsare kan du använda en sr-only för etiketten.

## Redigering av innehåll

Utvärdera vilken typ av redigering (in-line eller via formulär/modal) som passar användaren bäst utifrån den utformning som tabellen har och hur van användaren är.

Tabellen har stöd för inline-redigering, det vill säga att användaren redigerar cellens innehåll direkt i tabellen genom ett inmatningsfält. Använd gärna de specialiserade inmatningsfälten (länk) eller dropplistan (länk) som tabellen stödjer.

Beroende på vad som redigeras och hur van användaren är kan det istället vara bättre att använda formulär eller modal för att ändra innehållet i en cell.

## Lägga till/ta bort rader

Om användaren behöver lägga till och ta bort rader...

## Sortering och filtrering

Om tabellen är stor och innehåller många rader behöver användaren kunna sortera och/eller filtrera innehållet.

Tabell med sortering bör ha en förvald aktiverad kolumn som är sorterad i stigande/fallande.
Du väljer den kolumn som är mest trolig att användaren vill sortera på och som vanligtvis är den första kolumnen.

## Relaterat

Tabell (länk)
Användning (länk)
