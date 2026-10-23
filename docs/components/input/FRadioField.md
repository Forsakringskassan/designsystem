---
title: Radioknapp
status: Produktionsklar
layout: component
component:
    - FFieldset
    - FRadioField
---

Använd radioknappar för att låta en användare välja ett alternativ i en lista.

```import background=solid
FRadioFieldExample.vue
```

Saknar du `FRadioGroup`-komponenten?
Den är deprekerad, för detaljer se {@link migrating-to-fieldset migreringsguide }.

## Radioknappar vs Dropplista

En dropplista bör användas om antalet alternativ är relativt stort eller är om antalet är dynamiskt och därmed kan öka i antal .

## Kod och API

Här visas möjliga inställningar för komponenten.
Vissa kombinationer bör undvikas.
Se användningsråden ovan för rekommenderade sätt att använda komponenten.

```import live-example
FRadioFieldLiveExample.vue
```

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
