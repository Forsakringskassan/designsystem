<script lang="ts">
import { defineComponent } from "vue";
import { FCheckboxField, FTooltip, FFieldset, FRadioField, FSelectField } from "@fkui/vue";
import { FDate, DateFormat } from "@fkui/date";
import { LiveExample } from "@forsakringskassan/docs-live-example";

const todaysDate = FDate.now().toString(DateFormat.ISO8601);

export default defineComponent({
    name: "FRadioFieldLiveExample",
    components: { LiveExample, FCheckboxField, FFieldset, FRadioField, FSelectField },
    data() {
        return {
            isHorizontal: false,
            isBorder: false,
            isPreselected: false,
            isDisabled: false,
            isRequired: false,
            tooltipVisible: false,
            descriptionVisible: false,
            showDetails: "never" as "never" | "always" | "when-selected",
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
                    <f-tooltip
                        screen-reader-text="Läs mer om Bor det barn som har fyllt 18 år i bostaden?"
                        header-tag="h2"
                    >
                        <template #header> Bor det barn som har fyllt 18 år i bostaden? </template>
                        <template #body>
                            Här svarar du på om du har ett eller flera barn som fyllt 18 i din
                            bostad. Alla personer som fyllt 18 idag (${todaysDate}) eller tidigare
                            på året beräknas med i denna grupp.
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
                        Här svarar du på om du har ett eller flera barn som fyllt 18 i din bostad.
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
        radioFields(): string {
            return /* HTML */ `
                <f-radio-field v-model="modelValue" :value="true">
                    Ja, det bor barn över 18 år där ${this.details}
                </f-radio-field>
                <f-radio-field v-model="modelValue" :value="false" ${this.disabled}>
                    Nej, inga barn över 18 år bor där ${this.details}
                </f-radio-field>
            `;
        },
        horizontal(): string {
            return this.isHorizontal ? "horizontal" : "";
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
                    name="barn-over-18"
                    ${this.horizontal}
                    ${this.required}
                    ${this.border}
                    ${this.showDetailsAttr}
                >
                    <template #label> Bor det barn som har fyllt 18 år i bostaden? </template>
                    ${this.tooltip} ${this.description}
                    <template #default> ${this.radioFields} </template>
                </f-fieldset>
            `;
        },
    },
});
</script>

<template>
    <live-example :components="components" :template="template" :livedata="livedata">
        <f-fieldset name="radio-orientation">
            <template #label> Placering </template>
            <f-radio-field v-model="isHorizontal" :value="false">
                Vertikalt (standard)</f-radio-field
            >
            <f-radio-field v-model="isHorizontal" :value="true"> Horisontellt </f-radio-field>
        </f-fieldset>

        <f-checkbox-field v-model="isBorder" :value="true"> Ram </f-checkbox-field>
        <f-checkbox-field v-model="isPreselected" :value="true">
            Förvald radioknapp
        </f-checkbox-field>
        <f-checkbox-field v-model="isDisabled" :value="true">
            Inaktiverad radioknapp
        </f-checkbox-field>
        <f-checkbox-field v-model="isRequired" :value="true"> Obligatoriskt val </f-checkbox-field>

        <f-fieldset name="radio-label">
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
