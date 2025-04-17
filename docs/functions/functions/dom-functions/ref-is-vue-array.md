---
title: refIsVueArray
name: refIsVueArray
layout: content-with-menu
---

Verifies that a ref is an array containing at least one Vue component.

```ts nocompile
function refIsVueArray(value: unknown): value is ComponentPublicInstance[];
```

- `value` - The value to type check.

Returns `true` if the ref is a `Vue` (component) array with at least one item, otherwise false.
