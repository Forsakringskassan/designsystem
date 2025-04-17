<script lang="ts">
import { defineComponent } from "vue";
import {
    FBankAccountNumberTextField,
    FBankgiroTextField,
    FFieldset,
    FCheckboxField,
    FClearingnumberTextField,
    FCurrencyTextField,
    FEmailTextField,
    FIcon,
    FNumericTextField,
    FOrganisationsnummerTextField,
    FPercentTextField,
    FPersonnummerTextField,
    FPhoneTextField,
    FPlusgiroTextField,
    FPostalCodeTextField,
    FSearchTextField,
    FSelectField,
    FTextField,
    FTooltip,
} from "@fkui/vue";
import { LiveExample } from "@forsakringskassan/docs-live-example";

export default defineComponent({
    name: "FTextFieldLiveExample",
    components: { LiveExample, FSelectField, FFieldset, FCheckboxField },
    data() {
        return {
            type: "f-text-field",
            tooltipVisible: false,
            descriptionVisible: false,
            formatDescriptionVisible: false,
            customLabel: false,
            isInline: false,
            maxLength: 0,
            isRequired: false,
            isWhitelist: false,
            isDisabled: false,
            appendInnerVisible: false,
        };
    },
    computed: {
        isTextfieldOrNumeric(): boolean {
            return this.type === `f-text-field` || this.type === `f-numeric-text-field`;
        },
        isEmail(): boolean {
            return this.type === `f-email-text-field`;
        },
        isClearable(): boolean {
            return this.type === `f-search-text-field`;
        },
        isPhoneNumber(): boolean {
            return this.type === `f-phone-text-field`;
        },
        livedata(): object {
            return { model: "" };
        },
        showAppendInner(): boolean {
            return !this.isEmail && !this.isClearable && !this.isPhoneNumber;
        },
        supportDescription(): boolean {
            return !this.isEmail;
        },
        components(): object {
            return {
                FSelectField,
                FTextField,
                FClearingnumberTextField,
                FBankAccountNumberTextField,
                FBankgiroTextField,
                FEmailTextField,
                FNumericTextField,
                FOrganisationsnummerTextField,
                FPersonnummerTextField,
                FPlusgiroTextField,
                FPostalCodeTextField,
                FPercentTextField,
                FPhoneTextField,
                FCurrencyTextField,
                FTooltip,
                FIcon,
                FSearchTextField,
            };
        },
        validation(): string {
            let validators = "";
            const settings = [];

            if (this.isRequired) {
                validators += ".required";
            }

            if (this.isWhitelist) {
                validators += ".whitelist";
            }

            if (this.maxLength > 0) {
                validators += ".maxLength";
                settings.push(` maxLength: { length: ${this.maxLength} }`);
            }

            if (settings.length > 0) {
                return validators ? `v-validation${validators}="{${settings.join(", ")}}"` : "";
            } else {
                return validators ? `v-validation${validators}` : "";
            }
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
        appendInner(): string {
            const template = /* HTML */ `
                <template #append-inner>
                    <span><f-icon name="cross" library="f"></f-icon></span>
                </template>
            `;

            return this.appendInnerVisible ? template : "";
        },
        label(): string {
            const template = /* HTML */ ` <template #default> Etikett </template> `;

            return this.customLabel || this.isTextfieldOrNumeric ? template : "";
        },
        inline(): string {
            return this.isInline ? "inline" : "";
        },
        disabled(): string {
            return this.isDisabled ? "disabled" : "";
        },
        template(): string {
            return /* HTML */ `
            <${this.type} v-model="model" ${this.validation} ${this.inline} ${this.disabled}>
            ${this.label}
            ${this.tooltip} ${this.description}
            ${this.appendInner}
            </${this.type}>
            `;
        },
    },
    watch: {
        type: {
            immediate: false,
            handler() {
                this.isRequired = false;
                if (!this.isTextfieldOrNumeric) {
                    this.maxLength = 0;
                    this.isWhitelist = false;
                    this.customLabel = false;
                }

                if (this.isEmail) {
                    this.tooltipVisible = false;
                    this.formatDescriptionVisible = false;
                    this.descriptionVisible = false;
                }
            },
        },
    },
    methods: {},
});
</script>

<template>
    <live-example :components="components" :template="template" :livedata="livedata">
        <f-select-field v-model="type">
            <template #label> Typ </template>
            <option value="f-text-field">Fritext</option>
            <option value="f-bankgiro-text-field">Bankgiro</option>
            <option value="f-clearingnumber-text-field">Clearingnummer</option>
            <option value="f-bank-account-number-text-field">Kontonummer</option>
            <option value="f-email-text-field">Mejladress</option>
            <option value="f-numeric-text-field">Numeriskt</option>
            <option value="f-organisationsnummer-text-field">Organisationsnummer</option>
            <option value="f-personnummer-text-field">Personnummer</option>
            <option value="f-plusgiro-text-field">Plusgiro</option>
            <option value="f-postal-code-text-field">Postnummer</option>
            <option value="f-percent-text-field">Procent</option>
            <option value="f-phone-text-field">Telefonnummer</option>
            <option value="f-currency-text-field">Valuta</option>
            <option value="f-search-text-field">Sökfält</option>
        </f-select-field>
        <f-select-field v-if="isTextfieldOrNumeric" v-model="maxLength">
            <template #label> Max antal tecken </template>
            <option :value="0">Ingen gräns</option>
            <option :value="20">Exempel: 20 tecken</option>
        </f-select-field>
        <f-checkbox-field v-if="isTextfieldOrNumeric" v-model="isWhitelist" :value="true">
            Begränsa tillåtna tecken med whitelist-validatorn
        </f-checkbox-field>
        <f-checkbox-field v-if="!isClearable" v-model="isRequired" :value="true">
            Obligatorisk fält
        </f-checkbox-field>
        <f-checkbox-field v-model="isDisabled" :value="true"> Inaktivt fält </f-checkbox-field>
        <f-checkbox-field v-if="showAppendInner" v-model="appendInnerVisible" :value="true">
            Innehåll i inmatningsfält
        </f-checkbox-field>
        <f-fieldset name="etikett">
            <template #label> Etiketten </template>
            <f-checkbox-field v-if="supportDescription" v-model="descriptionVisible" :value="true">
                Hjälptext
            </f-checkbox-field>
            <f-checkbox-field
                v-if="supportDescription"
                v-model="formatDescriptionVisible"
                :value="true"
            >
                Formatbeskrivning
            </f-checkbox-field>
            <f-checkbox-field v-if="!isEmail" v-model="tooltipVisible" :value="true">
                Tooltip
            </f-checkbox-field>
            <f-checkbox-field v-model="isInline" :value="true"> Inline </f-checkbox-field>
            <f-checkbox-field v-if="!isTextfieldOrNumeric" v-model="customLabel" :value="true">
                Annan etikett
            </f-checkbox-field>
        </f-fieldset>
    </live-example>
</template>
