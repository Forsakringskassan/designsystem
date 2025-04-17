<script>
import { defineComponent } from "vue";
import { FStaticField, FTextField } from "@fkui/vue";

export default defineComponent({
    name: "FStaticFieldTextField",
    components: { FStaticField, FTextField },
    data() {
        return { name: "" };
    },
});
</script>

<template>
    <div data-test="output-field">
        <f-text-field
            id="normal"
            v-model="name"
            v-validation.maxLength="{ maxLength: { length: 100 } }"
        >
            Namn
        </f-text-field>

        <f-static-field>
            <template #label> Beskrivning </template>
            En liten statisk beskrivning.
        </f-static-field>
    </div>
</template>
