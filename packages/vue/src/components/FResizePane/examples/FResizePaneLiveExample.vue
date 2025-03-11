<script setup lang="ts">
import { computed, ref } from "vue";
import { FPageLayout, FResizePane, FFieldset, FRadioField } from "@fkui/vue";
import { LiveExample } from "@forsakringskassan/docs-live-example";
import { type LayoutAreaAttachPanel } from "../../FPageLayout";

const attachment = ref<LayoutAreaAttachPanel>("left");
const components = { FPageLayout, FResizePane };

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
                        <div class="content">
                            <p>Panel</p>
                        </div>
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
    </live-example>
</template>

<style scope>
.layout-container {
    container-type: size;
    height: 230px;
}

.content {
    padding: 1rem;
}
</style>
