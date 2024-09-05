<template>
    <button
        :id="id"
        class="button button--margin-bottom-0 button--large"
        type="button"
        v-bind="$attrs"
        :aria-expanded="isOpen ? 'true' : 'false'"
        data-form-step-button
    >
        <template v-if="isOpen">
            <f-icon name="success" class="button__icon" />
            {{ $t("fkui.form-step-button.close", "OK") }}
        </template>
        <template v-else>
            <f-icon name="pen" class="button__icon" />
            {{
                isAnyFieldTouched
                    ? $t("fkui.form-step-button.edit", "Ändra")
                    : $t("fkui.form-step-button.open", "Fyll i")
            }}
        </template>
        <span class="sr-only">{{ additionalScreenreaderText }}</span>
    </button>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { ElementIdService } from "@fkui/logic";
import { FIcon } from "../FIcon";
import { TranslationMixin } from "../../plugins";

/**
 * @deprecated `<f-form-step-button>` is deprecated.
 * See migration guide: https://forsakringskassan.github.io/latest/components/fform.html
 */
export default defineComponent({
    name: "FFormStepButton",
    components: { FIcon },
    mixins: [TranslationMixin],
    inheritAttrs: false,
    model: {
        prop: "sr-only",
    },
    props: {
        /**
         * If the id is not set a random value will be generated.
         */
        id: {
            type: String,
            required: false,
            default: () => ElementIdService.generateElementId(),
        },
        isOpen: Boolean,
        isAnyFieldTouched: Boolean,
        additionalScreenreaderText: {
            type: String,
            required: false,
            default: "",
        },
    },
});
</script>
