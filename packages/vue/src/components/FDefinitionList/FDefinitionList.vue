<script setup lang="ts">
import { type PropType } from "vue";
import { type Definition } from "./definition";

defineProps({
    /**
     * The definitions to be displayed in the definition list.
     */
    definitions: {
        type: Array as PropType<Definition[]>,
        required: true,
    },
    /**
     * Show the definition list in a aligned layout.
     */
    aligned: {
        type: Boolean,
        required: false,
        default: false,
    },
});
</script>
<template>
    <dl class="definition-list" :class="aligned ? 'definition-list--aligned' : ''">
        <template v-for="definition in definitions" :key="definition.term">
            <dt class="definition-list__term">{{ definition.term }}:</dt>
            <dd class="definition-list__description">{{ definition.description }}</dd>
        </template>
    </dl>
</template>
