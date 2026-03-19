---
name: FYear.isBefore
title: "FYear: isBefore() method"
short-title: isBefore()
layout: api.method
---

Jämför om årtalet ligger före ett annat årtal.

## Syntax

```ts nocompile nolint
FYear.isBefore(rhs);
```

### Parametrar

`rhs: FYear | number | string`
: Årtal att jämföra med.

### Returvärde

`true` om `FYear` är före angivet årtal.
Om årtalet är samma eller efter returneras `false`.

## Exempel

```ts
import { FYear } from "@fkui/date";

const year = FYear.fromYear("1999");
console.log(year.isBefore(2000)); // => true
```
