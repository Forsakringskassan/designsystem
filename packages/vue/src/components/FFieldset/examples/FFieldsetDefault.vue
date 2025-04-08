<script>
import { defineComponent } from "vue";
import { FFieldset, FRadioField, FTooltip } from "@fkui/vue";

export default defineComponent({
    name: "FFieldsetDefault",
    components: { FFieldset, FRadioField, FTooltip },
    data() {
        return {
            deltid: undefined,
        };
    },
});
</script>

<template>
    <f-fieldset name="group-name-default">
        <template #label> Arbetar du deltid? </template>
        <template #description="{ descriptionClass }">
            <span :class="descriptionClass"> Vi behöver veta om du jobbar 100% eller ej </span>
        </template>
        <template #tooltip>
            <f-tooltip
                screen-reader-text="Läs mer om Bor det barn som har fyllt 18 år i bostaden?"
                header-tag="h2"
            >
                <template #header> Lite allmän information </template>
                <template #body>
                    Här kan man skriva lite extra information om man nu önskar det!
                </template>
            </f-tooltip>
        </template>
        <f-radio-field id="deltid-ja" v-model="deltid" :value="true"> Ja </f-radio-field>
        <f-radio-field id="deltid-nej" v-model="deltid" :value="false"> Nej </f-radio-field>
    </f-fieldset>
</template>
