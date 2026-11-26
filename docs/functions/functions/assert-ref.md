---
title: assertRef() function
short-title: assertRef()
name: assertRef
layout: api.function
---

[Assertion funktion][ts-handbook] för att säkerställa att ett nullable Vue ref håller ett icke-null värde.
Vanligtvis används den med template refs men vilken nullable ref som helst kan användas.

Kastar `MissingValueError` om referensen håller `null` eller `undefined`, eller om referensen i sig är `null` eller `undefined`.

::: warning Tänk på att

Assertion funktioner använder vi bara i de fall där det är bättre att applikationen kraschar om villkoret inte är uppfyllt.

Om referensen kan vara `null` eller `undefined` i normalfall så är det bättre att använda andra lösningar så som null-checks eller default värden.

:::

[ts-handbook]: https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-7.html#assertion-functions

## Syntax

```ts nocompile
function assertRef<T>(ref, message);
```

## Parametrar

`ref: Ref<T | null | undefined> | undefined | null`
: Vue ref att säkerställa att den håller ett icke-null värde.

`message: string` {@optional}
: Anpassat felmeddelande till exception om testet misslyckas.

## Användning

```ts
interface Ref<T> {
    value: T;
}

interface HTMLElement {
    tagname: string;
}

declare function useTemplateRef(ref: string): Ref<HTMLElement | null>;

/* --- cut above --- */

import { assertRef } from "@fkui/logic";

function useRef(element: Ref<HTMLElement>): void {
    /* ... */
}

const element = useTemplateRef("foo");
//              ^?    Ref<HTMLElement | null>

assertRef(element);
useRef(element); // OK ref cannot be null after call to assertRef()
```
