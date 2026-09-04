<script setup lang="ts">
import { ref } from "vue";
import { FFieldset, FRadioField } from "@fkui/vue";

const careReason = ref<string>();
</script>

<template>
    <f-fieldset name="care-reason" show-details="always">
        <template #label> Hur var barnet sjukt eller skadat? </template>
        <f-radio-field v-model="careReason" value="temporary">
            Tillfällig sjukdom eller skada
            <template #details> som förkylning eller bruten arm </template>
        </f-radio-field>
        <f-radio-field v-model="careReason" value="mental-health">
            Psykisk ohälsa
            <template #details> som stark oro, ångest eller panikattack </template>
        </f-radio-field>
        <f-radio-field v-model="careReason" value="temporary-disability-deterioration">
            Tillfällig försämring i funktionsnedsättning
            <template #details> som ADHD eller autism </template>
        </f-radio-field>
        <f-radio-field v-model="careReason" value="other">
            Annan sjukdom eller skada
        </f-radio-field>
    </f-fieldset>
</template>
