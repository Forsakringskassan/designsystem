<script setup lang="ts">
const { colspan } = defineProps<{
    colspan: number;
}>();
</script>

<template>
    <td class="table-ng__cell--custom" :colspan tabindex="-1">
        <slot></slot>
    </td>
</template>
