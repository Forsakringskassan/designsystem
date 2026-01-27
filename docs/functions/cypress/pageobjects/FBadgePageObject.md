---
name: "FBadgePageObject"
title: "FBadgePageObject"
layout: api.class
---

`FBadgePageObject` är ett page object som används för att hämta information och interagera med {@link FBadge}-brickor i tester.

## FBadgePageObject()

Skapar ett nytt Cypress-pageobjekt.

### Syntax

```ts nocompile nolint
new FBadgePageObject(selector);
```

### Parametrar

`selector: string`
: Selector till `FBadge` elementet. Du kan med fördel använda {@link TestPlugin `v-test`} direktivet för din selector.

```import
FBadgePageObject.cy.ts
```

<!--Metod 2 -->

## isInverted

Returnerar om brickan är inverterad eller inte.

### Syntax

```ts
isInverted();
```

#### Returvärde

`Boolean` Returnerar true om brickan är inverterad, annars false.

### Exempel

```import static
FBadgePageObject-is-inverted.vue
```

```import
FBadgePageObject-is-inverted.cy.ts
```

<!--Metod 3-->

## status

Returnerar statusnamnet för brickan,

### Syntax

```ts
status();
```

#### Returvärde

`String` sReturnerar en del av klassnamnet som representerar statusen t.ex. `default`, `warning`, `error`, `success` eller `info`.

### Exempel

```import static
FBadgePageObject-status.vue
```

```import
FBadgePageObject-status.cy.ts
```

## Relaterat

- {@link FBadge}
- {@link TestPlugin}
