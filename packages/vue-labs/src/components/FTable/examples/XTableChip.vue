<script setup lang="ts" generic="T extends Record<string, unknown>, K extends keyof T">
import { ref } from "vue";
import { FFieldset, FRadioField } from "@fkui/vue";

const { row } = defineProps<{
    row: T;
}>();

const model = ref("");
</script>

<template>
    <td>
        <f-fieldset name="chip" chip>
            <template #label> Etikett </template>
            <f-radio-field v-model="model" value="1" tabindex="-1">
                Chip {{ row.id }}
            </f-radio-field>
        </f-fieldset>
    </td>
</template>
