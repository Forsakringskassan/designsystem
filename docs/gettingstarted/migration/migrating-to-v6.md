---
title: Version 6 migreringsguide
name: migrating-to-v6
layout: article
---

## Summering

Följande deprekerade komponenter har tagits bort:

- `FCheckboxGroup`
- `FCheckboxGroupField`
- `FRadioGroup`
- `FRadioGroupField`

Ändringar i komponenter och funktioner:

- `@fkui/logic`: importen `@fkui/logic/lib/polyfills` är borttagen.
- `@fkui/logic`: konstanterna `DATE_REGEXP_WITH_DASH`, `WHITESPACE_PATTERN` och `FORMAT_3_DIGITS_GROUP` är borttagen.
- `@fkui/logic`: funktionen `applyValidationMessages()` är borttagen.
- `FFormModal`: slottarna `submit-button-text` och `cancel-button-text` är borttagna.
- `FPageHeader`: propen `skipLinkHref` är borttagen
- `getTextFromScopedSlot`: funktionen är borttagen.
- Konfiguration: `FKUIConfig.modalTarget` och `FKUIConfig.popupTarget` är borttagna.

För Cypress pageobjekt:

- `trimmedText()` metoden är borttagen från samtliga pageobjekt (ej att förväxla med tredjeparts kommando/assertion med samma namn).
- `FMessageBoxPageObject.title()` och `FMessageBoxPageObject.body()` metoderna är borttagna.
- `FLoaderPageobject.loader()` metoden är borttagen.
- `FNavigationMenuPageobject.menu()` metoden är borttagen.
- `FTooltipPageObject.content()` metoden är borttagen.

Följande deprekerade validatorer har tagits bort:

- `personnummer`

## `@fkui/logic`

Den deprekerade konstanten `DATE_REGEXP_WITH_DASH` är borttagen och ersatt med `FDate` klassen från `@fkui/date`.

Exempelvis om du använder konstanten för att testa om ett datum är giltigt format använd `.isValid(..)` metoden:

```diff
-if (DATE_REGEXP_WITH_DASH.test(value)) {
+const parsed = FDate.fromIso(value);
+if (parsed.isValid()) {
    /* ... */
}
```

Den deprekerade konstanten `WHITESPACE_PATTERN` är borttagen och delvis ersatt med `stripWhitespace`.

Om du använder den för att ta bort whitespace från text ersätt med `stripWhitespace`:

```diff
-const stripped = text.replace(WHITESPACE_PATTERN, "");
+const stripped = stripWhitespace(text);
```

Om du använder den för andra ändamål ersätt med reguljära uttrycket `\s+` (med eller utan global flaggan).

Den deprekerade konstanten `FORMAT_3_DIGITS_GROUP` är borttagen utan ersättare.

Om du använder den behöver du använda ett eget reguljärt uttryck.

### `applyValidationMessages`

Den deprekerade funktionen `applyValidationMessages()` är borttagen utan ersättare.
Funktionen var en placeholder som inte gjorde något och anrop kan därför tas bort.

### Polyfill

Den deprekerade entrypointen `@fkui/logic/lib/polyfills` är borttagen och ersatt med `@fkui/logic/polyfills`.

```diff
-import "@fkui/logic/lib/polyfills";
+import "@fkui/logic/polyfills";
```

## `FCheckboxGroup` och `FCheckboxGroupField`

Den deprekerade komponenten `FCheckboxGroup` har tagits bort och är ersatt med `FFieldset`, se separat {@link migrating-to-fieldset migreringsguide för fieldset}.

Det deprekerade aliaset `FCheckboxGroupField` har tagits bort och är ersatt med `FCheckboxField`.

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

## `FPageHeader` skiplink

Den deprekerade propen `skipLinkHref` är borttagen och ersatt med propen `skipLink`.

```diff
-<f-page-header skip-link skip-link-href="awesome-id">
+<f-page-header skip-link="awesome-id">
```

`skipLink` kunde tidigare ta ett `boolean` värde för att stänga av/på skiplink funktionen men accepterar nu bara en sträng (id på elementet att hoppa till).
Om du behöver stänga av/på skiplink dynamiskt sätt värdet till tom sträng `""` för att stänga av.

## `getTextFromScopedSlot`

Den deprekerade funktionen `getTextFromScopedSlot(..)` har tagits bort och är ersatt med {@link renderSlotText `renderSlotText(..)`}.

```diff
-const textContent = getTextFromScopedSlot(slot);
+const textContent = renderSlotText(slot);
```

::: warning

Tänk på att `renderSlotText(..)` returnerar `null` om slotten inte finns eller är tom till skillnad från `getTextFromScopedSlot(..)` som returnerar en tom sträng `""` istället.

:::

## `FKUIConfig.modalTarget` och `FKUIConfig.popupTarget`

De deprekerade egenskaperna `FKUIConfig.modalTarget` och `FKUIConfig.popupTarget` är borttagna och ersatta med den kombinerade `FKUIConfig.teleportTarget`.

```diff
 import { config } from "@fkui/vue";

-config.modalTarget = "my > selector";
-config.popupTarget = "my > selector";
+config.teleportTarget = "my > selector";
```

## Pageobjects

### `trimmedText()` metoden

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

### `FLoaderPageobject.loader()` metoden

Den deprekerade metoden `FLoaderPageobject.loader()` är borttagen.
Då metoden inte fungerar i normalfallet finns ingen direkt ersättare, om man använder metoden så ska man rätta sin selector och använda `.el()`.

```diff
-const loader = new FLoaderPageObject("#parent-element");
-loader.loader().should("be.visible");
+const loader = new FLoaderPageObject("#loader-element");
+loader.el().should("be.visible");
```

### `FMessageBoxPageObject`

De deprekerade metoderna `FMessageBoxPageObject.title()` och `FMessageBoxPageObject.body()` är borttagna.
Eftersom innehållet i meddelanderutan slottas in finns ingen direkt ersättare utan får antingen använda `.content()` för att hämta ut hela innehållet i slotten eller använda en egen selector.

```diff
-messagebox.title().should("have.text", "..");
+messagebox.content().should("contain.text", "..");
```

### `FNavigationMenuPageobject.menu()` metoden

Den deprekerade metoden `FNavigationMenuPageobject.menu()` är borttagen och ersatt med direkta metoder på `FNavigationMenuPageobject`.

```diff
-nav.menu().item(0).click();
+nav.item(0).click();
```

### `FTooltipPageObject.content()` methoden

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

## ValidationService

### Validator `personnummer`

Den deprekerade validatorn `personnummer` är borttagen och ersätts med validatorerna {@link validators#personnummer_format_personnummerformat `personnummerFormat`} och {@link validators#personnummer_checksumma_personnummerluhn `personnummerLuhn`}.

```diff
    <f-text-field
        v-model="personnummerModel"
-       v-validation.personnummer
+       v-validation.personnummerFormat.personnummerLuhn
    >
```
