---
title: refIsVue
name: refIsVue
layout: content-with-menu
---

Verifies that a ref is a single Vue component and nothing else.

```ts nocompile
function refIsVue(value: unknown): value is ComponentPublicInstance;
```

- `value` - The value to type check.

Returns `true` if the ref is a `Vue` (component), otherwise false.
