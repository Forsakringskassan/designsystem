<script setup lang="ts">
import { FSelectField } from "@fkui/vue";
</script>

<template>
    <f-select-field>
        <template #label>Default</template>
    </f-select-field>

    <f-select-field disabled>
        <template #label>Disabled</template>
    </f-select-field>
</template>
