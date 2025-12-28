<script lang="ts">
import { type PropType, defineComponent } from "vue";
import { type OrganisationsnummerString, ValidationService, parseOrganisationsnummer } from "@fkui/logic";
import { TranslationMixin } from "../../../../plugins";
import { getInputElement } from "../../../../utils";
import FTextField from "../../FTextField.vue";
import { type FormatFunction } from "../../index";
import { useTextFieldSetup } from "../../useTextFieldSetup";

export default defineComponent({
    name: "FOrganisationsnummerTextField",
    extends: FTextField,
    mixins: [TranslationMixin],
    props: {
        /* eslint-disable-next-line vue/no-unused-properties -- used by FTextField (extended) */
        formatter: {
            type: Function as PropType<FormatFunction<OrganisationsnummerString>>,
            required: false,
            default: parseOrganisationsnummer,
        },
    },
    setup(props) {
        return useTextFieldSetup(props);
    },
    data() {
        return {
            defaultText: this.$t("fkui.organisationsnummer-text-field.label", "Organisationsnummer"),
            discreteDescriptionText: this.$t("fkui.organisationsnummer-text-field.example", "(999999-9999)"),
            discreteDescriptionScreenReaderText: this.$t(
                "fkui.organisationsnummer-text-field.format-description",
                "Formatbeskrivning",
            ),
        };
    },
    mounted() {
        const inputElement = getInputElement(this);

        ValidationService.addValidatorsToElement(
            inputElement,
            {
                maxLength: { length: 11 },
                organisationsnummer: {},
            },
            true,
        );

        inputElement.setAttribute("inputmode", "numeric");
        inputElement.setAttribute("maxlength", "20");

        /* eslint-disable-next-line @typescript-eslint/no-floating-promises -- technical debt */
        ValidationService.validateElement(inputElement);
    },
});
</script>
