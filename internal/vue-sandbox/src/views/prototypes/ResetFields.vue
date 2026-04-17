<script lang="ts">
import { defineComponent, nextTick, ref } from "vue";
import { FButton, FNumericTextField } from "@fkui/vue";

interface Field {
    id: string;
    label: string;
    defaultValue: number;
    value: ReturnType<typeof ref<number>>;
    dirty: ReturnType<typeof ref<boolean>>;
}

const FIELD_CONFIGS = [
    { id: "field1", label: "Belopp 1", defaultValue: 1650 },
    { id: "field2", label: "Belopp 2", defaultValue: 180 },
    { id: "field3", label: "Belopp 3", defaultValue: 343 },
    { id: "field4", label: "Belopp 4", defaultValue: 6478 },
];

export default defineComponent({
    components: { FNumericTextField, FButton },
    setup() {
        const fields: Field[] = FIELD_CONFIGS.map((config) => ({
            ...config,
            value: ref(config.defaultValue),
            dirty: ref(false),
        }));

        function onInput(field: Field, event: Event): void {
            const raw = (event.target as HTMLInputElement).value.replaceAll(/\s/g, "");
            field.dirty.value = Number(raw) !== field.defaultValue;
        }

        function reset(field: Field): void {
            field.value.value = field.defaultValue;
            field.dirty.value = false;
            void nextTick(() => {
                document.querySelector<HTMLElement>(`#${field.id}`)?.focus();
            });
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
            <f-numeric-text-field
                :id="field.id"
                v-model="field.value.value"
                input-width="md-6"
                @input="onInput(field, $event)"
            >
                {{ field.label }}
            </f-numeric-text-field>
            <f-button
                v-if="field.dirty.value"
                variant="tertiary"
                icon-left="arrows-rotate"
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

    .button {
        margin-top: -1rem;
        margin-bottom: 0;
    }
}
</style>
