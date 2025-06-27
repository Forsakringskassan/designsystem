<script setup lang="ts">
import { inject, onMounted, useTemplateRef } from "vue";
import { findAction } from "./FTable.logic";

const { title } = defineProps<{ title: string }>();
const renderHeader = inject<boolean>("renderHeader");
const tdRef = useTemplateRef("td");

onMounted(() => {
    if (tdRef.value) {
        const action = findAction(tdRef.value);

        if (action) {
            action.tabIndex = -1;
        }
    }
});
</script>

<template>
    <template v-if="renderHeader">
        <!-- avoid text replacement from a potential format directive by setting locked-text-content attr -->
        <th scope="col" class="table__column" data-locked-text-content>{{ title }}</th>
    </template>
    <template v-else>
        <td ref="td" tabindex="-1"><slot></slot></td>
    </template>
</template>
