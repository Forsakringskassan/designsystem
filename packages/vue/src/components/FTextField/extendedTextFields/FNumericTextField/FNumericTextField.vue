<script lang="ts">
import { formatNumber, parseNumber, ValidationService } from "@fkui/logic";
import { defineComponent, type PropType } from "vue";
import FTextField from "../../FTextField.vue";
import { type FormatFunction, type ParseFunction } from "../../index";
import { getInputElement } from "../../../../utils";
import { useTextFieldSetup } from "../../useTextFieldSetup";

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
        /* eslint-disable-next-line vue/no-unused-properties -- technical debt */
        decimals: {
            type: Number,
            required: false,
            default: undefined,
        },
        /* eslint-disable-next-line vue/no-unused-properties -- used by FTextField (extended) */
        formatter: {
            type: Function as PropType<FormatFunction<number>>,
            required: false,
            default: defaultFormatter as FormatFunction<number>,
        },
        /* eslint-disable-next-line vue/no-unused-properties -- used by FTextField (extended) */
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

        ValidationService.validateElement(inputElement);
    },
});
</script>
