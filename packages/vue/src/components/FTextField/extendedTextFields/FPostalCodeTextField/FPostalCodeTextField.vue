<script lang="ts">
import { type PostalCodeString, formatPostalCode, ValidationService } from "@fkui/logic";
import { defineComponent, type PropType } from "vue";
import FTextField from "../../FTextField.vue";
import { FormatFunction } from "../../index";
import { getInputElement } from "../../../../utils";
import { TranslationMixin } from "../../../../plugins";
import { useTextFieldSetup } from "../../useTextFieldSetup";

export default defineComponent({
    name: "FPostalCodeTextField",
    extends: FTextField,
    mixins: [TranslationMixin],
    props: {
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

        ValidationService.validateElement(inputElement);
    },
});
</script>
