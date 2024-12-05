<script lang="ts">
import { type OrganisationsnummerString, parseOrganisationsnummer, ValidationService } from "@fkui/logic";
import { defineComponent, type PropType } from "vue";
import FTextField from "../../FTextField.vue";
import { FormatFunction } from "../../index";
import { getInputElement } from "../../../../utils";
import { TranslationMixin } from "../../../../plugins";
import { useTextFieldSetup } from "../../useTextFieldSetup";

export default defineComponent({
    name: "FOrganisationsnummerTextField",
    extends: FTextField,
    mixins: [TranslationMixin],
    props: {
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

        ValidationService.validateElement(inputElement);
    },
});
</script>
