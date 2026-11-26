---
name: FProgressbarPageObject.progressStatus
title: "FProgressbarPageObject: progressStatus() method"
short-title: progressStatus()
layout: article
---

Används för kontrollera status på förloppsindikatorns progress.

## Syntax

```ts name=syntax nocompile nolint
progressStatus();
```

### Returvärde

`string` som innehåller vilken status förloppsindikatorn befinner sig i:

- `"pending"` - när värdet är 0%.
- `"inprogress"` - för värden mellan 1-99%.
- `"finished"` - när värdet är 100%.

## Exempel

```import static
FProgressbarPageObject-progress-status.vue
```

```import
FProgressbarPageObject-progress-status.cy.ts
```

## Relaterat

- {@link FProgressbar Förloppsindikator} (`FProgressbar`)
