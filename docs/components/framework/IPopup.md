---
title: Popup
layout: component
component: IPopup
---

Popup är en ramverkskomponent som används tillsammans med andra komponenter för att kunna visa en komponent som overlay eller inline.

```import
IPopupExample.vue
```

## Styling

Som standard har popup enbart `box-shadow` när den är overlay och konsumenten ansvarar för all annan styling samt layout.

För att ändra styling beroende på om popup är overlay eller inline så kan du använda klass selector `.popup--overlay` och `.popup--inline`.

```scss
.popup--overlay .my-awesome-popup {
    width: 25rem;
}

.popup--inline .my-awesome-popup {
    width: 100%;
}
```

## Fokushantering

Som standard hanterar popup fokus själv genom att flytta fokus till första tabbningsbara element när den öppnas,
samt att fokus återställs när popup stängs.

Om du behöver sätta fokus på ett annat element när popup öppnas kan du
använda `focus-element` som tar en funktion som returnerar det element du vill ska få fokus.

```diff
 <i-popup
+    :focus-element="() => myFocusElement"
 >
```

Du kan stänga av den automatiska fokushanteringen genom att sätta `set-focus` till `false`.
För att själv sätta fokus i detta fallet kan du lyssna på `"open"` eventet
som sänds när popup är synlig och beräkning av position är klar.

```diff
 <i-popup
+    :set-focus="false"
+    @open="onOpenSetFocus"
 >
```

## Teleport

Komponenten teleporteras till body-elementet som standard när den visas som overlay.
Detta kan ändras till valfritt element genom att ändra värdet för `config.teleportTarget`.

## Container

Container är den yta som begränsar området som en popup måste hålla sig inom.
Popupens position kommer inte hamna utanför containern (med undantag för om ingen lämplig position kan hittas).

Containern kommer att väljas utfrån följande lista (i ordning):

1. Explicit element som skickas med `container` prop.
2. En förälder med klassen `popup__container`.
3. Default-värde från `config.popupContainer`.

## Positionering

Detta interaktiva exempel visar hur positionering beter sig vid olika placeringar och scrollningar.

Positioneringen föredrar:

- Placera popup under istället för ovanför ankare.
- Placera popup så den linjerar med vänster kant över höger kant.

* "A" - popup under och linjering mot vänster kant.
* "B" - popup under och linjering mot höger kant.
* "C" - popup ovanför och linjering mot vänster kant.
* "D" - popup ovanför och linjering mot höger kant.
* "E" - popup höger om ankaren vertikalt centrerad.
* "F" - popup vänster om ankaren vertikalt centrerad.
* "G" - popup höger om ankaren linjering i toppen av begränsade ytan.
* "H" - popup vänster om ankaren linjering i toppen av begränsade ytan.
* "I" - popup vertikalt och horisontellt centrerad i begränsade ytan.

Ifall ingen av ovanstående positioner fungerar kommer en fallback användas.

- Om `inline` är satt till `never` positioneras popup under ankare utan linjering.
- Om `inline` är satt till `auto` kommer popup visas inline under ankare.

I följande exempel visas tre varianter:

- `Viewport`: använder `<body>` som yta och fönster som viewport
- `Container`: använder container som yta, ingen viewport
- `Viewport + container`: använder container som yta, fönster som viewport

```import
IPopupPositioning.vue
```

## Skrollning

När popup öppnas som inline kommer den att skrolla så att den är synlig i fönstret.

Popup använder först och främst sin närmaste förälder med klassen `scroll-target` som skrollyta.
Om popup inte hittar en förälder med `scroll-target` så kommer den istället använda fönstret (`window`).

## API

:::api
vue:IPopup
:::
