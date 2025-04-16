---
title: Formulärsmodal
status: Produktionsklar
layout: component
component: FFormModal
---

Formulärsmodal är en standardmodal som kan presentera formulärsfält och hantera validering.

Formulärsmodalen baseras på en modal dialogruta av typen standard och visas i fullskärm i mobil (<640px).

Modalen har alltid en primärknapp för submit och en sekundärknapp för att avbryta och ångra.
Standardinställning för knappordning i modaler är att primärknappen ligger först följt av sekundärknappen.
Alla fält valideras när användaren trycker på primärknappen.

- Använd inte formulärsmodaler till stora formulär, begränsa formuläret till några få komponenter och undvik flerradiga inmatningsfält.
- Öppna inte ytterligare modaler från en modal.

## Användning

Du skapar själv upp din formulärsmodal genom att skapa upp en ny Vue-komponent där `FFormModal`-komponenten nyttjas.

Skapa först upp ett interface motsvarande den data din formulärsmodal ska arbeta med:

```ts static
interface Person {
    name: string;
    age: string;
}
```

Din komponent ska innehålla en prop `value` motsvarande ett objekt av interfacet:

```diff
 export default defineComponent({
     props: {
+        value: {
+            type: Object as PropType<Person>,
+            required: true,
+        },
     },
 });
```

Template använder `FFormModal` och binder `value` dels som `value`-propen men också som `v-model` för respektive inmatningsfält.
Inmatningsfälten läggs in i `#input-text-fields`-slotten.

```vue static
<template>
    <f-form-modal :value>
        <template #header> Awesome Modal </template>
        <template #input-text-fields>
            <f-text-field v-model="value.name"> Namn </f-text-field>
            <f-text-field v-model="value.age"> Ålder </f-text-field>
        </template>
    </f-form-modal>
</template>
```

::: details Fullständigt exempel

```vue static
<template>
    <f-form-modal :value>
        <template #header> Awesome Modal </template>
        <template #input-text-fields>
            <f-text-field v-model="value.name"> Namn </f-text-field>
            <f-text-field v-model="value.age"> Ålder </f-text-field>
        </template>
    </f-form-modal>
</template>

<script lang="ts">
import { type PropType, defineComponent } from "vue";
import { FFormModal, FTextField } from "@fkui/vue";

interface Person {
    name: string;
    age: string;
}

export default defineComponent({
    components: { FFormModal, FTextField },
    props: {
        value: {
            type: Object as PropType<Person>,
            required: true,
        },
    },
});
</script>
```

:::

::: danger Tänk på att

Data muteras direkt på `value`-propen.
Det kan leda till oönskade konsekvenser om konsumenten skickas in existernade referenser till objekt istället för att skicka in en kopia eller nytt objekt.
Du kan antingen låta din formulärsmodal hantera detta genom att internt kopiera `value` eller tydligt dokumentera att konsumenten måste skicka in en kopia.

:::

## Öppna modal

Du öppnar modalen med {@link form-modal `formModal()`} (options API) eller {@link useModal `useModal()`} (composition API).

**Options API:**

```ts
import { defineComponent } from "vue";
import { formModal } from "@fkui/vue";

/* eslint-disable-next-line @typescript-eslint/no-empty-object-type */
interface Person {}

const PersonFormModal = defineComponent({});

defineComponent({
    methods: {
        async dummy() {
            /* --- cut above --- */

            const result = await formModal<Person>(this, PersonFormModal);

            /* --- cut below --- */
        },
    },
});
```

**Composition API:**

```
import { defineComponent } from "vue";

/* eslint-disable-next-line @typescript-eslint/no-empty-object-type */
interface Person {}

const PersonFormModal = defineComponent({});

/* --- cut above --- */

import { useModal } from "@fkui/vue";

const { formModal } = useModal();

async function onOpen(): Promise<void> {
	const result = await formModal<Person>(PersonFormModal);

	/* do something with result */
}
```

Returvärdet är `Promise` som löses ut med `resolve(value)` (det objekt som ligger lagrat i `value` när modalen stängs).
Om användaren avbryter modalen avvisas `Promise` med `reject()` .

Förifylld data kan skickas in med propen `value`:

```ts
import { defineComponent } from "vue";

/* eslint-disable-next-line @typescript-eslint/no-empty-object-type */
interface Person {}

const PersonFormModal = defineComponent({});

/* --- cut above --- */

import { useModal } from "@fkui/vue";

const { formModal } = useModal();

const result = await formModal<Person>(PersonFormModal, {
    props: {
        value: {
            name: "Kalle Anka",
            age: 60,
        },
    },
});
```

