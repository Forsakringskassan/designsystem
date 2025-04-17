<script>
import { defineComponent } from "vue";
import { IAnimateExpand, FFieldset, FRadioField, FTextField } from "@fkui/vue";

export default defineComponent({
    namne: "IAnimateExpandRadioGroup",
    components: { IAnimateExpand, FFieldset, FRadioField, FTextField },
    data() {
        return {
            moreQuestions: "",
            areYouSure: "",
        };
    },
});
</script>

<template>
    <f-fieldset name="more-questions">
        <template #label> Vill du svar på mer frågor? </template>

        <f-radio-field v-model="moreQuestions" :value="true"> Ja tack </f-radio-field>

        <i-animate-expand :expanded="moreQuestions">
            <f-fieldset class="indent" name="are-you-sure">
                <template #label> Är du säker? </template>

                <f-radio-field v-model="areYouSure" :value="true"> Ja, visa mer </f-radio-field>

                <i-animate-expand :expanded="areYouSure">
                    <f-text-field v-validation.maxLength class="indent">
                        Vad tyckte du?
                    </f-text-field>
                </i-animate-expand>

                <f-radio-field v-model="areYouSure" :value="false"> Nej tack </f-radio-field>
            </f-fieldset>
        </i-animate-expand>

        <f-radio-field v-model="moreQuestions" :value="false"> Nej tack </f-radio-field>
    </f-fieldset>
</template>
