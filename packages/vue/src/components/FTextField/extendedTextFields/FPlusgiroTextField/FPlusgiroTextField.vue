<script lang="ts">
import { type PropType, defineComponent } from "vue";
import { type PlusgiroString, ValidationService, parsePlusgiro } from "@fkui/logic";
import { TranslationMixin } from "../../../../plugins";
import { getInputElement } from "../../../../utils";
import FTextField from "../../FTextField.vue";
import { type FormatFunction } from "../../index";
import { useTextFieldSetup } from "../../useTextFieldSetup";

export default defineComponent({
    name: "FPlusgiroTextField",
    extends: FTextField,
    mixins: [TranslationMixin],
    props: {
        /* eslint-disable-next-line vue/no-unused-properties -- used by FTextField (extended) */
        formatter: {
            type: Function as PropType<FormatFunction<PlusgiroString>>,
            required: false,
            default: parsePlusgiro,
        },
    },
    setup(props) {
        return useTextFieldSetup(props);
    },
    data() {
        return {
            // eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-assignment -- technical debt
            defaultText: this.$t("fkui.plusgiro-text-field.label", "Plusgironummer"),
        };
    },
    mounted() {
        /* eslint-disable-next-line @typescript-eslint/no-unsafe-argument -- technical debt */
        const inputElement = getInputElement(this);

        ValidationService.addValidatorsToElement(
            inputElement,
            {
                maxLength: { length: 11 },
                plusgiro: {},
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
