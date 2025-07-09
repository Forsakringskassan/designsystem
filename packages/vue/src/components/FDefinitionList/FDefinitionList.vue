<script setup lang="ts">
import { type PropType } from "vue";
import { Definition } from "./definition";

defineProps({
    definitions: {
        type: Array as PropType<Definition[]>,
        required: true,
    },
    gridded: {
        type: Boolean,
        required: false,
        default: false,
    },
});
</script>
<template>
    <div class="definition-list">
        <dl v-if="gridded">
            <template v-for="definition in definitions" :key="definition.term">
                <dt>{{ definition.term }}</dt>
                <dd>{{ definition.definition }}</dd>
            </template>
        </dl>
        <div v-for="definition in definitions" v-else :key="definition.term">
            {{ definition.term }}: {{ definition.definition }}
        </div>
    </div>
</template>
