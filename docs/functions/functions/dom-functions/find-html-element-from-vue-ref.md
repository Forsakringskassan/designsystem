---
title: findHTMLElementFromVueRef
name: findHTMLElementFromVueRef
layout: content-with-menu
---

Find an `HTMLElement` from a ref, provided it is defined and not an array.

```ts nocompile
function findHTMLElementFromVueRef(ref: unknown): HTMLElement | undefined;
```

- `ref` - The ref to extract `HTMLElement` from.

Returns an `HTMLElement` if ref is `Vue` or `HTMLElement`.
Otherwise `undefined`.
