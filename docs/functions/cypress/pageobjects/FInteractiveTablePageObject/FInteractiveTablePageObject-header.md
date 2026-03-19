---
name: FInteractiveTablePageObject.header
title: "FInteractiveTablePageObject: header() method"
short-title: header()
layout: api.method
---

Hämtar en cell i tabellhuvudet för en {@link component:FInteractiveTable interaktiv tabell} (FInteractiveTable).

Kolumnumreringen är 1-indexerad och varken markören för expanderbara rader eller kryssrutan för valbara rader inkluderas i kolumnnummer. Detta innebär att kolumn 1 refererar till första kolumnen som har innehåll.

## Syntax

```ts nocompile nolint
header(col);
```

### Parametrar

`col: number`
: Kolumnnummer (1-indexerat).

### Returvärde

`HTMLTableCellElement` med en cell från tabellhuvudet beskriven av `col`.

## Exempel

```import nomarkup
FInteractiveTablePageObject-header.vue
```

```import static
FInteractiveTablePageObject-header.vue
```

```import static
FInteractiveTablePageObject-header.cy.ts
```

## Relaterat

- {@link component:FInteractiveTable Interaktiv tabell} (FInteractiveTable)
