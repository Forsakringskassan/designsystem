---
title: Detaljpanel
status: Beta
layout: component
component: FDetailsPanel
---

Detaljpanel (FDetailsPanel) används tillsammans med {@link FPageLayout applikationsmall} för att visa detaljer om ett objekt som användaren har valt.

```import
FDetailsPanelExample.vue
```

Detaljpanel består av tre slottar:

- `header` - rubrik
- `content` - huvudinnehåll
- `footer` - frivilligt innehåll som placeras längst ner

```import borderless nomarkup
FDetailsPanelSlots.vue
```

Detaljpanel kombineras med fördel med {@link FResizePane justerbar yta} (FResizePane) eller {@link FFixedPane fixerad yta} (FFixedPane).

## Användning

Lägg till en `FDetailsPanel` i en yta i `FPageLayout` och namnge den med ett unikt namn.

```html hidden name=base-usage
<f-page-layout layout="three-column">
    <template #default="layoutScope">
        <div :slot="layoutScope.content">Innehållsyta</div>
    </template>
</f-page-layout>
```

```html compare=base-usage name=simple
<f-page-layout layout="three-column">
    <template #default="layoutScope">
        <f-details-panel :slot="layoutScope.right" name="awesome-panel">
            <template #default> </template>
        </f-details-panel>
        <div :slot="layoutScope.content">Innehållsyta</div>
    </template>
</f-page-layout>
```

Om panelen ska ha en justerbar storlek lägg en `FResizePane` runt om:

```html compare=simple name=resize
<f-page-layout layout="three-column">
    <template #default="layoutScope">
        <f-resize-pane :slot="layoutScope.right">
            <f-details-panel name="awesome-panel">
                <template #default> </template>
            </f-details-panel>
        </f-resize-pane>
        <div :slot="layoutScope.content">Innehållsyta</div>
    </template>
</f-page-layout>
```

Du lägger innehåll i respektive slot:

```html compare=simple name=slots
<f-page-layout layout="three-column">
    <template #default="layoutScope">
        <f-details-panel :slot="layoutScope.right" name="awesome-panel">
            <template #default="panelScope">
                <h2 :slot="panelScope.header">Rubrik</h2>
                <div :slot="panelScope.content">Innehåll</div>
                <div :slot="panelScope.footer">Footer</div>
            </template>
        </f-details-panel>
        <div :slot="layoutScope.content">Innehållsyta</div>
    </template>
</f-page-layout>
```

Detalpanelen öppnas med API från {@link useDetailsPanel `useDetailsPanel()`} och kräver ett objekt.
Använd namnet du angett i propen `name` som identifierare för att hämta ut rätt detaljpanel.

```ts
const myItem = {};

/* --- cut above --- */

import { useDetailsPanel } from "@fkui/vue";

const panel = useDetailsPanel("awesome-panel");

panel.open(myItem); // öppnar panelen med innehållet från myItem
panel.close(); // stänger panelen, samma som att användaren klickar på stängkrysset
```

`useDetailsPanel()` kan användas överallt i din kodbas så länge namnet matchar en detaljpanel.
Det är säkert att anropa `useDetailsPanel()` före detaljpanelen skapats upp men den måste finnas när `open()` senare anropas.

Vi rekommenderar att du lägger namnet på panelen i en konstant som återanvänds mellan filer.

```ts
export const awesomePanel = "awesomePanel";
```

```ts nocompile nolint
import { awesomePanel } from "./constants";

const panel = useDetailsPanel(awesomePanel);
```

```diff
-<f-details-panel name="awesome-panel">
+<f-details-panel :name="awesomePanel">
```

Du återfår objektet i panelen med scope attribute `item`:

```html compare=slots
<f-page-layout layout="three-column">
    <template #default="layoutScope">
        <f-details-panel :slot="layoutScope.right" name="awesome-panel">
            <template #default="panelScope">
                <h2 :slot="panelScope.header">Rubrik</h2>
                <div :slot="panelScope.content">
                    <pre>{{ panelScope.item }}</pre>
                </div>
                <div :slot="panelScope.footer">Footer</div>
            </template>
        </f-details-panel>
        <div :slot="layoutScope.content">Innehållsyta</div>
    </template>
</f-page-layout>
```

Skicka en valfri callback om du vill agera på att detaljpanelen stängs:

