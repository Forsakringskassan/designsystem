---
name: FLabelPageObject
title: FLabelPageObject
layout: article
---

Använd `FLabelPageObject` för att skaffa information relaterat till etikett (`label`-elementet).

Komponenten används internt av andra komponenter där en etikett ingår.
Dessa komponenter brukar därför ha en metod för att nå detta pageobjektet i sina respektive pageobjekt,
t ex `FTextFieldPageObject.label`.

## Syntax

```ts
new FLabelPageObject(selector: string);
```

## Exempel

```html static
<f-label v-test="'awesome-label'"> Min etikett </f-label>
```

```ts
const awesomeLabel = new FLabelPageObject("[data-test=awesome-label]");

awesomeLabel.el().should("contain.text", "Min etikett");
```

```import
label.cy.ts
```

## Relaterat

- {@link FLabel}
