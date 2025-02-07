---
title: getElementsFromVueRef
name: getElementsFromVueRef
layout: content-with-menu
---

Gets an array of `Element` items from a ref.
If there are none, the array returned will be empty rather than `undefined`.

```ts nocompile
function getElementsFromVueRef(ref: unknown): Element[];
```

- `ref` - The ref to extract `Element` items from.

Returns An `Array` of `Element` items.
Possibly empty.
