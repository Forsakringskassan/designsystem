---
title: Kod (tillhör nya tabellkomponenten)
layout: article
sortorder: 2
search:
    terms:
        - visa data
        - kolumn
        - rad
        - kolumnrubrik
        - radrubrik
        - kolumntyper
---

Sidan är under omarbetning för nya tabellkomponenten och kan innehålla felaktigheter.

Den här sidan innehåller information om hur du sätter upp komponenten tabell i din applikation.

## Navigering (plocka bort avsnitt helt?)

Navigering i en tabell styrs av vilken role som tabellen har.

Tabellen är som standard uppsatt med `role:grid`.

Om tabellen har expanderbara rader ska du sätta `role:treegrid` oavsett vilka andra funktioner som ingår i tabellen.

Vid `role:grid` eller `role:treegrid` navigerar användren till tabellen genom tabbning.
När användaren tabbat sig till tabellen sker navigering inom tabellen med hjälp av piltangenterna.

## Tabellrubrik

En tabell ska alltid ha en rubrik, antingen med caption-elementet eller en associerad rubrik (heading).
Tabellrubriken ska hjälpa användaren att hitta till, navigera i och förstå tabellen.

Om tabellen har en rubrik (heading) i nära anslutning som också förklarar tabellens innebörd assoccierar du den med `aria-labelledby`:

```diff
-<h3>Tabellrubrik</h3>
-<f-table :columns :rows>
+<h3 id="awesome-heading">Tabellrubrik</h3>
+<f-table :columns :rows aria-labelledby="awesome-header">
 ...
</f-table>
```

Använd caption om tabellen inte har en naturlig rubrik:

```diff
<f-table :columns :rows>
+   <template #caption> Tabellrubrik </template>
 ...
</f-table>
```

I undantagsfall kan du också använda en dold skärmläsartext i caption, men tänk på att tabellens innehåll måste vara begripligt för alla:

```diff
<f-table :columns :rows>
+   <template #caption>
+       <span class="sr-only"> Tabellrubrik </span>
+   </template>
 ...
</f-table>
```

## Kolumner

Du konfigurerar kolumner i tabellen med funktionen `defineTableColumns`.

I funktionen definierar du upp kolumnerna i tabell genom att bland annat bestämma/sätta kolumnrubrik, vänster-/högerjustering av innehåll, formatering, validering, kolumntyp med mera.

### Kolumnrubrik

Bestäm hur tabellens kolumnrubriker ska vara placerade och hur data i kolumnerna ska presenteras.
Kolumnrubriker är som standard vänsterjusterade, men om innehållet i kolumnen är numeriska tal ska du ändra till högerjusterad.
Vid kolumnrubrik kan du också lägga till

- beskrivning
- hjälpformat.

Du kan lägga till text för skärmläsare på kolumnrubriken.

Om innehållet i kolumnens celler är text ska den vara vänsterjusterad och utan tnum.
Tnum (tabular figures) är en funktion som ersätter siffror med motsvarande tecken som tar samma utrymme i bredd.
Till exempel kommer talet 111 ta samma plats som 000.
Vid numeriska tal ska innehållet i kolumnen däremot vara högerjusterat och med tnum.

### Kolumnbredder

Kolumnents bredd justeras generellt sett av cellernas innehåll men med proparna `expand` och `shrink` kan du indikera att en kolumn ska använda så mycket eller så lite utrymme som möjligt.

En kolumn med `expand` tar så mycket utrymme den kan.
En kolumn med `shrink` tar så lite utrymme den kan.

Om flera kolumner har `expand` fördelas storleken godtycklingt efter webbläsarens preferens.

Om inget anges fungerar kolumnen som om `expand` är satt.
Det är fel att sätta både `expand` och `shrink` samtidigt.

// plats för kodexempel

### Kolumntyper

Tabellen har nio olika kolumntyper som påverkar hur cellen presenteras:

- radrubrik: `rowheader` (länk till avsnitt ovan?)
- text: `text`
- kryssruta: `checkbox` (länk till avsnitt?)
- radioknapp: `radio` (länk till avsnitt?)
- knapp: `button`
- länk: `anchor`
- dropplista: `select`
- kontextmeny: `contextmenu`
- specialiserade inmatningsfält: `text:namn på specialiserat inmatningsfält`
- eget innehåll: `render`

Specialiserade inmatningsfält som tabellen stödjer:

- text:bankAccountNumber
- text:bankgiro
- txt:clearingNumber
- text:currency
- text:email
- text:number
- text:organisationsnummer
- text:percent
- text:personnummer
- text:phoneNumber
- text:plusgiro
- text:postalCode.

Du anger kolumntypen genom att sätta propen `type`.
Utgångsvärdet för `type` är text.

Kolumntypen text innebär att cellen kan presentera data i olika format och den kan även vara redigerbar.
Använd med fördel de specialiserade inmatningsfälten eftersom de exempelvis formaterar tal med tusenavskiljare.
Läs mer om redigering i tabell. (länk)

// plats för kodexempel

### Vänster- och högerjustering

Använd `align` för att justera kolumner till höger eller vänster i tabellen.
Text ska vara vänsterjusterad medan tal ska vara högerjusterade.
Kolumner av typ `text:currency`, `text:number` och `text:percent` blir automatiskt högerjusterade.
Alla andra blir vänsterjusterade som standard.

