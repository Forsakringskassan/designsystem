<script>
import { defineComponent } from "vue";
import { ValidationService } from "@fkui/logic";

export default defineComponent({
    name: "ValidationPluginValidateAll",
    methods: {
        validateAllFieldsOnPage() {
            const selector = "input, textarea, select";
            const elements = Array.from(document.querySelectorAll(selector));
            for (const element of elements.filter((element) => element.id)) {
                ValidationService.setError(element, {
                    serverError: `Server fel på fält med id ${element.id} `,
                });
            }
            ValidationService.validateAllElements("rsg-root");
        },
    },
});
</script>

<template>
    <button class="button button--primary" type="button" @click="validateAllFieldsOnPage()">
        Validera alla fält på sidan
    </button>
</template>
