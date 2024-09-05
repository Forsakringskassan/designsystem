<script lang="ts">
import { type PlusgiroString, parsePlusgiro, ValidationService } from "@fkui/logic";
import { defineComponent, inject, type PropType } from "vue";
import FTextField from "../../FTextField.vue";
import { FormatFunction } from "../../index";
import { getInputElement } from "../../../../utils";
import { TranslationMixin } from "../../../../plugins";

export default defineComponent({
    name: "FPlusgiroTextField",
    extends: FTextField,
    mixins: [TranslationMixin],
    props: {
        formatter: {
            type: Function as PropType<FormatFunction<PlusgiroString>>,
            required: false,
            default: parsePlusgiro,
        },
    },
    setup() {
        return {
            textFieldTableMode: inject("textFieldTableMode", false) as boolean,
        };
    },
    data() {
        return {
            defaultText: this.$t("fkui.plusgiro-text-field.label", "Plusgironummer"),
        };
    },
    mounted() {
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

        ValidationService.validateElement(inputElement);
    },
});
</script>
