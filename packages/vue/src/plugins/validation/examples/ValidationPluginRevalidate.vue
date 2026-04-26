<!-- eslint-disable vue/component-api-style -- technical debt: should be migrated from options to composition api -->
<script lang="ts">
import { defineComponent } from "vue";
import { ValidationService } from "@fkui/logic";
import { FButton } from "@fkui/vue";

export default defineComponent({
    name: "ValidationPluginRevalidate",
    components: { FButton },
    methods: {
        validateAllFieldsOnPage() {
            const selector = "input, textarea, select";
            const elements = Array.from(document.querySelectorAll(selector));
            for (const element of elements.filter((element) => element.id)) {
                ValidationService.setSubmitted(element);
            }
            /* eslint-disable-next-line @typescript-eslint/no-floating-promises -- technical debt */
            ValidationService.validateAllElements("rsg-root");
        },
    },
});
</script>

<template>
    <f-button @click="validateAllFieldsOnPage()"> Validera alla fält på sidan </f-button>
</template>
