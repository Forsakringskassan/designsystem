---
name: FYear.toJSON
title: "FYear: toJSON() method"
short-title: toJSON()
layout: api.method
---

Serialiserar årtal som JSON.

## Syntax

```ts nocompile nolint
FYear.toJSON();
```

### Returvärde

Ett JSON värde som representerar årtalet.

## Exempel

```ts
import { FYear } from "@fkui/date";

const year = FYear.fromYear(1999);
console.log(year.toJSON()); // => 1999
```
