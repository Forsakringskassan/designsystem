<template>
    <live-example :components="components" :template="template"> </live-example>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { FIcon } from "@fkui/vue";
import { LiveExample } from "@forsakringskassan/docs-live-example";

export default defineComponent({
    name: "EntrypointLiveExample",
    components: { LiveExample },
    computed: {
        components(): object {
            return { FIcon };
        },

        template(): string {
            return /* HTML */ `
                <a class="entrypoint" href="javascript:">
                    Ansök om hundbidrag
                    <span class="sr-only"> Till tjänsten ansök om hundbidrag</span>
                    <f-icon name="arrow-right" class="entrypoint__icon"></f-icon>
                </a>
            `;
        },
    },
});
</script>
