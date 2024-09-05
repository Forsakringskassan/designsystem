<script lang="ts">
import { type ClearingnumberString, parseClearingNumber, ValidationService } from "@fkui/logic";
import { defineComponent, inject, type PropType } from "vue";
import FTextField from "../../FTextField.vue";
import { FormatFunction } from "../../index";
import { getInputElement } from "../../../../utils";
import { TranslationMixin } from "../../../../plugins";

export default defineComponent({
    name: "FClearingnumberTextField",
    extends: FTextField,
    mixins: [TranslationMixin],
    props: {
        formatter: {
            type: Function as PropType<FormatFunction<ClearingnumberString>>,
            required: false,
            default: parseClearingNumber,
        },
    },
    setup() {
        return {
            textFieldTableMode: inject("textFieldTableMode", false) as boolean,
        };
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

        ValidationService.validateElement(inputElement);
    },
});
</script>
