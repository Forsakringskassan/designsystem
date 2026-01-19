---
title: FTablePageObject
layout: api.class
---

Använd `FTablePageObject` för att hämta information relaterat till `FTable` komponenten.

## FTablePageObject()

### Syntax

```ts name=syntax nocompile nolint
new FTablePageObject(selector);
```

#### Parametrar

`selector: string` {@optional}
: Selector till det `FTable`-element som avses testas.

    Du kan med fördel använda direktivet `v-test` för din selector.

    Default: `.table-ng`.

### Exempel

```import static
FTablePageObject.vue
```

```import
FTablePageObject.cy.ts
```

## cell()

Hämtar en tabellcell.

Både rad och kolumn är 1-indexerade.

Kolumnnumreringen inkluderar kolumnen för expanderingsknapparna i en expanderbar tabell eller kolumnen för checkboxarna/radioknapparna i en valbar tabell.

För expanderbara rader beror radnummer på om rader är expanderade eller ej.
Om man anger rad 2 när rad 1 är kollapsad så refererar det till nästa ej expanderade rad under rad 1.
Men om rad 1 är expanderad refererar rad 2 till den första expanderade raden under rad 1.

### Syntax

```ts nocompile nolint
cell(descriptor);
```

#### Parametrar

`descriptor`
: Rad och kolumn

    `row: number`
    : Radnummer (1-indexerat).

    `col: number`
    : Kolumnnummer (1-indexerat).

#### Returvärde

`HTMLTableCellElement` med tabellcellen beskriven av `descriptor`.

### Exempel

```import static
FTablePageObject-cell.vue
```

```import static
FTablePageObject-cell.cy.ts
```

## el()

Hämtar tabellens root-element.

### Syntax

```ts name=syntax nocompile nolint
el();
```

#### Returvärde

`HTMLElement` för tabellen.

### Exempel

```import static
FTablePageObject-el.vue
```

```import
FTablePageObject-el.cy.ts
```

## expandButton()

Hämtar expanderingsknappen i en expanderbar tabell.

Radnumreringen är 1-indexerade och inkluderar expanderade rader.
Notera att expanderade rader ej har någon expanderingsknapp och bör därför inte väljas med denna metod.

### Syntax

```ts nocompile nolint
expandButton(row);
```

#### Parametrar

`row: number`
: Radnummer (1-indexerat).

#### Returvärde

`HTMLButtonElement` med expanderingsknappen beskriven av `row`.

### Exempel

```import static
FTablePageObject-expandButton.vue
```

```import static
FTablePageObject-expandButton.cy.ts
```

## footer()

Hämtar tabellens footer.

### Syntax

```ts nocompile nolint
footer();
```

#### Returvärde

`HTMLTableSectionElement` för tabellens footer.

### Exempel

```import static
FTablePageObject-footer.vue
```

```import static
FTablePageObject-footer.cy.ts
```

## header()

Hämtar en cell i tabellhuvudet.

Kolumnumreringen är 1-indexerad och inkluderar kolumnen för expanderingsknapparna i en expanderbar tabell och kolumnen för checkboxarna/radioknapparna i en valbar tabell.

### Syntax

```ts nocompile nolint
header(col);
```

#### Parametrar

`col: number`
: Kolumnnummer (1-indexerat).

#### Returvärde

`HTMLTableCellElement` med en cell från tabellhuvudet beskriven av `col`.

### Exempel

```import static
FTablePageObject-header.vue
```

```import static
FTablePageObject-header.cy.ts
```

## headerDescription()

Hämtar en kolumnbeskrivning från tabellhuvudet.

Kolumnumreringen är 1-indexerad och inkluderar kolumnen för expanderingsknapparna i en expanderbar tabell och kolumnen för checkboxarna/radioknapparna i en valbar tabell.

### Syntax

```ts nocompile nolint
header(col);
```

#### Parametrar

`col: number`
: Kolumnnummer (1-indexerat).

#### Returvärde

`HTMLElement` som innehåller kolumnbeskrivning beskriven av `col`.

### Exempel

```import static
FTablePageObject-headerTitle.vue
```

```import static
FTablePageObject-headerTitle.cy.ts
```

## headerTitle()

Hämtar en kolumntitel från tabellhuvudet.

Kolumnumreringen är 1-indexerad och inkluderar kolumnen för expanderingsknapparna i en expanderbar tabell och kolumnen för checkboxarna/radioknapparna i en valbar tabell.

### Syntax

```ts nocompile nolint
header(col);
```

#### Parametrar

`col: number`
: Kolumnnummer (1-indexerat).

#### Returvärde

`HTMLElement` som innehåller en kolumntitel beskriven av `col`.

### Exempel

```import static
FTablePageObject-headerTitle.vue
```

```import static
FTablePageObject-headerTitle.cy.ts
```

## rows()

Hämtar alla synliga rader i tabellen.

Inkluderar expanderade rader.

### Syntax

```ts nocompile nolint
rows();
```

#### Returvärde

`HTMLTableRowElement` för alla synliga rader.

### Exempel

```import static
FTablePageObject-rows.vue
```

```import static
FTablePageObject-rows.cy.ts
```

## selectHeaderInput()

Hämtar checkboxen för bulkoperation från kolumnhuvudet för en flervalstabell.

Notera att denna metod kan endast användas om tabellen är en flervalstabell (den använder `selectable="multi"`).

### Syntax

```ts nocompile nolint
selectHeaderInput();
```

#### Returvärde

`HTMLInputElement` med checkboxen för bulkoperation.

### Exempel

```import static
FTablePageObject-selectHeaderInput.vue
```

```import static
FTablePageObject-selectHeaderInput.cy.ts
```

## selectInput()

Hämtar inmatning för att välja en rad i en valbar tabell.

För en flervalstabell så är inmatningselementet en checkbox, annars en radioknapp.

Radnumreringen är 1-indexerad och inkluderar expanderade rader.

### Syntax

```ts nocompile nolint
selectInput(row);
```

#### Parametrar

`row: number`
: Radnummer (1-indexerat).

#### Returvärde

`HTMLInputElement` med checkbox eller radioknapp för en valbar tabell.

### Exempel

```import static
FTablePageObject-selectInput.vue
```

```import static
FTablePageObject-selectInput.cy.ts
```

## selectDropdownOption()

Hämtar ett alternativ från en cell med en öppen dropplista.

Alternativnumreringen är 1-indexerad.

Dropplistans element teleporteras och använder därav inte `selector`.
Se därför till att inte flera dropplistor är öppna samtidigt vid test.

### Syntax

```ts nocompile nolint
selectDropdownOption(option);
```

#### Parametrar

`option: number`
: Alternativnummer (1-indexerat).

#### Returvärde

`HTMLElement` med ett alternativ för dropplistan.

### Exempel

```import static
FTablePageObject-selectDropdownOption.vue
```

```import static
FTablePageObject-selectDropdownOption.cy.ts
```
