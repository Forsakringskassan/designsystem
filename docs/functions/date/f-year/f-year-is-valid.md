---
name: FYear.isValid
title: "FYear: isValid() method"
short-title: isValid()
layout: api.method
---

Testar om året som en `FYear` instans representerar är giltigt.

## Syntax

```ts nocompile nolint
FYear.isValid();
```

### Returvärde

`true` om årtalet är giltigt.

## Exempel

```ts
import { FYear } from "@fkui/date";

console.log(FYear.fromYear("1999").isValid()); // => true
console.log(FYear.fromYear("foobar").isValid()); // => false
```
