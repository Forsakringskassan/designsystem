---
name: FYear.value
title: "FYear: value property"
short-title: value
layout: api
---

Hämtar det år som en `FYear` instans representerar.

## Syntax

```ts nocompile nolint
FYear.value: number;
```

## Exempel

```ts
import { FYear } from "@fkui/date";

const year = FYear.fromYear(1999);
console.log(year.value); // => 1999
```
