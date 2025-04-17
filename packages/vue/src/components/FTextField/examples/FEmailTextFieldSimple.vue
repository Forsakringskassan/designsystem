<script>
import { defineComponent } from "vue";
import { FEmailTextField } from "@fkui/vue";

export default defineComponent({
    name: "FEmailTextFieldSimple",
    components: { FEmailTextField },
    data() {
        return { email: "" };
    },
});
</script>

<template>
    <f-email-text-field
        id="email"
        v-model="email"
        v-validation.required
        :max-length="80"
    ></f-email-text-field>
</template>
