---
title: getHTMLElementsFromVueRef
name: getHTMLElementsFromVueRef
layout: content-with-menu
---

Gets an array of `HTMLElement` items from a ref.
If there are none, the array returned will be empty rather than `undefined`.

```ts nocompile
function getHTMLElementsFromVueRef(ref: unknown): HTMLElement[];
```

- `ref` - The ref to extract `HTMLElement` items from.

Returns an `Array` of `HTMLElement` items.
Possibly empty.

Throws an error if an `HTMLElement` could not be found from a valid ref.
