---
title: Tabellfunktioiner
status: Draft
layout: component
component:
    - FTable
search:
    terms:
        - expanderbara rader
        - expandera rader
        - bulkoperation
        - sortera
        - filtrera
        - redigera
        - lägga till
        - ta bort
---

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

Om användaren behöver lägga till och ta bort rader i tabellen får du som konsument sätta upp detta.

Tänk på att när användaren tar bort en rad ska cell få fokus enligt följande ordning:

- samma kolumnindex i rad ovanför den borttagna raden
- samma kolumnindex i rad nedanför den borttagna raden
- cell/rad för tomt läge i tabell.

Exempel på tabell med knappar för ta bort/lägga till.

### Sortera och filtrera

Med datamängsorteraren (FSortFilterDataset) kan du lägga till funktionalitet för sortering och filtrering i tabell.

Läs mer om hur du använder komponent {@link FSortFilterDataset datamängdsorteraren}.

### Relaterat
