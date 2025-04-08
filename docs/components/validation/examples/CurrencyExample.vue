<script lang="ts">
import { defineComponent } from "vue";
import { FTextField } from "@fkui/vue";

export default defineComponent({
    name: "CurrencyExample",
    components: { FTextField },
    data() {
        return { model: "" };
    },
});
</script>

<template>
    <f-text-field v-model="model" v-validation.currency> Fyll i ett belopp </f-text-field>
</template>
