<script setup lang="ts">
import { inject } from "vue";

const { title } = defineProps<{ title: string }>();
const renderHeader = inject<boolean>("renderHeader");
</script>

<template>
    <template v-if="renderHeader">
        <th scope="col" class="table__column">{{ title }}</th>
    </template>
    <template v-else>
        <td tabindex="-1"><slot></slot></td>
    </template>
</template>
