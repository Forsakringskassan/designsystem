<script lang="ts">
import { type PersonnummerString, formatPersonnummer, parsePersonnummer, ValidationService } from "@fkui/logic";
import { defineComponent, type PropType } from "vue";
import FTextField from "../../FTextField.vue";
import { FormatFunction, ParseFunction } from "../../index";
import { getInputElement } from "../../../../utils";
import { TranslationMixin } from "../../../../plugins";
import { useTextFieldSetup } from "../../useTextFieldSetup";

export default defineComponent({
    name: "FPersonnummerTextField",
    extends: FTextField,
    mixins: [TranslationMixin],
    props: {
        formatter: {
            type: Function as PropType<FormatFunction<PersonnummerString>>,
            required: false,
            default: formatPersonnummer,
        },
        parser: {
            type: Function as PropType<ParseFunction<PersonnummerString>>,
            required: false,
            default: parsePersonnummer,
        },
    },
    setup(props) {
        return useTextFieldSetup(props);
    },
    data() {
        return {
            defaultText: this.$t("fkui.personnummer-text-field.label-10-digits", "Personnummer"),
            discreteDescriptionText: this.$t("fkui.personnummer-text-field.example-10-digits", "(ååmmdd-nnnn)"),
            discreteDescriptionScreenReaderText: this.$t(
                "fkui.personnummer-text-field.format-description-10-digits",
                "Skriv personnumret med 10 siffror,",
            ),
        };
    },
    mounted() {
        const inputElement = getInputElement(this);

        ValidationService.addValidatorsToElement(
            inputElement,
            {
                maxLength: { length: 20 },
                personnummerFormat: {},
                personnummerLuhn: {},
            },
            true,
        );

        inputElement.setAttribute("inputmode", "numeric");
        inputElement.setAttribute("maxlength", "23");

        ValidationService.validateElement(inputElement);
    },
});
</script>
