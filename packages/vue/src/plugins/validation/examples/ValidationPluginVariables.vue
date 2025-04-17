<script>
import { defineComponent } from "vue";
import { FTextField } from "@fkui/vue";

export default defineComponent({
    name: "ValidationPluginVariables",
    components: { FTextField },
    data() {
        return {
            anotherDataVariable: 5,
            myDataVariable: 80,
        };
    },
});
</script>

<template>
    <f-text-field
        v-validation.required.maxLength.minLength="{
            maxLength: { length: myDataVariable },
            minLength: { length: anotherDataVariable },
        }"
    >
        Namn på barn
    </f-text-field>
</template>
