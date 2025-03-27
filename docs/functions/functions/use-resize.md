---
title: useResize() composable
short-title: useResize()
name: useResize
layout: article
---

Composable för att styra hur en {@link FResizePane justerbar yta} ska bete sig:

- Om ytan ska vara justerbar eller ej.
- Om ytan ska visas eller ej.

Om flera komponenter nyttjar `useResize()` i samma justerbara yta och minst en av dem aktiverar en egenskap, exempelvis om minst en komponent sätter `enabled`, så är den justerbara ytan justerbar.

## Syntax

```ts nocompile nolint
function useResize(options);
```

### Parametrar

`options` {@optional}
: Egenskaper att styra.

    `enabled: Ref<boolean>` {@optional}
    : Om aktiv kommer den justerbara ytan att vara justerbar. Default: `true`.

    `visible: Ref<boolean>` {@optional}
    : Om aktiv kommer den justerbara ytan att visas. Default: `true`.

### Returvärde

Inget returvärde.

## Exempel

Exempel för att visa/dölja justerbar yta baserat på om en anpassad panel är synlig eller dold.

```vue static
<script setup lang="ts">
import { ref } from "vue";
import { useResize } from "@fkui/vue";

const isOpen = ref(false);

useResize({
    visible: isOpen,
});
</script>

<template>
    <div v-if="isOpen">[content]</div>
</template>
```

## Relaterat

- {@link FResizePane}
- {@link custom-page-layout Egen layout till applikationsmall}
