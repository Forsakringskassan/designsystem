---
title: Konfiguration
layout: pattern
search:
    terms:
        - knappordning bekräftelsemodal
        - buttonOrder
        - teleportTarget
        - popupContainer
        - production
        - globala inställningar
        - config
---

`config` är ett enkelt objekt som innehåller ett begränsat antal globala inställningar för FKUI.

## Inställningar

```import
fkui-config.ts
```

## Ändra en inställning

Görs lämpligtvis i applikationens `main.ts`.

```js
import { FKUIConfigButtonOrder, config } from "@fkui/vue";

config.buttonOrder = FKUIConfigButtonOrder.LEFT_TO_RIGHT;
```

## Referens

### Knappordning bekräftelsemodal (`buttonOrder`)

- default: Höger till vänster (`RIGHT_TO_LEFT`)
- type: `FKUIConfigButtonOrder`

Anger i vilken ordning man vill visa knappar i bekräftelsemodal.

`LEFT_TO_RIGHT`: Vänster till höger

```html nomarkup borderless
<f-button inert class="docs-example-button"> Ta bort </f-button>
<f-button inert class="docs-example-button" variant="secondary">
    Avbryt
</f-button>
```

`RIGHT_TO_LEFT`: Höger till vänster

```html nomarkup borderless
<f-button inert class="docs-example-button" variant="secondary">
    Avbryt
</f-button>
<f-button inert class="docs-example-button"> Ta bort </f-button>
```

#### Modaler med inbyggd knappordning

| Komponent                                      | Inställning   | Knappordning                                                                                                                                      |
| ---------------------------------------------- | ------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- |
| Bekräftelsemodal (FConfirmModal)               | LEFT_TO_RIGHT | <f-button inert class="docs-example-button">Spara</f-button><f-button inert class="docs-example-button" variant="secondary">Avbryt</f-button>     |
| Bekräftelsemodal (FConfirmModal)               | RIGHT_TO_LEFT | <f-button inert class="docs-example-button" variant="secondary">Avbryt</f-button><f-button inert class="docs-example-button">Spara</f-button>     |
| Formulärsmodal (FFormModal)                    | \*            | <f-button inert class="docs-example-button">Spara</f-button><f-button inert class="docs-example-button" variant="secondary">Avbryt</f-button>     |
| Datamängdredigerare (FCrudDataset) - Lägg till | \*            | <f-button inert class="docs-example-button">Lägg till</f-button><f-button inert class="docs-example-button" variant="secondary">Avbryt</f-button> |
| Datamängdredigerare (FCrudDataset) - Ändra     | \*            | <f-button inert class="docs-example-button">Spara</f-button><f-button inert class="docs-example-button" variant="secondary">Avbryt</f-button>     |
| Datamängdredigerare (FCrudDataset) - Ta bort   | LEFT_TO_RIGHT | <f-button inert class="docs-example-button">Ta bort</f-button><f-button inert class="docs-example-button" variant="secondary">Avbryt</f-button>   |
| Datamängdredigerare (FCrudDataset) - Ta bort   | RIGHT_TO_LEFT | <f-button inert class="docs-example-button" variant="secondary">Avbryt</f-button><f-button inert class="docs-example-button">Ta bort</f-button>   |

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

Gör det möjligt att specificera om du vill ha ett skarpt produktionsbeteende av FKUI eller ett icke-produktionsbeteende, till exempel för test eller utveckling.
Ett exempel på skillnad: i produktion vill man inte kasta exception men man loggar det i konsolen istället.
