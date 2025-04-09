---
title: Minimerbar panel
status: Beta
layout: component
component: FMinimizablePanel
---

Minimerbar panel (FMinimizablePanel) används tillsammans med {@link FPageLayout applikationsmallen}
för att ge användaren möjlighet att visa innehåll i öppet läge eller minimerat läge.

Komponenten har även stöd för att kombineras ihop med {@link FResizePane justerbar yta}.

```import name=minimizable-panel-example
FMinimizablePanelExample.vue
```

## Användning

Använd native slots för att placera innehåll:

- `header`
- `default`
- `footer`.

Native slot innebär att du som konsument skapar elementet för sloten med attributet `slot`.

Använd flaggan `isOpen` för att styra vad som renderas beroende på om panelen är öppen eller minimerad.

```html static
<f-minimizable-panel>
    <template #default="{ header, footer, content, isOpen }">
        <template v-if="isOpen">
            <h1 :slot="header">Rubrik</h1>
            <p :slot="content">Innehåll</p>
            <div :slot="footer">Fot</div>
        </template>
    </template>
</f-minimizable-panel>
```

Du kan byta ut ikonen via `icon`-sloten.

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

:::api
translation:FMinimizablePanel
:::

| Textnyckel                       | Standardtext | Beskrivning                                            |
| -------------------------------- | ------------ | ------------------------------------------------------ |
| `fkui.minimizable-panel.close`   | Minimera     | Del av skärmläsartext för knapp då panel är öppen.     |
| `fkui.minimizable-panel.open`    | Återställ    | Del av skärmläsartext för knapp då panel är minimerad. |
| `fkui.minimizable-panel.context` | panel        | Del av skärmläsartext för knapp.                       |

## Props, Events & Slots

:::api
vue:FMinimizablePanel
:::
