<script lang="ts">
import { defineComponent } from "vue";
import { FFieldset, FCheckboxField, FTooltip, FSelectField } from "@fkui/vue";
import { LiveExample } from "@forsakringskassan/docs-live-example";

export default defineComponent({
    name: "FSelectFieldLiveExample",
    components: { LiveExample, FFieldset, FCheckboxField },
    data() {
        return {
            tooltipVisible: false,
            descriptionVisible: false,
            isDisabled: false,
            isRequired: false,
            showInline: false,
        };
    },
    computed: {
        components(): object {
            return {
                FFieldset,
                FCheckboxField,
                FTooltip,
                FSelectField,
            };
        },
        livedata(): object {
            return {
                selectfieldtest: "",
            };
        },
        tooltip(): string {
            const template = /* HTML */ `
                <template #tooltip>
                    <f-tooltip screen-reader-text="Läs mer här" header-tag="h1">
                        <template #header> Header </template>
                        <template #body> Body </template>
                    </f-tooltip>
                </template>
            `;

            return this.tooltipVisible ? template : "";
        },
        description(): string {
            const template = /* HTML */ `
                <template #description="{ descriptionClass }">
                    <span :class="descriptionClass"> Hjälptext </span>
                </template>
            `;

            return this.descriptionVisible ? template : "";
        },
        inline(): string {
            const template = /* HTML */ ` inline`;
            return this.showInline ? template : "";
        },
        options(): string {
            return /* HTML */ `
                <option disabled hidden value="">Välj…</option>
                <option value="1">Alternativ 1</option>
                <option value="2">Alternativ 2</option>
                <option value="3">Alternativ 3</option>
                <option value="4">Alternativ 4</option>
                <option value="5">Alternativ 5</option>
                <option value="6">Alternativ 6</option>
                <option value="7">Alternativ 7</option>
            `;
        },
        disabled(): string {
            return this.isDisabled ? "disabled" : "";
        },
        required(): string {
            return this.isRequired ? "v-validation.required" : "";
        },
        template(): string {
            return /* HTML */ `
                <f-select-field
                    id="dropplista"
                    v-model="selectfieldtest"
                    ${this.required}
                    ${this.disabled}
                    ${this.inline}
                >
                    <template #label> Etikett rubrik </template>
                    ${this.tooltip} ${this.description} ${this.options}
                </f-select-field>
            `;
        },
    },
});
</script>

<template>
    <live-example :components="components" :template="template" :livedata="livedata">
        <f-checkbox-field v-model="isRequired" :value="true"> Obligatoriskt fält </f-checkbox-field>
        <f-checkbox-field v-model="isDisabled" :value="true"> Inaktivt fält </f-checkbox-field>
        <f-fieldset name="SelectField-label">
            <template #label> Etiketten </template>
            <f-checkbox-field v-model="descriptionVisible" :value="true">
                Hjälptext
            </f-checkbox-field>
            <f-checkbox-field v-model="tooltipVisible" :value="true"> Tooltip </f-checkbox-field>
            <f-checkbox-field v-model="showInline" :value="true"> Inline </f-checkbox-field>
        </f-fieldset>
    </live-example>
</template>
