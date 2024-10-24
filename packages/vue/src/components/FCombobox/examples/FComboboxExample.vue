<template>
    <f-combobox v-model="model" :options></f-combobox>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { FCombobox } from "@fkui/vue";

export default defineComponent({
    components: { FCombobox },
    data() {
        return {
            options: ["Anna", "Anders", "Angelica", "Bertil", "Baloo", "Baltazar"],
            model: "",
        };
    },
});
</script>
