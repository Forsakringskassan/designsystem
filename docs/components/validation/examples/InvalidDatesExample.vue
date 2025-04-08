<script lang="ts">
import { defineComponent } from "vue";
import { FTextField } from "@fkui/vue";

export default defineComponent({
    name: "InvalidDatesExample",
    components: { FTextField },
    data() {
        return { model: "" };
    },
});
</script>

<template>
    <f-text-field
        v-model="model"
        v-validation.date.invalidDates="{
            invalidDates: { dates: ['2022-01-01', '2022-05-05', '2022-06-20'] },
        }"
    >
        Fyll i ett datum som inte är 1 januari, 5 maj eller 20 juni 2022
    </f-text-field>
</template>
