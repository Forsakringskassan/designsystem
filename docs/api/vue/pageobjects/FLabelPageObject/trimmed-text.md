---
name: FLabelPageObject.trimmedText()
title: FLabelPageObject trimmedText() method
layout: article
---

Label heading.

## Syntax

```ts
FLabelPageObject.trimmedText();
```

### Returvärde

En sträng med etikettens text utan whitespace.

## Exempel

```html static
<f-label v-test="'awesome-label'"> Min etikett </f-label>
```

```ts
const awesomeLabel = new FLabelPageObject("[data-test=awesome-label]");

awesomeLabel.trimmedText().should("have.text", "Min etikett");
```

## Relaterat

- {@link FLabel}
