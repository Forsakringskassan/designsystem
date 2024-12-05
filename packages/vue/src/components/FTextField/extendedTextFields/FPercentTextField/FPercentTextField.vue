<script lang="ts">
import { formatPercent, parsePercent, ValidationService } from "@fkui/logic";
import { defineComponent, type PropType } from "vue";
import FTextField from "../../FTextField.vue";
import { FormatFunction, ParseFunction } from "../../index";
import { getInputElement } from "../../../../utils";
import { TranslationMixin } from "../../../../plugins";
import { useTextFieldSetup } from "../../useTextFieldSetup";

function defaultFormatter(this: { decimals: number }, modelValue: number): string | undefined {
    return formatPercent(modelValue, this.decimals);
}

export default defineComponent({
    name: "FPercentTextField",
    extends: FTextField,
    mixins: [TranslationMixin],
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
            default: defaultFormatter as FormatFunction<number>,
        },
        parser: {
            type: Function as PropType<ParseFunction<number>>,
            required: false,
            default: parsePercent,
        },
    },
    setup(props) {
        return useTextFieldSetup(props);
    },
    data() {
        return {
            defaultText: this.$t("fkui.percent-text-field.label", "Procent"),
        };
    },
    mounted() {
        const inputElement = getInputElement(this);
        inputElement.setAttribute("inputmode", this.decimals ? "decimal" : "numeric");
        inputElement.setAttribute("maxlength", "10");

        ValidationService.addValidatorsToElement(
            inputElement,
            {
                percent: {},
                minValue: { minValue: 0 },
                maxValue: { maxValue: 999 },
            },
            true,
        );

        ValidationService.validateElement(inputElement);
    },
});
</script>
