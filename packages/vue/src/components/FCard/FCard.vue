<template>
    <div class="card card--default">
        <div v-if="$slots.header" class="card__header">
            <!--@slot Slot for the title. -->
            <slot name="header" v-bind="{ headingSlotClass: headingClass }"></slot>
        </div>
        <div class="card__content">
            <!--@slot Slot for the main content, e.g. paragraphs, input fields, etc. -->
            <slot name="default"></slot>
        </div>
        <div v-if="$slots.footer" class="card__footer">
            <!--@slot Slot the footer content, i.e. buttons. -->
            <slot name="footer"></slot>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const headingClass = ref(["card__header-label"]);
</script>
