<script setup lang="ts">
import { onMounted } from "vue";
import { FPageLayout, FDetailsPanel, useDetailsPanel } from "@fkui/vue";

const name = "details-panel-slots";
const panel = useDetailsPanel(name);

onMounted(() => {
    panel.open("foo");
});
</script>

<template>
    <div class="layout-container">
        <f-page-layout layout="three-column">
            <template #default="layoutScope">
                <f-details-panel :slot="layoutScope.right" :name class="panel">
                    <template #default="panelScope">
                        <h2 :slot="panelScope.header">[header]</h2>
                        <div :slot="panelScope.content">[content]</div>
                        <div :slot="panelScope.footer">[footer]</div>
                    </template>
                </f-details-panel>
                <p :slot="layoutScope.content">Innehållsyta</p>
            </template>
        </f-page-layout>
    </div>
</template>

<style scoped>
.layout-container {
    container-type: size;
    height: 300px;
    border: 2px dashed #777;
    padding: 1px;
}

.panel::part(header) {
    background: salmon;
}

.panel::part(content) {
    background: cyan;
}

.panel::part(footer) {
    background: lightgreen;
}
</style>
