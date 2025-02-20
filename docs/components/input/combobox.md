---
title: Kombobox
status: Produktionsklar
layout: component
component: FTextField
---

Använd en kombobox när användaren behöver välja från ett stort antal alternativ, eller i de fall då användaren både ska kunna välja från förbestämda förslag eller skriva en egen text.

Komboboxen kombinerar ett textfält med en lista med förbestämda alternativ. Listan filtreras för att matcha inmatningen i textfältet. Den kan antingen sättas att tillåta fritext eller kräva att användaren väljer ett alternativ från listan.

## Exempel

```import live-example test-id=live
ComboboxExample.vue
```

## Dynamiska alternativ

Om det exempelvis är alternativ som ska hämtas från en server, börja med att initialisera `options` till en tom lista.

## Använd

- Istället för en dropplista när det finns ett stort antal alternativ att välja mellan.
- När användaren både ska kunna skriva en godtycklig fritext eller välja bland förbestämda förslag i listan.

## Använd inte

- Vid färre alternativ, använd en dropplista eller radioknappar.

## API

:::api
vue:FTextField
:::
