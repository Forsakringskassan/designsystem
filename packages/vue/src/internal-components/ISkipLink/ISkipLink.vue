<script lang="ts">
import { defineComponent } from "vue";
import { TranslationMixin } from "../../plugins/translation";

export default defineComponent({
    name: "ISkipLink",
    mixins: [TranslationMixin],
    props: {
        /**
         * Target for skiplink.
         */
        href: {
            type: String,
            required: false,
            default: "main",
        },
    },
});
</script>

<template>
    <a class="iskiplink" :href="href">
        <!-- @slot Slot for default skip link text. -->
        <slot>{{ $t("fkui.skip-link.text", "Gå direkt till innehåll") }}</slot>
    </a>
</template>
