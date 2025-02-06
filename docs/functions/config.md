---
title: Konfiguration
layout: pattern
---

`config` är ett enkelt objekt som innehåller ett begränsat antal globala inställningar för FKUI.

## Inställningar

```import
FKUIConfig.ts
```

## Ändra en inställning

Görs lämpligtvis i applikationens `main.ts`.

```js
import { config, FKUIConfigButtonOrder } from "@fkui/vue";

config.buttonOrder = FKUIConfigButtonOrder.LEFT_TO_RIGHT;
```

## Referens

### `buttonOrder`

- default: `RIGHT_TO_LEFT`
- type: `FKUIConfigButtonOrder`

Anger i vilken ordning man vill visa knappar.

`LEFT_TO_RIGHT`: Vänster till höger

```jsx nomarkup
<div class="button-group">
    <button type="button" class="button button--primary button-group__item">
        1
    </button>
    <button type="button" class="button button--secondary button-group__item">
        2
    </button>
    <button type="button" class="button button--secondary button-group__item">
        3
    </button>
</div>
```

`RIGHT_TO_LEFT`: Höger till vänster

```jsx nomarkup
<div class="button-group">
    <button type="button" class="button button--secondary button-group__item">
        3
    </button>
    <button type="button" class="button button--secondary button-group__item">
        2
    </button>
    <button type="button" class="button button--primary button-group__item">
        1
    </button>
</div>
```

### `teleportTarget`

- default: `document.body`
- type: `string | Element`

Anger var komponenter som teleporteras ska monteras.

Komponenter som påverkas av denna inställning inkluderar:

- Programmatiskt öppnad `FModal`.
- `FLoader` när den använder `overlay`.
- `IPopup` när den använder `overlay`.
- `IPopupMenu` när den använder `overlay`.
- `FDatepickerField` när den använder `overlay`.
- `FNavigationMenu` popupmeny när den använder `overlay`.
- `FContextMenu`.

### `popupContainer`

- default: `document.body`
- type: `string | HTMLElement`

Anger inom vilken container popups ska hålla sig inom när den använder overlay.

### `production`

- default: true
- type: `boolean`

Gör det möjligt att specificera om man vill ha ett skarpt produktion beteendet av FKUI eller en icke-produktion, t.ex för test/utveckling,
beteendet.
Ett exempel av skillnad: i produktion vill man inte kasta exception men man loggar de i konsolen istället.
