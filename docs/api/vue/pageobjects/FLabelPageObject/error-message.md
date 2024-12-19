---
name: FLabelPageObject.errorMessage()
title: FLabelPageObject errorMessage() method
layout: article
---

informerar om att något gått fel

## Syntax

```ts
FLabelPageObject.errorMessage();
```

### Returvärde

`HTMLElement`

## Exempel

```html static
<f-label v-test="'awesome-label'"> Min etikett </f-label>
```

```ts
const awesomeLabel = new FLabelPageObject("[data-test=awesome-label]");

awesomeLabel.errorMessage().should("exist");
```

## Relaterat

- {@link FLabel}
