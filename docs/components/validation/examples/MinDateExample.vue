<script lang="ts">
import { defineComponent } from "vue";
import { FTextField } from "@fkui/vue";

export default defineComponent({
    name: "MinDateExample",
    components: { FTextField },
    data() {
        return { model: "" };
    },
});
</script>

<template>
    <f-text-field v-model="model" v-validation.date.minDate="{ minDate: { limit: '2020-01-01' } }">
        Fyll i ett datum som ligger efter den 31 december 2019
    </f-text-field>
</template>
