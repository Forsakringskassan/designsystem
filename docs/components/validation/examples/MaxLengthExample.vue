<!-- eslint-disable vue/component-api-style -- technical debt: should be migrated from options to composition api -->
<script lang="ts">
import { defineComponent } from "vue";
import { FTextField } from "@fkui/vue";

export default defineComponent({
    name: "MaxLengthExample",
    components: { FTextField },
    data() {
        return { model: "" };
    },
});
</script>

<template>
    <f-text-field v-model="model" v-validation.maxLength="{ maxLength: { length: 10 } }">
        Fyll i ett ord som innehåller max 10 tecken
    </f-text-field>
</template>
