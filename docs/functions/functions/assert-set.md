---
title: assertSet() function
short-title: assertSet()
name: assertSet
layout: api.function
---

[Assertion funktion][ts-handbook] för att säkerställa att ett värde är satt.
Alla värden skiljt från `null` och `undefined` anses vara satta inklusive värden så som `0` eller `""`.

Kastar `MissingValueError` om värdet inte är satt.

::: warning Tänk på att

Assertion funktioner använder vi bara i de fall där det är bättre att applikationen kraschar om villkoret inte är uppfyllt.

Om värdet kan vara `null` eller `undefined` i normalfall så är det bättre att använda andra lösningar så som null-checks eller default värden.

:::

[ts-handbook]: https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-7.html#assertion-functions

## Syntax

```ts nocompile
function assertSet<T>(value, message);
```

## Parametrar

`value: T | undefined | null`
: Värde att säkerställa att det är satt.

`message: string` {@optional}
: Anpassat felmeddelande till exception om testet misslyckas.

## Användning

```ts
declare function maybeGetValue(): string | null;

/* --- cut above --- */

import { assertSet } from "@fkui/logic";

function useValue(value: string): void {
    /* ... */
}

const value = maybeGetValue();
//            ^?    string | null

assertSet(value);
useValue(value); // OK value cannot be null after call to assertSet()
```

## Relaterat

- `ensureSet()` - returnerar non-null värde eller kastar exception.
