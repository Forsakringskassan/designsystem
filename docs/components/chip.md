---
title: Chip
status: Produktionsklar
layout: component
component:
    - name: chip
      source: _chip.scss
---

Chip är lämpliga att använda för att till exempel filtrera ett sökresultat eller göra ett snabbt val.
Använda inte chip istället för en radioknappsgrupp, en grupp med kryssrutor eller en dropplista i ett formulär.

```import live-example test-id=live
FFieldsetChipLiveExample.vue
```

Komponenten chip finns i två varianter: radioknapp och kryssruta.
Lägg till radioknappar eller kryssrutor i en `FFieldset` och
lägg till egenskapen `chip` på `FFieldset`.

```diff
-<f-fieldset name="my-group">
+<f-fieldset name="my-group" chip>
   <f-radio-field v-model="myModel" value="1"> The first item </f-radio-field>
   <f-radio-field v-model="myModel" value="2"> Second item </f-radio-field>
```
