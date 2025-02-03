---
title: Tooltip
status: Produktionsklar
layout: component
component: FTooltip
---

Använd tooltip för att visa detaljerad information om ett inmatningsfält i de fall där etikettens rubrik, hjälptext eller formatbeskrivning inte räcker till.

```import live-example
FTooltipLiveExample.vue
```

- Informationsrutan kan innehålla länkar och expanderbara fält.
- Upprepa inte information som redan finns i rubrik eller brödtext.
- Använd inte rubriken i tooltip om den inte verkligen behövs.
    - Om rubrik används behöver även header-tag anges.
- Flera informationsrutor kan vara öppna samtidigt.
- Sträva efter att minimera användning av tooltip. Information som alla behöver veta ska visas med etiketten.

## Copy

### Vilken typ av information ska finnas i en tooltip?

Omfattande eller komplex information som gäller alla
Om informationen är viktig för alla, men så pass omfattande att den inte kan ligga i brödtext, ska den ligga i en tooltip.

Information som är nödvändig för att förstå hur man ska fylla i något ska i första hand vara brödtext. Men om den är för omfattande eller komplex kan den placeras i en tooltip.

#### Lång eller kort information som bara gäller vissa

Om informationen inte gäller alla, och det inte kan lösas dynamiskt genom att visa texten endast för den relevanta målgruppen ska den ligga i en tooltip även om den är kortfattad.

#### Komplex information som bara gäller vissa

Ska ligga i tooltip även om den är kortfattad.

#### Övrig information som bara gäller vissa

Ska ligga i tooltip även om den är kortfattad.

### Skärmläsartext

Rubriken för en tooltip formuleras enligt formatet "Information om + namnet på tooltipen".

Om det inte blir en begriplig mening om du använder namnet på tooltipen behöver du formulera om meningen. Till exempel är skärmläsartexten till tooltipen till filuppladdaren "Information om hur du laddar upp bilagor" (och inte "Information om så här laddar du upp bilagor").

### Rubriksnivå

Om du behöver använda en semantisk rubriksnivå använd `header-tag` parametern för att sätta (som standard används ingen semantisk rubrik):

```diff
 <f-tooltip
+  header-tag="h3"
 >
```

## Tooltip på rubrik

Utöver etikett så kan tooltip även placeras på en rubrik.
Lägg en `<div>` runt elementet och passa in till `attachTo` propen.

```vue static
<script setup>
import { useTemplateRef } from "vue";

const heading = useTemplateRef("heading");
</script>

<template>
    <div ref="heading">
        <h2>En rubrik</h2>
    </div>
    <f-tooltip attach-to="heading" screen-reader-text="Skärmläsartext">
        <template #body> Lorem ipsum dolor sit amet. </template>
    </f-tooltip>
</template>
```

```import nomarkup
FTooltipHeadingExample.vue
```

## API

:::api
vue:FTooltip
:::
