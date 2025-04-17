<script lang="ts">
import { defineComponent } from "vue";
import {
    type ValidatorConfigs,
    type ValidityEvent,
    ElementIdService,
    ValidationService,
    TranslationService,
} from "@fkui/logic";
import { FTextField } from "../..";
import { TranslationMixin } from "../../../../plugins";
import { renderSlotText, dispatchComponentValidityEvent } from "../../../../utils";

export default defineComponent({
    name: "FEmailTextField",
    components: { FTextField },
    mixins: [TranslationMixin],
    inheritAttrs: false,
    props: {
        /**
         * The id for the input id attribute.
         * The id for the label for attribute.
         * If the prop is not set a random value will be generated.
         */
        id: {
            type: String,
            required: false,
            default: () => ElementIdService.generateElementId(),
        },
        /**
         * The value for the input.
         * If the prop is not set undefined will be used.
         * @model
         */
        modelValue: {
            type: [String, null],
            required: false,
            default: undefined,
        },
        maxLength: {
            type: Number,
            default: 80,
        },
        extendedValidation: { type: Boolean, default: false },
        /**
         * The error message to be displayed on paste
         * If the prop is not set the default text "Du kan inte kopiera mejladressen. Du måste skriva in den igen." will be set
         */
        pasteErrorText: {
            type: String,
            required: false,
            default: TranslationService.provider.translate(
                "fkui.email-text-field.error.pasting",
                "Du kan inte kopiera mejladressen. Du måste skriva in den igen.",
            ),
        },
    },
    emits: ["blur", "change", "update:modelValue"],
    data() {
        return {
            validityMode: "INITIAL" as string,
            secondEmail: "",
            showPasteErrorMessage: false,
            defaultText: this.$t("fkui.email-text-field.label", "Mejladress"),
        };
    },
    mounted() {
        this.configureValidators();
    },
    methods: {
        onChange(event: Event): void {
            /**
             * @event change
             * @type {string | number}
             */
            this.$emit("change", event);
        },
        onBlur(event: Event): void {
            /**
             * @event blur
             * @type {string | number}
             */
            this.$emit("blur", event);
        },
        onUpdate(event: Event): void {
            /**
             * V-model event.
             *
             * @event update:modelValue
             * @type {string}
             */
            this.$emit("update:modelValue", event);
        },
        onPaste(event: Event): boolean {
            this.showPasteErrorMessage = true;
            event.preventDefault();
            return false;
        },
        onValidity({ detail }: CustomEvent<ValidityEvent>): void {
            this.showPasteErrorMessage = false;
            this.validityMode = detail.validityMode;
            const errorMessage = renderSlotText(this.$slots.default) ?? this.defaultText;
            const element = this.$el.querySelector(`#${detail.elementId}`);
            if (element) {
                dispatchComponentValidityEvent(element, {
                    ...detail,
                    errorMessage,
                    focusElementId: detail.elementId,
                });
            }
        },
        onPendingValidity(): void {
            this.validityMode = "INITIAL";
        },
        configureValidators(): void {
            const elements: HTMLInputElement[] = Array.from(this.$el.querySelectorAll("input"));
            const validatorEmailConfig: ValidatorConfigs = {
                email: {},
            };
            /*
             * Since this is an extended component the third argument "isBaseConfigs" for addValidatorsToElement() is set to true
             * in order to keep the base configuration set in this constructor when the application code adds its own validators, for example:
             * <f-email-text-field v-validation.required>
             */
            ValidationService.addValidatorsToElement(elements[0], validatorEmailConfig, true);

            if (this.extendedValidation) {
                this.configureExtendedValidation(elements);
            }
        },
        configureExtendedValidation(elements: HTMLInputElement[]): void {
            const validatorEmailMatchesConfig: ValidatorConfigs = {
                required: {
                    enabled: elements[0].hasAttribute("required"),
                },
                email: {},
                matches: {
                    id: elements[0].id,
                },
            };
            ValidationService.addValidatorsToElement(elements[1], validatorEmailMatchesConfig, true);
        },
    },
});
</script>

<template>
    <div>
        <f-text-field
            :id="id"
            type="email"
            :maxlength="maxLength"
            v-bind="$attrs"
            :model-value="modelValue"
            @change="onChange"
            @blur="onBlur"
            @update:model-value="onUpdate"
            @validity="onValidity"
            @pending-validity="onPendingValidity"
        >
            <!-- @slot Optional slot for label content. -->
            <slot name="default">{{ defaultText }}</slot>
            <template #error-message>
                <span v-if="showPasteErrorMessage">
                    {{ pasteErrorText }}
                </span>
            </template>
        </f-text-field>
        <f-text-field
            v-if="extendedValidation"
            v-model="secondEmail"
            type="email"
            :maxlength="maxLength"
            @paste="onPaste"
            @blur="showPasteErrorMessage = false"
        >
            <!-- @slot Optional slot for label content of extended field. -->
            <slot name="extended-label">{{ $t("fkui.email-text-field.label.repeat", "Upprepa mejladress") }}</slot>
        </f-text-field>
    </div>
</template>
