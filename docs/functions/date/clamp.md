---
title: clamp() function
short-title: clamp()
name: clamp
layout: api.function
---

Begränsar ett datumvärde till att ligga mellan två gränsvärden.

## Syntax

```ts nocompile nolint
function clamp(value, min, max);
```

### Parametrar

`value: T`
: Värdet att begränsa.

`min: T`
: Nedre gränsvärde (inklusive).

`max: T`
: Övre gränsvärde (inklusive).

`T`
: Ett datumobjekt från `@fkui/date`, exempelvis `FDate` eller {@link FYear `FYear`}.

### Returvärde

Ett värde mellan `min` och `max` (inklusive).

## Exempel

```ts
import { FDate, clamp } from "@fkui/date";

const min = FDate.fromIso("2004-08-01");
const max = FDate.fromIso("2007-05-31");

clamp(FDate.fromIso("2005-12-31"), min, max); // -> FDate { 2005-12-31 } in range
clamp(FDate.fromIso("2004-07-31"), min, max); // -> FDate { 2004-08-01 } min
clamp(FDate.fromIso("2007-06-01"), min, max); // -> FDate { 2007-05-31 } max
```
