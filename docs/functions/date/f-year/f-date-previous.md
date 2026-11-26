---
name: FYear.previous
title: "FYear: previous() method"
short-title: previous()
layout: api.method
---

Hämtar en ny `FYear` instans med föregående år.

## Syntax

```ts nocompile nolint
FYear.previous();
```

### Returvärde

En ny `FYear` instans med det nya årtalet.

## Exempel

```ts
import { FYear } from "@fkui/date";

const year = FYear.fromYear("1999");
const prev = year.previous(); // => 1998
```
