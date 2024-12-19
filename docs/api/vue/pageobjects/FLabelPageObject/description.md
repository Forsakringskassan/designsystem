---
name: FLabelPageObject.description()
title: FLabelPageObject description() method
shortTitle: description
layout: article
---

Hämtar elementet med etikettens hjälptext.

## Syntax

```ts
FLabelPageObject.description();
```

### Returvärde

`HTMLElement`

## Exempel

```html static
<f-label v-test="'awesome-label'">
    Min etikett

    <template #description="{ descriptionClass, discreteDescriptionClass }">
        <span :class="descriptionClass">Hjälptext</span>
    </template>
</f-label>
```

```ts
const awesomeLabel = new FLabelPageObject("[data-test=awesome-label]");

awesomeLabel.description().should("have.text", "Hjälptext");
```

## Relaterat

- {@link FLabel}
