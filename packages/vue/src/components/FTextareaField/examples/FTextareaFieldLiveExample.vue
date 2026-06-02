<!-- eslint-disable vue/component-api-style -- technical debt: should be migrated from options to composition api -->
<script lang="ts">
import { defineComponent } from "vue";
import { LiveExample } from "@forsakringskassan/docs-live-example";
import {
    FCheckboxField,
    FFieldset,
    FRadioField,
    FSelectField,
    FTextareaField,
    FTooltip,
} from "@fkui/vue";

export default defineComponent({
    name: "FTextareaFieldLiveExample",
    components: { LiveExample, FCheckboxField, FFieldset, FRadioField, FSelectField },
    data() {
        return {
            isDisabled: false,
            heightMode: "fixed",
            customWarning: false,
            tooltipVisible: false,
            descriptionVisible: true,
            rows: "",
            maxRows: "",
        };
    },
    computed: {
        components(): object {
            return {
                FTextareaField,
                FTooltip,
            };
        },
        livedata(): object {
            return {
                about: "",
            };
        },
        disabled(): string {
            return this.isDisabled ? "disabled" : "";
        },
        isAutoResize(): boolean {
            return this.heightMode === "auto";
        },
        isResizable(): boolean {
            return this.heightMode === "resizable";
        },
        resizable(): string {
            return this.isResizable ? "resizable" : "";
        },
        autoResize(): string {
            return this.isAutoResize ? "auto-resize" : "";
        },
        customRows(): string {
            return this.rows ? `rows="${this.rows}"` : "";
        },
        customMaxRows(): string {
            return this.isAutoResize && this.maxRows ? `:max-rows="${this.maxRows}"` : "";
        },
        customCharLeft(): string {
            return this.customWarning
                ? `characters-left-warning="Endast %charactersLeft% tecken kvar"`
                : "";
        },
        tooltip(): string {
            const template = /* HTML */ `
                <template #tooltip>
                    <f-tooltip screen-reader-text="Text för skärmläsare" header-tag="h2">
                        <template #header> Header </template>
                        <template #body> Body </template>
                    </f-tooltip>
                </template>
            `;

            return this.tooltipVisible ? template : "";
        },
        description(): string {
            const template = /* HTML */ `
                <template #description="{ descriptionClass, formatDescriptionClass }">
                    <span :class="descriptionClass"> En inte allt för utförlig berättelse </span>
                    <span :class="formatDescriptionClass"> (max 100 tecken) </span>
                </template>
            `;

            return this.descriptionVisible ? template : "";
        },
        template(): string {
            return /* HTML */ `
                <f-textarea-field
                    v-model="about"
                    :maxlength="100"
                    :soft-limit="20"
                    ${this.customCharLeft}
                    ${this.customRows}
                    ${this.customMaxRows}
                    ${this.disabled}
                    ${this.resizable}
                    ${this.autoResize}
                >
                    <template #default> Berätta om dig själv </template>
                    ${this.tooltip} ${this.description}
                </f-textarea-field>
            `;
        },
    },
    watch: {
        heightMode(value: string) {
            if (value !== "auto" && (this.rows === "1" || this.rows === "2")) {
                this.rows = "";
            }
        },
    },
});
</script>

<template>
    <live-example :components :template :livedata>
        <f-fieldset name="height-settings">
            <template #label> Höjd </template>
            <f-radio-field v-model="heightMode" value="fixed"> Fast </f-radio-field>
            <f-radio-field v-model="heightMode" value="resizable"> Justerbar </f-radio-field>
            <f-radio-field v-model="heightMode" value="auto"> Automatisk </f-radio-field>
        </f-fieldset>
        <f-select-field v-model="rows">
            <template #label> Antal rader </template>
            <option v-if="isAutoResize" value="1">1</option>
            <option v-if="isAutoResize" value="2">2</option>
            <option value="3">3</option>
            <option value="">4 (standard)</option>
            <option value="5">5</option>
            <option value="6">6</option>
        </f-select-field>
        <f-select-field v-if="isAutoResize" v-model="maxRows">
            <template #label> Max antal rader </template>
            <option value="">Ingen maxhöjd</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
        </f-select-field>
        <f-checkbox-field v-model="customWarning" :value="true">
            Egen varningstext
        </f-checkbox-field>
        <f-checkbox-field v-model="isDisabled" :value="true"> Inaktiv </f-checkbox-field>
        <f-fieldset name="checkbox-label">
            <template #label> Etikett </template>
            <f-checkbox-field v-model="tooltipVisible" :value="true"> Tooltip </f-checkbox-field>
            <f-checkbox-field v-model="descriptionVisible" :value="true">
                Hjälptext
            </f-checkbox-field>
        </f-fieldset>
    </live-example>
</template>
