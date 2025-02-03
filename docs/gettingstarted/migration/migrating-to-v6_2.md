---
title: Version 6 migreringsguide 2
name: migrating-to-v6_2
layout: article
---

## Komponenter (@fkui/vue)

### Borttagna

- {@link migrating-to-v6_2#fcheckboxgroup_och_fcheckboxgroupfield `FCheckboxGroup`}
- {@link migrating-to-v6_2#fcheckboxgroup_och_fcheckboxgroupfield `FCheckboxGroupField`}
- {@link migrating-to-v6_2#fradiogroup_och_fradiogroupfield `FRadioGroup`}
- {@link migrating-to-v6_2#fradiogroup_och_fradiogroupfield `FRadioGroupField`}

### Ändrade

- {@link migrating-to-v6_2#fcalendar `FCalendar`}
- {@link migrating-to-v6_2#fformmodal_slots `FFormModal`}
- {@link migrating-to-v6_2#fmodal_deprekerade_css_klasser `FModal`}
- {@link migrating-to-v6_2#fpageheader_skiplink `FPageHeader`}
- {@link migrating-to-v6_2#ftextfield `FTextField`}

### FCheckboxGroup och FCheckboxGroupField

Den deprekerade komponenten `FCheckboxGroup` har tagits bort och är ersatt med `FFieldset`, se separat {@link migrating-to-fieldset migreringsguide för fieldset}.

Det deprekerade aliaset `FCheckboxGroupField` har tagits bort och är ersatt med `FCheckboxField`.

### FRadioGroup och FRadioGroupField

Den deprekerade komponenten `FRadioGroup` har tagits bort och är ersatt med `FFieldset`, se separat {@link migrating-to-fieldset migreringsguide för fieldset}.

Det deprekerade aliaset `FRadioGroupField` har tagits bort och är ersatt med `FRadioField`.

### FCalendar

Tidigare emittades eventet `change` när man ändrar månad i kalendern.
Det eventet är nu borttaget och ersatt med `v-model`.

### FFormModal slots

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

### FModal deprekerade CSS-klasser

De deprekerade CSS klasserna `modal__dialog-container-large` och `modal__dialog-container-fullscreen` är borttagna.
Detta påverkar endast dig som använder stylingen direkt, använder man `@fkui/vue` komponenten `FModal` påverkas man inte.
Klasserna är ersatta med `modal__dialog-container--large` respektive `modal__dialog-container--fullscreen`.

```diff
-<div class="modal__dialog-container modal__dialog-container-large">
+<div class="modal__dialog-container modal__dialog-container--large">
```

### FPageHeader skiplink

Den deprekerade propen `skipLinkHref` är borttagen och ersatt med propen `skipLink`.

```diff
-<f-page-header skip-link skip-link-href="awesome-id">
+<f-page-header skip-link="awesome-id">
```

`skipLink` kunde tidigare ta ett `boolean` värde för att stänga av/på skiplink funktionen men accepterar nu bara en sträng (id på elementet att hoppa till).
Om du behöver stänga av/på skiplink dynamiskt sätt värdet till tom sträng `""` för att stänga av.

### FTextField

Eventet `update` emittas inte längre.
Använd `change` eventet eller `v-model` istället.

```diff
-<f-text-field @update="doSomething">
+<f-text-field @change="doSomething">
```

## Logik (@fkui/logic)

- importen {@link migrating-to-v6_2#polyfill `@fkui/logic/lib/polyfills`} är borttagen.
- konstanterna {@link migrating-to-v6_2#date_regexp_with_dash `DATE_REGEXP_WITH_DASH`}, {@link migrating-to-v6_2#whitespace_pattern `WHITESPACE_PATTERN`} och {@link migrating-to-v6_2#format_3_digits_group `FORMAT_3_DIGITS_GROUP`} är borttagen.
- {@link migrating-to-v6_2#applyvalidationmessages `applyValidationMessages()`}, {@link migrating-to-v6_2# `ìsRadiobuttonOrCheckbox()`} är borttagna.
- {@link migrating-to-v6_2#setcookie `setCookie(..)`} tar inte längre `timeLimitMillis` parametern.
- {@link migrating-to-v6_2#gettextfromscopedslot `getTextFromScopedSlot()`} är borttagen.
- {@link migrating-to-v6_2#fkuiconfig_modaltarget_och_fkuiconfig_popuptarget `FKUIConfig.modalTarget`} och {@link migrating-to-v6_2#fkuiconfig_modaltarget_och_fkuiconfig_popuptarget `FKUIConfig.popupTarget`} är borttagna.

### Polyfill

Den deprekerade entrypointen `@fkui/logic/lib/polyfills` är borttagen och ersatt med `@fkui/logic/polyfills`.

```diff
-import "@fkui/logic/lib/polyfills";
+import "@fkui/logic/polyfills";
```

### DATE_REGEXP_WITH_DASH

Den deprekerade konstanten `DATE_REGEXP_WITH_DASH` är borttagen och ersatt med `FDate` klassen från `@fkui/date`.

Exempelvis om du använder konstanten för att testa om ett datum är giltigt format använd `.isValid(..)` metoden:

```diff
-if (DATE_REGEXP_WITH_DASH.test(value)) {
+const parsed = FDate.fromIso(value);
+if (parsed.isValid()) {
     /* ... */
 }
```

### WHITESPACE_PATTERN

Den deprekerade konstanten `WHITESPACE_PATTERN` är borttagen och delvis ersatt med `stripWhitespace`.

Om du använder den för att ta bort whitespace från text ersätt med `stripWhitespace`:

```diff
-const stripped = text.replace(WHITESPACE_PATTERN, "");
+const stripped = stripWhitespace(text);
```

Om du använder den för andra ändamål ersätt med reguljära uttrycket `\s+` (med eller utan global flaggan).

### FORMAT_3_DIGITS_GROUP

Den deprekerade konstanten `FORMAT_3_DIGITS_GROUP` är borttagen utan ersättare.

Om du använder den behöver du använda ett eget reguljärt uttryck.

### applyValidationMessages()

Den deprekerade funktionen `applyValidationMessages()` är borttagen utan ersättare.
Funktionen var en placeholder som inte gjorde något och anrop kan därför tas bort.

### isRadiobuttonOrCheckbox()

Intern funktion som ej var tänkt för allmän konsumption.
Om du använder denna behöver du implementera logiken själv:

```diff
-if (isRadiobuttonOrCheckbox(element)) {
+if (element instanceof HTMLElement && ["radio", "checkbox"].includes(element.type)) {
     /* ... */
 }
```

### setCookie()

Funktionen `setCookie(..)` tar inte längre den deprekerade parametern `timeLimitMillis`.
Använd `timeLimitSeconds` istället.

### getTextFromScopedSlot

Den deprekerade funktionen `getTextFromScopedSlot(..)` har tagits bort och är ersatt med {@link renderSlotText `renderSlotText(..)`}.

```diff
-const textContent = getTextFromScopedSlot(slot);
+const textContent = renderSlotText(slot);
```

::: warning

Tänk på att `renderSlotText(..)` returnerar `null` om slotten inte finns eller är tom till skillnad från `getTextFromScopedSlot(..)` som returnerar en tom sträng `""` istället.

:::

### FKUIConfig.modalTarget och FKUIConfig.popupTarget

De deprekerade egenskaperna `FKUIConfig.modalTarget` och `FKUIConfig.popupTarget` är borttagna och ersatta med den kombinerade `FKUIConfig.teleportTarget`.

```diff
 import { config } from "@fkui/vue";

-config.modalTarget = "my > selector";
-config.popupTarget = "my > selector";
+config.teleportTarget = "my > selector";
```

## Cypress Pageobjects

- `trimmedText()` metoden är borttagen från samtliga pageobjekt (ej att förväxla med tredjeparts kommando/assertion med samma namn).
  -``FMessageBoxPageObject.title()` och `FMessageBoxPageObject.body()` metoderna är borttagna.
- `FLoaderPageobject.loader()` metoden är borttagen.
- `FNavigationMenuPageobject.menu()` metoden är borttagen.
- `FTooltipPageObject.content()` metoden är borttagen.

### trimmedText() metoden

Den deprekerade `trimmedText()` metoden är borttagen från samtliga pageobjekt.
Ej att förväxla med tredjeparts kommando/assertion med samma namn som med fördel kan användas som ersättare.

Som förslag till ersättare kan någon av följande tekniker användas:

- `cy.get(..).should("have.text", "...")` - givet att det inte finns inledande eller efterföljande whitespace kan native `have.text` användas.
- `cy.get(..).should("contain.text", "...")` - givet att du testar hela textens innehåll kan native `contain.text` användas.
- `cy.get(..).should("trimmedText", "...")` - tredjeparts assertion som tillhandhåller motsvarande (och buggfri) lösning kan användas.

Specifikt, för varje pageobjekt kan `.trimmedText().should(..)` ersättas med:

- För `FBadgePageObject` ersätt med `.el().should(..)`.-
- För `FCheckboxFieldPageObject` ersätt med `.label().should(..)`.
- För `FLabelPageObject` ersätt med `.el().should(..)`
- För `FRadioFieldPageObject` ersätt med `.label().should(..)`.
- För `FSelectFieldPageObject` ersätt med `.selectedOption().should(..)`.

### FLoaderPageobject.loader() metoden

Den deprekerade metoden `FLoaderPageobject.loader()` är borttagen.
Då metoden inte fungerar i normalfallet finns ingen direkt ersättare, om man använder metoden så ska man rätta sin selector och använda `.el()`.

```diff
-const loader = new FLoaderPageObject("#parent-element");
-loader.loader().should("be.visible");
+const loader = new FLoaderPageObject("#loader-element");
+loader.el().should("be.visible");
```

### FMessageBoxPageObject

De deprekerade metoderna `FMessageBoxPageObject.title()` och `FMessageBoxPageObject.body()` är borttagna.
Eftersom innehållet i meddelanderutan slottas in finns ingen direkt ersättare utan får antingen använda `.content()` för att hämta ut hela innehållet i slotten eller använda en egen selector.

```diff
-messagebox.title().should("have.text", "..");
+messagebox.content().should("contain.text", "..");
```

### FNavigationMenuPageobject.menu() metoden

Den deprekerade metoden `FNavigationMenuPageobject.menu()` är borttagen och ersatt med direkta metoder på `FNavigationMenuPageobject`.

```diff
-nav.menu().item(0).click();
+nav.item(0).click();
```

### FTooltipPageObject.content() methoden

Den deprekerade metoden `FTooltipPageObject.content()` har tagits bort och är ersatt med direkta metoder på `FTooltipPageObject`.

```diff
-tooltip.content().closeButtonTop().click();
+tooltip.closeButton().click();
```

```diff
-tooltip.content().closeButtonBottom().click();
+tooltip.closeButton().click();
```

```diff
-tooltip.content().heading().should("have.text", "Lorem ipsum");
+tooltip.heading().should("have.text", "Lorem ipsum");
```

```diff
-tooltip.content().brodtext().should("have.text", "Lorem ipsum");
+tooltip.body().should("have.text", "Lorem ipsum");
```

::: warning Notera

Både `closeButtonBottom()` och `closeButtonTop()` är ersatt med `closeButton()` då det inte längre finns två separata knappar.

:::
