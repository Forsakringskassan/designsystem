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
Tabeller kan antingen vara enkla tabeller för presentation eller vara mer avancerade tabeller med olika typer av interaktioner.

I en tabell har varje rad samma grupper av information som visas kolumnvis, till exempel namn, datum, belopp och diarienummer.

{@link table Här hittar du information om de gamla tabellkomponenerna datatabell och interaktiv tabell.}

Exempel på tabell.

## Navigering i tabell

Navigering i en tabell styrs av vilken role som tabellen har.

Presentera nedan i tabell?

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

Är slot `row-description` samma sak som radrubrik? Eller hör det ihop med rad-id?

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

### Felhantering

Om ett fel uppstår vid hämtning av tabellens data kan du se till att ett felmeddelande visas med hjälp av `#empty`-sloten och en meddelanderuta (länk).

```html compare=datatable-base
// plats för kodexmepel
```

```import nomarkup
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

## Props, Events & Slots

### FTableButton

:::api
vue:FTableButton
:::

### FTableColumn

:::api
vue:FTableColumn
:::

### FTable

:::api
vue:FTable
:::

## Relaterat
