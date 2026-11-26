---
name: FYear.compare
title: "FYear: compare() function"
short-title: compare()
layout: api.function
---

Jämför om två årtal är samma, före eller efter varandra.

Kompatibel med `Array.sort()`.

## Syntax

```ts nocompile nolint
FYear.compare(a, b);
```

### Parametrar

`a: FYear | number | string`
: Första årtalet

`b: FYear | number | string`
: Andra årtalet

### Returvärde

- Ett negativt tal om `a` är före `b`.
- Ett positivt tal om `b` är före `a`.
- `0` om `a` och `b` är samma årtal.

## Exempel

```ts
import { FYear } from "@fkui/date";

const years = [
    FYear.fromYear(1999),
    FYear.fromYear(1985),
    FYear.fromYear(2024),
    FYear.fromYear(2008),
    FYear.fromYear(2004),
];
years.sort(FYear.compare);
console.log(years); // => [1985, 1999, 2004, 2008, 2024]
```
