<script lang="ts">
import { formatNumber, parseNumber, ValidationService } from "@fkui/logic";
import { defineComponent, inject, type PropType } from "vue";
import { FormatFunction, ParseFunction } from "../../index";
import FTextField from "../../FTextField.vue";
import { getInputElement } from "../../../../utils";
import { TranslationMixin } from "../../../../plugins";

export default defineComponent({
    name: "FCurrencyTextField",
    extends: FTextField,
    mixins: [TranslationMixin],
    props: {
        formatter: {
            type: Function as PropType<FormatFunction<number>>,
            required: false,
            default: formatNumber,
        },
        parser: {
            type: Function as PropType<ParseFunction<number>>,
            required: false,
            default: parseNumber,
        },
    },
    setup() {
        return {
            textFieldTableMode: inject("textFieldTableMode", false) as boolean,
        };
    },
    data() {
        return {
            defaultText: this.$t("fkui.currency-text-field.label", "Pengar"),
        };
    },
    mounted() {
        const inputElement = getInputElement(this);

        inputElement.setAttribute("inputmode", "numeric");
        inputElement.setAttribute("maxlength", "20");

        ValidationService.addValidatorsToElement(
            inputElement,
            {
                currency: {},
                integer: {},
            },
            true,
        );

        ValidationService.validateElement(inputElement);
    },
});
</script>
