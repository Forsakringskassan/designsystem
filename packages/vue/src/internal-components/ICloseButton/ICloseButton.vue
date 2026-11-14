<script setup lang="ts">
import { FButton } from "../../components/FButton";
import { useTranslate } from "../../plugins";

const { compact } = defineProps<{
    /** Reduce button height and disable the hover background. */
    compact?: boolean;
}>();

const $t = useTranslate();
</script>

<template>
    <f-button
        class="button--close"
        :class="{ 'button--close--compact': compact }"
        variant="tertiary"
        tertiary-style="muted"
        size="medium"
        icon-right="close"
    >
        <!-- @slot Close button text. Defaults to the translated text "Stäng". -->
        <slot>{{ $t("fkui.close-button.text", "Stäng") }}</slot>
    </f-button>
</template>
