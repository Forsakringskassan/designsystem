<script lang="ts">
import { defineComponent } from "vue";
import { FTextField } from "@fkui/vue";

export default defineComponent({
    name: "MinValueExample",
    components: { FTextField },
    data() {
        return { model: "" };
    },
});
</script>

<template>
    <f-text-field v-model="model" v-validation.minValue="{ minValue: { minValue: 10 } }">
        Fyll i ett tal som är lägst 10
    </f-text-field>
</template>
