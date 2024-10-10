<template>
    <div class="card card--default">
        <div v-if="hasHeaderSlot" class="card__header">
            <!--@slot Slot for the title. -->
            <slot name="header" class="card__header-label"></slot>
        </div>
        <div class="card__content">
            <!--@slot Slot for the main content, e.g. paragraphs, input fields, etc. -->
            <slot name="default"></slot>
        </div>
        <div v-if="hasFooterSlot" class="card__footer">
            <!--@slot Slot the footer content, i.e. buttons. -->
            <slot name="footer"></slot>
        </div>
    </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useSlotUtils } from "./useSlotUtils";

const { hasSlot } = useSlotUtils();
const hasHeaderSlot = computed(() => hasSlot("header"));
const hasFooterSlot = computed(() => hasSlot("footer"));

</script>
