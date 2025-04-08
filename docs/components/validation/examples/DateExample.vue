<script lang="ts">
import { defineComponent } from "vue";
import { FTextField } from "@fkui/vue";

export default defineComponent({
    name: "DateExample",
    components: { FTextField },
    data() {
        return { model: "" };
    },
});
</script>

<template>
    <f-text-field v-model="model" v-validation.date> Fyll i ett datum </f-text-field>
</template>
