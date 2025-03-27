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
            <template #right>
                <!-- eslint-disable vue/no-deprecated-slot-attribute -- native slot -->
                <f-details-panel :name class="panel">
                    <template #default="{ header, content, footer }">
                        <h2 :slot="header">[header]</h2>
                        <div :slot="content">[content]</div>
                        <div :slot="footer">[footer]</div>
                    </template>
                </f-details-panel>
            </template>
            <template #content>
                <p>Innehållsyta</p>
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
