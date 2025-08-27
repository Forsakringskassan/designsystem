---
name: FDefinitionListPageObject
title: "FDefinitionListPageObject: constructor"
short-title: FDefinitionListPageObject()
sortorder: 1
layout: article
---

`FDefinitionListPageObject` är ett Cypress pageobjekt för {@link FDefinitionList definitionslista }.

## Syntax

```ts nocompile nolint
new FDefinitionListPageObject(selector);
```

### Parametrar

`selector: string`
: Selector till elementet. Du kan med fördel använda direktivet {@link TestPlugin `v-test`} för din selector.

## Exempel

```import static
FDefinitionListPageObject.vue
```

```import
FDefinitionListPageObject.cy.ts
```

## Relaterat

- {@link FDefinitionList}
- {@link TestPlugin}
