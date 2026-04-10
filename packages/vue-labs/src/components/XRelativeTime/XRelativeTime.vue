<script setup lang="ts">
import { computed } from "vue";
import { useTranslate } from "@fkui/vue";
import { timeAgo } from "./time-ago";

const { timestamp, reference = Date.now() } = defineProps<{
    /**
     * Unix timestamp in milliseconds.
     */
    timestamp: number;

    /**
     * Referemce time to compare the timestamp to.
     *
     * Defaults to the current time.
     */
    reference?: number;
}>();

const $t = useTranslate();
const ago = computed(() => timeAgo(timestamp, reference, $t));
const datetime = computed(() => new Date(timestamp).toISOString());
const title = computed(() => new Date(timestamp).toLocaleString());
</script>

<template>
    <time :datetime :title>{{ ago }}</time>
</template>

<!-- eslint-disable-next-line vue/no-restricted-block -->
<style scoped>
time {
    color: var(--fkds-color-text-primary);
}
</style>
