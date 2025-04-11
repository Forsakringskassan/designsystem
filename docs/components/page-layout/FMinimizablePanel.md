---
title: Minimerbar panel
status: Beta
layout: component
component: FMinimizablePanel
---

Minimerbar panel (FMinimizablePanel) används tillsammans med {@link FPageLayout Applikationslayout}
för att ge användaren möjlighet att visa innehåll i normalt läge eller minimerat läge.

Komponenten har även stöd för att kombineras ihop med {@link FResizePane Justerbar yta}.

```import
FMinimizablePanelExample.vue
```

## Användning

Komponenten tillhandahåller en `default`-slot för innehåll.

In till default-slotten medföljer namn på de native-slots man kan placera innehåll i:
`header`, `default` och `footer`.

Även en flagga `isOpen` passas in till `default`-slotten, så att konsumenten kan styra
vad som renderas beroende på om panelen är öppen eller minimerad.

Native-slot innebär att man som konsument skapar elementet för slotten med attributet `slot`.

```html static
<f-minimizable-panel>
    <template #default="{ header, footer, content, isOpen }">
        <template v-if="isOpen">
            <h1 :slot="header">Min rubrik</h1>
            <p :slot="content">Mitt innehåll</p>
            <div :slot="footer">Min fot</div>
        </template>
    </template>
</f-minimizable-panel>
```

Ikonen kan bytas ut via `icon`-slotten.

```html static
<f-minimizable-panel>
    <template #icon>
        <f-icon name="awesome-icon"></f-icon>
    </template>
</f-minimizable-panel>
```

## Anpassa texter

Ikonens skärmläsartext består av ett prefix och en beskrivning av panelen:

`{prefix} {context}`

Prefix varierar beroende på om panelen är öppen eller inte.

Standardtext för minimerat läge:

> "Återställ panel"

Standardtext för öppet läge:

> "Minimera panel"

Konsumenten kan påverka ikonens skärmläsartext via textnycklar
eller genom att sätta `context`-proppen in till komponenten:

```diff
-<f-minimizable-panel>
+<f-minimizable-panel context="My awesome panel">
```

### Textnycklar

| Textnyckel                       | Standardtext | Beskrivning                                            |
| -------------------------------- | ------------ | ------------------------------------------------------ |
| `fkui.minimizable-panel.close`   | Minimera     | Del av skärmläsartext för knapp då panel är öppen.     |
| `fkui.minimizable-panel.open`    | Återställ    | Del av skärmläsartext för knapp då panel är minimerad. |
| `fkui.minimizable-panel.context` | panel        | Del av skärmläsartext för knapp.                       |

## Props, Events & Slots

:::api
vue:FMinimizablePanel
:::
