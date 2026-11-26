---
name: FYear.equals
title: "FYear: equals() method"
short-title: equals()
layout: api.method
---

Jämför om ett annat årtal är samma årtal.

## Syntax

```ts nocompile nolint
FYear.equals(rhs);
```

### Parametrar

`rhs: FYear | number | string`
: Årtal att jämföra med.

### Returvärde

`true` om båda årtal är samma.

## Exempel

```ts
import { FYear } from "@fkui/date";

const year = FYear.fromYear("1999");
console.log(year.equals(1999)); // => true
```
