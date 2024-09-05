---
title: itemEquals
name: itemEquals
layout: content-with-menu
---

(Odokumenterad funktion)

```ts
export function itemEquals<T extends object, K extends keyof T>(
    item1: ListItem<T> | undefined,
    item2: ListItem<T> | undefined,
    compareAttribute: K,
): boolean;
```
