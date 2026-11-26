<script setup lang="ts">
import { FButton } from "@fkui/vue";

const { tertiaryStyle = undefined, variant } = defineProps<{
    tertiaryStyle?: "muted" | "inverted";
    variant: "primary" | "secondary" | "tertiary";
}>();
</script>

<template>
    <!-- [html-validate-disable-next no-inline-style] -->
    <div id="background" style="background-color: lightgray; padding: 10px">
        <f-button size="large" :tertiary-style :variant>Button</f-button>
        <f-button size="large" :tertiary-style :variant>Button</f-button>
    </div>
</template>
