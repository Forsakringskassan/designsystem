<script setup lang="ts">
import { type FDefinitionListItem } from "./f-definition-list-item";

const { definitions } = defineProps<{
    /**
     * Array with items containing:
     * - `term` (key)
     * - `definition` (value).
     */
    definitions: FDefinitionListItem[];
}>();
</script>
<template>
    <dl class="definition-list">
        <template v-for="item in definitions" :key="item.term">
            <dt class="definition-list__term">{{ item.term }}</dt>
            <dd class="definition-list__definition">{{ item.definition }}</dd>
        </template>
    </dl>
</template>
