---
name: FProgressbarPageObject.progressStatus
title: "FProgressbarPageObject: progressStatus() method"
short-title: progressStatus()
layout: api.method
---

Returns progressbar status, one of:

- `"pending"`
- for value `0`.
- `"inprogress"`
- for values between `1` and `99`.
- `"finished"`
- for value `100`.

## Syntax

```ts nocompile nolint
progressStatus();
```

### Returvärde

`Cypress.Chainable<ProgressbarStatus>`

## Exempel

```import static
FProgressbarPageObject-progressStatus.vue
```

```import
FProgressbarPageObject-progressStatus.cy.ts
```