```ts
import { useDetailsPanel } from "@fkui/vue";

const myItem = {};
const panel = useDetailsPanel("awesome-panel");

/* --- cut above --- */

panel.open(myItem, {
    onClose() {
        /* anropas när detaljpanel stängs */
    },
});
```

::: info Tänk på att

`onClose()` anropas bara om detaljpanelen stängs.
Om detaljpanelen öppnas med ett nytt objekt innan slutanvändaren stängt panelen anropas inte `onClose()` på det föregående objektet.
Endast callback som associerats med det senaste öppnade objektet anropas.

:::

## Typescript

Detaljpanelen är generic och kan typsäkras genom att skapa ett alias för komponenten.

```ts
import { FDetailsPanel, useDetailsPanel } from "@fkui/vue";

interface Item {
    name: string;
}

const panel = useDetailsPanel<Item>("awesome-panel");
const ItemPanel = FDetailsPanel<Item>;

panel.open({ name: "Kalle Anka" });
```

```diff
-<f-details-panel name="awesome-panel">
+<item-panel name="awesome-panel">
     <template #default="{ item }">
```

`item` kommer då vara av typen `Item`.

Definiera upp att elementet ärver från `FDetailsPanel` om du använder [HTML-validate][html-validate]:

```diff
 "elements": [
     "html5",
+    {
+        "item-panel": { "inherits": "f-details-panel" }
+    }
 ]
```

[html-validate]: https://html-validate.org/

## Egna knappar

Du kan lägga in egna knappar som stänger detaljpanelen.

```html compare=slots
<f-page-layout layout="three-column">
    <template #default="layoutScope">
        <f-details-panel :slot="layoutScope.right" name="awesome-panel">
            <template #default="panelScope">
                <h2 :slot="panelScope.header">Rubrik</h2>
                <div :slot="panelScope.content">
                    <button type="button" @click="panelScope.close()">
                        Stäng
                    </button>
                </div>
                <div :slot="panelScope.footer">Footer</div>
            </template>
        </f-details-panel>
        <div :slot="layoutScope.content">Innehållsyta</div>
    </template>
</f-page-layout>
```

`close()` tar en optional sträng som kan användas för att särskilja olika knappar:

```html static
<button type="button" @click="close('save')">Spara</button>
<button type="button" @click="close('cancel')">Avbryt</button>
```

```ts
import { useDetailsPanel } from "@fkui/vue";

const myItem = {};
const panel = useDetailsPanel<unknown>("awesome-panel");

/* --- cut above --- */

panel.open(myItem, {
    onClose({ reason }) {
        if (reason === "save") {
            /* ... */
        }
    },
});
```

::: warning Tänk på att

Om du ska använda detaljpanelen för att redigera objekt tänk på att skicka in en kopia av original-objektet istället.
Annars riskerar du att mutera originalet vilket bland annat förhindrar att avbryta redigering.

:::

## Redigera objekt

Riktlinjer för att använda detaljpanelen för att redigera objekt:

- Använd en separat knapp med en annan orsak (`@click="close('save')"`) för att låta slutanvändaren ha möjlighet att ångra sig och förhindra att man oavsikligt redigerar data.
- Använd en kopia av objektet och mutera inte originalobjektet direkt förrän användaren explicit valt att spara.

```import
FDetailsPanelEdit.vue
```

## Flera detaljpaneler i samma yta

Ibland är det användbart att skapa upp flera detaljpaneler i samma yta.
Som en riktlinje rekommenderar vi att endast visa en detaljpanel åt gången.

Om du har flera detaljpaneler och vill stoppa andra från att visas samtidigt sätt propen `exclusive` till ett gemensamt gruppnamn:

Då det blir flera rotelement behöver panelerna placeras i en `FFixedPane` eller `FResizePane` för att layout ska bete sig korrekt.

```html static
<f-fixed-pane>
    <f-details-panel name="panel-1" exclusive="panels"></f-details-panel>
    <f-details-panel name="panel-2" exclusive="panels"></f-details-panel>
</f-fixed-pane>
```

Om en detaljpanel i samma grupp öppnas stängs alla andra detaljpaneler automatiskt (utan att `onClose()` anropas).

```html static
<f-fixed-pane>
    <f-details-panel name="panel-1" exclusive="panels"></f-details-panel>
    <f-details-panel name="panel-2" exclusive="panels"></f-details-panel>
</f-fixed-pane>
```

## Textnycklar

:::api
translation:FDetailsPanel
:::

## Props, Events & Slots

:::api
vue:FDetailsPanel
:::
