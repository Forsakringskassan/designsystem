<script lang="ts">
import { defineComponent } from "vue";
import { FButton, FCheckboxField, FFieldset, FIcon, FRadioField, FSelectField } from "@fkui/vue";
import { LiveExample, createElement } from "@forsakringskassan/docs-live-example";

export default defineComponent({
    name: "ButtonLiveExample",
    components: { LiveExample, FCheckboxField, FFieldset, FRadioField, FSelectField },
    data() {
        return {
            variant: undefined as undefined | string,
            size: undefined as undefined | string,
            disabled: false,
            tertiaryStyle: undefined as undefined | string,
            hasIcon: false,
            iconPlacement: "Left",
            mobileFullWidth: false,
            disabledFullwidth: undefined as undefined | boolean,
            isAsync: false,
        };
    },
    computed: {
        components(): object {
            return { FIcon, FButton };
        },
        isTertiary(): boolean {
            return this.variant === `tertiary`;
        },
        iconPropName(): string {
            return `icon${this.iconPlacement}`;
        },
        template(): string {
            const { variant, size, disabled, tertiaryStyle, isAsync, mobileFullWidth } = this;
            return createElement(
                "f-button",
                {
                    variant,
                    size,
                    tertiaryStyle,
                    disabled,
                    mobileFullWidth,
                    "@click": isAsync ? "asyncFunction" : undefined,
                    [this.iconPropName]: this.hasIcon ? "success" : undefined,
                },
                "Knapptext",
            );
        },
    },
    watch: {
        size: {
            immediate: true,
            handler(): void {
                if (this.size === "large") {
                    this.mobileFullWidth = true;
                    this.disabledFullwidth = true;
                } else {
                    this.mobileFullWidth = false;
                    this.disabledFullwidth = false;
                }
            },
        },
        variant: {
            immediate: true,
            handler(): void {
                if (this.variant !== "tertiary") {
                    this.tertiaryStyle = undefined;
                }
            },
        },
    },
    methods: {
        livemethods(): object {
            return {
                asyncFunction() {
                    return new Promise((resolve) => setTimeout(resolve, 3000));
                },
            };
        },
    },
});
</script>

<template>
    <live-example :components :template :livemethods="livemethods()">
        <f-select-field v-model="variant">
            <template #label> Typ </template>
            <option :value="undefined">Primär</option>
            <option value="secondary">Sekundär</option>
            <option value="tertiary">Tertiär</option>
        </f-select-field>
        <f-select-field v-model="size">
            <template #label> Storlek </template>
            <option value="small">Small</option>
            <option :value="undefined">Medium (standard)</option>
            <option value="large">Large</option>
        </f-select-field>
        <f-checkbox-field v-model="hasIcon" :value="true"> Visa ikon </f-checkbox-field>
        <f-fieldset v-if="hasIcon" name="radio-place-icon" horizontal>
            <template #label> Placering av ikon </template>
            <f-radio-field v-model="iconPlacement" value="Left"> Vänster </f-radio-field>
            <f-radio-field v-model="iconPlacement" value="Right"> Höger </f-radio-field>
        </f-fieldset>
        <f-checkbox-field v-model="mobileFullWidth" :value="true" :disabled="disabledFullwidth">
            Fullbredd i mobil
        </f-checkbox-field>
        <f-select-field v-if="isTertiary" v-model="tertiaryStyle">
            <template #label> Färg </template>
            <option :value="undefined">Standard</option>
            <option value="black">Svart</option>
            <option value="inverted">Inverterad</option>
        </f-select-field>
        <f-checkbox-field v-model="disabled" :value="true"> Inaktiv </f-checkbox-field>
        <f-checkbox-field v-model="isAsync" :value="true"> Visa spinner </f-checkbox-field>
    </live-example>
</template>
