---
title: Radioknapp
status: Produktionsklar
layout: component
component:
    - FFieldset
    - FRadioField
---

```import reading-width
FRadioFieldLiveExample.vue
```

Använd radioknappar när användaren ska välja endast ett alternativ från en lista med flera svarsalternativ.
Radioknappar har en gemensam {@link FLabel etikett} som beskriver vad användaren ska ta ställning till.

## Radioknappar eller dropplista

Radioknappar tar mer plats än en dropplista eftersom alla svarsalternativ visas direkt.
Det gör det lättare att överblicka och jämföra alternativen.
En {@link FSelectField dropplista} passar bättre när alternativen är många eller när antalet kan variera och bli stort.

## Användning

### Placering

Visa radioknappar vertikalt som standard.
Horisontell placering kan användas när det finns två korta svarsalternativ, till exempel ja och nej.
På mindre skärmar visas alternativen alltid vertikalt.

```import reading-width
FRadioFieldHorizontalExample.vue
```

```diff reading-width
-<f-fieldset name="arbete-annat-land">
+<f-fieldset name="arbete-annat-land" horizontal>
```

### Förvalt alternativ

Undvik att markera ett alternativ från början.
Låt användaren i stället göra ett aktivt val.
Då minskar risken för att frågan missas eller att användaren skickar in ett svar som inte stämmer.

### Frivilliga frågor

När användaren har valt ett alternativ går det inte att återställa gruppen till att inget alternativ är valt.
Om frågan är frivillig behöver den därför ha ett neutralt svarsalternativ, till exempel ”Inget av alternativen”.

### Utvidgad text

Använd utvidgad text när ett alternativ behöver förklaras eller förtydligas.
Håll alternativets huvudsakliga text kort.
Den utvidgade texten visas på en egen rad, vilket gör alternativen lättare att överblicka och skapar en tydlig visuell hierarki mellan alternativet och den kompletterande informationen.

Texten ska vara kort och beskriva det enskilda alternativet.
Information som gäller hela frågan ska i stället placeras som hjälptext vid frågan.

```import reading-width
FRadioFieldDetailsAlwaysExample.vue
```

```diff reading-width
-<f-fieldset name="care-reason">
+<f-fieldset name="care-reason" show-details="always">
```

### Inramade alternativ med expanderbar text

Använd inramade alternativ med expanderbar text när varje val behöver framträda som en egen tydlig och klickbar yta och den kompletterande informationen blir relevant först efter valet.
Ramen gör det tydligare vilken text som hör till respektive alternativ när innehållet visas.

Dölj inte information som användaren behöver för att kunna välja.

```import reading-width
FRadioFieldBorderExpandableExample.vue
```

```diff reading-width
-<f-fieldset name="payment-plan">
+<f-fieldset name="payment-plan" border show-details="when-selected">
```

## Validering

Om användaren måste välja ett alternativ ska radioknappsgruppen valideras som obligatorisk.
Lägg `v-validation.required` på `FFieldset`.

```diff reading-width
-<f-fieldset name="arbete-annat-land">
+<f-fieldset v-validation.required name="arbete-annat-land">
```

{@link validation Validering och felhantering}

## Migrera från FRadioGroup

`FRadioGroup` och `FRadioGroupField` har tagits bort och ersatts av `FFieldset` respektive `FRadioField`.
Se {@link migrating-to-fieldset migreringsguiden} för information om hur du uppdaterar din kod.

## API

### FFieldset

:::api
vue:FFieldset
:::

### FRadioField

:::api
vue:FRadioField
:::
