<script setup lang="ts">
import { computed, useTemplateRef } from "vue";
import { useTranslate } from "../../plugins";
import { type FTableCellApi } from "./f-table-api";

const { selectable, state } = defineProps<{ selectable: "single" | "multi"; state: boolean | "indeterminate" }>();

const emit = defineEmits<{
    /**
     * Emitted when checkbox value changes.
     */
    toggle: [];
}>();
const $t = useTranslate();
const indeterminate = computed(() => state === "indeterminate");
const checked = computed(() => (state === "indeterminate" ? false : state));
const expose: Partial<FTableCellApi> = {};
const ariaLabel = computed(() => {
    return !checked.value || indeterminate.value
        ? $t("fkui.ftable.select-all.aria-label", "Välj alla rader")
        : $t("fkui.ftable.unselect-all.aria-label", "Avmarkera alla rader");
});
if (selectable === "multi") {
    const inputRef = useTemplateRef("input");
    expose.tabstopEl = inputRef;
}

defineExpose(expose);
</script>

<template>
    <th scope="col" class="table-ng__column table-ng__column--selectable">
        <input
            v-if="selectable === 'multi'"
            ref="input"
            :checked
            :indeterminate
            type="checkbox"
            :aria-label
            tabindex="-1"
            @change="emit('toggle')"
        />
    </th>
</template>
