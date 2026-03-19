<script lang="ts">
import { type PropType, defineComponent } from "vue";
import { type PostalCodeString, ValidationService, formatPostalCode } from "@fkui/logic";
import { TranslationMixin } from "../../../../plugins";
import { getInputElement } from "../../../../utils";
import FTextField from "../../FTextField.vue";
import { type FormatFunction } from "../../index";
import { useTextFieldSetup } from "../../useTextFieldSetup";

export default defineComponent({
    name: "FPostalCodeTextField",
    extends: FTextField,
    mixins: [TranslationMixin],
    props: {
        /* eslint-disable-next-line vue/no-unused-properties -- used by FTextField (extended) */
        formatter: {
            type: Function as PropType<FormatFunction<PostalCodeString>>,
            required: false,
            default: formatPostalCode,
        },
    },
    setup(props) {
        return useTextFieldSetup(props);
    },
    data() {
        return {
            defaultText: this.$t("fkui.postal-code-text-field.label", "Postnummer"),
            discreteDescriptionText: this.$t("fkui.postal-code-text-field.example", "(123 45)"),
            discreteDescriptionScreenReaderText: this.$t(
                "fkui.postal-code-text-field.format-description",
                "Formatbeskrivning",
            ),
        };
    },
    mounted() {
        const inputElement = getInputElement(this);

        ValidationService.addValidatorsToElement(
            inputElement,
            {
                maxLength: { length: 13 },
                postalCode: {},
            },
            true,
        );

        inputElement.setAttribute("inputmode", "numeric");
        inputElement.setAttribute("maxlength", "15");

        /* eslint-disable-next-line @typescript-eslint/no-floating-promises -- technical debt */
        ValidationService.validateElement(inputElement);
    },
});
</script>
