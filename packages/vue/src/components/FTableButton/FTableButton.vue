<script setup lang="ts">
import { FIcon } from "../FIcon";

const { icon, label } = defineProps<{
    /**
     * When set to an icon name an icon is displayed next to the label.
     */
    icon?: string;

    /**
     * By default the label is visually hidden. When this prop is enabled the
     * label is rendered visually as well.
     */
    label?: boolean;
}>();

const emit = defineEmits<{
    /**
     * Emitted when the button is pressed.
     */
    click: [];
}>();
</script>

<template>
    <button type="button" class="button table__button" @click="emit('click')">
        <f-icon v-if="icon" class="button__icon" :name="icon"></f-icon>
        <span v-if="!label" class="sr-only">
            <!--
                 @slot Label text.
            -->
            <slot></slot>
        </span>
        <slot v-else></slot>
    </button>
</template>
