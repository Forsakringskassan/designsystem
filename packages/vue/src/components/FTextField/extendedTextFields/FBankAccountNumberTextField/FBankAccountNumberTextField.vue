<script lang="ts">
import { type PropType, defineComponent } from "vue";
import { type BankAccountNumberString, ValidationService, parseBankAccountNumber } from "@fkui/logic";
import { TranslationMixin } from "../../../../plugins";
import { getInputElement } from "../../../../utils";
import FTextField from "../../FTextField.vue";
import { type ParseFunction } from "../../index";
import { useTextFieldSetup } from "../../useTextFieldSetup";

export default defineComponent({
    name: "FBankAccountNumberTextField",
    extends: FTextField,
    mixins: [TranslationMixin],
    props: {
        /* eslint-disable-next-line vue/no-unused-properties -- used by FTextField (extended) */
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

        /* eslint-disable-next-line @typescript-eslint/no-floating-promises -- technical debt */
        ValidationService.validateElement(inputElement);
    },
});
</script>
