<script>
import { defineComponent } from "vue";
import { FFieldset, FRadioField } from "@fkui/vue";

export default defineComponent({
    name: "FFieldsetRadioButtons",
    components: { FFieldset, FRadioField },
    data() {
        return {
            model: undefined,
        };
    },
});
</script>

<template>
    <f-fieldset name="group-name-radio-horizontal" horizontal>
        <template #label> Ligger radioknapparna horisontellt? </template>
        <f-radio-field id="horisontellt-ja" v-model="model" :value="true"> Ja </f-radio-field>
        <f-radio-field id="horisontellt-nej" v-model="model" :value="false"> Nej </f-radio-field>
    </f-fieldset>
</template>
