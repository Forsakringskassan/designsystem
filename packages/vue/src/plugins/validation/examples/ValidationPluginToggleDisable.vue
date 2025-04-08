<script>
import { defineComponent } from "vue";
import { ValidationService } from "@fkui/logic";
import { FTextField, FFieldset, FRadioField, getElementFromVueRef } from "@fkui/vue";

export default defineComponent({
    name: "ValidationPluginToggleDisable",
    components: {
        FTextField,
        FFieldset,
        FRadioField,
    },
    data() {
        return {
            name: "Ett för långt namn",
            isDisabled: false,
        };
    },
    methods: {
        async onToggleDisable() {
            await this.$nextTick();
            if (this.isDisabled) {
                const wrapper = getElementFromVueRef(this.$refs.inputField);
                const input = wrapper.querySelector("input");
                ValidationService.validateElement(input);
            }
        },
    },
});
</script>

<template>
    <div>
        <f-fieldset id="is-disabled" name="color" @change="onToggleDisable">
            <template #label> Ska inmatningsfältet vara inaktivt? </template>

            <f-radio-field
                id="disabled-no"
                v-model="isDisabled"
                v-test="'disabled-no'"
                :value="false"
            >
                Nej
            </f-radio-field>
            <f-radio-field
                id="disabled-yes"
                v-model="isDisabled"
                v-test="'disabled-yes'"
                :value="true"
            >
                Ja
            </f-radio-field>
        </f-fieldset>

        <div class="row">
            <div class="col col--md-6">
                <f-text-field
                    id="dynamic-disable"
                    ref="inputField"
                    v-model="name"
                    v-test="'dynamic-disable'"
                    v-validation.maxLength="{ maxLength: { length: 10 } }"
                    :disabled="isDisabled"
                >
                    Namn
                </f-text-field>
            </div>
        </div>
    </div>
</template>
