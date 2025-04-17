<script lang="ts">
import { defineComponent } from "vue";
import { FTextField } from "@fkui/vue";

export default defineComponent({
    name: "InvalidWeekdaysExample",
    components: { FTextField },
    data() {
        return { model: "" };
    },
});
</script>

<template>
    <f-text-field
        v-model="model"
        v-validation.date.invalidWeekdays="{ invalidWeekdays: { days: [1, 2, 3, 4] } }"
    >
        Fyll i ett datum som inte är måndag, tisdag, onsdag eller torsdag
    </f-text-field>
</template>
