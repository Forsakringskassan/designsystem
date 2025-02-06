<script setup lang="ts">
import { computed, ref } from "vue";
import { FLogo, FSelectField } from "@fkui/vue";
import { LiveExample, createElement } from "@forsakringskassan/docs-live-example";

const logoSize = ref("responsive");

const components = computed(() => {
    return {
        FLogo,
    };
});

const template = computed(() => {
    const size = logoSize.value !== "responsive" ? logoSize.value : undefined;
    return createElement("f-logo", { size }, "awesome logo");
});
</script>

<template>
    <live-example :components="components" :template="template">
        <f-select-field v-model="logoSize">
            <template #label> Storlek </template>
            <option value="responsive">Responsiv</option>
            <option value="small">Liten</option>
            <option value="large">Stor</option>
        </f-select-field>
    </live-example>
</template>
