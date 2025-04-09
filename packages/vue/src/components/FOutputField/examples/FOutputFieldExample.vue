<script>
import { defineComponent } from "vue";
import { FOutputField, FTextField, FTooltip } from "@fkui/vue";

export default defineComponent({
    name: "FOutputFieldExample",
    components: { FOutputField, FTextField, FTooltip },
    data() {
        return { number1: "1000", number2: "2000" };
    },
});
</script>

<template>
    <div>
        <f-text-field
            id="one"
            v-model="number1"
            v-validation.maxLength="{ maxLength: { length: 100 } }"
        >
            Nummer 1
        </f-text-field>
        <f-text-field
            id="two"
            v-model="number2"
            v-validation.maxLength="{ maxLength: { length: 100 } }"
        >
            Nummer 2
        </f-text-field>
        <f-output-field id="calculated" for="one two">
            <template #label> Summa </template>
            <template #tooltip>
                <f-tooltip screen-reader-text="Läs mer om avancerat fält" header-tag="h2">
                    <template #header> Mer om summa-fältet </template>
                    <template #body> Detta fältet är en summa av nummer 1 och nummer 2. </template>
                </f-tooltip>
            </template>
            <span v-format:number="parseInt(number1) + parseInt(number2)"></span>
        </f-output-field>
    </div>
</template>
