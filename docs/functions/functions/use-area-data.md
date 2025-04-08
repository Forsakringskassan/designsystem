---
title: useAreaData() composable
short-title: useAreaData()
name: useAreaData
layout: article
---

Composable för att hämta information om den {@link FPageLayout layout yta} ett element befinner sig i:

- Ytans namn.
- Om paneler ska anslutas till höger eller vänster.
- Vilken riktning innehållet i ytan ska flöda.

## Syntax

```ts nocompile nolint
function useAreaData(element);
```

### Parametrar

`element: HTMLElement`
: Elementet förfrågning om yta ska göras för.

### Returvärde

`area: string`
: Ytans namn.

`attachPanel: "none" | "left" | "right"`
: Om paneler ska anslutas till höger eller vänster inom ytan.

`direction: "column" | "row"`
: Vilken riktning innehållet i ytan ska flöda.

## Exempel

Sätter en klass baserat på hur panelen ska fästas:

```vue static
<script setup lang="ts">
import { computed, useTemplateRef } from "vue";
import { useAreaData } from "@fkui/vue";

/* --- cut above --- */

const element = useTemplateRef("my-root-element");
const { attachPanel } = useAreaData(element);

const attachClass = computed(() => {
    switch (attachPanel.value) {
        case "left":
            return "attach-left";
        case "right":
            return "attach-right";
    }
    return undefined;
});

/* --- cut below --- */
</script>

<template>
    <div ref="my-root-element"></div>
</template>
```

## Related

- {@link FPageLayout}
- {@link custom-page-layout Egen layout till applikationsmall}