### Tabular figures

Tnum (tabular figures) är en funktion som ersätter siffror med motsvarande tecken som tar samma utrymme i bredd.
Till exempel kommer talet 111 ta samma plats som 000.
Vid numeriska värden ska innehållet i kolumn visas med `tnum`.
Tnum sätts automatiskt på följande:

- text:bankAccountNumber
- text:bankgiro
- txt:clearingNumber
- text:currency
- text:number
- text:organisationsnummer
- text:percent
- text:personnummer
- text:phoneNumber
- text:plusgiro
- text:postalCode.

## Rader

Tabellen kan använda radrubriker utöver kolumnrubriker.
En radrubrik underlättar för användare med skärmläsare genom att markera vilken eller vilka celler som utgör en rubrik och blir upplästa automatiskt när skärmläsaren navigerar i tabellen.

Använd radrubriker om det finns många kolumner och/eller en tydlig cell som identifierar rader från andra rader.
För att definiera kolumnen som radrubrik, se avsnitt Kolumntyper (länk).

// plats för kodexempel

// plats för kodexempel

### Rad-id

För att identifiera olika rader med ett värde kan du ange namnet för en nyckel (key) med `keyAttribute`. Nyckeln finns i varje radobjekt.  
Om du anger keyAttribute, måste varje rad (även expanderade rader) innehålla denna nyckel med ett unikt värde.

Att använda keyAttribute är valfritt och det behövs inte om det finns ett naturligt id att ange för dina rader.
Du måste använda keyAttribute om dina rader ska bibehålla aktuell status vid omladdning från REST-api eller liknande.

// plats för kodexempel

// plats för kodexempel

### Framhäva rader

Framhäv varannan rad när tabellen innehåller många rader och kolumner.
Det underlättar för användaren att läsa innehållet i tabellen genom att hen lättare kan läsa samma rad över flera kolumner.
Du gör tabellen zebrarandig genom att...

## Expanderbara rader

Med expanderbara rader går det att skapa ytterligare tabellrader som visas när användaren trycker på en expanderbar rad.

Expanderbara rader kan presenteras på två sätt:

- rader som följer existerande kolumner
- rader med valfritt innehåll.

För båda varianterna sätter du propen `expandable-attribute` till den egenskap i objektet som innehåller rader med expanderat innehåll.

Du använder role: treegrid för exapanderbara rader.

Givet följande struktur sätter du expandable-attribute till `myExpandableRow`:

// plats för kodexempel

### Följa existerande kolumner

För att skapa expanderbart innehåll som följer existerande kolumner måste du sätta `expandable-attribute` och du får inte använda slot `expandable`.
Innehållet följer då samma datastruktur som ordinarie rader.

Se nedan exempel av data som du kan använda för att generera en expanderbar rad som innehåller två tabellrader.

// plats för kodexempel

// plats för kodexempel

// plats för kodexempel

### Valfritt innehåll

För att själv ta kontroll över hur raden presenteras använder du sloten `expandable`. Ditt innehåll placeras i en cell som sträcker sig över hela raden och vad som ligger i datastrukturen behöver inte följa ordinarie rader.

Skapa inte ett för komplext expanderat innehåll som till exempel att placera ytterligare expanderbara tabeller inuti.

// plats för kodexempel

// plats för kodexempel

## Åtgärdsknappar och länkar

Åtgärdsknappar måste ha en etikett men etiketten behöver inte vara visuellt synlig. Etiketten behöver tydligt förklara åtgärden och kontext (exempelvis något som förklarar vilken rad som påverkas).
Kolumnens typ ska sättas till `action`.

// plats för kodexempel

// plats för kodexempel

Om etiketten ska vara synlig använder du propen `label`. En `<span>` med sr-only kan användas för att ge ytterligare kontext till skärmläsare:

// plats för kodexempel

// plats för kodexempel

Länkar i tabell använder `table__anchor`-klassen:

// plats för kodexempel

// plats för kodexempel

## Tomt läge i tabell

När tabellen är tom (finns inget innehåll att presentera) visas en text som informerar användaren om att tabellen är tom.
Du kan ändra texten för att bättre passa innehållet, till exempel "Det finns inga betalningar" eller "Ingen anslutning finns".
Texten sätts i slot `#empty`:

// plats för kodexempel

## Kryssruta/radioknapp

Användaren kan välja en eller flera rader i tabellen genom komponenterna kryssruta (länk) och radioknapp (länk).
Om du använder kryssruta (flerval) ingår även funktionen för bulkoperation (länk) i tabellen.
För att definiera kolumnen som kryssruta eller radioknapp, se avsnitt Kolumntyper (länk).

## Lägga till/ta bort rader

Tabellen har stöd för att lägga till och ta bort rader.

Exempel på tabell med knappar för ta bort/lägga till.

## Felhantering

Om ett fel uppstår vid hämtning av tabellens data kan du se till att ett felmeddelande visas med hjälp av `#empty`-sloten och en meddelanderuta (länk).

// plats för kodexempel

// plats för kodexempel

## Textnycklar

Läs mer om att (länk till translate-text, anpassa och översätta text).

:::api
translation:FTable
:::

## API

## FTable

:::api
vue:FTable
:::

## Relaterat

Datamängdsorteraren (länk som ska uppdateras)

{@link FTable Tabell}

{@link test-table Testning av tabell}
