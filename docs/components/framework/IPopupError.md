---
title: PopupError
layout: component
component: IPopupError
---

PopupError är en ramverkskomponent som används för att visa felmeddelanden när inmatningsfält används i en tabell.
Komponenten använder logiken från {@link IPopup `IPopup`} för att beräkna vart felmeddelandet ska visas, i förhållande till inmatningsfältet.
Men `PopupError` har en annan prioriterad ordning för vart felmeddelandet kan placeras.

## Positionering

Position för felmeddelandet väljs enligt följande, i fallande prioordning:

- "B" - popup under och linjering mot höger kant.
- "A" - popup under och linjering mot vänster kant.
- "D" - popup ovanför och linjering mot höger kant.
- "C" - popup ovanför och linjering mot vänster kant.
- "E" - popup höger om ankaren vertikalt centrerad.
- "F" - popup vänster om ankaren vertikalt centrerad.

Ifall ingen av ovanstående positioner fungerar placeras felmeddelandet inline under inmatningsfältet.

## Teleport

Komponenten teleporteras till body-elementet när den visas som overlay.
Läs mer om detta under {@link IPopup#teleport `IPopup`}.

```import
IPopupErrorExample.vue
```

## API

:::api
vue:IPopupError
:::
