<script lang="ts">
import { type PropType, defineComponent } from "vue";
import { type BankgiroString, ValidationService, parseBankgiro } from "@fkui/logic";
import { TranslationMixin } from "../../../../plugins";
import { getInputElement } from "../../../../utils";
import FTextField from "../../FTextField.vue";
import { type FormatFunction } from "../../index";
import { useTextFieldSetup } from "../../useTextFieldSetup";

export default defineComponent({
    name: "FBankgiroTextField",
    extends: FTextField,
    mixins: [TranslationMixin],
    props: {
        /* eslint-disable-next-line vue/no-unused-properties -- used by FTextField (extended) */
        formatter: {
            type: Function as PropType<FormatFunction<BankgiroString>>,
            required: false,
            default: parseBankgiro,
        },
    },
    setup(props) {
        return useTextFieldSetup(props);
    },
    data() {
        return {
            defaultText: this.$t("fkui.bankgiro-text-field.label", "Bankgironummer"),
        };
    },
    mounted() {
        const inputElement = getInputElement(this);

        ValidationService.addValidatorsToElement(
            inputElement,
            {
                maxLength: { length: 9 },
                bankgiro: {},
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
