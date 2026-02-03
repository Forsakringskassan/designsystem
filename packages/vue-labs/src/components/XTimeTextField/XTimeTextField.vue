<script lang="ts">
import { type PropType, defineComponent } from "vue";
import { ValidationService, isSet } from "@fkui/logic";
import { type FormatFunction, type ParseFunction, FTextField, TranslationMixin, useTextFieldSetup } from "@fkui/vue";
import { type HoursMinutesString, formatNumberToTime, parseTimeToNumber } from "./converters";
import "./validators";

export default defineComponent({
    name: "XTimeTextField",
    extends: FTextField,
    mixins: [TranslationMixin],
    props: {
        /* eslint-disable-next-line vue/no-unused-properties -- used by FTextField (extended) */
        formatter: {
            type: Function as PropType<FormatFunction<HoursMinutesString>>,
            required: false,
            default: formatNumberToTime,
        },
        /* eslint-disable-next-line vue/no-unused-properties -- used by FTextField (extended) */
        parser: {
            type: Function as PropType<ParseFunction<number>>,
            required: false,
            default: parseTimeToNumber,
        },
    },
    setup(props) {
        return useTextFieldSetup(props);
    },
    mounted() {
        const inputElement: HTMLInputElement = this.$el.querySelector("input");

        if (!isSet(inputElement)) {
            throw new Error(`Could not find input element in XTimeTextField with id ${String(this.$el.id)}`);
        }

        ValidationService.addValidatorsToElement(
            inputElement,
            {
                maxLength: { length: 10 },
                hoursMinutes: {},
            },
            true,
        );

        inputElement.setAttribute("inputmode", "numeric");

        /* eslint-disable-next-line @typescript-eslint/no-floating-promises -- technical debt */
        ValidationService.validateElement(inputElement);
    },
});
</script>
