---
name: FFileItemPageObject.status
title: "FFileItemPageObject: status() method"
short-title: status()
layout: article
---

Används för att komma åt en statusens namn på brickan.

## Syntax

```ts nocompile nolint
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

## Relaterat

- {@link FBadge}
