<script setup lang="ts">
import { type PropType } from "vue";
import { type FDefinitionListItem } from "./FDefinitionListItem";

defineProps({
    /**
     * The definitions to be displayed in the definition list.
     */
    definitions: {
        type: Array as PropType<FDefinitionListItem[]>,
        required: true,
    },
    /**
     * Show the definition list in a justified layout.
     */
    justified: {
        type: Boolean,
        required: false,
        default: false,
    },
});
</script>
<template>
    <dl class="definition-list" :class="justified ? 'definition-list--justified' : ''">
        <template v-for="definition in definitions" :key="definition.term">
            <dt class="definition-list__term">{{ definition.term }}</dt>
            <dd class="definition-list__description">{{ definition.description }}</dd>
        </template>
    </dl>
</template>
