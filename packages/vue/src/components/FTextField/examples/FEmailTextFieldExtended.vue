<script>
import { defineComponent } from "vue";
import { FEmailTextField } from "@fkui/vue";

export default defineComponent({
    name: "FEmailTextFieldExtended",
    components: { FEmailTextField },
    data() {
        return { extendedEmail: "" };
    },
});
</script>

<template>
    <f-email-text-field
        v-model="extendedEmail"
        v-validation.required
        inputmode="email"
        :max-length="80"
        extended-validation
    >
    </f-email-text-field>
</template>
