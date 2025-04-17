<script setup lang="ts">
import { computed, defineComponent, ref } from "vue";
import {
    FCheckboxField,
    FFieldset,
    FPageLayout,
    FSelectField,
    FRadioField,
    FResizePane,
    useResize,
} from "@fkui/vue";
import { LiveExample } from "@forsakringskassan/docs-live-example";
import { type LayoutAreaAttachPanel } from "../../FPageLayout";

const CustomPanel = defineComponent({
    setup() {
        const { size } = useResize({
            enabled,
            visible,
            overlay,
            offset,
        });
        return { size };
    },
    template: /* HTML */ `
        <div class="content">
            <slot v-bind="{ size }"></slot>
        </div>
    `,
});

const attachment = ref<LayoutAreaAttachPanel>("left");
const enabled = ref(true);
const visible = ref(true);
const overlay = ref(false);
const offset = ref(200);
const min = ref("200px");
const max = ref("50%");
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

const livedata = {
    min,
    max,
};

const template = computed(() => {
    return /* HTML */ `
        <div class="layout-container">
            <f-page-layout layout="${layout.value}">
                <template #${slot.value}>
                    <f-resize-pane :min :max initial="25%">
                        <custom-panel>
                            <template #default="{ size }">
                                <p>Panel</p>
                                <p>Size: {{ size }}px</p>
                            </template>
                        </custom-panel>
                    </f-resize-pane>
                </template>
                <template #content>
                    <div class="content">
                        <p>Huvudyta</p>
                        <p>Drag i handtaget för att ändra storlek.</p>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ut tellus
                            sodales, vestibulum felis a, eleifend nunc. Mauris hendrerit lorem a
                            nulla elementum tempor. Etiam vestibulum risus ut velit pharetra, vitae
                            tincidunt lorem mattis.
                        </p>
                    </div>
                </template>
            </f-page-layout>
        </div>
    `;
});
</script>

<template>
    <live-example :components :livedata :template>
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
                <f-checkbox-field v-model="overlay" :value="true">Overlay</f-checkbox-field>
            </template>
        </f-fieldset>
        <f-select-field v-model="min">
            <template #label> Minsta storlek </template>
            <template #default>
                <option :value="undefined">(ingen begränsning)</option>
                <option value="200px">200px</option>
                <option value="10%">10%</option>
                <option value="200px 10%">200px 10%</option>
            </template>
        </f-select-field>
        <f-select-field v-model="max">
            <template #label> Största storlek </template>
            <template #default>
                <option :value="undefined">(ingen begränsning)</option>
                <option value="400px">400px</option>
                <option value="50%">50%</option>
                <option value="400px 50%">400px 50%</option>
            </template>
        </f-select-field>
        <f-select-field v-model="offset" :disabled="!overlay">
            <template #label> Offset </template>
            <template #default>
                <option :value="0">Ingen offset</option>
                <option :value="200">200px offset</option>
            </template>
        </f-select-field>
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
