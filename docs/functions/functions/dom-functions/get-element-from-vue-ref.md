---
title: getElementFromVueRef
name: getElementFromVueRef
layout: content-with-menu
---

Gets an `Element` a ref, provided it is defined and not an array.

```ts nocompile
function getElementFromVueRef(ref: unknown): Element | never;
```

- `ref` - The ref to extract the `Element` from.

Returns an `Element` if ref is `Vue` or `Element`.

Throws an error if an `Element` could not be found.
