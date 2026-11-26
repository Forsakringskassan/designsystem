<script setup lang="ts">
import { computed, ref, watch } from "vue";
import { LiveExample } from "@forsakringskassan/docs-live-example";
import { FCheckboxField, FFieldset, FRadioField, FSelectField, FTooltip } from "@fkui/vue";

type DetailsMode = "never" | "always" | "when-selected";

const isHorizontal = ref(false);
const isBorder = ref(false);
const isPreselected = ref(false);
const isDisabled = ref(false);
const tooltipVisible = ref(false);
const descriptionVisible = ref(false);
const showDetails = ref<DetailsMode>("never");

watch(isHorizontal, (horizontal) => {
    if (horizontal) {
        isBorder.value = false;
    }
});

const components = computed(() => {
    return {
        FFieldset,
        FRadioField,
        FTooltip,
    };
});

const livedata = computed(() => {
    return {
        modelValue: isPreselected.value ? 1 : undefined,
    };
});

const tooltip = computed(() => {
    if (!tooltipVisible.value) {
        return "";
    }

    return /* HTML */ `
        <template #tooltip>
            <f-tooltip header-tag="h3" screen-reader-text="Läs mer om tooltipen">
                <template #header> Rubrik </template>
                <template #body> Text </template>
            </f-tooltip>
        </template>
    `;
});

const description = computed(() => {
    if (!descriptionVisible.value) {
        return "";
    }

    return /* HTML */ `
        <template #description="{ descriptionClass }">
            <span :class="descriptionClass"> Hjälptext </span>
        </template>
    `;
});

const detailsAttribute = computed(() => {
    if (showDetails.value === "never") {
        return "";
    }

    return `show-details="${showDetails.value}"`;
});

const details = computed(() => {
    if (showDetails.value === "never") {
        return "";
    }

    return /* HTML */ ` <template #details> Utvidgad text </template> `;
});

const radioFields = computed(() => {
    const disabled = isDisabled.value ? "disabled" : "";

    return /* HTML */ `
        <f-radio-field v-model="modelValue" :value="1"> Label 1 ${details.value} </f-radio-field>
        <f-radio-field v-model="modelValue" :value="2" ${disabled}>
            Label 2 ${details.value}
        </f-radio-field>
    `;
});

const template = computed(() => {
    const horizontal = isHorizontal.value ? "horizontal" : "";
    const border = isBorder.value ? "border" : "";

    return /* HTML */ `
        <f-fieldset name="radio-api-example" ${horizontal} ${border} ${detailsAttribute.value}>
            <template #label> Etikettrubrik </template>
            ${tooltip.value} ${description.value}
            <template #default> ${radioFields.value} </template>
        </f-fieldset>
    `;
});
</script>

<template>
    <live-example :components :template :livedata>
        <f-fieldset name="radio-orientation">
            <template #label> Placering </template>
            <f-radio-field v-model="isHorizontal" :value="false">
                Vertikalt (standard)
            </f-radio-field>
            <f-radio-field v-model="isHorizontal" :value="true"> Horisontellt </f-radio-field>
        </f-fieldset>

        <f-fieldset name="radio-properties">
            <template #label> Egenskaper </template>
            <f-checkbox-field v-if="!isHorizontal" v-model="isBorder" :value="true">
                Inramade alternativ
            </f-checkbox-field>
            <f-checkbox-field v-model="isPreselected" :value="true">
                Förvalt alternativ
            </f-checkbox-field>
            <f-checkbox-field v-model="isDisabled" :value="true">
                Inaktiverat alternativ
            </f-checkbox-field>
        </f-fieldset>

        <f-fieldset name="radio-content">
            <template #label> Innehåll </template>
            <f-checkbox-field v-model="tooltipVisible" :value="true"> Tooltip </f-checkbox-field>
            <f-checkbox-field v-model="descriptionVisible" :value="true">
                Hjälptext
            </f-checkbox-field>
            <f-select-field v-model="showDetails">
                <template #label> Utvidgad text </template>
                <option value="never">Ingen</option>
                <option value="always">Alltid synlig</option>
                <option value="when-selected">När alternativet är valt</option>
            </f-select-field>
        </f-fieldset>
    </live-example>
</template>
