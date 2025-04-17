<script>
import { defineComponent } from "vue";
import { FPhoneTextField } from "@fkui/vue";

export default defineComponent({
    name: "FPhoneTextFieldSimple",
    components: { FPhoneTextField },
    data() {
        return { phone: "" };
    },
});
</script>

<template>
    <f-phone-text-field v-model="phone" v-validation.required></f-phone-text-field>
</template>
