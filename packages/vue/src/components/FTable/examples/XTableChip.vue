<script setup lang="ts" generic="T extends Record<string, unknown>, K extends keyof T">
import { ref } from "vue";
import FTableCell from "../FTableCell.vue";
import FFieldset from "../../FFieldset/FFieldset.vue";
import FRadioField from "../../FRadioField/FRadioField.vue";

const { row } = defineProps<{
    row: T;
}>();

const model = ref("");
</script>

<template>
    <f-table-cell title="Custom komponent">
        <f-fieldset name="chip" chip>
            <template #label> Etikett </template>
            <f-radio-field v-model="model" value="1"> Chip {{ row.id }} </f-radio-field>
        </f-fieldset>
    </f-table-cell>
</template>
