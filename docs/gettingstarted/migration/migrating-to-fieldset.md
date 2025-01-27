---
title: Fieldset migreringsguide
name: migrating-to-fieldset
layout: article
---

Från och med release 5.17.0 (2024-03-02) är gruppkomponenter för radio och kryssruta deprekerade.

- `FRadioGroup`
- `FRadioGroupField`
- `FCheckboxGroup`
- `FCheckboxGroupField`

Den här migreringsuiden ger information om hur du ersätter dem med `FFieldset`.

## Radioknapp

Ersätt `FRadioGroup` med `FFieldset`.

```diff
-<f-radio-group>
+<f-fieldset>
```

Ersätt attributet `is-horizontal` med `horizontal`.

```diff
-<f-radio-group is-horizontal>
+<f-fieldset horizontal>
```

Indentering är inte längre kopplat till komponenten, utan sker fristående genom att ange klassen `indent`.

```diff
-<f-radio-group>
-    <template #default="{ indentClass }">
-        <div :class="indentClass">
+<f-fieldset horizontal>
+    <div class="indent">
```

Ersätt `FRadioGroupField` med `FRadioField`.

```diff
-<f-radio-group-field>
+<f-radio-field>
```

## Kryssruta

Ersätt `FCheckboxGroup` med `FFieldset`.

```diff
-<f-checkbox-group>
+<f-fieldset>
```

Ersätt `FCheckboxGroupField` med `FCheckboxField`.

```diff
-<f-checkbox-group-field>
+<f-checkbox-field>
```

## Komplett exempel

```diff
-<f-radio-group name="barn-over-18" is-horizontal>
+<f-fieldset name="barn-over-18" horizontal>
    <template #label> Bor det barn som har fyllt 18 år i bostaden? </template>
-    <f-radio-group-field
+    <f-radio-field
        id="barn-over-18-ja"
        v-model="hasChildrenOverEighteen"
        :value="true"
    >
        Ja, det bor barn över 18 år där
-    </f-radio-group-field>
+    </f-radio-field>
-</f-radio-group>
+</f-fieldset>
```
