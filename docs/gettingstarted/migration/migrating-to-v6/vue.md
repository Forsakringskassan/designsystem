---
title: "Version 6 migreringsguide: @fkui/vue"
short-title: "@fkui/vue"
name: migrating-to-v6-vue
layout: article
redirect_from:
    - components/fform.html
    - components/fformdeprecated.html
---

## Formatbeskrivning på etikett

Använder du formatbeskrivning på {@link FLabel} eller en komponent som nyttjar den (exempelvis {@link FTextField}) måste du ändra namnet på bindings:

```diff
 <f-text-field>
-    <template #description="{ discreteDescriptionClass }">
-        <span :class="discreteDescriptionClass"> Formatbeskrivning </span>
+    <template #description="{ formatDescriptionClass }">
+        <span :class="formatDescriptionClass"> Formatbeskrivning </span>
     </template>
 </f-text-field>
```

Klassnamnet för formatbeskrivning på etikett är ändrat.

```diff
-<div class="label__description--discrete">
+<div class="label__description--format">
```

`FLabelPageObject` metoden är också ändrad att matcha:

```diff
-label.discreteDescription().should("have.text", "...");
+label.formatDescription().should("have.text", "...");
```

## Konfiguration

### Förändrad knappordning

Den inbördes ordning som knapparna presenteras i har ändrats, `FKUIConfig.buttonOrder` byter standardvärde till `RIGHT_TO_LEFT`. Det innebär att interna system som följer knappordningen enligt windows standard behöver nu aktivt sätta `LEFT_TO_RIGHT`.

Görs lämpligtvis i applikationens `main.ts`.

```js
import { config, FKUIConfigButtonOrder } from "@fkui/vue";

config.buttonOrder = FKUIConfigButtonOrder.LEFT_TO_RIGHT;
```

### Teleport target

De deprekerade egenskaperna `FKUIConfig.modalTarget` och `FKUIConfig.popupTarget` är borttagna och ersatta med den kombinerade `FKUIConfig.teleportTarget`.

```diff
 import { config } from "@fkui/vue";

-config.modalTarget = "my > selector";
-config.popupTarget = "my > selector";
+config.teleportTarget = "my > selector";
```

## `FCalendar`

Tidigare emittades eventet `change` när man ändrar månad i kalendern.
Det eventet är nu borttaget och ersatt med `v-model`.

## `FCheckboxGroup` och `FCheckboxGroupField`

Den deprekerade komponenten `FCheckboxGroup` har tagits bort och är ersatt med `FFieldset`, se separat {@link migrating-to-fieldset migreringsguide för fieldset}.

Det deprekerade aliaset `FCheckboxGroupField` har tagits bort och är ersatt med `FCheckboxField`.

## `FCrudDataset`

Tidigare emittades eventet `change` när man ändrar lägger till eller ändrar rader.
Det eventet är nu borttaget och ersatt med `v-model` alternativt de mer specifika eventen `created`, `updated` and `deleted`.

## `FDialogueTree`

Tidigare emittades eventet `change` när man ändrar val.
Det eventet är nu borttaget och ersatt med `v-model`.

## `FForm`, `FFormStep` och `FFormStepButton`

De deprekerade komponenterna `FForm`, `FFormStep` och `FFormStepButton` har tagits bort.
Som ersättare till `FForm` finns `FWizard` alternativt `FValidationForm`, val av ersättare beror på applikationens komplexitet och utförande. Det är troligt att applikationen behöver ny design, då komponenterna inte är en direkt ersättare av `FForm`.

Se dokumentationen för respektive komponent för att avgöra vad som passar bäst:

- {@link FWizard}
- {@link FValidationForm}

## `FInteractiveTable`

Tidigare emittades eventet `update` när man ändrar vald tabellrad.
Det eventet är nu borttaget och ersatt med `v-model`.

## `FList`

Tidigare emittades eventet `update` när man ändrar valda kort.
Det eventet är nu borttaget och ersatt med `v-model`.

## `FRadioGroup` och `FRadioGroupField`

Den deprekerade komponenten `FRadioGroup` har tagits bort och är ersatt med `FFieldset`, se separat {@link migrating-to-fieldset migreringsguide för fieldset}.

