---
title: Radioknapp
status: Produktionsklar
layout: component
component:
    - FFieldset
    - FRadioField
---

Använd radioknappar när användaren ska välja ett av ett fåtal fördefinierade alternativ. Alla alternativ visas samtidigt, vilket gör dem enkla att överblicka och jämföra.

```import live-example test-id=live
FRadioFieldLiveExample.vue
```

## Radioknappar eller dropplista

Radioknappar tar mer plats än en dropplista men låter användaren se alternativen utan att först öppna en lista. En {@link FSelectField dropplista} passar bättre när alternativen är många eller när antalet är dynamiskt och kan öka.

## Användning

### Placering

Visa radioknappar vertikalt som standard. Horisontell placering kan användas när det finns två alternativ med korta texter, till exempel ja och nej. På mindre skärmar visas alternativen vertikalt.

### Förvalt alternativ

Förvälj bara ett alternativ när det finns ett rimligt standardval. Låt annars användaren göra ett aktivt val, särskilt när valet får viktiga konsekvenser.

### Inaktiverade alternativ

Undvik inaktiverade alternativ. De kan vara svåra att uppfatta och ger inte användaren någon förklaring till varför de inte går att välja.

## Migrera från FRadioGroup

`FRadioGroup` och `FRadioGroupField` har tagits bort och ersatts av `FFieldset` respektive `FRadioField`. Se {@link migrating-to-fieldset migreringsguiden} för information om hur du uppdaterar din kod.

## Props, Events & Slots

### FFieldset

:::api
vue:FFieldset
:::

### FRadioField

:::api
vue:FRadioField
:::
