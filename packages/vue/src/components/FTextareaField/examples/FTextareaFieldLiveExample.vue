<script lang="ts">
import { defineComponent } from "vue";
import { FCheckboxField, FFieldset, FSelectField, FTextareaField, FTooltip } from "@fkui/vue";
import { LiveExample } from "@forsakringskassan/docs-live-example";

export default defineComponent({
    name: "FListLiveExample",
    components: { LiveExample, FCheckboxField, FFieldset, FSelectField },
    data() {
        return {
            isDisabled: false,
            isResizable: false,
            customWarning: false,
            tooltipVisible: false,
            descriptionVisible: true,
            rows: "4",
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
        resizable(): string {
            return this.isResizable ? "resizable" : "";
        },
        customRows(): string {
            if (this.rows === "4") {
                return "";
            } else {
                return `rows="${this.rows}"`;
            }
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
                    ${this.disabled}
                    ${this.resizable}
                >
                    <template #default> Berätta om dig själv </template>
                    ${this.tooltip} ${this.description}
                </f-textarea-field>
            `;
        },
    },
});
</script>

<template>
    <live-example :components="components" :template="template" :livedata="livedata">
        <f-fieldset name="checkbox-label">
            <template #label> Etiketten </template>
            <f-checkbox-field v-model="tooltipVisible" :value="true"> Tooltip </f-checkbox-field>
            <f-checkbox-field v-model="descriptionVisible" :value="true">
                Hjälptext
            </f-checkbox-field>
        </f-fieldset>
        <f-fieldset name="settings">
            <template #label> Inställningar </template>
            <f-checkbox-field v-model="isDisabled" :value="true"> Inaktiv </f-checkbox-field>
            <f-checkbox-field v-model="isResizable" :value="true">
                Justerbar storlek
            </f-checkbox-field>
            <f-checkbox-field v-model="customWarning" :value="true">
                Egen varningstext
            </f-checkbox-field>
        </f-fieldset>
        <f-select-field v-model="rows">
            <template #label> Antal rader </template>
            <option value="3">3</option>
            <option value="4">4 (standard)</option>
            <option value="5">5</option>
            <option value="6">6</option>
        </f-select-field>
    </live-example>
</template>
