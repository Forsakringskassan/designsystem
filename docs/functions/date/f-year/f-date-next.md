---
name: FYear.next
title: "FYear: next() method"
short-title: next()
layout: api.method
---

Hämtar en ny `FYear` instans med nästkommande år.

## Syntax

```ts nocompile nolint
FYear.next();
```

### Returvärde

En ny `FYear` instans med det nya årtalet.

## Exempel

```ts
import { FYear } from "@fkui/date";

const year = FYear.fromYear("1999");
const prev = year.next(); // => 2000
```
