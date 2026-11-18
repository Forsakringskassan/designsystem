<!-- eslint-disable vue/component-api-style -- technical debt: should be migrated from options to composition api -->
<script lang="ts">
import { type PropType, defineComponent } from "vue";
import { ValidationService, formatNumber, parseNumber } from "@fkui/logic";
import { getInputElement } from "../../../../utils";
import FTextField from "../../FTextField.vue";
import { type FormatFunction, type ParseFunction } from "../../index";
import { useTextFieldSetup } from "../../use-text-field-setup";

function defaultFormatter(this: { decimals: number }, modelValue: number): string | undefined {
    return formatNumber(modelValue, this.decimals);
}

export default defineComponent({
    name: "FNumericTextField",
    extends: FTextField,
    props: {
        /**
         * The number of decimals to format number as.
         */
        decimals: {
            type: Number,
            required: false,
            default: undefined,
        },
        formatter: {
            type: Function as PropType<FormatFunction<number>>,
            required: false,
            default: defaultFormatter,
        },
        parser: {
            type: Function as PropType<ParseFunction<number>>,
            required: false,
            default: parseNumber,
        },
    },
    setup(props) {
        return useTextFieldSetup(props);
    },
    mounted() {
        const inputElement = getInputElement(this);
        inputElement.setAttribute("inputmode", "numeric");
        inputElement.setAttribute("maxlength", "20");

        ValidationService.addValidatorsToElement(
            inputElement,
            {
                number: {},
            },
            true,
        );

        /* eslint-disable-next-line @typescript-eslint/no-floating-promises -- technical debt */
        ValidationService.validateElement(inputElement);
    },
});
</script>
