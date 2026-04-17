<script lang="ts">
import { defineComponent, nextTick, ref } from "vue";
import { FButton, FNumericTextField } from "@fkui/vue";

interface Field {
    id: string;
    label: string;
    defaultValue: number;
    value: ReturnType<typeof ref<number>>;
    dirty: ReturnType<typeof ref<boolean>>;
    focused: ReturnType<typeof ref<boolean>>;
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
            focused: ref(false),
        }));

        function onInput(field: Field, event: Event): void {
            const raw = (event.target as HTMLInputElement).value.replaceAll(/\s/g, "");
            field.dirty.value = Number(raw) !== field.defaultValue;
        }

        function onFocusIn(field: Field): void {
            field.focused.value = true;
        }

        function onFocusOut(field: Field, event: FocusEvent): void {
            const wrapper = event.currentTarget as HTMLElement;
            if (!wrapper.contains(event.relatedTarget as Node)) {
                field.focused.value = false;
            }
        }

        function onBlur(field: Field, value: number | string): void {
            if (!value && value !== 0) {
                field.value.value = 0;
                field.dirty.value = field.defaultValue !== 0;
            }
        }

        function reset(field: Field): void {
            field.value.value = field.defaultValue;
            field.dirty.value = false;
            void nextTick(() => {
                document.querySelector<HTMLElement>(`#${field.id}`)?.focus();
            });
        }

        return { fields, onInput, onFocusIn, onFocusOut, onBlur, reset };
    },
});
</script>

<template>
    <div class="prototype-root">
        <router-link class="anchor" to="/">← Tillbaka</router-link>
        <h1>Återställ belopp</h1>

        <ul class="intro-list">
            <li>Om man ändrar ett förifyllt belopp visas knappen för återställning direkt.</li>
            <li>Knappen visas så länge fältet har fokus och beloppet inte stämmer med det förifyllda.</li>
            <li>Knappen försvinner om man klickar på den för att återställa beloppet.</li>
            <li>Knappen visas igen på ett fält som inte längre har det förifyllda värdet och får fokus.</li>
            <li>Om man rensar fältet visas "0" när man lämnar fältet.</li>
        </ul>

        <div
            v-for="field in fields"
            :key="field.id"
            class="field-group"
            @focusin="onFocusIn(field)"
            @focusout="onFocusOut(field, $event)"
        >
            <div class="i-width-md-6">
                <f-numeric-text-field
                    :id="field.id"
                    v-model="field.value.value"
                    @input="onInput(field, $event)"
                    @blur="onBlur(field, $event)"
                >
                    {{ field.label }}
                </f-numeric-text-field>
            </div>
            <f-button
                v-if="field.dirty.value && field.focused.value"
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

.intro-list {
    list-style: none;
    padding: 0;
    margin-bottom: size.$margin-200;

    li::before {
        content: "– ";
    }
}

.field-group {
    margin-bottom: size.$margin-150;

    .button {
        margin-top: -1rem;
        margin-bottom: 0;
    }
}
</style>
