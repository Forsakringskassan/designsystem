---
title: Presentera data
layout: article
sortorder: 3
search:
    terms:
        - visa data
        - kolumn
        - rad
        - kolumnrubrik
        - radrubrik
        - kolumntyper
---

På den här sidan beskriver vi hur du sätter upp och presenterar data i en tabell.

Tabellen har en prop rows som du sätter till de rader som ska presenteras.

Slotten `default` renderas för varje item i `rows` och har en slot attribute `row` som innehåller nuvarande rad.

Varje kolumn som tabellen ska innehålla skapas genom att använda komponenten tabellkolumn (FTableColumn).

// plats för kodexempel

Innehåller cellen numeriska värden, datum eller annan data som inte är löptext bör du använda direktivet `v-format` för att formatera och undvika radbryt i cellen.

// plats för kodexempel

## Tabellrubrik

En tabell ska alltid ha en rubrik, antingen med caption-elementet eller en associerad rubrik (heading).
Tabellrubriken ska hjälpa användaren att hitta till, navigera i och förstå tabellen.

Om tabellen har en rubrik (heading) i nära anslutning som också förklarar tabellens innebörd assoccierar du den med `aria-labelledby`:

// plats för kodexempel

Använd caption om tabellen inte har en naturlig rubrik:

// plats för kodexempel

I undantagsfall kan du också använda en dold skärmläsartext i caption, men tänk på att tabellens innehåll måste vara begripligt för alla:

// plats för kodexempel

## Kolumner och kolumnrubrik

Du behöver bestämma hur tabellens kolumnrubriker ska vara placerade och hur data i kolumnerna ska presenteras.
Kolumnrubriker är som standard vänsterjusterade, men om innehållet i kolumnen är numeriska tal ska du ändra till högerjusterad.
Vid kolumnrubrik kan du också lägga till

- ikon
- beskrivning
- hjälpformat.

Det är också möjligt att lägga till text för skärmläsare på kolumnrubriken.

Om innehållet i kolumnens celler är text ska den vara vänsterjusterad och utan tnum.
Tnum (tabular figures) är en funktion som ersätter siffror med motsvarande tecken som tar samma utrymme i bredd.
Till exempel kommer talet 111 ta samma plats som 000.
Vid numeriska tal ska innehållet i kolumnen däremot vara högerjusterat och med tnum.

## Radrubrik

Tabellen kan använda radrubriker utöver kolumnrubriker.
En radrubrik underlättar för användare med skärmläsare genom att markera vilken eller vilka celler som utgör en rubrik och blir upplästa automatiskt när skärmläsaren navigerar i tabellen.

Använd radrubriker om det finns många kolumner och/eller en tydlig cell som identifierar rader från andra rader.
För att definiera kolumnen som radrubrik, se avsnitt Kolumntyper (länk).

// plats för kodexempel

// plats för kodexempel

Är slot `row-description` samma sak som radrubrik? Eller hör det ihop med rad-id?

## Kolumnbredder

Kolumnents bredd justeras generellt sett av cellernas innehåll men med proparna `expand` och `shrink` kan du indikera att en kolumn ska använda så mycket eller så lite utrymme som möjligt.

En kolumn med `expand` tar så mycket utrymme den kan.
En kolumn med `shrink` tar så lite utrymme den kan.
Med `shrink` kommer cellernas innehåll att radbrytas om du inte använder direktivet `v-format` (länk) eller på annat sätt förbindrar radbrytning.

Om flera kolumner har `expand` fördelas storleken godtycklingt efter webbläsarens preferens.

Om inget anges fungerar kolumnen som om `expand` är satt.
Det är fel att sätta både `expand` och `shrink` samtidigt.

// plats för kodexempel

## Kolumntyper

Tabellen har sju olika kolumntyper som påverkar hur cellen presenteras:

- radrubrik: `rowheader` (länk till avsnitt ovan?)
- text: `text`
- kryssruta: `checkbox` (länk till avsnitt?)
- radioknapp: `radio` (länk till avsnitt?)
- knapp: `button`
- länk: `anchor`
- dropplista: `select`
- kontextmeny: `contextmenu`

Du anger kolumntypen genom att sätta propen `type`.

Kolumntypen text innebär att cellen kan presentera data i olika format och den kan även vara redigerbar.
Läs mer om redigering i tabell. (länk)

// plats för kodexempel

## Rad-id

För att identifiera olika rader med ett värde kan du ange namnet för en nyckel (key) med `keyAttribute`. Nyckeln finns i varje radobjekt.  
Om du anger keyAttribute, måste varje rad (även expanderade rader) innehålla denna nyckel med ett unikt värde.

Att använda keyAttribute är valfritt och det behövs inte om det finns ett naturligt id att ange för dina rader.
Du måste använda keyAttribute om dina rader ska bibehålla aktuell status vid omladdning från REST-api eller liknande.

// plats för kodexempel

// plats för kodexempel

## Skroll

För att lägga till skroll i tabell använder du prop `scroll`:

// plats för kodexempel

## Framhäva rader/zebrarandig

Framhäv varannan rad när tabellen innehåller många rader och kolumner.
Det underlättar för användaren att läsa innehållet i tabellen genom att hen lättare kan läsa samma rad över flera kolumner.
Du gör tabellen zebrarandig genom att...

## Expandera rader

Ska expanderbara rader ligga under utformning av tabell eller under tabellfunktioner?

## Tomt läge i tabell

När tabellen är tom (finns inget innehåll att presentera) visas en text som informerar användaren om att tabellen är tom.
Du kan ändra texten för att bättre passa innehållet, till exempel "Det finns inga betalningar" eller "Ingen anslutning finns".
Texten sätts i slot `#empty`:

// plats för kodexempel

## Felhantering

Om ett fel uppstår vid hämtning av tabellens data kan du se till att ett felmeddelande visas med hjälp av `#empty`-sloten och en meddelanderuta (länk).

// plats för kodexempel

// plats för kodexempel

## Textnycklar

Läs mer om att (länk till translate-text, anpassa och översätta text).

Komplettera textnycklarna.

## Relaterat
