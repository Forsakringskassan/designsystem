---
title: refIsElement
name: refIsElement
layout: content-with-menu
---

Verifies that a ref is a single `Element` and nothing else.

```ts
export function refIsElement(value: unknown): value is Element;
```

- `value` - The value to type check.

Returns `true` if the ref is an `Element`, otherwise false.
