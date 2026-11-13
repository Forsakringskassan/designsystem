---
name: FInteractiveTablePageObject.selectable
title: "FInteractiveTablePageObject: selectable() method"
short-title: selectable()
layout: api.method
redirect_from:
	- functions/cypress/pageobjects/FInteractiveTablePageObject/checkbox.html
---

`FInteractiveTablePageObject` är deprekerad.
Migrera tabellen till `FTable` och använd därefter `FTablePageObject.selectInput()`.

Hämtar ut input-elementet (kryssruta eller radioknapp) för en rad i en valbar {@link component:FInteractiveTable interaktiv tabell} (FInteractiveTable).

Radnumreringen är 1-indexerad och inkluderar rader som har expanderats i en expanderbar tabell.
Det innebär att om första raden är kollapsad refererar andra raden till nästa icke-expanderade rad.
Om första raden är expanderad refererar andra raden till den första expanderade raden under den första raden.

## Syntax

```ts nocompile nolint
selectable(row);
```

### Parametrar

`row: number`
: Radnummer (1-indexerat).

### Returvärde

`<input>`-elementet på den givna raden.

## Exempel

```import nomarkup
FInteractiveTablePageObject-selectable.vue
```

```import static
FInteractiveTablePageObject-selectable.vue
```

```import static
FInteractiveTablePageObject-selectable.cy.ts
```

## Relaterat

- {@link component:FInteractiveTable Interaktiv tabell} (FInteractiveTable)
- {@link component:FCheckboxField Kryssruta} (FCheckboxField)
