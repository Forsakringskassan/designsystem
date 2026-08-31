---
title: Radioknapp
status: Produktionsklar
layout: component
component:
    - FFieldset
    - FRadioField
---

Använd radioknappar när användaren ska välja ett av ett fåtal fördefinierade alternativ.
Alla alternativ visas samtidigt, vilket gör dem enkla att överblicka och jämföra.

```import live-example
FRadioFieldLiveExample.vue
```

## Radioknappar eller dropplista

Radioknappar tar mer plats än en dropplista men låter användaren se alternativen utan att först öppna en lista.
En {@link FSelectField dropplista} passar bättre när alternativen är många eller när antalet är dynamiskt och kan öka.

## Användning

### Placering

Visa radioknappar vertikalt som standard.
Horisontell placering kan användas när det finns två alternativ med korta texter, till exempel ja och nej.
På mindre skärmar visas alternativen vertikalt.

### Förvalt alternativ

Förvälj bara ett alternativ när det finns ett rimligt standardval.
Låt annars användaren göra ett aktivt val, särskilt när valet får viktiga konsekvenser.

### Inaktiverade alternativ

Undvik inaktiverade alternativ.
De kan vara svåra att uppfatta och ger inte användaren någon förklaring till varför de inte går att välja.

## Varianter

Radioknappar kan kompletteras med texter som förtydligar alternativen och med en ram som skapar tydligare visuell avgränsning mellan alternativen.
Vad som passar beror på hur mycket stöd användaren behöver för att göra sitt val.
Text och ram kan kombineras på olika sätt.
Här visas två vanliga varianter.

### Utvidgad text

Använd utvidgad text när ett alternativ behöver förklaras eller förtydligas.
Håll alternativets huvudsakliga text kort och placera förklaringen på en egen rad.
Det gör alternativen lättare att överblicka och skapar en tydlig visuell hierarki mellan alternativet och den kompletterande informationen.

Texten ska vara kort och beskriva det enskilda alternativet.
Information som gäller hela frågan ska i stället placeras som hjälptext vid frågan.

```diff
-<f-fieldset name="illness">
+<f-fieldset name="illness" show-details="always">
```

```import
FRadioFieldDetailsAlwaysExample.vue
```

### Inramade alternativ med expanderbar text

Använd inramade alternativ med expanderbar text när varje val behöver framträda som en egen tydlig och klickbar yta och den kompletterande informationen blir relevant först efter valet.
Ramen gör det tydligare vilken text som hör till respektive alternativ när innehållet visas.

Dölj inte information som användaren behöver för att kunna välja.

```diff
-<f-fieldset name="payment-plan">
+<f-fieldset name="payment-plan" border show-details="when-selected">
```

```import
FRadioFieldBorderExpandableExample.vue
```

## Migrera från FRadioGroup

`FRadioGroup` och `FRadioGroupField` har tagits bort och ersatts av `FFieldset` respektive `FRadioField`.
Se {@link migrating-to-fieldset migreringsguiden} för information om hur du uppdaterar din kod.

## Props, Events & Slots

### FFieldset

:::api
vue:FFieldset
:::

### FRadioField

:::api
vue:FRadioField
:::
