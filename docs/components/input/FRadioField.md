---
title: Radioknapp
status: Produktionsklar
layout: component
component:
    - FFieldset
    - FRadioField
---

Använd radioknappar för att låta en användare välja ett alternativ i en lista.

```import live-example test-id=live
FRadioFieldLiveExample.vue
```

Saknar du `FRadioGroup`-komponenten? Den är deprekerad, för detaljer se {@link migrating-to-fieldset migreringsguide }.

## Radioknappar vs Dropplista

En dropplista bör användas om antalet alternativ är relativt stort eller är om antalet är dynamiskt och därmed kan öka i antal .

## Props, Events & Slots

### FFieldset

Ersätter `FRadioGroup`.

:::api
vue:FFieldset
:::

### FRadioField

Ersätter `FRadioGroupField`.

:::api
vue:FRadioField
:::
