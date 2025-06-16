---
name: FYear.fromYear
title: "FYear: fromYear() function"
short-title: fromYear()
layout: api.function
sortorder: 2
---

Skapar en ny `FYear` instans från ett existerande årtal.

## Syntax

```ts nocompile nolint
FYear.fromYear(value);
```

### Parametrar

`value: number | string`
: Årtal att skapa `FYear` från. Nummer eller sträng med fyra siffror.

### Returvärde

En ny `FYear` instans.

## Exempel

```ts
import { FYear } from "@fkui/date";

const year = FYear.fromYear(1999);
```
