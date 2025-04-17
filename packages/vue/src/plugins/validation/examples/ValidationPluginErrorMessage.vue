<script>
import { defineComponent } from "vue";
import { FTextField } from "@fkui/vue";

export default defineComponent({
    name: "ValidationPluginErrorMessage",
    components: { FTextField },
    data() {
        return { model: "" };
    },
});
</script>

<template>
    <f-text-field
        id="specifikt-felmeddelande"
        v-model="model"
        v-validation.required.maxLength="{
            required: { errorMessage: 'Ett specifikt required felmeddelande' },
        }"
        :maxlength="100"
    >
        Ett fält med specifict felmeddelande
    </f-text-field>
</template>
