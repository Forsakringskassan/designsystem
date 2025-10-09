---
title: Tabelldok
status: Draft
layout: component
component:
    - FTable
search:
    terms:
        - kolumn
        - rad
        - kolumnrubrik
        - radrubrik
        - kolumntyper
---

Använd en tabell när användaren behöver analysera och jämföra information strukturerad i rader och kolumner.
Tabeller kan antingen vara enkla tabeller för presentation eller vara mer avancerade tabeller med oliaka typer av interaktioner.
I en tabell har varje rad samma grupper av information som visas kolumnvis, till exempel namn, datum, belopp och diarienummer.
{@link table Här hittar du information om de gamla tabellkomponenerna datatabell och interaktiv tabell.}

Exempel på tabell.

## Utforma en tabell (egen sida)

När du ska utforma din tabell är det många saker att tänka på:

- Gör en ordentlig analys av vilken information som måste visas i tabellen.
  Målet bör vara att alla kolumner får plats på skärmen.
- Hjälp användaren att hitta i en tabell med mycket information genom att lägga till möjlighet att söka eller sortera.
  Använd komponent datamängdsorteraren.
- Formatera datan i tabellen så den blir lätt att läsa.
  Använd med fördel Format Plugin för att både formatera och undvika radbryt mitt i ett värde.
- Anpassa bredden på tabellen till innehållet, gör den inte bredare än den behöver vara.
  Samma princip gäller för kolumner.
- Du kan ange vilka kolumner som tar maximal bredd och vilka som får ta minsta möjliga. (länk)
- Text i en tabellcell ska i regel vara vänsterställd.
  Undantag är belopp och andra numeriska värden som till exempel procent som ska visas högerställt för att lättare kunna jämföras. (länk)
- Använd zebra-randiga rader när du har långa och många rader.
  Det gör det enklare att visuellt skanna av tabellen och följa rader.

Live-exmepel med

- zebra-randig
- expanderbara rader.

## Presentera data (egen sida)

Tabellen har en prop rows som du sätter till de rader som ska presenteras.

Slotten `default` renderas för varje item i `rows` och har en slot attribute `row` som innehåller nuvarande rad.

Varje kolumn som tabellen ska innehålla skapas genom att använda komponenten tabellkolumn (FTableColumn).

```html static name=table-base
// plats för kodexempel
```

Innehåller cellen numeriska värden, datum eller annan data som inte är löptext bör du använda direktivet `v-format` för att formatera och undvika radbryt i cellen.

```html compare=table-base
// plats för kodexempel
```

### Tabellrubrik

En tabell ska alltid ha en rubrik, antingen med caption-elementet eller en associerad heading.

Om tabellen har en heading i nära anslutning som också förklarar tabellens innebörd assoccierar du den med `aria-labelledby`:

```diff
// plats för kodexempel
```

Använd caption om tabellen inte har en naturlig rubrik:

```diff
// plats för kodexempel
```

I undantagsfall kan du också använda en dold skärmläsartext i caption, men tänk på att tabellens innehåll måste vara begripligt för alla:

```diff
// plats för kodexempel
```

### Kolumner och kolumnrubrik

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

### Radrubrik

Tabellen kan använda radrubriker utöver kolumnrubriker.
En radrubrik underlättar för användare med skärmläsare genom att markera vilken eller vilka celler som utgör en rubrik och blir upplästa automatiskt när skärmläsaren navigerar i tabellen.

Använd radrubriker om det finns många kolumner och/eller en tydlig cell som identifierar rader från andra rader.
För att definiera kolumnen som radrubrik, se avsnitt Kolumntyper (länk).

```html compare=datatable-base
// plats för kodexempel
```

Är exempel nedan aktuellt?

```import nomarkup
TableRowHeader.vue
```

### Kolumnbredder

Kolumnents bredd justeras generellt sett av cellernas innehåll men med proparna `expand` och `shrink` kan du indikera att en kolumn ska använda så mycket eller så lite utrymme som möjligt.

En kolumn med `expand` tar så mycket utrymme den kan.
En kolumn med `shrink` tar så lite utrymme den kan.
Med `shrink` kommer cellernas innehåll att radbrytas om du inte använder direktivet `v-format` (länk) eller på annat sätt förbindrar radbrytning.

Om flera kolumner har `expand` fördelas storleken godtycklingt efter webbläsarens preferens.

Om inget anges fungerar kolumnen som om `expand` är satt.
Det är fel att sätta både `expand` och `shrink` samtidigt.

Är exempel nedan aktuellt?

```import live-example
ExpandShrinkExample.vue
```

### Kolumntyper

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

```diff
// plats för kodexempel
```

### Rad-id

För att identifiera olika rader med ett värde kan du ange namnet för en nyckel (key) med `keyAttribute`. Nyckeln finns i varje radobjekt.  
Om du anger keyAttribute, måste varje rad (även expanderade rader) innehålla denna nyckel med ett unikt värde.

Att använda keyAttribute är valfritt och det behövs inte om det finns ett naturligt id att ange för dina rader.
Du måste använda keyAttribute om dina rader ska bibehålla aktuell status vid omladdning från REST-api eller liknande.

```diff
// plats för kodexempel
```

```ts
// plats för kodexempel
```

### Skroll

För att lägga till skroll i tabell använder du prop `scroll`:

```diff
// plats för kodexempel
```

### Expandera rader

Ska expanderbara rader ligga under utformning av tabell eller under tabellfunktioner?

### Tomt läge i tabell

