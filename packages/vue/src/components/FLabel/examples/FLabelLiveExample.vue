<script lang="ts">
import { defineComponent } from "vue";
import { FLabel, FFieldset, FCheckboxField, FTooltip } from "@fkui/vue";
import { LiveExample } from "@forsakringskassan/docs-live-example";

export default defineComponent({
    name: "FTextFieldLiveExample",
    components: { LiveExample, FFieldset, FCheckboxField },
    data() {
        return {
            tooltipVisible: false,
            descriptionVisible: false,
            formatDescriptionVisible: false,
            errorMessageVisible: false,
        };
    },
    computed: {
        livedata(): object {
            return { model: "" };
        },
        components(): object {
            return {
                FLabel,
                FTooltip,
            };
        },
        description(): string {
            const description = this.descriptionVisible
                ? `<span :class="descriptionClass">Hjälptext</span>`
                : "";
            const formatDescription = this.formatDescriptionVisible
                ? `<span :class="formatDescriptionClass">Formatbeskrivning</span>`
                : "";

            const template = /* HTML */ `
                <template #description="{ descriptionClass, formatDescriptionClass }">
                    ${description} ${formatDescription}
                </template>
            `;

            return this.descriptionVisible || this.formatDescriptionVisible ? template : "";
        },
        tooltip(): string {
            const template = /* HTML */ `
                <template #tooltip>
                    <f-tooltip screen-reader-text="Läs mer här" header-tag="h2">
                        <template #header> Header </template>
                        <template #body> Body </template>
                    </f-tooltip>
                </template>
            `;

            return this.tooltipVisible ? template : "";
        },
        errorMessage(): string {
            const template = /* HTML */ ` <template #error-message> Felmeddelande </template> `;
            return this.errorMessageVisible ? template : "";
        },
        template(): string {
            return /* HTML */ `
                <f-label for="input-field">
                    Etikett ${this.description} ${this.tooltip} ${this.errorMessage}
                </f-label>
                <input id="input-field" type="text" class="text-field__input" />
            `;
        },
    },
    methods: {},
});
</script>

<template>
    <live-example :components="components" :template="template" :livedata="livedata">
        <f-fieldset name="etikett">
            <template #label> Egenskaper </template>
            <f-checkbox-field v-model="descriptionVisible" :value="true">
                Hjälptext
            </f-checkbox-field>
            <f-checkbox-field v-model="formatDescriptionVisible" :value="true">
                Formatbeskrivning
            </f-checkbox-field>
            <f-checkbox-field v-model="tooltipVisible" :value="true"> Tooltip </f-checkbox-field>
            <f-checkbox-field v-model="errorMessageVisible" :value="true">
                Felmeddelande
            </f-checkbox-field>
        </f-fieldset>
    </live-example>
</template>
