---
name: FListItemPageObject
title: "FListItemPageObject: FListItemPageObject() constructor"
short-title: FListItemPageObject()
sortorder: 1
layout: api.class
---

## Syntax

```ts nocompile nolint
new FListItemPageObject(selector, index);
```

### Parametrar

`selector: string`
: the root of the li, usually `<li class="list__item">...</li>`.
`index: number`
: the index of matched li:s.

## Exempel

```import static
FListItemPageObject.vue
```

```import
FListItemPageObject.cy.ts
```
