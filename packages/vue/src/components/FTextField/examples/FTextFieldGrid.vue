<script>
import { defineComponent } from "vue";
import { FTextField } from "@fkui/vue";

export default defineComponent({
    name: "FTextFieldGrid",
    components: { FTextField },
    data() {
        return { foo: "" };
    },
});
</script>

<template>
    <f-text-field
        v-model="foo"
        v-validation.required.maxLength="{ maxLength: { length: 100 } }"
        label-width="md-9"
        input-width="md-6"
    >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis scelerisque lacus sed mi
        mollis pulvinar.
    </f-text-field>
</template>