```import
FFormModalApiExample.vue
```

## Användning med template (deprekerad)

Att använda `FFormModal` nästlad i template är deprekerat.
Vi rekommenderar att du flyttar den till en egen Vue komponent och använder API för att öppna den.
Se {@link FFormModal#anvandning `Användning`} för hur du använder `FFormModal` med API.

```diff
 <template>
     <div>
         <button type="button" @click="onClick">Open modal</button>
-        <f-form-modal></f-form-modal>
     </div>
 </template>
```

## Formulärsmodal med flera knappar

Komponenten har en prop `buttons` som styr vilka knappar som finns i modalens sidfot.
Med den kan du ta bort existerande knappar eller använda en helt egen uppsättning.

```ts
import { defineComponent } from "vue";
import { formModal } from "@fkui/vue";

const MyAwesomeModal = defineComponent({});

defineComponent({
    methods: {
        async dummy() {
            /* --- cut above --- */

            const formdata = await formModal(this, MyAwesomeModal, {
                props: {
                    buttons: [
                        /* ... */
                    ],
                },
            });

            /* --- cut below --- */
        },
    },
});
```

`buttons` är en lista av typen `FModalButtonDescriptor`:

```ts
export interface FModalButtonDescriptor {
    label: string;
    screenreader?: string;
    event?: string;
    reason?: string;
    type: "primary" | "secondary";
    submitButton?: boolean;
}
```

```ts nocompile nolint
buttons: [{ label: "Stäng", event: "dismiss" }];
```

Två event har speciell innebörd:

- `dismiss`: stänger modalen utan att spara formulärsdata.
- `submit`: stänger modalen och returnerar formulärsdata till anroparen.

## Skärmläsare

Du kan lägga till extra skärmläsartext på knappar med `screenreader` property:

```diff
-buttons: [{ label: "Stäng", event: "dismiss" }];
+buttons: [{ label: "Stäng", screenreader: "formuläret", event: "dismiss" }];
```

Om du använder `screenreader` för en knapp så kommer skärmläsare att läsa upp den texten efter knapptexten i `label`. Detta används för att tydliggöra vad knappen kommer att göra i de fallen där det kan vara otydligt för skärmläsaranvändare.

### Validering av inmatad data

Inmatningsfälten valideras redan med vanlig validering, men om du behöver utföra extra validering (manuella steg, korsvalidering eller validering på backend och så vidare) så kan du använda beforeSubmit:

```html static
<f-form-modal
    :is-open="isOpen"
    :value="value"
    :before-submit="onBeforeSubmit"
    @submit="onSubmit"
>
</f-form-modal>
```

Notera att det är metoden `onBeforeSubmit` som ska skickas in i sin helhelt, anropa inte metoden med `:before-submit="onBeforeSubmit()"`.
I `onBeforeSubmit` har du möjlighet att sätta nya valideringsfel på inmatningsfält:

```ts
import { ValidationService } from "@fkui/logic";
import { getElementFromVueRef, FFormModalAction } from "@fkui/vue";
import { defineComponent } from "vue";

defineComponent({
    data() {
        return {
            showErrorMessage: false,
        };
    },
    methods: {
        /* --- cut above --- */

        onBeforeSubmit(): void {
            const myField = getElementFromVueRef(this.$refs.myField);
            ValidationService.setError(myField, "This value is invalid!");
        },

        /* --- cut below --- */
    },
});
```

Vi rekommenderar att alla fel är kopplade till ett specifikt inmatningsfält men om du istället vill avbryta inskicket och presentera ett fel med exempelvis en meddeladeruta kan du returnera `FFormModalAction.CANCEL` från `onBeforeSubmit`:

```ts
import { FFormModalAction } from "@fkui/vue";
import { defineComponent } from "vue";

defineComponent({
    data() {
        return {
            showErrorMessage: false,
        };
    },
    methods: {
        /* --- cut above --- */

        onBeforeSubmit(): FFormModalAction {
            this.showErrorMessage = true;
            return FFormModalAction.CANCEL;
        },

        /* --- cut below --- */
    },
});
```

## API

:::api
vue:FFormModal
:::

## Relaterat

- {@link useModal `useModal()`} (composition API) {@link form-modal `formModal()`} (options API) för programatiskt användande av formulärsmodal.
- {@link FModal Modal} för mer information om modaler.
