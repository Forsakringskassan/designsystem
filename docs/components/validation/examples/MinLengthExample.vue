<script lang="ts">
import { defineComponent } from "vue";
import { FTextField } from "@fkui/vue";

export default defineComponent({
    name: "MinLengthExample",
    components: { FTextField },
    data() {
        return { model: "" };
    },
});
</script>

<template>
    <f-text-field v-model="model" v-validation.minLength="{ minLength: { length: 4 } }">
        Fyll i ett ord som innehåller minst 4 tecken
    </f-text-field>
</template>
