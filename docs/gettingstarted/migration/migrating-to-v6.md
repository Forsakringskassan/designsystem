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

- `FFormModal`: slottarna `submit-button-text` och `cancel-button-text` är borttagna.
- `getTextFromScopedSlot`: funktionen är borttagen.

För Cypress pageobjekt:

- `trimmedText()` metoden är borttagen från samtliga pageobjekt (ej att förväxla med tredjeparts kommando/assertion med samma namn).

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

## `getTextFromScopedSlot`

Den deprekerade funktionen `getTextFromScopedSlot(..)` har tagits bort och är ersatt med {@link renderSlotText `renderSlotText(..)`}.

```diff
-const textContent = getTextFromScopedSlot(slot);
+const textContent = renderSlotText(slot);
```

::: warning

Tänk på att `renderSlotText(..)` returnerar `null` om slotten inte finns eller är tom till skillnad från `getTextFromScopedSlot(..)` som returnerar en tom sträng `""` istället.

:::

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
