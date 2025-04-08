<script lang="ts">
import { defineComponent } from "vue";
import { FTextField } from "@fkui/vue";

export default defineComponent({
    name: "GreaterThanExample",
    components: { FTextField },
    data() {
        return { model: "" };
    },
});
</script>

<template>
    <f-text-field v-model="model" v-validation.greaterThan="{ greaterThan: { limit: 0.123 } }">
        Fyll i ett tal som är större än 0.123
    </f-text-field>
</template>
