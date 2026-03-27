<script lang="ts">
import { defineComponent } from "vue";
import { FTextField } from "@fkui/vue";

export default defineComponent({
    name: "LessThanExample",
    components: { FTextField },
    data() {
        return { model: "" };
    },
});
</script>

<template>
    <f-text-field v-model="model" v-validation.lessThan="{ lessThan: { limit: 100 } }">
        Fyll i ett tal som är mindre än 100
    </f-text-field>
</template>
