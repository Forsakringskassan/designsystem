---
title: Fixerad yta
status: Beta
layout: component
component: FFixedPane
---

Fixerad yta (FFixedPane) används tillsammans med {@link FPageLayout Applikationslayout} för att göra en yta med fixerad storlek.

Komponenten behöver inte nödvändigtvis användas när det enbart finns ett rotelement,
men när det är flera barn (till exempel flera paneler) så ser komponenten till att layout blir som förväntad.

Om ytan ska vara justerbar, använd istället {@link FResizePane}.

## Användning

FFixedPane kan enbart användas i ytor där paneler kan fästas, för de standardlayouter som designsystemet levererar är det ytorna:

- `left` (för paneler till vänster)
- `right` (för paneler till höger)

Skapar du en egen layout är det alla ytor där `attachPanel` inte är `"none"`.

Lägg `FFixedPanel` komponenten som första elementet i respektive yta:

```html static
<f-page-layout layout="left-panel">
    <template #default="{ left }">
        <f-fixed-pane :slot="left"> Vänster ytans innehåll </f-fixed-pane>
    </template>
</f-page-layout>
```

## Props, Events & Slots

:::api
vue:FFixedPane
:::
