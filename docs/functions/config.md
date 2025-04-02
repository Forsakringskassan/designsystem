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

### Knappordning bekräftelsemodal (`buttonOrder`)

- default: Höger till vänster (`RIGHT_TO_LEFT`)
- type: `FKUIConfigButtonOrder`

Anger i vilken ordning man vill visa knappar i bekräftelsemodal.

`LEFT_TO_RIGHT`: Vänster till höger

```html nomarkup borderless
<button inert type="button" class="docs-example-button button--primary">
    Ta bort
</button>
<button inert type="button" class="docs-example-button button--secondary">
    Avbryt
</button>
```

`RIGHT_TO_LEFT`: Höger till vänster

```html nomarkup borderless
<button inert type="button" class="docs-example-button button--secondary">
    Avbryt
</button>
<button inert type="button" class="docs-example-button button--primary">
    Ta bort
</button>
```

#### Modaler med inbyggd knappordning

| Komponent                                      | Inställning   | Knappordning                                                                                                                                                                        |
| ---------------------------------------------- | ------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Bekräftelsemodal (FConfirmModal)               | LEFT_TO_RIGHT | <button inert type="button" class="docs-example-button button--primary">Spara</button><button inert type="button" class="docs-example-button button--secondary">Avbryt</button>     |
| Bekräftelsemodal (FConfirmModal)               | RIGHT_TO_LEFT | <button inert type="button" class="docs-example-button button--secondary">Avbryt</button><button inert type="button" class="docs-example-button button--primary">Spara</button>     |
| Formulärsmodal (FFormModal)                    | \*            | <button inert type="button" class="docs-example-button button--primary">Spara</button><button inert type="button" class="docs-example-button button--secondary">Avbryt</button>     |
| Datamängdredigerare (FCrudDataset) - Lägg till | \*            | <button inert type="button" class="docs-example-button button--primary">Lägg till</button><button inert type="button" class="docs-example-button button--secondary">Avbryt</button> |
| Datamängdredigerare (FCrudDataset) - Ändra     | \*            | <button inert type="button" class="docs-example-button button--primary">Spara</button><button inert type="button" class="docs-example-button button--secondary">Avbryt</button>     |
| Datamängdredigerare (FCrudDataset) - Ta bort   | LEFT_TO_RIGHT | <button inert type="button" class="docs-example-button button--primary">Ta bort</button><button inert type="button" class="docs-example-button button--secondary">Avbryt</button>   |
| Datamängdredigerare (FCrudDataset) - Ta bort   | RIGHT_TO_LEFT | <button inert type="button" class="docs-example-button button--secondary">Avbryt</button><button inert type="button" class="docs-example-button button--primary">Ta bort</button>   |

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
