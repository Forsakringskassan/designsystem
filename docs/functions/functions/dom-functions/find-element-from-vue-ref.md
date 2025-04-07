---
title: findElementFromVueRef
name: findElementFromVueRef
layout: content-with-menu
---

Find an `Element` from a ref, provided it is defined and not an array.

```ts nocompile
function findElementFromVueRef(ref: unknown): Element | undefined;
```

- `ref` - The ref to extract `Element` from.

Returns an `Element` if ref is `Vue` or `Element`.
Otherwise `undefined`.
