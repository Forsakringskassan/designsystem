---
name: FLabelPageObject.trimmedText
title: "FLabelPageObject: trimmedText() method"
short-title: trimmedText()
layout: article
---

Hämtar etikettens text utan kringliggande whitespace.

::: danger
Vi avråder från att använda denna och istället använda assertion `.should("contain.text")` från Cypress standarduppsättning alternativt `.should("have.trimmedText")` från internt stödbibliotek från för att hämta ut text utan kringliggande whitespace.
:::

::: danger
Den här metoden antar att du inte använder några nästlade element i etiketten utan bara använder ren text.

```html static
<template #default>
    <span>Lorem ipsum</span>
</template>
```

Ovan returnerar tom sträng `""` istället för det förväntade resultatet `"Lorem ipsum"`.
:::

::: danger
Den här metoden fungerar inte med [retry][cypress-retryability], texten måste finnas tillgänglig direkt när assertion anropas.
:::

::: warning
Notera att denna metoden returnerar ett strängvärde och inte ett element.
Därför fungerar inte vanliga assertions så som `.should("have.text")` utan du måste använda `.should("be.equal")` eller liknande.
:::

[cypress-retryability]: https://docs.cypress.io/app/core-concepts/retry-ability

## Syntax

```ts
trimmedText();
```

### Returvärde

En sträng med etikettens text utan whitespace eller tom sträng `""` om etiketten innehåller barn-element.

## Exempel

```import static
FLabelPageObject-trimmed-text.vue
```

```import
FLabelPageObject-trimmed-text.cy.ts
```

## Relaterat

- {@link FLabel}
