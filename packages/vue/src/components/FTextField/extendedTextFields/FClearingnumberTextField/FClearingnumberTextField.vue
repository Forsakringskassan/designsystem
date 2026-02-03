<script lang="ts">
import { type PropType, defineComponent } from "vue";
import { type ClearingnumberString, ValidationService, parseClearingNumber } from "@fkui/logic";
import { TranslationMixin } from "../../../../plugins";
import { getInputElement } from "../../../../utils";
import FTextField from "../../FTextField.vue";
import { type FormatFunction } from "../../index";
import { useTextFieldSetup } from "../../useTextFieldSetup";

export default defineComponent({
    name: "FClearingnumberTextField",
    extends: FTextField,
    mixins: [TranslationMixin],
    props: {
        /* eslint-disable-next-line vue/no-unused-properties -- used by FTextField (extended) */
        formatter: {
            type: Function as PropType<FormatFunction<ClearingnumberString>>,
            required: false,
            default: parseClearingNumber,
        },
    },
    setup(props) {
        return useTextFieldSetup(props);
    },
    data() {
        return {
            defaultText: this.$t("fkui.clearingnumber-text-field.label", "Clearingnummer"),
        };
    },
    mounted() {
        const inputElement = getInputElement(this);

        ValidationService.addValidatorsToElement(
            inputElement,
            {
                clearingNumber: {},
            },
            true,
        );

        inputElement.setAttribute("inputmode", "numeric");
        inputElement.setAttribute("maxlength", "16");

        /* eslint-disable-next-line @typescript-eslint/no-floating-promises -- technical debt */
        ValidationService.validateElement(inputElement);
    },
});
</script>
