---
name: FLabelPageObject.errorIcon()
title: FLabelPageObject errorIcon() method
layout: article
---

Hämtar elementet med etikettens fel icon.

## Syntax

```ts
FLabelPageObject.errorIcon();
```

### Returvärde

`HTMLElement`

## Exempel

```html static
<f-label v-test="'awesome-label'"> Min etikett </f-label>
```

```ts
const awesomeLabel = new FLabelPageObject("[data-test=awesome-label]");

awesomeLabel.errorIcon().should("exist");
```

## Relaterat

- {@link FLabel}
