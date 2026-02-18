<script setup lang="ts">
import { FIcon } from "../../components/FIcon";
import { useTranslate } from "../../plugins";

const { isOpen } = defineProps<{
    /**
     * Indicates whether the dropdown is open or not.
     */
    isOpen: boolean;
}>();
const emit = defineEmits<{ toggle: [] }>();
const $t = useTranslate();
const ariaLabel = $t("fkui.combobox.toggle", "Öppna förslagen");
</script>

<template>
    <button class="combobox__button" type="button" :aria-label tabindex="-1" @click="emit('toggle')">
        <f-icon name="arrow-down" :rotate="isOpen ? '180' : undefined" class="text-field__icon"></f-icon>
    </button>
</template>
