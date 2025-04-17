<script setup lang="ts">
import { computed, defineComponent, h, ref } from "vue";
import { FPageLayout, FResizePane, FCheckboxField, useResize } from "@fkui/vue";
import { LiveExample } from "@forsakringskassan/docs-live-example";

const enabled = ref(true);
const visible = ref(true);

const CustomPanel = defineComponent({
    setup(_props, { slots }) {
        useResize({
            enabled,
            visible,
        });
        return () => h("div", slots.default?.());
    },
});

const components = { FPageLayout, FResizePane, CustomPanel };

const template = computed(() => {
    return /* HTML */ `
        <div class="layout-container">
            <f-page-layout layout="left-panel">
                <template #left>
                    <f-resize-pane min="200px" max="50%" initial="25%">
                        <custom-panel>
                            <div class="content">
                                <p>Panel</p>
                            </div>
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
        <f-checkbox-field v-model="enabled" :value="true">Aktiv</f-checkbox-field>
        <f-checkbox-field v-model="visible" :value="true">Synlig</f-checkbox-field>
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
