<script lang="ts">
import { defineComponent } from "vue";
import { FTextField } from "@fkui/vue";

export default defineComponent({
    name: "MaxValueExample",
    components: { FTextField },
    data() {
        return { model: "" };
    },
});
</script>

<template>
    <f-text-field v-model="model" v-validation.maxValue="{ maxValue: { maxValue: 50 } }">
        Fyll i ett tal som är högst 50
    </f-text-field>
</template>
