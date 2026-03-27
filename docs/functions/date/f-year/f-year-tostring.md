---
name: FYear.toString
title: "FYear: toString() method"
short-title: toString()
layout: api.method
---

Formaterar årtal som sträng.

## Syntax

```ts nocompile nolint
FYear.toString();
```

### Returvärde

En sträng med årtalet.

## Exempel

```ts
import { FYear } from "@fkui/date";

const year = FYear.fromYear(1999);
console.log(year.toString()); // => "1999"
```
