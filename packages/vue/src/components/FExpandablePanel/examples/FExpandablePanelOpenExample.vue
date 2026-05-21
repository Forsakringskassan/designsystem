<!-- eslint-disable vue/component-api-style -- technical debt: should be migrated from options to composition api -->
<script setup lang="ts">
import { defineComponent, ref } from "vue";
import {
    FExpandablePanel,
    FLayoutApplicationTemplate,
    FLayoutRightPanel,
    FTextareaField,
} from "@fkui/vue";

const expanded = ref(true);
const about = ref("");
const isReady = ref(false);

function togglePanelOne() {
    expanded.value = !expanded.value;
}
</script>

<template>
    <f-layout-application-template>
        <template #default>
            <f-layout-right-panel>
                <template #default>
                    <div class="container-fluid">
                        <f-expandable-panel :expanded @toggle="togglePanelOne">
                            <template #title> Berätta om dig själv </template>

                            <template #default>
                                <f-textarea-field v-model="about" :maxlength="100" :soft-limit="20">
                                    <template #description="{ formatDescriptionClass }">
                                        <label>Test</label>

                                        <span :class="formatDescriptionClass">
                                            (max 100 tecken)
                                        </span>
                                    </template>
                                </f-textarea-field>
                            </template>
                        </f-expandable-panel>
                    </div>
                </template>
            </f-layout-right-panel>
        </template>
    </f-layout-application-template>
</template>
