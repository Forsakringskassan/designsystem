<script setup lang="ts">
import { computed, defineComponent, ref } from "vue";
import {
    FCheckboxField,
    FFieldset,
    FPageLayout,
    FRadioField,
    FResizePane,
    useResize,
} from "@fkui/vue";
import { LiveExample } from "@forsakringskassan/docs-live-example";
import { type LayoutAreaAttachPanel } from "../../FPageLayout";

const CustomPanel = defineComponent({
    setup() {
        useResize({
            enabled,
            visible,
        });
    },
    template: /* HTML */ `
        <div class="content">
            <slot></slot>
        </div>
    `,
});

const attachment = ref<LayoutAreaAttachPanel>("left");
const enabled = ref(true);
const visible = ref(true);
const components = { FPageLayout, FResizePane, CustomPanel };

const layout = computed(() => {
    const mapping: Record<string, string> = {
        left: "left-panel",
        right: "right-panel",
    };
    return mapping[attachment.value];
});

const slot = computed(() => {
    const mapping: Record<string, string> = {
        left: "left",
        right: "right",
    };
    return mapping[attachment.value];
});

const template = computed(() => {
    return /* HTML */ `
        <div class="layout-container">
            <f-page-layout layout="${layout.value}">
                <template #${slot.value}>
                    <f-resize-pane min="200px" max="50%" initial="25%">
                        <custom-panel>
                            <p>Panel</p>
                        </custom-panel>
                    </f-resize-pane>
                </template>
                <template #content>
                    <div class="content">
                        <p>Huvudyta</p>
                        <p>Drag i handtaget för att ändra storlek.</p>
                    </div>
                </template>
            </f-page-layout>
        </div>
    `;
});
</script>

<template>
    <live-example :components :template>
        <f-fieldset name="attachment">
            <template #label> Fäst till </template>
            <template #default>
                <f-radio-field v-model="attachment" value="left">Vänster</f-radio-field>
                <f-radio-field v-model="attachment" value="right">Höger</f-radio-field>
            </template>
        </f-fieldset>
        <f-fieldset name="attachment">
            <template #label> Egenskaper </template>
            <template #default>
                <f-checkbox-field v-model="enabled" :value="true">Enabled</f-checkbox-field>
                <f-checkbox-field v-model="visible" :value="true">Visible</f-checkbox-field>
            </template>
        </f-fieldset>
    </live-example>
</template>

<style scope>
.layout-container {
    container-type: size;
    height: 230px;
}

.content {
    padding: 1rem;

    p {
        margin: 0;
    }
}
</style>
