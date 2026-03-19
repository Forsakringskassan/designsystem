---
name: FYear.now
title: "FYear: now() function"
short-title: now()
layout: api.function
sortorder: 2
---

Skapar en ny `FYear` instans från dagens datum.

## Syntax

```ts nocompile nolint
FYear.now();
```

### Returvärde

En ny `FYear` instans.

## Exempel

```ts
import { FYear } from "@fkui/date";

const currentYear = FYear.now();
```
