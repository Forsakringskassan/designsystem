---
name: FLabelPageObject
title: "FLabelPageObject: FLabelPageObject() constructor"
short-title: FLabelPageObject()
sortorder: 1
layout: article
---

Använd `FLabelPageObject` för att skaffa information relaterat till etikett (`label`-elementet).

Komponenten används internt av andra komponenter där en etikett ingår.
Dessa komponenter brukar därför ha en metod för att nå detta pageobjektet i sina respektive pageobjekt,
t ex `FTextFieldPageObject.label`.

## Syntax

```ts nocompile nolint
new FLabelPageObject(selector);
```

### Parametrar

`selector: string`
: Selector till `FLabel` elementet. Du kan med fördel använda {@link TestPlugin `v-test`} direktivet för din selector.

## Exempel

```import static
FLabelPageObject.vue
```

```import
FLabelPageObject.cy.ts
```

## Relaterat

- {@link FLabel}
- {@link TestPlugin}
