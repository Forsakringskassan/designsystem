---
title: includeItem
name: includeItem
layout: content-with-menu
---

(Odokumenterad funktion)

```ts
export function includeItem<T extends object, K extends keyof T>(
    item: ListItem<T> | undefined,
    itemList: ListArray<T> | undefined,
    compareAttribute: K,
): boolean;
```
