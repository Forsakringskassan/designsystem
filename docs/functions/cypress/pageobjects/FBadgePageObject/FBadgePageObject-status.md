---
name: FBadgePageObject.status
title: "FBadgePageObject: status() method"
short-title: status()
layout: api.method
---

Get badge variant.

## Syntax

```ts nocompile nolint
status();
```

### Returvärde

`Cypress.Chainable<string>`

A string with the badge variant:

- `default`
- `warning`
- `error`
- `success`
- `info`

## Exempel

```import static
FBadgePageObject-status.vue
```

```import
FBadgePageObject-status.cy.ts
```

## Relaterat

- {@link FBadge}
