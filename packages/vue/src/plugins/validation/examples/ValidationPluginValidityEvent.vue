<script>
import { defineComponent } from "vue";
import { FTextField } from "@fkui/vue";

export default defineComponent({
    name: "ValidationPluginValidityEvent",
    components: { FTextField },
    data() {
        return { validityEvent: "", nameModel: "" };
    },
});
</script>

<template>
    <div>
        <strong>ValidityEvent</strong>
        <pre>{{ validityEvent }}</pre>

        <f-text-field
            id="name-of-child"
            v-model="nameModel"
            v-validation.required.maxLength.minLength="{
                maxLength: { length: 10 },
                minLength: { length: 2 },
            }"
            @validity="validityEvent = $event.detail"
        >
            Name of child
        </f-text-field>
    </div>
</template>
