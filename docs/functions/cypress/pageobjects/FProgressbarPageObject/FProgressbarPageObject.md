---
name: FProgressbarPageObject
title: "FProgressbarPageObject: FProgressbarPageObject() constructor"
short-title: FProgressbarPageObject
sortorder: 1
layout: article
---

Använd `FProgressbarPageObject` för att hämta information relaterat till komponenten {@link FProgressbar förloppsindikator} (`FProgressbar`).

## Syntax

```ts name=syntax nocompile nolint
new FProgressbarPageObject(selector);
```

### Parametrar

`selector: string` {@optional}
: Selector till det `FProgressbar`-element som avses testas.

    Du kan med fördel använda direktivet {@link TestPlugin `v-test`} för din selector.

    Default: `.progress`.

## Exempel

```import static
FProgressbarPageObject.vue
```

```import
FProgressbarPageObject.cy.ts
```

## Relaterat

- {@link FProgressbar Förloppsindikator} (`FProgressbar`)
- {@link TestPlugin}
