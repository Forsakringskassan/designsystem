<script lang="ts">
import { defineComponent } from "vue";
import { FRadioField, FCheckboxField, FTooltip, FFieldset } from "@fkui/vue";
import { LiveExample } from "@forsakringskassan/docs-live-example";

export default defineComponent({
    name: "FFieldsetLiveExample",
    components: { LiveExample, FRadioField, FFieldset, FCheckboxField },
    data() {
        return {
            type: "radio",
            isHorizontal: false,
            tooltipVisible: false,
            descriptionVisible: false,
            isDisabled: false,
            isRequired: false,
        };
    },
    computed: {
        components(): object {
            return {
                FTooltip,
                FFieldset,
                FCheckboxField,
                FRadioField,
            };
        },
        livedata(): object {
            return {
                choices: [],
            };
        },
        tooltip(): string {
            const template = /* HTML */ `
                <template #tooltip>
                    <f-tooltip screen-reader-text="Läs mer om Broschyrer" header-tag="h2">
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
        componentType(): string {
            return `f-${this.type}-field`;
        },
        choices(): string {
            return /* HTML */ `
                <${this.componentType}
                    v-model="choices"
                    value="Ett alternativ"
                >
                    Ett alternativ
                </${this.componentType}>

                <${this.componentType}
                    v-model="choices"
                    value="Alternativ 2"
                >
                    Alternativ 2
                </${this.componentType}>

                <${this.componentType}
                    v-model="choices"
                    value="Ytterligare alternativ"
                >
                    Ytterligare alternativ
                </${this.componentType}>

                <${this.componentType}
                    v-model="choices"
                    value="Sista"
                    ${this.disabled}
                >
                    Sista
                </${this.componentType}>
            `;
        },
        disabled(): string {
            return this.isDisabled ? "disabled" : "";
        },
        required(): string {
            return this.isRequired ? "v-validation.required" : "";
        },
        horizontal(): string {
            return this.isHorizontal ? "horizontal" : "";
        },
        template(): string {
            return /* HTML */ `
                <f-fieldset name="chips" chip ${this.required} ${this.horizontal}>
                    <template #label> Etikett-rubrik </template>
                    ${this.tooltip} ${this.description} ${this.choices}
                </f-fieldset>
            `;
        },
    },
});
</script>

<template>
    <live-example :components="components" :template="template" :livedata="livedata">
        <f-fieldset name="type">
            <template #label> Typ </template>
            <f-radio-field v-model="type" value="radio"> Enkelval (radioknappar)</f-radio-field>
            <f-radio-field v-model="type" value="checkbox"> Flerval (kryssrutor)</f-radio-field>
        </f-fieldset>

        <f-checkbox-field v-model="isHorizontal" :value="true">
            Horisontell layout
        </f-checkbox-field>
        <f-checkbox-field v-model="isDisabled" :value="true"> Inaktiverad </f-checkbox-field>
        <f-checkbox-field v-model="isRequired" :value="true"> Obligatorisk </f-checkbox-field>
        <f-fieldset name="checkbox-label">
            <template #label> Etiketten </template>
            <f-checkbox-field v-model="tooltipVisible" :value="true"> Tooltip </f-checkbox-field>
            <f-checkbox-field v-model="descriptionVisible" :value="true">
                Hjälptext
            </f-checkbox-field>
        </f-fieldset>
    </live-example>
</template>
