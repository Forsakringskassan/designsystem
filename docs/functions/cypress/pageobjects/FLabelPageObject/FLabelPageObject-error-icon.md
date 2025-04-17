---
name: FLabelPageObject.errorIcon
title: "FLabelPageObject: errorIcon() method"
short-title: errorIcon()
layout: article
---

Hämtar elementet med etikettens felikon.

::: warning
Vi avråder från att skriva tester som testar felikon.
Om du behöver testa valideringsfel använd {@link FLabelPageObject.errorMessage `errorMessage`} för att säkerställa att rätt fel visas istället.
:::

## Syntax

```ts nocompile nolint
errorIcon();
```

### Returvärde

`HTMLElement` som innehåller etikettens felikon.

## Exempel

```import static
FLabelPageObject-error-icon.vue
```

```import
FLabelPageObject-error-icon.cy.ts
```

## Relaterat

- {@link FLabel}