Det deprekerade aliaset `FRadioGroupField` har tagits bort och är ersatt med `FRadioField`.

## FFormModal slots

De deprekerade slottarna `submit-button-text` och `cancel-button-text` är borttagna och ersatta med propen `buttons`.

Om du använder någon av dessa slottar i din modalkomponent, ersätt dem med propen enligt:

```diff
+<script setup>
+const buttons = [
+    {
+        label: "Submit",
+        event: "confirm",
+        type: "primary",
+        submitButton: true,
+    },
+    {
+        label: "Cancel",
+        event: "dismiss",
+        type: "secondary",
+        submitButton: false,
+    },
+];
+</script>

 <template>
-    <f-form-modal>
+    <f-form-modal :buttons></f-form-modal>
-        <template #submit-button-text> Submit </template>
-        <template #cancel-button-text> Cancel </template>
    </f-form-modal>
</template>
```

Om du använder {@link form-modal `formModal(..)`} (rekommenderat) för att anropa modalen behövs inga ändringar.

Om du använder template-syntax för att anropa `FFormModal` direkt och använder någon av dessa slottar ersätt med propen likt en modalkomponent ovan.

## `FPageHeader`

### skiplink

Den deprekerade propen `skipLinkHref` är borttagen och ersatt med propen `skipLink`.

```diff
-<f-page-header skip-link skip-link-href="awesome-id">
+<f-page-header skip-link="awesome-id">
```

`skipLink` kunde tidigare ta ett `boolean` värde för att stänga av/på skiplink funktionen men accepterar nu bara en sträng (id på elementet att hoppa till).
Om du behöver stänga av/på skiplink dynamiskt sätt värdet till tom sträng `""` för att stänga av.

### `logo` slot

`FPageHeader` tillhandahåller inte längre en logotyp eller `router-link` inom `logo` slot som standard.
Logo och länkning måste därför skapas själv.

Borttagna props:

- `logoSize`
- `routerLinkPath`
- `routerLinkName`
- `routerLinkLabel`

Om du använt standardlogo med länkning och vill att det ska fungera som tidigare kan du använda {@link FLogo `FLogo`} och göra följande ändringar:

```diff
 <f-page-header>
+    <template #logo>
+        <router-link :to="logoRoute">
+            <f-logo>{{ logoLabel }}</f-logo>
+        </router-link>
+    </template>
 </f-page-header>
```

Du behöver också ange url till logo-bilden med CSS variabler:

```diff
+--f-logo-image-small: url(path/to/image-small.svg)
+--f-logo-image-large: url(path/to/image-large.svg)
```

För att ändra storlek på logotypen som med tidigare `logoSize`, använd `size` prop på `FLogo` med samma värden.

```diff
-<f-page-header logoSize="small">
+<f-page-header>
+    <template #logo>
+        f-logo size="small">{{ logoLabel }}</f-logo>
+    </template>
 </f-page-header>
```

Notera att eftersom `@fkui/design` inte längre tillhandahåller logotyper i olika storlekar och inga ersättare finns så behövs dessa logotyp-bilder läggas till själv för att bibehålla utseendet.

## `FTextField`

Eventet `update` emittas inte längre.
Använd `change` eventet eller `v-model` istället.

```diff
-<f-text-field @update="doSomething">
+<f-text-field @change="doSomething">
```

## `getTextFromScopedSlot`

Den deprekerade funktionen `getTextFromScopedSlot(..)` har tagits bort och är ersatt med {@link renderSlotText `renderSlotText(..)`}.

```diff
-const textContent = getTextFromScopedSlot(slot);
+const textContent = renderSlotText(slot);
```

::: warning

Tänk på att `renderSlotText(..)` returnerar `null` om slotten inte finns eller är tom till skillnad från `getTextFromScopedSlot(..)` som returnerar en tom sträng `""` istället.

:::

## Övrigt

Övriga komponenter, funktioner och typer som även de är borttagna:

- `createFFormProvideOptions`
- `FFormData`
- `FFormPageObject`
- `FFormProvider`
- `FFormStepPageObject`
- `FormStepFields`
- `getRef`
- `isFormStepReference`
- `Reference`
- `setIsOpen`
- `setRef`
- `sortComponentsWithErrorsOnDOMOrder`
