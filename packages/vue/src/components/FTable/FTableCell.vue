<script setup lang="ts">
import { inject } from "vue";

const { title } = defineProps<{ title: string }>();
const renderHeader = inject<boolean>("renderHeader");
</script>

<template>
    <template v-if="renderHeader">
        <!-- avoid text replacement from a potential format directive by setting locked-text-content attr -->
        <th scope="col" class="table__column" data-locked-text-content>{{ title }}</th>
    </template>
    <template v-else>
        <td tabindex="-1"><slot></slot></td>
    </template>
</template>
