---
name: "FBadge"
title: "FFileItemPageObject"
layout: article
---

<!--Metod 1-->

## Inverted() method

Används för att komma åt status om brickan är inverterad eller inte.

## Syntax

```ts
inverted();
```

### Returvärde

`Boolean` ger tillbaka status på brickan om den är inverterad eller inte.

## Exempel

```import static
FBadgePageObject-is-inverted.vue
```

```import
FBadgePageObject-is-inverted.cy.ts
```

<!--Metod 2 -->

## status() method

Används för att komma åt en statusens namn på brickan.

## Syntax

```ts
status();
```

### Returvärde

`String` som innehåller en del av klassnamnet på brickans namn som `default`, `warning`, `error`, `success` eller `info`.

## Exempel

```import static
FBadgePageObject-status.vue
```

```import
FBadgePageObject-status.cy.ts
```

<!--Metod 3-->

## FBadgePageObject() method

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
