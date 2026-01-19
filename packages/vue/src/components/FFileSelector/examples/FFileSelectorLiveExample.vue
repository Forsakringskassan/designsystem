<script setup lang="ts">
import { computed, ref } from "vue";
import { FCheckboxField, FFileSelector, FSelectField } from "@fkui/vue";
import { LiveExample, createElement } from "@forsakringskassan/docs-live-example";

const buttonSize = ref<string | undefined>();
const isDisabled = ref(false);
const components = { FFileSelector };
const template = computed(() =>
    createElement(
        "f-file-selector",
        {
            accept: "application/pdf, image/jpeg, image/tiff, image/png",
            size: buttonSize.value,
            disabled: isDisabled.value,
        },
        "Lägg till fil",
    ),
);
</script>

<template>
    <live-example :components :template>
        <f-select-field v-model="buttonSize">
            <template #label> Storlek </template>
            <option value="small">Liten</option>
            <option :value="undefined">Medium (standard)</option>
            <option value="large">Stor</option>
        </f-select-field>
        <f-checkbox-field v-model="isDisabled" :value="true"> Inaktiverad </f-checkbox-field>
    </live-example>
</template>
