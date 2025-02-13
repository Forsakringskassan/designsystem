---
name: FTooltipPageObject
title: "FTooltipPageObject: FTooltipPageObject() constructor"
short-title: FTooltipPageObject()
sortorder: 1
layout: article
---

Använd `FTooltipPageObject` för att hämta information relaterat till {@link FTooltip tooltip}.

## Syntax

```ts
new FTooltipPageObject(selector);
```

### Parametrar

`selector: string`
: Selector till `FLabel` elementet. Du kan med fördel använda {@link TestPlugin `v-test`} direktivet för din selector.

## Exempel

```import static
FTooltipPageObject.vue
```

```import
FTooltipPageObject.cy.ts
```

## Relaterat

- {@link FTooltip}
- {@link TestPlugin}
