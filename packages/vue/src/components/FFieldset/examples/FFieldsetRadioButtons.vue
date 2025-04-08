<script>
import { defineComponent } from "vue";
import { FFieldset, FRadioField } from "@fkui/vue";

export default defineComponent({
    name: "FFieldsetRadioButtons",
    components: { FFieldset, FRadioField },
    data() {
        return {
            sjukpenning: undefined,
        };
    },
});
</script>

<template>
    <f-fieldset name="group-name-radio">
        <template #label> Ansöker du om sjukpenning? </template>
        <f-radio-field id="ja" v-model="sjukpenning" :value="true"> Ja </f-radio-field>
        <f-radio-field id="nej" v-model="sjukpenning" :value="false"> Nej </f-radio-field>
    </f-fieldset>
</template>
