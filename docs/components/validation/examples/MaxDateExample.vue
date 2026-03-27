<script lang="ts">
import { defineComponent } from "vue";
import { FTextField } from "@fkui/vue";

export default defineComponent({
    name: "MaxDateExample",
    components: { FTextField },
    data() {
        return { model: "" };
    },
});
</script>

<template>
    <f-text-field v-model="model" v-validation.date.maxDate="{ maxDate: { limit: '2020-01-30' } }">
        Fyll i ett datum som ligger före den 31 januari 2020
    </f-text-field>
</template>
