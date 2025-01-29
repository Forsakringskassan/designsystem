---
title: Bekräftelsemodal
status: Produktionsklar
layout: component
component: FConfirmModal
---

Använd en bekräftelsemodal när användare har gjort ett val som har stor påverkan och som hen inte kan ångra enkelt.

En bekräftelsemodal har

- rubriktext
- brödtext
- en knapptext för den destruktiva handlingen, till exempel för att ta bort uppgifter
- en knapptext för att ångra och gå tillbaka.

```import
FConfirmModalApiExample.vue
```

## Användning

För att öppna en bekräftelsemodal använder du {@link confirm-modal `confirmModal()`} (options API) eller {@link useModal `useModal()`} (composition API).

**Options API:**

```ts
import { defineComponent } from "vue";
import { confirmModal } from "@fkui/vue";

const frukt = { namn: "Frukt" };

defineComponent({
    methods: {
        async onOpen(): Promise<void> {
            /* --- cut above --- */

            const confirmed = await confirmModal(this, {
                heading: "Ta bort frukt",
                content: `Är du säker att du vill ta bort "${frukt.namn}"?`,
                confirm: "Ja, ta bort",
                dismiss: "Nej, behåll",
            });
            if (confirmed) {
                /* do something */
            }

            /* --- cut below --- */
        },
    },
});
```

**Composition API:**

```ts
const frukt = { namn: "Frukt" };

/* --- cut above --- */

import { useModal } from "@fkui/vue";

const { confirmModal } = useModal();

async function onOpen(): Promise<void> {
    const confirmed = await confirmModal({
        heading: "Ta bort frukt",
        content: `Är du säker att du vill ta bort "${frukt.namn}"?`,
        confirm: "Ja, ta bort",
        dismiss: "Nej, behåll",
    });
    if (confirmed) {
        /* do something */
    }
}
```

### Användning med template (deprekerad)

Att använda `FConfirmModal` i template är deprekerat.
Om du använder detta rekommenderar vi att du tar bort `f-confirm-modal` och istället använder API för att öppna modalen.

Se {@link FConfirmModal#anvandning `Användning`} för hur du använder `FConfirmModal` med API.

```diff
 <template>
     <div>
         <button type="button" @click="onClick">Open modal</button>
-        <f-confirm-modal></f-confirm-modal>
     </div>
 </template>
```

## Knapparna

En {@link button#sekundar_knapp sekundär knapp} används för att ångra och gå tillbaka.
En {@link button#primar_knapp primärknapp} används för att utföra den destruktiva handlingen.

En bekräftelsemodal kan även ha en tredje knapp.

### Placering av knapparna

På Försäkringskassan.se placeras den sekundära knappen först, följt av den primära. Eftersom det primära alternativet att bekräfta tidigare val är "destruktivt" placeras den sist för att minimera risken att användaren råkar välja det av misstag.

För interna system följer vi Windows standard, det primära alternativet placeras först.

Du styr den inbördes ordning som knapparna presenteras i med {@link config#referens konfiguration} i applikationen där modalen används.

## Bekräftelsemodal med tre knappar

```import
FConfirmModalCustomButtons.vue
```

## Skärmläsare

Du kan lägga till extra skärmläsartext på knappar med `screenreader`-property:

```diff
-buttons: [{ label: "Stäng", event: "dismiss" }];
+buttons: [{ label: "Stäng", screenreader: "formuläret", event: "dismiss" }];
```

Om du använder `screenreader` för en knapp så kommer skärmläsare att läsa upp den texten efter knapptexten i `label`. Detta används för att tydliggöra vad knappen kommer att göra i de fallen där det kan vara otydligt för skärmläsaranvändare.

## API

:::api
vue:FConfirmModal
:::

## Relaterat

{@link FModal Modal dialogruta}
