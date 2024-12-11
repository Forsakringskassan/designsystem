<template>
    <live-example :components="components" :template="template">
        <f-checkbox-field v-model="isFullWidth" :value="true"> Fullbredd </f-checkbox-field>
    </live-example>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { FCheckboxField, FIcon } from "@fkui/vue";
import { LiveExample } from "@forsakringskassan/docs-live-example";

export default defineComponent({
    name: "EntrypointLiveExample",
    components: { LiveExample, FCheckboxField },
    data() {
        return {
            isFullWidth: false,
        };
    },
    computed: {
        components(): object {
            return { FIcon };
        },
        fullwidth(): string {
            return this.isFullWidth ? "entrypoint--full-width" : "";
        },
        template(): string {
            return /* HTML */ `
                <a class="entrypoint ${this.fullwidth}" href="javascript:">
                    Ansök om hundbidrag
                    <span class="sr-only"> Till tjänsten ansök om hundbidrag</span>
                    <f-icon name="arrow-right" class="entrypoint__icon"></f-icon>
                </a>
            `;
        },
    },
});
</script>
