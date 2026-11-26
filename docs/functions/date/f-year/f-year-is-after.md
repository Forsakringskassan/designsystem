---
name: FYear.isAfter
title: "FYear: isAfter() method"
short-title: isAfter()
layout: api.method
---

Jämför om årtalet ligger efter ett annat årtal.

## Syntax

```ts nocompile nolint
FYear.isAfter(rhs);
```

### Parametrar

`rhs: FYear | number | string`
: Årtal att jämföra med.

### Returvärde

`true` om `FYear` är efter angivet årtal.
Om årtalet är samma eller före returneras `false`.

## Exempel

```ts
import { FYear } from "@fkui/date";

const year = FYear.fromYear("2000");
console.log(year.isAfter(1999)); // => true
```
