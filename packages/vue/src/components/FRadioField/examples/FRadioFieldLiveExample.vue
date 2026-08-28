<!-- eslint-disable vue/component-api-style -- technical debt: should be migrated from options to composition api -->
<script lang="ts">
import { defineComponent } from "vue";
import { LiveExample } from "@forsakringskassan/docs-live-example";
import { FCheckboxField, FFieldset, FRadioField, FTooltip } from "@fkui/vue";

export default defineComponent({
    name: "FRadioFieldLiveExample",
    components: { LiveExample, FCheckboxField, FFieldset, FRadioField },
    data() {
        return {
            isHorizontal: false,
            isPreselected: false,
            isDisabled: false,
            isRequired: false,
            tooltipVisible: false,
            descriptionVisible: false,
        };
    },
    computed: {
        livedata(): object {
            return {
                modelValue: this.isPreselected || undefined,
            };
        },
        components(): object {
            return {
                FFieldset,
                FRadioField,
                FTooltip,
            };
        },
        tooltip(): string {
            const template = /* HTML */ `
                <template #tooltip>
                    <f-tooltip screen-reader-text="Läs mer om ersättning från utlandet">
                        <template #body>
                            Om du redan får ersättning från ett annat land för samma period kan du
                            inte få full ersättning från Sverige.
                        </template>
                    </f-tooltip>
                </template>
            `;
            return this.tooltipVisible ? template : "";
        },
        description(): string {
            const template = /* HTML */ `
                <template #description="{ descriptionClass }">
                    <span :class="descriptionClass">
                        Till exempel a-kassa, sjukpenning eller föräldrapenning från något annat
                        land än Sverige.
                    </span>
                </template>
            `;
            return this.descriptionVisible ? template : "";
        },
        radioFields(): string {
            return /* HTML */ `
                <f-radio-field v-model="modelValue" :value="true"> Ja </f-radio-field>
                <f-radio-field v-model="modelValue" :value="false" ${this.disabled}>
                    Nej
                </f-radio-field>
            `;
        },
        horizontal(): string {
            return this.isHorizontal ? "horizontal" : "";
        },
        disabled(): string {
            return this.isDisabled ? "disabled" : "";
        },
        required(): string {
            return this.isRequired ? "v-validation.required" : "";
        },
        template(): string {
            return /* HTML */ `
                <f-fieldset name="ersattning-fran-utlandet" ${this.horizontal} ${this.required}>
                    <template #label> Får du ersättning från utlandet? </template>
                    ${this.tooltip} ${this.description}
                    <template #default> ${this.radioFields} </template>
                </f-fieldset>
            `;
        },
    },
});
</script>

<template>
    <live-example :components :template :livedata>
        <f-fieldset name="radio-orientation">
            <template #label> Placering </template>
            <f-radio-field v-model="isHorizontal" :value="false"> Vertikalt </f-radio-field>
            <f-radio-field v-model="isHorizontal" :value="true"> Horisontellt </f-radio-field>
        </f-fieldset>

        <f-fieldset name="radio-options">
            <template #label> Egenskaper </template>
            <f-checkbox-field v-model="isPreselected" :value="true">
                Förvald radioknapp
            </f-checkbox-field>
            <f-checkbox-field v-model="isDisabled" :value="true">
                Inaktiverad radioknapp
            </f-checkbox-field>
        </f-fieldset>

        <f-fieldset name="radio-label">
            <template #label> Etikett </template>
            <f-checkbox-field v-model="tooltipVisible" :value="true"> Tooltip </f-checkbox-field>
            <f-checkbox-field v-model="descriptionVisible" :value="true">
                Hjälptext
            </f-checkbox-field>
        </f-fieldset>

        <f-fieldset name="radio-validation">
            <template #label> Validering </template>
            <f-checkbox-field v-model="isRequired" :value="true">
                Obligatoriskt val
            </f-checkbox-field>
        </f-fieldset>
    </live-example>
</template>
