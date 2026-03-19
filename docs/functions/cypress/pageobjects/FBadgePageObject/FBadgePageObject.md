---
name: FBadgePageObject
title: "FBadgePageObject: FBadgePageObject() constructor"
short-title: FBadgePageObject()
sortorder: 1
layout: article
---

Använd `FBadgePageObject` för att hämta information relaterat till {@link FBadge bricka }.

## Syntax

```ts nocompile nolint
new FBadgePageObject(selector);
```

### Parametrar

`selector: string`
: Selector till `FBadge` elementet. Du kan med fördel använda {@link TestPlugin `v-test`} direktivet för din selector.

## Exempel

```import static
FBadgePageObject.vue
```

```import
FBadgePageObject.cy.ts
```

## Relaterat

- {@link FBadge}
- {@link TestPlugin}
