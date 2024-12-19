---
name: FLabelPageObject.discreteDescription()
title: FLabelPageObject discreteDescription() method
layout: article
---

Används för att hämta specifika beskrivningar.

## Syntax

```ts
FLabelPageObject.discreteDescription();
```

### Returvärde

`HTMLElement`

## Exempel

```html static
<f-label v-test="'awesome-label'"> Min etikett </f-label>
```

```ts
const awesomeLabel = new FLabelPageObject("[data-test=awesome-label]");

awesomeLabel.discreteDescription().should("exist");
```

## Relaterat

- {@link FLabel}
