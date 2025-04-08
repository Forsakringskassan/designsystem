<script>
import { defineComponent } from "vue";
import { FTextField } from "@fkui/vue";

export default defineComponent({
    name: "ValidationPluginExample",
    components: { FTextField },
});
</script>

<template>
    <f-text-field
        v-validation.required.maxLength.minLength="{
            maxLength: { length: 20 },
            minLength: { length: 2 },
        }"
    >
        Namn på barn
    </f-text-field>
</template>
