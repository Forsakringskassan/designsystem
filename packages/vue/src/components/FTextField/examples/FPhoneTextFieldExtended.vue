<script>
import { defineComponent } from "vue";
import { FPhoneTextField } from "@fkui/vue";

export default defineComponent({
    name: "FPhoneTextFieldExtended",
    components: { FPhoneTextField },
    data() {
        return { extendedphone: "" };
    },
});
</script>

<template>
    <f-phone-text-field v-model="extendedphone" v-validation.required extended-validation>
        <template #extendedLabel> Skriv in ditt telefonnummer igen </template>
    </f-phone-text-field>
</template>
