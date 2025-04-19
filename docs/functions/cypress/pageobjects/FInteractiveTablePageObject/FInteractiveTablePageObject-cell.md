---
name: FInteractiveTablePageObject.cell
title: "FInteractiveTablePageObject: cell() method"
short-title: cell()
layout: api.method
---

Hämtar en tabellcell från en {@link component:FInteractiveTable interaktiv tabell} (FInteractiveTable).

Både rad och kolumn är 1-indexerade, dvs rad 1 kolumn 1 refererar till första cellen.

Varken markören för expanderbara rader eller kryssrutan för valbara rader inkluderas i kolumnnummer, dvs kolumn 1 refererar till första cellen med innehåll.

För expanderbara rader beror radnummer på om rader är expanderade eller ej.
Om första raden är kollapsad refererar andra raden till nästa icke-expanderade rad medans om första raden är expanderd refererar andra raden till första expanderade raden under den första raden.

## Syntax

```ts nocompile nolint
cell(descriptor);
```

### Parametrar

`descriptor`
: Rad och kolumn

    `row: number`
    : Radnummer (1-indexerat).

    `col: number`
    : Kolumnnummer (1-indexerat).

### Returvärde

`HTMLTableCellElement` med tabellcellen beskriven av `descriptor`.

## Exempel

```import nomarkup
FInteractiveTablePageObject-cell.vue
```

```import static
FInteractiveTablePageObject-cell.vue
```

```import static
FInteractiveTablePageObject-cell.cy.ts
```

## Relaterat

- {@link component:FInteractiveTable Interaktiv tabell} (FInteractiveTable)
