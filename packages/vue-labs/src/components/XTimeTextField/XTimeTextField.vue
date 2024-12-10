<script lang="ts">
import { type PropType, defineComponent } from "vue";
import { FTextField, TranslationMixin, type ParseFunction, type FormatFunction, useTextFieldSetup } from "@fkui/vue";
import { isSet, ValidationService } from "@fkui/logic";
import { HoursMinutesString, formatNumberToTime, parseTimeToNumber } from "./converters";
import "./validators";

export default defineComponent({
    name: "XTimeTextField",
    extends: FTextField,
    mixins: [TranslationMixin],
    props: {
        formatter: {
            type: Function as PropType<FormatFunction<HoursMinutesString>>,
            required: false,
            default: formatNumberToTime,
        },
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
            throw new Error(`Could not find input element in XTimeTextField with id ${this.$el.id}`);
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

        ValidationService.validateElement(inputElement);
    },
});
</script>
