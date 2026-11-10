<script setup lang="ts">
import { ref } from "vue";
import { FFieldset, FRadioField } from "@fkui/vue";

const paymentPlan = ref<string>();
</script>

<template>
    <f-fieldset name="payment-plan" border show-details="when-selected">
        <template #label> Välj en avbetalningsplan </template>
        <template #description="{ descriptionClass }">
            <span :class="descriptionClass"> Alla belopp är inklusive ränta. </span>
        </template>
        <f-radio-field v-model="paymentPlan" value="525-12">
            525 kronor per månad i 12 månader
            <template #details> Du kommer att betala tillbaka 6 300 kronor. </template>
        </f-radio-field>
        <f-radio-field v-model="paymentPlan" value="570-11">
            570 kronor per månad i 11 månader
            <template #details> Du kommer att betala tillbaka 6 270 kronor. </template>
        </f-radio-field>
        <f-radio-field v-model="paymentPlan" value="625-10">
            625 kronor per månad i 10 månader
            <template #details> Du kommer att betala tillbaka 6 250 kronor. </template>
        </f-radio-field>
    </f-fieldset>
</template>
