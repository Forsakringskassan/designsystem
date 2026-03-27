---
name: FInteractiveTablePageObject.checkbox
title: "FInteractiveTablePageObject: checkbox() method"
short-title: checkbox()
layout: api.method
---

Hämtar ut page objekt för en kryssruta i en valbar {@link component:FInteractiveTable interaktiv tabell} (FInteractiveTable).

Radnumreringen är 1-indexerad och inkluderar rader som har expanderats i en expanderbar tabell.
Det innebär att om första raden är kollapsad refererar andra raden till nästa icke-expanderade rad.
Om första raden är expanderad refererar andra raden till den första expanderade raden under den första raden.

## Syntax

```ts nocompile nolint
checkbox(row);
```

### Parametrar

`row: number`
: Radnummer (1-indexerat).

### Returvärde

`FCheckboxFieldPageObject` med selektor för kryssrutan på den givna raden.

## Exempel

```import nomarkup
FInteractiveTablePageObject-checkbox.vue
```

```import static
FInteractiveTablePageObject-checkbox.vue
```

```import static
FInteractiveTablePageObject-checkbox.cy.ts
```

## Relaterat

- {@link component:FInteractiveTable Interaktiv tabell} (FInteractiveTable)
- {@link component:FCheckboxField Kryssruta} (FCheckboxField)
