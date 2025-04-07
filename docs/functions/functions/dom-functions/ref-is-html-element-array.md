---
title: refIsHTMLElementArray
name: refIsHTMLElementArray
layout: content-with-menu
---

Verifies that a ref is an array containing at least one `HTMLElement`.

```ts nocompile
function refIsHTMLElementArray(value: unknown): value is HTMLElement[];
```

- `value` - The value to type check.

Returns `true` if the ref is an `HTMLElement` array with at least one item, otherwise false.
