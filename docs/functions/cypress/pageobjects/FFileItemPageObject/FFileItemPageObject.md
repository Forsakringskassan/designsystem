---
name: FFileItemPageObject
title: "FFileItemPageObject: FFileItemPageObject() constructor"
short-title: FFileItemPageObject()
sortorder: 1
layout: article
---

Använd `FFileItemPageObject` för att hämta information relaterat till {@link FFileItem filpresentatören }.

## Syntax

```ts nocompile nolint
new FFileItemPageObject(selector);
```

### Parametrar

`selector: string`
: Selector till `FFileItem` elementet. Du kan med fördel använda {@link TestPlugin `v-test`} direktivet för din selector.

## Exempel

```import static
FFileItemPageObject.vue
```

```import static
FFileItemPageObject.cy.ts
```

## Relaterat

- {@link FFileItem}
