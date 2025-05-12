---
title: Tabell
status: Produktionsklar
layout: component
sortorder: 1
component:
    - FDataTable
    - FInteractiveTable
    - FTableColumn
---

Använd en tabell när användaren behöver analysera och jämföra information strukturerad i rader och kolumner. Tabeller kan antingen vara enkla datatabeller för presentation, eller vara mer avancerade interaktiva tabeller.

I en tabell har varje rad samma grupper av information som visas kolumnvis, till exempel namn, datum, belopp och diarienummer.

## Datatabell

`FDataTable`

Använd för att endast presentera information.

```import live-example
FDataTableLiveExample.vue
```

### Användning

Komponenten har en prop `rows` som du sätter till de rader som ska presenteras.

Slotten `default` renderas för varje item i `rows` och har en slot attribute `row` som innehåller nuvarande rad.

Varje kolumn som tabellen ska innehålla skapas genom att använda komponenten `FTableColumn`.

```html static name=datatable-base
<f-data-table :rows="items">
    <template #caption> Awesome Table </template>
    <template #default="{ row }">
        <f-table-column title="Kolumnrubrik" type="text">
            {{ row.value }}
        </f-table-column>
    </template>
</f-data-table>
```

Innehåller cellen numeriska värden, datum eller annan data som inte är löptext bör du använd direktivet {@link FormatPlugin `v-format`} för att formatera och undvika radbryt i cellen.

```html compare=datatable-base
<f-data-table :rows="items">
    <template #caption> Awesome Table </template>
    <template #default="{ row }">
        <f-table-column
            title="Kolumnrubrik"
            type="numeric"
            v-format:number="row.value"
        ></f-table-column>
    </template>
</f-data-table>
```

## Interaktiv tabell

`FInteractiveTable`

Använd en interaktiv tabell när användaren behöver interagera med tabellen. Det kan handla om att välja, lägga till, ändra, ta bort en rad eller utföra andra åtgärder via knappar eller genom att klicka på hela raden.

```import live-example
FInteractiveTableLiveExample.vue
```

### Användning

Komponenten har en prop `rows` som du sätter till de rader som ska presenteras.

Slotten `default` renderas för varje item i `rows` och har en slot attribute `row` som innehåller nuvarande rad.

Varje kolumn som tabellen ska innehålla skapas genom att använda komponenten `FTableColumn`.

```html static name=interactivetable-base
<f-interactive-table :rows="items">
    <template #caption> Awesome Table </template>
    <template #default="{ row }">
        <f-table-column title="Kolumnrubrik" type="text">
            {{ row.value }}
        </f-table-column>
    </template>
</f-interactive-table>
```

Innehåller cellen numeriska värden, datum eller annan data som inte är löptext bör du använd direktivet {@link FormatPlugin `v-format`} för att formatera och undvika radbryt i cellen.

```html compare=interactivetable-base
<f-interactive-table :rows="items">
    <template #caption> Awesome Table </template>
    <template #default="{ row }">
        <f-table-column
            title="Kolumnrubrik"
            type="numeric"
            v-format:number="row.value"
        ></f-table-column>
    </template>
</f-interactive-table>
```

### Hantera rader

Med Datamängsredigeraren kan du lägga till funktionalitet för att skapa, ändra och ta bort rader i tabellen. Se komponent {@link FCrudDataset Datamängdredigeraren}

### Inmatning i tabell

Inmatningsfält kan placeras i en tabell för att direkt kunna redigera värdet i cellen.
Fältens standardetikett är visuellt dolda och ersätts av tabellrubrik för en seende användare, men inmatningfältets etikett läsas fortfarande upp av skärmläsare.
Fel vid fältvalidering i en tabell indikeras med varningstriangel och röd ram på samma sätt som fält i ett vanligt formulär men felmeddelandet visas i en popup.
Felmeddelandet visas när det felmarkerade fältet har fokus.

Följande inmatningfält kan användas:

- textbaserade inmatningsfält (FTextField) förutom sökfält
- datumväljare (FDatepickerField)
- dropplista (FSelectField).

```html static compare=interactivetable-base
<f-interactive-table :rows="items">
    <template #caption> Awesome Table </template>
    <template #default="{ row }">
        <f-table-column title="Utbetalningsdatum" type="text" shrink>
            <f-datepicker-field v-model="row.date" v-validation.required>
                Utbetalningsdatum
            </f-datepicker-field>
        </f-table-column>
    </template>
</f-interactive-table>
```

```import
FInteractiveTableInputExample.vue
```

### Välja rader

En interaktiv tabell med `selectable` prop lägger till kryssrutor som kan användas för att välja rader.
När en rad väljs uppdateras `v-model` med referens till alla rader som är valda.

```diff
-<f-interactive-table :rows="myRows">
 <f-interactive-table
+   v-model="selectedRows"
    :rows="myRows"
+   selectable
 >
```

