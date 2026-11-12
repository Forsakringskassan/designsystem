<script setup lang="ts">
import { FIcon } from "../../components/FIcon";
import { useTranslate } from "../../plugins";

const { compact, iconOnly } = defineProps<{
    /** Reduce button height and disable the hover background. */
    compact?: boolean;
    /** Show only the icon and keep the text as the accessible name. */
    iconOnly?: boolean;
}>();

const $t = useTranslate();
</script>

<template>
    <button
        type="button"
        class="i-close-button"
        :class="{ 'i-close-button--compact': compact, 'i-close-button--icon-only': iconOnly }"
    >
        <span :class="{ 'sr-only': iconOnly }">
            <!-- @slot Slot for text to display in the close button. -->
            <slot>{{ $t("fkui.close-button.text", "Stäng") }}</slot>
        </span>
        <f-icon name="close" class="i-close-button__icon"></f-icon>
    </button>
</template>
