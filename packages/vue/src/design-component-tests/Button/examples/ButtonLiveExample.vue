<script lang="ts">
import { defineComponent } from "vue";
import { FCheckboxField, FFieldset, FRadioField, FIcon, FSelectField } from "@fkui/vue";
import { LiveExample } from "@forsakringskassan/docs-live-example";

export default defineComponent({
    name: "ButtonLiveExample",
    components: { LiveExample, FCheckboxField, FFieldset, FRadioField, FSelectField },
    data() {
        return {
            buttonType: "primary",
            buttonSize: "medium",
            hasIcon: false,
            isFullwidth: false,
            disabledFullwidth: false,
            iconPlacement: "left",
            isDisabled: false,
            tertiaryColor: "standard",
        };
    },
    computed: {
        components(): object {
            return { FIcon };
        },
        isTertiary(): boolean {
            return this.buttonType === `tertiary`;
        },
        buttonText(): string {
            const text = "Knapptext";
            if (this.hasIcon) {
                const icon = /* HTML */ `<f-icon name="success" class="button__icon"></f-icon>`;
                if (this.iconPlacement === "right") {
                    return `<span>${text}</span> ${icon}`;
                } else {
                    return `${icon} ${text}`;
                }
            } else {
                return text;
            }
        },
        color(): string {
            if (
                this.isTertiary &&
                (this.tertiaryColor === "black" || this.tertiaryColor === "inverted")
            ) {
                return `button--tertiary--${this.tertiaryColor}`;
            } else {
                return "";
            }
        },
        underline(): string {
            if (this.isTertiary && !this.hasIcon) {
                return `button--tertiary--underline`;
            } else {
                return "";
            }
        },
        disabled(): string {
            return this.isDisabled ? "disabled" : "";
        },
        fullwidth(): string {
            if (this.isFullwidth && this.buttonSize !== "large") {
                return `button--full-width`;
            } else {
                return "";
            }
        },
        template(): string {
            return /* HTML */ `
                <button
                    class="button button--${this.buttonType} button--${this.buttonSize} ${this
                        .fullwidth} ${this.color} ${this.underline}"
                    type="button"
                    ${this.disabled}
                >
                    ${this.buttonText}
                </button>
            `;
        },
    },
    watch: {
        buttonSize: {
            immediate: true,
            async handler(): Promise<void> {
                if (this.buttonSize === "large") {
                    this.isFullwidth = true;
                    this.disabledFullwidth = true;
                } else {
                    this.isFullwidth = false;
                    this.disabledFullwidth = false;
                }
            },
        },
    },
});
</script>

<template>
    <live-example :components="components" :template="template">
        <f-select-field v-model="buttonType">
            <template #label> Typ </template>
            <option value="primary">Primär</option>
            <option value="secondary">Sekundär</option>
            <option value="tertiary">Tertiär</option>
        </f-select-field>
        <f-select-field v-model="buttonSize">
            <template #label> Storlek </template>
            <option value="small">Small</option>
            <option value="medium">Medium (standard)</option>
            <option value="large">Large</option>
        </f-select-field>
        <f-checkbox-field v-model="hasIcon" :value="true"> Visa ikon </f-checkbox-field>
        <f-fieldset v-if="hasIcon" name="radio-place-icon" horizontal>
            <template #label> Placering av ikon </template>
            <f-radio-field v-model="iconPlacement" value="left"> Vänster </f-radio-field>
            <f-radio-field v-model="iconPlacement" value="right"> Höger </f-radio-field>
        </f-fieldset>
        <f-checkbox-field v-model="isFullwidth" :value="true" :disabled="disabledFullwidth">
            Fullbredd i mobil
        </f-checkbox-field>
        <f-select-field v-if="isTertiary" v-model="tertiaryColor">
            <template #label> Färg </template>
            <option value="standard">Standard</option>
            <option value="black">Svart</option>
            <option value="inverted">Inverterad</option>
        </f-select-field>
        <f-checkbox-field v-model="isDisabled" :value="true"> Inaktiv </f-checkbox-field>
    </live-example>
</template>
