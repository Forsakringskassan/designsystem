<script setup lang="ts">
import { FButton } from "@fkui/vue";

const { size } = defineProps<{ size: "large" | "medium" | "small" }>();
</script>

<template>
    <!-- [html-validate-disable-next no-inline-style] -->
    <div id="visual-wrapper" style="background-color: beige; padding: 20px">
        <!-- [html-validate-disable-next no-inline-style] -->
        <ul class="button-list" style="border: 1px black dotted">
            <li><f-button :size variant="primary">Button</f-button></li>
            <li><f-button :size variant="secondary">Button</f-button></li>
            <li><f-button :size variant="tertiary">Button</f-button></li>
            <li><f-button :size variant="tertiary" tertiary-style="muted">Button</f-button></li>
            <li><f-button :size variant="tertiary" tertiary-style="inverted">Button</f-button></li>
        </ul>
    </div>
</template>
