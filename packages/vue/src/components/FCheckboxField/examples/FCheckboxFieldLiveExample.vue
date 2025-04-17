<script lang="ts">
import { defineComponent } from "vue";
import { FFieldset, FCheckboxField, FTooltip, FSelectField } from "@fkui/vue";
import { LiveExample } from "@forsakringskassan/docs-live-example";

export default defineComponent({
    name: "FCheckboxFieldLiveExample",
    components: { LiveExample, FFieldset, FCheckboxField, FSelectField },
    data() {
        return {
            tooltipVisible: false,
            descriptionVisible: false,
            isDisabled: false,
            isRequired: false,
            isBorder: false,
            showDetails: "never" as "never" | "always" | "when-selected",
        };
    },
    computed: {
        components(): object {
            return {
                FFieldset,
                FCheckboxField,
                FTooltip,
            };
        },
        livedata(): object {
            return {
                brochures: [],
            };
        },
        tooltip(): string {
            const template = /* HTML */ `
                <template #tooltip>
                    <f-tooltip screen-reader-text="Läs mer om Broschyrer" header-tag="h2">
                        <template #header> Broschyrer </template>
                        <template #body>
                            Här väljer du om du vill ha broschyrer eller faktablad och vilka områden
                            du är intresserad av. Broschyrer innehåller övergripande information och
                            faktablad innehåller mer detaljerad information.
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
                        Här väljer du om du vill ha broschyrer eller faktablad
                    </span>
                </template>
            `;

            return this.descriptionVisible ? template : "";
        },
        showDetailsAttr(): string {
            if (this.showDetails === "never") {
                return "";
            } else {
                return `show-details="${this.showDetails}"`;
            }
        },
        details(): string {
            const template = /* HTML */ `
                <template #details>
                    Här svarar du på om du har ett eller flera barn som fyllt 18 i din bostad.
                </template>
            `;
            return this.showDetails !== "never" ? template : "";
        },
        checkboxes(): string {
            return /* HTML */ `
                <f-checkbox-field
                    v-model="brochures"
                    value="Till alla som väntar eller just fått barn"
                >
                    Till alla som väntar eller just fått barn ${this.details}
                </f-checkbox-field>

                <f-checkbox-field v-model="brochures" value="Till alla barnfamiljer">
                    Till alla barnfamiljer ${this.details}
                </f-checkbox-field>

                <f-checkbox-field
                    v-model="brochures"
                    value="Rätt beslut och rätt ersättning"
                    ${this.disabled}
                >
                    Rätt beslut och rätt ersättning ${this.details}
                </f-checkbox-field>
            `;
        },
        border(): string {
            return this.isBorder ? "border" : "";
        },
        disabled(): string {
            return this.isDisabled ? "disabled" : "";
        },
        required(): string {
            return this.isRequired ? "v-validation.required" : "";
        },
        template(): string {
            return /* HTML */ `
                <f-fieldset
                    id="broschyrer-tooltip"
                    name="broschyrer-tooltip"
                    ${this.required}
                    ${this.border}
                    ${this.showDetailsAttr}
                >
                    <template #label> Broschyrer </template>
                    ${this.tooltip} ${this.description}
                    <template #default> ${this.checkboxes} </template>
                </f-fieldset>
            `;
        },
    },
});
</script>

<template>
    <live-example :components="components" :template="template" :livedata="livedata">
        <f-checkbox-field v-model="isDisabled" :value="true"> Inaktiverad </f-checkbox-field>
        <f-checkbox-field v-model="isRequired" :value="true"> Obligatorisk </f-checkbox-field>
        <f-checkbox-field v-model="isBorder" :value="true"> Ram </f-checkbox-field>
        <f-fieldset name="checkbox-label">
            <template #label> Etiketten </template>
            <f-checkbox-field v-model="tooltipVisible" :value="true"> Tooltip </f-checkbox-field>
            <f-checkbox-field v-model="descriptionVisible" :value="true">
                Hjälptext
            </f-checkbox-field>
            <f-select-field v-model="showDetails">
                <template #label> Utökad etikett </template>
                <option value="never">Nej</option>
                <option value="always">Utvidgad text</option>
                <option value="when-selected">Expanderbar text</option>
            </f-select-field>
        </f-fieldset>
    </live-example>
</template>
