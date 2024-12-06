<script lang="ts">
import { type BankAccountNumberString, ValidationService, parseBankAccountNumber } from "@fkui/logic";
import { defineComponent, type PropType } from "vue";
import FTextField from "../../FTextField.vue";
import { ParseFunction } from "../../index";
import { getInputElement } from "../../../../utils";
import { TranslationMixin } from "../../../../plugins";
import { useTextFieldSetup } from "../../useTextFieldSetup";

export default defineComponent({
    name: "FBankAccountNumberTextField",
    extends: FTextField,
    mixins: [TranslationMixin],
    props: {
        parser: {
            type: Function as PropType<ParseFunction<BankAccountNumberString>>,
            required: false,
            default: parseBankAccountNumber,
        },
    },
    setup(props) {
        return useTextFieldSetup(props);
    },
    data() {
        return {
            defaultText: this.$t("fkui.bank-account-number-text-field.label", "Kontonummer"),
        };
    },
    mounted() {
        const inputElement = getInputElement(this);

        ValidationService.addValidatorsToElement(
            inputElement,
            {
                bankAccountNumber: {},
            },
            true,
        );

        inputElement.setAttribute("inputmode", "numeric");
        inputElement.setAttribute("maxlength", "40");

        ValidationService.validateElement(inputElement);
    },
});
</script>
