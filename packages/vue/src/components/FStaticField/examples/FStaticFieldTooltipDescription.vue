<script>
import { defineComponent } from "vue";
import { FStaticField, FTooltip } from "@fkui/vue";

export default defineComponent({
    name: "FStaticFieldTooltipDescription",
    components: { FStaticField, FTooltip },
});
</script>

<template>
    <div data-test="output-field">
        <f-static-field>
            <template #label> Etikett </template>
            <template #tooltip>
                <f-tooltip screen-reader-text="Läs mer om avancerat fält" header-tag="h2">
                    <template #header> Mer om avancerat fält </template>
                    <template #body> Detta fältet kräver lite närmare förklaring. </template>
                </f-tooltip>
            </template>
            <template #description="{ descriptionClass, formatDescriptionClass }">
                <span :class="descriptionClass"> Beskrivning av etikett </span>
                <span :class="formatDescriptionClass"> (format) </span>
            </template>
            <template #default> En liten statisk text. </template>
        </f-static-field>
    </div>
</template>
