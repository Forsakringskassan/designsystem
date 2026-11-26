<script setup lang="ts">
import { FDatepickerField } from "@fkui/vue";
</script>

<template>
    <f-datepicker-field>
        <template #default>Default</template>
    </f-datepicker-field>

    <f-datepicker-field disabled>
        <template #default>Disabled</template>
    </f-datepicker-field>
</template>
