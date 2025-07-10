---
title: refIsElementArray
name: refIsElementArray
layout: content-with-menu
search:
    terms:
        - DOM-funktion
---

Verifies that a ref is an array containing at least one `Element`.

```ts nocompile
function refIsElementArray(value: unknown): value is Element[];
```

- `value` - The value to type check.

Returns `true` if the ref is an `Element` array with at least one item, otherwise false.
