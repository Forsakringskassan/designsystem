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

Komponenten har tre slottar för innehåll: `header`, `default` och `footer`.

Rubrikens nivå anges i `heading`-proppen.
Rubrikens innehåll anges i `header`-slotten.

```html static
<f-minimizable-panel heading-tag="h1">
    <template #header> Minimerbar panel </template>
</f-minimizable-panel>
```

För `default`- och `footer`-slottarna skickas en flagga `isOpen` med, så att konsumenten kan styra
vad som renderas beroende på om panelen är öppen eller minimerad.

```html static
<template #default="{ isOpen }">
    <template v-if="isOpen">
        <p>Innehåll</p>
    </template>
</template>
```

Det finns även möjlighet att byta ut ikonen via `icon`-slotten.

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
