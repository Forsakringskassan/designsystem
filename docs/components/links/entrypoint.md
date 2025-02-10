---
title: Startpunkt
status: Produktionsklar
layout: component
component:
    - name: entrypoint
      source: components/**/_entrypoint.scss
---

Startpunkt används för att framhäva en länk extra tydligt, som till exempel en ingång till en digital tjänst.

Startpunkten tar alltid upp 100% tillgänglig yta.

```vue
<script setup>
import { FIcon } from "@fkui/vue";
</script>

<template>
    <a class="entrypoint" href="javascript:">
        Ansök om hundbidrag
        <span class="sr-only"> Till tjänsten ansök om hundbidrag </span>
        <f-icon name="arrow-right" class="entrypoint__icon"></f-icon>
    </a>
</template>
```

## Copy

Texten på en startpunkt ska vara begriplig utan någon annan kontext, men hållas så kort som möjligt. Det första ordet bör vara ett verb i imperativ som uttrycker det användaren ska göra.

Bra texter på startpunkter är t.ex. "Ansök om VAB" och "Ansök om sjukpenning".

En startpunkt ska alltid ha en skärmläsartext som ska förtydliga att startpunkten leder till en tjänst och inte är en vanlig länk. Exempel som motsvarar texterna ovan är "Till tjänsten ansök om vab" och "Till tjänsten ansök om sjukpenning".
