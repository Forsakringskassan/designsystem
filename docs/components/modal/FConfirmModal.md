---
title: Bekräftelsemodal
status: Produktionsklar
layout: component
component: FConfirmModal
---

Använd en bekräftelsemodal när användare har gjort ett val som har stor påverkan och som hen inte kan ångra enkelt.

En bekräftelsemodal har

-   rubriktext
-   brödtext
-   en knapptext för den destruktiva handlingen, till exempel för att ta bort uppgifter
-   en knapptext för att ångra och gå tillbaka.

## Knapparna

En {@link button#sekundar_knapp sekundär knapp} används för att ångra och gå tillbaka.
En {@link button#primar_knapp primärknapp} används för att utföra den destruktiva handlingen.

En bekräftelsemodal kan även ha en tredje knapp.

### Placering av knapparna

På Försäkringskassan.se placeras den sekundära knappen först, följt av den primära. Eftersom det primära alternativet att bekräfta tidigare val är "destruktivt" placeras den sist för att minimera risken att användaren råkar välja det av misstag.

För interna system följer vi Windows standard, det primära alternativet placeras först.

Du styr den inbördes ordning som knapparna presenteras i med {@link config#referens konfiguration} i applikationen där modalen används.

## Användning med template

```import
FConfirmModalExample.vue
```

## Användning med API

```import
FConfirmModalApiExample.vue
```

## Bekräftelsemodal med tre knappar

```import
FConfirmModalCustomButtons.vue
```

## Skärmläsare

Du kan lägga till extra skärmläsartext på knappar med `screenreader`-property:

```diff
-buttons: [{ label: "Stäng", event: "dismiss" }];
+buttons: [{ label: "Stäng", screenreader: "formuläret", event: "dismiss" }];
```

Om du använder `screenreader` för en knapp så kommer skärmläsare att läsa upp den texten efter knapptexten i `label`. Detta används för att tydliggöra vad knappen kommer att göra i de fallen där det kan vara otydligt för skärmläsaranvändare.

## API

:::api
vue:FConfirmModal
:::

## Relaterat

[Bekräftelsemodal via api](#/Utilities/confirm-modal)

[Modal-api](#/Utilities/open-modal)

[Knappordnings-konfiguration](#/Configuration)

[Modal dialogruta](#/Components/FModal)