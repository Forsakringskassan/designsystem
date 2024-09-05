---
title: Kryssruta
status: Produktionsklar
layout: component
component:
    - FFieldset
    - FCheckboxField
---

Använd kryssrutor när det ska vara möjligt att välja ett valfritt antal alternativ i en lista. En ensam kryssruta användas när användaren ska välja om något ska vara på eller av.

```import live-example test-id=live
FCheckboxFieldLiveExample.vue
```

Saknar du `FCheckboxGroup`-komponenten? Den är deprekerad, för detaljer se {@link migrating-to-fieldset migreringsguide }.

## Copy

Texter till kryssrutor ska vara korta och tydliga. Det är viktigt att användaren förstår skillnaden mellan olika alternativ.

Det finns olika sätt att formulera texterna beroende på hur texten i etiketten formuleras. Etiketten kan exempelvis formuleras som en fråga och kryssrutorna som svar. Ett annat sätt är att formulera etiketten som en uppmaning och kryssrutorna som olika alternativ.

## Modellvärde i en array

Du kan spara modellvärdet i en array med vilka val som är gjorda. Se koden nedan där `colors` är en array som ersätter tidigare booleska värden.

```diff
 <f-fieldset name="colors">
     <template #label>Färger</template>
-    <f-checkbox-field v-model="red" :value="true">
+    <f-checkbox-field v-model="colors" value="red">
         Röd
     </f-checkbox-field>
-    <f-checkbox-field v-model="green" :value="true">
+    <f-checkbox-field v-model="colors" value="green">
         Grön
     </f-checkbox-field>
 </f-fieldset>
```

## Ensam kryssruta

Om du ska använda en ensam kryssruta ska den fortfarande placeras i en grupp. Däremot ska antalet kryssrutor inte läsas upp.

```import test-id=single
FCheckboxGroupSingle.vue
```

## Komplexa värden

```import test-id=values
FCheckboxGroupValues.vue
```

## API

### FFieldset

Ersätter `FCheckboxGroup`.

:::api
vue:FFieldset
:::

### FCheckboxField

Ersätter `FCheckboxGroupField`.

:::api
vue:FCheckboxField
:::
