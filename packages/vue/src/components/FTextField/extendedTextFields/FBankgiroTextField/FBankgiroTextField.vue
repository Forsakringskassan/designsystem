<script lang="ts">
import { parseBankgiro, type BankgiroString, ValidationService } from "@fkui/logic";
import { defineComponent, type PropType } from "vue";
import FTextField from "../../FTextField.vue";
import { FormatFunction } from "../../index";
import { getInputElement } from "../../../../utils";
import { TranslationMixin } from "../../../../plugins";
import { useTextFieldSetup } from "../../useTextFieldSetup";

export default defineComponent({
    name: "FBankgiroTextField",
    extends: FTextField,
    mixins: [TranslationMixin],
    props: {
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

        ValidationService.validateElement(inputElement);
    },
});
</script>
