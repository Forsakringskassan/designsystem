<script setup lang="ts">
import { ref, useTemplateRef } from "vue";
import { parseNumber } from "@fkui/logic";
import { type ValidityModel, defineValidator, setFormSubmitted, validateElement } from "@fkui/validation";
import { FTextField2 } from "../components";

const validity = ref<{ isValid: boolean }>({ isValid: false });
const value1 = ref(12);
const value2 = ref();
const form = useTemplateRef("form");

declare module "@fkui/validation" {
    interface ValidatorTypeMapping {
        custom: {
            config: {
                foo: string;
                bar: ValidityModel;
            };
            codes: never;
        };
    }
}

defineValidator("custom", {
    validateViewValue() {
        //console.log("config", this.config);
        return {
            valid: true,
        };
    },
});

async function onSubmit(event: Event): Promise<void> {
    event.preventDefault();
    if (form.value) {
        setFormSubmitted(form.value);
        const result = await validateElement(form.value);
        /* eslint-disable-next-line no-console -- temp */
        console.log(result);
    }
}
</script>

<template>
    <form ref="form" @submit="onSubmit">
        <f-text-field2 id="value-1" v-model="value1" v-validation.number :parser="parseNumber"> Tal 1 </f-text-field2>
        <f-text-field2
            id="value-2"
            v-model="value2"
            v-validation.number.minValue="{ minValue: { limit: value1 } }"
            :parser="parseNumber"
        >
            Tal 2
        </f-text-field2>

        <button type="submit">Submit</button>
        <p v-if="validity.isValid">Denna texten visas bara om värdet är giltigt</p>
        <pre>{{ JSON.stringify({ value1, value2 }) }}</pre>
    </form>
</template>
