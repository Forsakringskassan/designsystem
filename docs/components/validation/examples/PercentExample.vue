<script lang="ts">
import { defineComponent } from "vue";
import { FTextField } from "@fkui/vue";

export default defineComponent({
    name: "PercentExample",
    components: { FTextField },
    data() {
        return { model: "" };
    },
});
</script>

<template>
    <f-text-field v-model="model" v-validation.percent> Fyll i ett tal i procent </f-text-field>
</template>