Du kan även lägga till eller ta bort valda rader genom att ändra referenserna som skickas till `v-model`.
På så sätt kan du till exempel förvälja vissa rader eller skapa bulk-åtgärder som väljer vissa typer av rader.
Notera att `v-model` kräver referenser till objekt som du skickat till `rows` prop för att kunna välja dessa.

```ts
const rows = [
    { name: "Banan", type: "Frukt" },
    { name: "Äpple", type: "Frukt" },
    { name: "Vitkål", type: "Grönsak" },
    { name: "Spenat", type: "Grönsak" },
];

// Preselect all rows that are fruit type.
const selectedRows = rows.filter((row) => row.type === "Frukt");
```

## Expanderbara rader

Med expanderbara rader går det att skapa ytterligare tabellrader som visas när man trycker på en expanderbar rad.

Expanderbara rader kan presenteras på två sätt:

- Rader som följer existerande kolumner
- Rader med Valfritt innehåll

För båda varianterna gäller att du sätter propen `expandable-attribute` till den egenskap i objektet som innehåller rader med expanderat innehåll.

Givet följande struktur sätter man `expandable-attribute` till `myExpandableRow`:

```import static
expandable-rows-data.ts
```

### Följa existerande kolumner

För att skapa expanderbart innehåll som följer existerande kolumner så krävs det att `expandable-attribute` är satt och att `expandable` slot inte används.
Innehållet måste då följa samma datastruktur som ordinarie rader.

Se nedan exempel av data som kan användas för att generera en expanderbar rad som innehåller två tabellrader.

```import name=expandable-base hidden
FInteractiveTableExpandableBase.vue
```

```import compare=expandable-base
FInteractiveTableExpandableExample.vue
```

```import nomarkup name=expandable-default
FInteractiveTableExpandableExample.vue
```

### Valfritt innehåll

För att själv ta kontroll över hur raden presenteras kan du använda slotten `expandable`.
Ditt innehåll placeras i en cell som sträcker sig över hela raden och vad som ligger i datastrukturen behöver inte följa ordinarie rader.

::: info Observera

Det är inte rekommenderat att skapa för komplext expanderat innehåll, så som att placera ytterligare expanderbara tabeller inuti.

:::

```import compare=expandable-default
FInteractiveTableExpandableRows.vue
```

```import nomarkup
FInteractiveTableExpandableRows.vue
```

## Ange nyckel (`keyAttribute`)

Med `keyAttribute` så kan du ange namnet för en nyckel (`key`) som finns i varje rad-ojekt och innehåller ett värde som kan användas för att identifiera olika rader.
Om detta anges, så måste varje rad (även expanderade rader) innehålla denna nyckel med ett unikt värde.

Att använda `keyAttribute` är valfritt och behövs inte anges om du inte har nåt naturligt id att ange för dina rader.
Men om det är tänkt att dina rader ska laddas om från REST-api eller liknande så måste du använda `keyAttribute` för att aktuell status för raderna ska kunna bibehållas.

```diff
-<f-interactive-table :rows="myRows">
+<f-interactive-table :rows="myRows" key-attribute="id">
```

```ts
// The key "id" is used for "keyAttribute".
const myRows = [
    { id: "a", name: "Banan" },
    { id: "b", name: "Äpple" },
];
```

## Tabellrubrik

En tabell ska alltid ha en rubrik, antingen med caption-elementet eller en associerad heading.

Om tabellen har en heading i nära anslutning som också förklarar tabellens innebörd assoccierar du den med `aria-labelledby`:

```diff
-<h3>Tabellrubrik</h3>
-<f-data-table>
+<h3 id="awesome-heading">Tabellrubrik</h3>
+<f-data-table aria-labelledby="awesome-header">
   ...
 </f-data-table>
```

Använd caption om tabellen inte har en naturlig rubrik:

```diff
 <f-data-table>
+  <template #caption> Tabellrubrik </template>
   ...
 </f-data-table>
```

I undantagsfall kan du också använda en dold skärmläsartext i caption, men tänk på att tabellens innehåll måste vara begripligt för alla:

```diff
 <f-data-table>
+  <template #caption>
+    <span class="sr-only"> Tabellrubrik </span>
+  </template>
   ...
 </f-data-table>
```

## Tänk på det här

- Gör en ordentlig analys av vilken information som måste visas i tabellen. Målet bör vara att alla kolumner får plats på skärmen.
- Hjälp användaren att hitta i en tabell med mycket information genom att lägga till möjlighet att söka eller sortera. Använd komponent {@link FSortFilterDataset Datamängdssorteraren}
- Formatera datan i tabellen så den blir lätt att läsa. Använd med fördel {@link FormatPlugin} för att både formatera och undvika radbryt mitt i ett värde.

