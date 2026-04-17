<script lang="ts">
import { defineComponent, ref } from "vue";
import { FButton, FTextField } from "@fkui/vue";

interface Field {
    id: string;
    label: string;
    defaultValue: string;
    value: ReturnType<typeof ref<string>>;
    dirty: ReturnType<typeof ref<boolean>>;
}

const FIELD_CONFIGS = [
    { id: "field1", label: "Belopp 1", defaultValue: "1650" },
    { id: "field2", label: "Belopp 2", defaultValue: "180" },
    { id: "field3", label: "Belopp 3", defaultValue: "343" },
    { id: "field4", label: "Belopp 4", defaultValue: "6478" },
];

export default defineComponent({
    components: { FTextField, FButton },
    setup() {
        const fields: Field[] = FIELD_CONFIGS.map((config) => ({
            ...config,
            value: ref(config.defaultValue),
            dirty: ref(false),
        }));

        function onInput(field: Field, event: Event): void {
            field.dirty.value = (event.target as HTMLInputElement).value !== field.defaultValue;
        }

        function reset(field: Field): void {
            field.value.value = field.defaultValue;
            field.dirty.value = false;
        }

        return { fields, onInput, reset };
    },
});
</script>

<template>
    <div class="prototype-root">
        <router-link class="anchor" to="/">← Tillbaka</router-link>
        <h1>Återställ belopp</h1>

        <div v-for="field in fields" :key="field.id" class="field-group">
            <f-text-field
                :id="field.id"
                v-model="field.value.value"
                inputmode="numeric"
                @input="onInput(field, $event)"
            >
                {{ field.label }}
            </f-text-field>
            <f-button
                v-if="field.dirty.value"
                variant="tertiary"
                icon-left="circle-notch-solid"
                align-text
                @click="reset(field)"
            >
                Återställ förifyllt belopp
            </f-button>
        </div>
    </div>
</template>

<style lang="scss">
@use "@fkui/design/src/core/size";

.prototype-root {
    width: min(100% - 2rem, 80ch);
    margin: auto;
}

h1 {
    margin-top: 3rem;
    margin-bottom: size.$margin-150;
}

.field-group {
    margin-bottom: size.$margin-150;
}
</style>
