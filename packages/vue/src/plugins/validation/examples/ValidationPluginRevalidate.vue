<script>
import { defineComponent } from "vue";
import { ValidationService } from "@fkui/logic";

export default defineComponent({
    name: "ValidationPluginRevalidate",
    methods: {
        validateAllFieldsOnPage() {
            const selector = "input, textarea, select";
            const elements = Array.from(document.querySelectorAll(selector));
            for (const element of elements.filter((element) => element.id)) {
                ValidationService.setSubmitted(element);
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
