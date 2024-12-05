<script setup lang="ts">
import { FIcon } from "../../components/FIcon";
import { useTranslate } from "../../plugins";

const $t = useTranslate();
const emit = defineEmits<{ toggle: [] }>();
const ariaLabel = $t("fkui.combobox.toggle", "Öppna förslagen");
</script>

<template>
    <button class="combobox__button" type="button" :aria-label tabindex="-1" @click="emit('toggle')">
        <f-icon name="arrow-down" class="text-field__icon"></f-icon>
    </button>
</template>
