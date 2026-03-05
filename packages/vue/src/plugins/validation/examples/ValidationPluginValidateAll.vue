<script lang="ts">
import { defineComponent } from "vue";
import { ValidationService } from "@fkui/logic";
import { FButton } from "@fkui/vue";

export default defineComponent({
    name: "ValidationPluginValidateAll",
    components: { FButton },
    methods: {
        validateAllFieldsOnPage() {
            const selector = "input, textarea, select";
            const elements = Array.from(document.querySelectorAll(selector));
            for (const element of elements.filter((element) => element.id)) {
                ValidationService.setError(element, `Server fel på fält med id ${element.id} `);
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
