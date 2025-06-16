---
name: FYear.fromDate
title: "FYear: fromDate() function"
short-title: fromDate()
layout: api.function
sortorder: 2
---

Skapar en ny `FYear` instans från ett existerande årtal.

## Syntax

```ts nocompile nolint
FYear.fromDate(value);
```

### Parametrar

`value: Date | FDate`
: Datum att skapa `FYear` från.

### Returvärde

En ny `FYear` instans.

## Exempel

```ts
import { FDate, FYear } from "@fkui/date";

const date = FDate.now();
const year = FYear.fromDate(date);
```
