<!-- eslint-disable vue/component-api-style -- technical debt: should be migrated from options to composition api -->
<script lang="ts">
import { defineComponent } from "vue";
import { LiveExample } from "@forsakringskassan/docs-live-example";
import { FFieldset, FRadioField } from "@fkui/vue";

export default defineComponent({
    name: "FRadioFieldLiveExample",
    components: { LiveExample, FFieldset, FRadioField },
    data() {
        return {
            isHorizontal: false,
        };
    },
    computed: {
        livedata(): object {
            return {
                modelValue: undefined,
            };
        },
        components(): object {
            return {
                FFieldset,
                FRadioField,
            };
        },
        radioFields(): string {
            return /* HTML */ `
                <f-radio-field v-model="modelValue" :value="true"> Ja </f-radio-field>
                <f-radio-field v-model="modelValue" :value="false"> Nej </f-radio-field>
            `;
        },
        horizontal(): string {
            return this.isHorizontal ? "horizontal" : "";
        },
        template(): string {
            return /* HTML */ `
                <f-fieldset name="arbete-annat-land" ${this.horizontal}>
                    <template #label>
                        Har du arbetat utomlands under de senaste 12 månaderna?
                    </template>
                    <template #default> ${this.radioFields} </template>
                </f-fieldset>
            `;
        },
    },
});
</script>

<template>
    <live-example :components :template :livedata>
        <f-fieldset name="radio-orientation">
            <template #label> Placering </template>
            <f-radio-field v-model="isHorizontal" :value="false"> Vertikalt </f-radio-field>
            <f-radio-field v-model="isHorizontal" :value="true"> Horisontellt </f-radio-field>
        </f-fieldset>
    </live-example>
</template>
