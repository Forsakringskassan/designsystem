<script lang="ts">
import { type PropType, defineComponent } from "vue";
import { ValidationService, formatPercent, parsePercent } from "@fkui/logic";
import { TranslationMixin } from "../../../../plugins";
import { getInputElement } from "../../../../utils";
import FTextField from "../../FTextField.vue";
import { type FormatFunction, type ParseFunction } from "../../index";
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

        /* eslint-disable-next-line @typescript-eslint/no-floating-promises -- technical debt */
        ValidationService.validateElement(inputElement);
    },
});
</script>
