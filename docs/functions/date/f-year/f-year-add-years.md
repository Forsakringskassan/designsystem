---
name: FYear.addYears
title: "FYear: addYears() method"
short-title: addYears()
layout: api.method
---

Ökar/minskar årtalet en `FYear` instans representerar.

- Positiva heltal ökar årtalet.
- Negativa heltal minskar årtalet.

## Syntax

```ts nocompile nolint
FYear.addYears(amount);
```

### Parametrar

`amount: number`
: Antal år att öka/minska.

### Returvärde

En ny `FYear` instans med det nya årtalet.

## Exempel

```ts
import { FYear } from "@fkui/date";

const year = FYear.fromYear("1999");
const next = year.addYears(1); // => 2000
const prev = year.addYears(-1); // => 1998
```
