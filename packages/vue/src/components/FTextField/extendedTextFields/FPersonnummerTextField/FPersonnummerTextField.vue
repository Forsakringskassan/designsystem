<script lang="ts">
import { type PropType, defineComponent } from "vue";
import { type PersonnummerString, ValidationService, formatPersonnummer, parsePersonnummer } from "@fkui/logic";
import { TranslationMixin } from "../../../../plugins";
import { getInputElement } from "../../../../utils";
import FTextField from "../../FTextField.vue";
import { type FormatFunction, type ParseFunction } from "../../index";
import { useTextFieldSetup } from "../../useTextFieldSetup";

export default defineComponent({
    name: "FPersonnummerTextField",
    extends: FTextField,
    mixins: [TranslationMixin],
    props: {
        /* eslint-disable-next-line vue/no-unused-properties -- used by FTextField (extended) */
        formatter: {
            type: Function as PropType<FormatFunction<PersonnummerString>>,
            required: false,
            default: formatPersonnummer,
        },
        /* eslint-disable-next-line vue/no-unused-properties -- used by FTextField (extended) */
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

        /* eslint-disable-next-line @typescript-eslint/no-floating-promises -- technical debt */
        ValidationService.validateElement(inputElement);
    },
});
</script>