## Utforma en tabell

- Anpassa bredden på tabellen till innehållet, gör den inte bredare än den behöver vara. Samma princip gäller för kolumner.
- Tabellen kommer radbryta innehåll om det inte får plats. Använd istället skroll-funktionen om innehållet blir svårläst.
- Du kan ange vilka kolumner som tar maximal bredd och vilka som får ta minsta möjliga.
- Text i en tabellcell ska i regel vara vänsterställd. Undantag är belopp och andra numeriska värden som till exempel procent som ska visas högerställt för att lättare kunna jämföras.
- Använd zebra-randiga rader när du har långa och många rader.  Det gör det enklare att visuellt skanna av tabellen och följa rader.

### Skroll i tabell

För att lägga till skroll i tabell använder du prop `scroll`:

```diff
-<f-data-table :rows="items">
+<f-data-table :rows="items" scroll="horizontal">
     <template #default="{ row }">
         <!-- [...] -->
     </template>
 </f-data-table>
```

### Tomt läge i tabellen

Texten för en tom tabell går att anpassas till att bättre passa innehållet, till exempel "Det finns inga betalningar", "Ingen anslutning finns"
Texten sätts i slot `#empty`:

```diff
 <f-data-table :rows="items">
     <template #caption> Kända ankeborgare </template>
+    <template #empty> Det finns inga rättigheter </template>
     <template #default="{ row }">
         <!-- [...] -->
     </template>
 </f-data-table>
```

## Valbara rader

För interaktiv tabell kan rader kan göras valbara med propen `selectable`.
`v-model` kan användas för att komma åt lista med valda rader.

Slotten `checkbox-description` måste användas för att ge en beskrivning av kryssrutan för skärmläsare.
Texten bör innehålla något som tydligt identifierar raden från andra rader.

```html compare=interactivetable-base
<f-interactive-table :rows="items" selectable v-model="selectedRows">
    <template #caption> Awesome Table </template>
    <template #default="{ row }">
        <f-table-column title="Kolumnrubrik" type="text">
            {{ row.value }}
        </f-table-column>
    </template>
    <template #checkbox-description="{ row }">
        Välj rad {{ row.value }}
    </template>
</f-interactive-table>
```

```import nomarkup
FInteractiveTableSelectable.vue
```

## Radrubriker

Både datatabell och interaktiv tabell kan använda radrubriker utöver kolumnrubriker.
En radrubrik underlättar för skärmläsareanvändare genom att markera vilken eller vilka celler som utgör en rubrik och blir upplästa automatiskt när skärmläsaren navigerar i tabellen.

Använd radrubriker om det finns många kolumner och/eller en tydlig cell som identifierar rader från andra rader.

```html compare=datatable-base
<f-data-table :rows="items">
    <template #caption> Awesome Table </template>
    <template #default="{ row }">
        <f-table-column title="Kolumnrubrik" type="text" row-header>
            {{ row.value }}
        </f-table-column>
    </template>
</f-data-table>
```

```import nomarkup
TableRowHeader.vue
```

## Kolumnbredd

Kolumnents bredd justeras generellt sett av cellernas innehåll men med proparna `expand` och `shrink` kan du indikera att en kolumn ska använda så mycket eller så lite utrymme som möjligt.

- En kolumn med `expand` tar så mycket utrymme den kan.
- En kolumn med `shrink` tar så lite utrymme den kan.

Med `shrink` kommer cellernas innehåll att radbrytas om du inte använt direktivet {@link FormatPlugin `v-format`} eller på annat sätt förbindrat radbrytning.

Om flera kolumner har `expand` fördelas storleken godtycklingt efter webbläsarens preferens.

Om inget anges fungerar kolumnen som om `expand` är satt.
Det är ett fel att sätta både `expand` och `shrink` samtidigt.

```import live-example
ExpandShrinkExample.vue
```

## Kolumntyper

Kolumner har fyra olika typer som påverkar hur cellen presenteras:

- `text` (default) - standardformatering
- `date` - font med tabulär bredd på tecken.
- `numeric` - högerställt och font med tabular bredd på tecken.
- `action` - för kolumner som innehåller åtgärdsknappar.

Typen anges genom att sätta propen `type`:

```diff
-<f-table-column title="Kolumnrubrik">
+<f-table-column title="Kolumnrubrik" type="numeric">
```

## Textnycklar

Läs mer om att {@link translate-text anpassa och översätta text}.

:::api
translation:FDataTable
:::

:::api
translation:FInteractiveTable
:::

:::api
translation:FTableColumn
:::

## Props, Events & Slots

### FDataTable

Används för att presentera information
:::api
vue:FDataTable
:::

### FTableColumn

:::api
vue:FTableColumn
:::

### FInteractiveTable

:::api
vue:FInteractiveTable
:::