När tabellen är tom (finns inget innehåll att presentera) visas en text som informerar användaren om att tabellen är tom.
Du kan ändra texten för att bättre passa innehållet, till exempel "Det finns inga betalningar" eller "Ingen anslutning finns".
Texten sätts i slot `#empty`:

```diff
// plats för kodexempel
```

### Textnycklar

Läs mer om att {@link translate-text anpassa och översätta text}.

:::api
translation:FTable
:::

:::api
translation:FTableColumn
:::

Fler som ska fyllas på?

## Navigering i tabell

Navigering i en tabell styrs av vilken role som tabellen har.

Presentera nedan i tabell.

Du sätter ingen role om tabellen enbart ska presentera data.
Om tabellen har expanderbara rader ska du sätta role:treegrid oavsett vilka andra funktioner som ingår i tabellen.
För tabeller som innehåller andra funktioner än expanderbara rader ska du sätta role:grid.
Det går inte att navigera till eller i en tabell som saknar role.
Användare med skärmläsare kommer kunna navigera i tabellen och få den uppläst förutsatt att du....(fråga)
Vid role:grid eller role:treegrid navigerar användren till tabellen genom tabbning.
När användaren tabbat sig till tabellen sker navigering inom tabellen med hjälp av piltangenterna.

### Tangentbordsnavigering

Tabellen har stöd för följande tangenter:

- pil upp: flyttar fokus till cell com ligger ovanför
- pil ner: flyttar fokus till cell som ligger nedanför
- högerpil: flyttar fokus till cell som ligger till höger
- vänsterpil: flyttar fokus till cell som ligger till vänster
- Home: flyttar fokus till första cellen i raden
- End: flyttar fokus till sista cellen i raden
- ctrl + Home: flyttar fokus till cell längst till vänster i översta raden
- ctrl + End: flyttar fokus till cell längst till höger i nedersta raden.

## Funktioner

### Välja en eller flera rader

Användaren kan välja en eller flera rader i tabellen genom komponenterna kryssruta (länk) och radioknapp (länk).
Om du använder flerval (kryssruta) ingår även funktionen för bulkoperation (länk) i tabellen.
För att definiera kolumnen som kryssruta eller radioknapp, se avsnitt Kolumntyper (länk).

### Expandera rader

Role: treegrid

Med expanderbara rader går det att skapa ytterligare tabellrader som visas när användaren trycker på en expanderbar rad.

Expanderbara rader kan presenteras på två sätt:

- rader som följer existerande kolumner
- rader med valfritt innehåll.

För båda varianterna sätter du propen `expandable-attribute` till den egenskap i objektet som innehåller rader med expanderat innehåll.

Givet följande struktur sätter du expandable-attribute till `myExpandableRow`:

```import static
// plats för kodexempel
```

#### Följa existerande kolumner

För att skapa expanderbart innehåll som följer existerande kolumner måste du sätta `expandable-attribute` och du får inte använda slot `expandable`.
Innehållet följer då samma datastruktur som ordinarie rader.

Se nedan exempel av data som du kan använda för att generera en expanderbar rad som innehåller två tabellrader.

```import name=expandable-base hidden
// plats för kodexempel
```

```import compare=expandable-base
// plats för kodexempel
```

```import nomarkup name=expandable-default
// plats för kodexempel
```

#### Valfritt innehåll

För att själv ta kontroll över hur raden presenteras använder du sloten `expandable`. Ditt innehåll placeras i en cell som sträcker sig över hela raden och vad som ligger i datastrukturen behöver inte följa ordinarie rader.

Skapa inte ett för komplext expanderat innehåll som till exempel att placera ytterligare expanderbara tabeller inuti.

```import compare=expandable-default
// plats för kodexempel
```

```import nomarkup
// plats för kodexempel
```

### Åtgärdsknappar och länkar

För att låta användaren utföra en operation på en rad kan du placera åtgärdsknappar i tabellen.
Åtgärdsknappar måste ha en etikett men etiketten behöver inte vara visuellt synlig. Etiketten behöver tydligt förklara åtgärden och kontext (exempelvis något som förklarar vilken rad som påverkas).
Kolumnens typ ska sättas till `action`.

```import static compare=interactivetable-base
// plats för kodexempel
```

```import nomarkup name=action-button
// plats för kodexempel
```

Om etiketten ska vara synlig använder du propen `label`. En `<span>` med sr-only kan användas för att ge ytterligare kontext till skärmläsare:

```import static compare=action-button
// plats för kodexempel
```

```import nomarkup
// plats för kodexempel
```

Länkar i tabell använder `table__anchor`-klassen:

```import static compare=interactivetable-base
// plats för kodexempel
```

```import nomarkup name=action-button
// plats för kodexempel
```

### Bulkoperation

Användaren kan göra bulkoperationer i tabell när ...

Om något ändras i tabellen kommer alla markeringar i kryssrutor tas bort och status för bulkoperation nollställs.
Till exempel innebär en filtrering och att lägga till/ta bort rader ändringar i tabelle.

### Redigera

För tabell finns det två typer av redigeringar

- inline-redigering: användaren redigerar direkt innehållet på en rad genom att stå i aktuell cell
- via formulär: användaren öppnar separat formulär/panel/modal för att redigera innehåll på rad.

Utvärdera först vilken typ av redigering som passar användaren bäst utifrån den utformning som tabellen har.
Tabell stödjer inline-redigering, men om det passar bättre med redigering via formulär/modal kan du lägga till det själv.

### Lägga till/ta bort rader

### Sortera och filtrera

Med datamängsorteraren (FSortFilterDataset) kan du lägga till funktionalitet för sortering och filtrering i tabell.

Läs mer om hur du använder komponent {@link FSortFilterDataset datamängdsorteraren}.
